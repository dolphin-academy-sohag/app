const SB='https://vvwzrtuwxwazbvcmbjxb.supabase.co';
const KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2d3pydHV3eHdhemJ2Y21ianhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MjU3MTksImV4cCI6MjExMTEwMTcxOX0.YGVlLjssyufwQuWhRTtQCJGWAWVaemu8XpeMR86DrSs';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let S=null;try{S=JSON.parse(localStorage.getItem('sess')||'null')}catch(e){}
let me=null,stack=[],busy=false;
const $=s=>document.querySelector(s);
function saveS(s){S=s;if(s)localStorage.setItem('sess',JSON.stringify(s));else localStorage.removeItem('sess')}
function setSess(j){if(j&&j.access_token){j.expires_at=j.expires_at||Math.floor(Date.now()/1000)+(j.expires_in||3600);saveS(j)}}
async function refresh(){
  const r=await fetch(SB+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:S.refresh_token})});
  if(!r.ok){saveS(null);me=null;throw new Error('انتهت الجلسة، سجّلي الدخول من جديد')}
  setSess(await r.json());
}
function arErr(m){
  m=String(m||'');
  if(/invalid login/i.test(m))return 'رقم الموبايل أو كلمة السر غير صحيحة';
  if(/already registered|already been registered/i.test(m))return 'هذا الرقم مسجل بالفعل، اضغطي رجوع وسجّلي الدخول';
  if(/password should be at least/i.test(m))return 'كلمة السر قصيرة، اكتبي 6 أحرف أو أرقام على الأقل';
  if(/owner exists/i.test(m))return 'يوجد حساب مالك بالفعل';
  if(/wrong code/i.test(m))return 'الرمز غير صحيح';
  if(/Failed to fetch|NetworkError|Load failed/i.test(m))return 'لا يوجد اتصال بالإنترنت، حاولي مرة أخرى';
  if(/row-level security|not allowed|owner only/i.test(m))return 'غير مسموح بهذا الإجراء';
  if(/duplicate key/i.test(m))return 'هذا السجل موجود بالفعل';
  return m||'حدث خطأ، حاولي مرة أخرى';
}
async function api(path,o={}){
  if(S&&S.expires_at*1000-Date.now()<60000)await refresh();
  const h={apikey:KEY,Authorization:'Bearer '+(S?S.access_token:KEY),...(o.headers||{})};
  let body=o.body;
  if(body&&!o.raw){h['Content-Type']='application/json';body=JSON.stringify(body)}
  const r=await fetch(SB+path,{method:o.method||'GET',headers:h,body});
  const t=await r.text();let j=null;try{j=t?JSON.parse(t):null}catch(e){}
  if(!r.ok)throw new Error(arErr(j&&(j.msg||j.message||j.error_description||j.error)||('خطأ '+r.status)));
  return j;
}
const digits=s=>String(s).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/\D/g,'');
const emailOf=p=>digits(p)+'@dolphin-academy.app';
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const fmtDay=d=>{try{return new Date(d+'T12:00:00').toLocaleDateString('ar-EG',{weekday:'long',day:'numeric',month:'long'})}catch(e){return d}};
const monthName=m=>{try{return new Date(m+'-15T12:00:00').toLocaleDateString('ar-EG',{month:'long',year:'numeric'})}catch(e){return m}};
const ROLE={owner:'مالكة الأكاديمية',captain:'كابتن',parent:'ولي أمر'};
const isStaff=()=>me&&(me.role==='owner'||me.role==='captain');

/* navigation */
function go(view,p){stack.push({view,p:p||{}});history.pushState({n:stack.length},'');render()}
function tab(view){stack=[{view,p:{}}];render();window.scrollTo(0,0)}
function back(){if(stack.length>1){history.back()}else{tab('children')}}
window.addEventListener('popstate',()=>{if(stack.length>1){stack.pop();render()}else{history.pushState({n:1},'')}});
function toast(t,cls){const e=document.createElement('div');e.className='toast';e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),2600)}

const TITLES={login:'تسجيل الدخول',register:'حساب جديد',children:'المتدربون',child:'صفحة المتدرب',childForm:'إضافة متدرب',videos:'الفيديوهات',videoForm:'رفع فيديو',top3:'أوائل الشهر',top3Form:'تعديل الأوائل',captains:'الكباتن وأولياء الأمور',account:'حسابي'};
function tabsFor(){
  const t=[['children','👦',me.role==='parent'?'أطفالي':'المتدربون']];
  if(me.role==='owner')t.push(['captains','🧑‍🏫','الكباتن']);
  t.push(['videos','🎬','الفيديوهات'],['top3','🏆','الأوائل'],['account','👤','حسابي']);
  return t;
}
async function render(){
  const cur=stack[stack.length-1];
  const authed=!!S&&!!me;
  if(!authed&&cur.view!=='login'&&cur.view!=='register'){stack=[{view:'login',p:{}}]}
  const v=stack[stack.length-1];
  let html='<div class="card center">...</div>';
  $('#app').innerHTML=header(v)+'<main id="main">'+html+'</main>';
  try{html=await VIEWS[v.view](v.p||{})}catch(e){html='<div class="err">'+esc(arErr(e.message))+'</div><button class="btn" data-act="reload">إعادة المحاولة</button>'}
  $('#app').innerHTML=header(v)+'<main id="main">'+html+'</main>'+(authed?tabbar(v):'');
  window.scrollTo(0,0);
}
function header(v){
  const showBack=stack.length>1;
  return '<header>'+(showBack?'<button class="back" data-act="back">→ رجوع</button>':'<img src="logo.png" alt="">')+'<h1>'+esc(TITLES[v.view]||'أكاديمية الدولفين')+'</h1></header>';
}
function tabbar(v){
  const root=stack[0].view;
  const map={child:'children',childForm:'children',videoForm:'videos',top3Form:'top3'};
  const active=map[root]||root;
  return '<nav class="tabs">'+tabsFor().map(([k,i,l])=>'<button data-tab="'+k+'" class="'+(active===k?'on':'')+'"><span>'+i+'</span>'+esc(l)+'</button>').join('')+'</nav>';
}

/* data */
async function loadMe(){
  if(!S){me=null;return}
  try{const r=await api('/rest/v1/profiles?id=eq.'+S.user.id+'&select=*');me=r&&r[0]||null}catch(e){me=null}
  if(!me)saveS(null);
}
async function parentsList(){return api('/rest/v1/profiles?role=eq.parent&select=id,full_name,phone&order=full_name')}

const VIEWS={
  async login(){return '<img class="logo" src="logo.png" alt=""><h2 class="center">أكاديمية الدولفين للسباحة</h2>'+
   '<form data-form="login" class="card"><label>رقم الموبايل</label><input name="phone" type="tel" inputmode="numeric" autocomplete="username" placeholder="01xxxxxxxxx" required>'+
   '<label>كلمة السر</label><input name="pw" type="password" autocomplete="current-password" required><div id="fe"></div>'+
   '<button class="btn" type="submit">دخول</button></form>'+
   '<button class="btn alt" data-go="register">إنشاء حساب جديد</button>'},
  async register(){return '<form data-form="register" class="card"><label>الاسم</label><input name="name" required>'+
   '<label>رقم الموبايل</label><input name="phone" type="tel" inputmode="numeric" placeholder="01xxxxxxxxx" required>'+
   '<label>كلمة السر (6 على الأقل)</label><input name="pw" type="password" minlength="6" autocomplete="new-password" required>'+
   '<label class="chk"><input type="checkbox" name="cap"> أنا كابتن في الأكاديمية (تحتاج موافقة المالكة)</label><div id="fe"></div>'+
   '<button class="btn" type="submit">إنشاء الحساب</button></form>'},
  async children(){
    const rows=await api('/rest/v1/children?select=*,captain:profiles!children_captain_id_fkey(full_name)&order=created_at.desc');
    let h='';
    if(me.role==='parent'&&me.want_captain)h+='<div class="warn">طلب الكابتن بانتظار موافقة المالكة. حتى ذلك الحين حسابك ولي أمر.</div>';
    if(isStaff())h+='<button class="btn" data-go="childForm">➕ إضافة متدرب</button>';
    if(!rows.length)h+='<div class="card center mut">'+(me.role==='parent'?'لا يوجد طفل مرتبط بحسابك بعد. الأكاديمية هي التي تربط حسابك بطفلك بعد التحقق. تواصلي مع الكابتن.':'لا يوجد متدربون بعد. اضغطي إضافة متدرب.')+'</div>';
    h+=rows.map(c=>'<div class="card item" data-go="child" data-id="'+esc(c.id)+'"><h3>'+esc(c.name)+'</h3><div class="mut">'+(c.age?esc(c.age)+' سنة · ':'')+esc(c.grp||'بدون مجموعة')+(c.level?' · '+esc(c.level):'')+'</div><div class="mut">الكابتن: '+esc(c.captain&&c.captain.full_name||'غير محدد')+'</div></div>').join('');
    return h;
  },
  async childForm(){
    const parents=await parentsList();
    let caps='';
    if(me.role==='owner'){const c=await api('/rest/v1/profiles?role=eq.captain&select=id,full_name&order=full_name');caps='<label>الكابتن</label><select name="captain">'+c.map(x=>'<option value="'+esc(x.id)+'">'+esc(x.full_name)+'</option>').join('')+'</select>'}
    return '<form data-form="childForm" class="card"><label>اسم المتدرب</label><input name="name" required>'+
     '<label>السن</label><input name="age" type="number" inputmode="numeric" min="2" max="60">'+
     '<label>المجموعة</label><input name="grp" placeholder="مثال: مبتدئين">'+
     '<label>المستوى</label><input name="level" placeholder="مثال: مبتدئ">'+caps+
     '<label>ولي الأمر (اختياري، يمكن ربطه لاحقًا)</label><select name="parent"><option value="">بدون</option>'+parents.map(p=>'<option value="'+esc(p.id)+'">'+esc(p.full_name)+' - '+esc(p.phone)+'</option>').join('')+'</select><div id="fe"></div>'+
     '<button class="btn" type="submit">حفظ</button></form>'},
  async child(p){
    const [c]=await api('/rest/v1/children?id=eq.'+p.id+'&select=*,captain:profiles!children_captain_id_fkey(full_name),parent:profiles!children_parent_id_fkey(full_name,phone)');
    if(!c)return '<div class="err">لم يتم العثور على الصفحة</div>';
    const att=await api('/rest/v1/attendance?child_id=eq.'+c.id+'&order=day.desc&limit=60');
    const qs=await api('/rest/v1/questions?child_id=eq.'+c.id+'&order=created_at&select=*,author:profiles(full_name)');
    const canEdit=me.role==='owner'||(me.role==='captain'&&c.captain_id===me.id);
    const pres=att.filter(a=>a.present).length;
    let h='<div class="card"><h3>'+esc(c.name)+'</h3><div class="mut">'+(c.age?esc(c.age)+' سنة · ':'')+esc(c.grp||'بدون مجموعة')+'</div>'+
      '<p>المستوى: <b>'+esc(c.level||'لم يحدد بعد')+'</b></p><p>الكابتن: '+esc(c.captain&&c.captain.full_name||'غير محدد')+'</p>'+
      (c.notes?'<p>ملاحظات الكابتن:<br>'+esc(c.notes)+'</p>':'')+
      (isStaff()?'<p class="mut">ولي الأمر: '+esc(c.parent?c.parent.full_name+' - '+c.parent.phone:'غير مربوط')+'</p>':'')+'</div>';
    h+='<div class="card"><h3>الحضور</h3>'+(att.length?'<p>حضر <b>'+pres+'</b> من <b>'+att.length+'</b> حصة</p>':'<p class="mut">لا يوجد تسجيل حضور بعد.</p>');
    if(canEdit)h+='<label>اليوم</label><input type="date" id="attday" value="'+today()+'"><div class="row"><button class="btn ok" data-act="att" data-id="'+esc(c.id)+'" data-v="1">✔ حاضر</button><button class="btn no" data-act="att" data-id="'+esc(c.id)+'" data-v="0">✘ غائب</button></div>';
    h+=att.slice(0,10).map(a=>'<div class="mut">'+esc(fmtDay(a.day))+': '+(a.present?'✔ حاضر':'✘ غائب')+'</div>').join('')+'</div>';
    if(canEdit){
      const parents=await parentsList();
      h+='<form data-form="childEdit" data-id="'+esc(c.id)+'" class="card"><h3>تعديل البيانات</h3><label>المستوى</label><input name="level" value="'+esc(c.level)+'"><label>ملاحظات للأهل</label><textarea name="notes">'+esc(c.notes)+'</textarea>'+
       '<label>ربط ولي الأمر (بعد التحقق من الهوية)</label><select name="parent"><option value="">غير مربوط</option>'+parents.map(x=>'<option value="'+esc(x.id)+'"'+(x.id===c.parent_id?' selected':'')+'>'+esc(x.full_name)+' - '+esc(x.phone)+'</option>').join('')+'</select><div id="fe"></div><button class="btn" type="submit">حفظ</button></form>';
    }
    h+='<div class="card"><h3>الأسئلة للكابتن</h3>'+(qs.length?'':'<p class="mut">لا توجد أسئلة.</p>')+qs.map(q=>'<div class="q"><b>'+esc(q.author&&q.author.full_name||'')+':</b> '+esc(q.body)+'</div>'+(q.answer?'<div class="q a"><b>رد الكابتن:</b> '+esc(q.answer)+'</div>':(canEdit?'<form data-form="answer" data-id="'+esc(q.id)+'" data-child="'+esc(c.id)+'"><input name="a" placeholder="اكتبي الرد" required><button class="btn sm" type="submit">إرسال الرد</button></form>':'<div class="mut">بانتظار الرد</div>'))).join('');
    if(me.role==='parent'||me.role==='owner'||canEdit)h+='<form data-form="ask" data-id="'+esc(c.id)+'"><label>اكتبي سؤالك</label><textarea name="b" required></textarea><button class="btn" type="submit">إرسال السؤال</button></form>';
    h+='</div>';
    if(canEdit)h+='<button class="btn no" data-act="delChild" data-id="'+esc(c.id)+'">حذف المتدرب</button>';
    return h;
  },
  async videos(){
    const rows=await api('/rest/v1/videos?select=*,captain:profiles(full_name)&order=created_at.desc');
    let h=isStaff()?'<button class="btn" data-go="videoForm">⬆ رفع فيديو</button>':'';
    if(!rows.length)h+='<div class="card center mut">لا توجد فيديوهات بعد.</div>';
    h+=rows.map(v=>'<div class="card"><h3>'+esc(v.title)+'</h3><div class="mut">'+esc(v.captain&&v.captain.full_name||'')+' · '+esc(new Date(v.created_at).toLocaleDateString('ar-EG'))+'</div><div id="v-'+esc(v.id)+'"><button class="btn" data-act="play" data-id="'+esc(v.id)+'" data-path="'+esc(v.path)+'">▶ تشغيل</button></div>'+((me.role==='owner'||v.captain_id===me.id)?'<button class="btn alt sm" data-act="delVideo" data-id="'+esc(v.id)+'" data-path="'+esc(v.path)+'">حذف</button>':'')+'</div>').join('');
    return h;
  },
  async videoForm(){return '<form data-form="video" class="card"><label>عنوان الفيديو</label><input name="title" required><label>اختاري الفيديو (حتى 50 ميجا)</label><input name="file" type="file" accept="video/*" required><div id="fe"></div><button class="btn" type="submit">رفع</button></form><p class="mut center">لا ترفعي فيديوهات فيها أطفال إلا بعد موافقة أولياء الأمور.</p>'},
  async top3(p){
    const m=p.m||today().slice(0,7);
    const rows=await api('/rest/v1/top3?month=eq.'+m+'&order=place');
    const shift=n=>{const [y,mo]=m.split('-').map(Number);const d=new Date(y,mo-1+n,1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')};
    let h='<div class="row"><button class="btn alt" data-act="month" data-m="'+shift(1)+'">الشهر التالي ◀</button><button class="btn alt" data-act="month" data-m="'+shift(-1)+'">▶ الشهر السابق</button></div><h2 class="center">'+esc(monthName(m))+'</h2>';
    const med=['🥇','🥈','🥉'];
    for(let i=1;i<=3;i++){const r=rows.find(x=>x.place===i);h+='<div class="card place"><b>'+med[i-1]+'</b><div><h3>'+esc(r?r.name:'لم يحدد بعد')+'</h3>'+(r&&r.note?'<div class="mut">'+esc(r.note)+'</div>':'')+'</div></div>'}
    if(isStaff())h+='<button class="btn" data-go="top3Form" data-m="'+m+'">✏ تعديل أوائل الشهر</button>';
    return h;
  },
  async top3Form(p){
    const m=p.m;const rows=await api('/rest/v1/top3?month=eq.'+m+'&order=place');
    let h='<form data-form="top3" data-m="'+esc(m)+'" class="card"><h3>'+esc(monthName(m))+'</h3>';
    for(let i=1;i<=3;i++){const r=rows.find(x=>x.place===i)||{};h+='<label>المركز '+['الأول','الثاني','الثالث'][i-1]+'</label><input name="n'+i+'" placeholder="الاسم" value="'+esc(r.name||'')+'"><input name="t'+i+'" placeholder="ملاحظة (اختياري)" value="'+esc(r.note||'')+'" style="margin-top:6px">'}
    return h+'<div id="fe"></div><button class="btn" type="submit">حفظ</button></form>';
  },
  async captains(){
    const all=await api('/rest/v1/profiles?select=*&order=created_at');
    const caps=all.filter(x=>x.role==='captain'),pend=all.filter(x=>x.role==='parent'&&x.want_captain),par=all.filter(x=>x.role==='parent'&&!x.want_captain);
    const row=(x,btn)=>'<div class="card"><h3>'+esc(x.full_name)+'</h3><div class="mut">'+esc(x.phone)+'</div>'+btn+'</div>';
    let h='<h3>طلبات كباتن بانتظار الموافقة ('+pend.length+')</h3>'+(pend.length?pend.map(x=>row(x,'<button class="btn ok" data-act="role" data-id="'+esc(x.id)+'" data-r="captain">اعتماد كابتن</button><button class="btn alt" data-act="role" data-id="'+esc(x.id)+'" data-r="parent">رفض</button>')).join(''):'<div class="mut">لا يوجد.</div>');
    h+='<h3>الكباتن ('+caps.length+')</h3>'+(caps.length?caps.map(x=>row(x,'<button class="btn alt" data-act="role" data-id="'+esc(x.id)+'" data-r="parent">إلغاء الكابتن</button>')).join(''):'<div class="mut">لا يوجد.</div>');
    h+='<h3>أولياء الأمور ('+par.length+')</h3>'+(par.length?par.map(x=>row(x,'')).join(''):'<div class="mut">لا يوجد.</div>');
    return h;
  },
  async account(){
    let h='<div class="card"><h3>'+esc(me.full_name)+'</h3><div class="mut">'+esc(me.phone)+' · '+esc(ROLE[me.role])+'</div></div>'+
     '<form data-form="profile" class="card"><label>الاسم</label><input name="name" value="'+esc(me.full_name)+'" required>'+(isStaff()?'<label>نبذة عنك (تظهر للأهل)</label><textarea name="bio">'+esc(me.bio)+'</textarea>':'')+'<div id="fe"></div><button class="btn" type="submit">حفظ</button></form>';
    if(me.role!=='owner')h+='<form data-form="owner" class="card"><h3>حساب مالكة الأكاديمية</h3><p class="mut">للمالكة فقط: اكتبي الرمز الذي أعطيناه لك.</p><input name="code" type="tel" inputmode="numeric" placeholder="الرمز"><div id="fe"></div><button class="btn alt" type="submit">تفعيل</button></form>';
    h+='<button class="btn no" data-act="logout">تسجيل الخروج</button>';
    return h;
  }
};

/* events */
document.addEventListener('click',async e=>{
  const t=e.target.closest('[data-go],[data-act],[data-tab]');if(!t)return;
  if(t.dataset.tab){tab(t.dataset.tab);return}
  if(t.dataset.go){const p={};if(t.dataset.id)p.id=t.dataset.id;if(t.dataset.m)p.m=t.dataset.m;go(t.dataset.go,p);return}
  const a=t.dataset.act,d=t.dataset;
  try{
    if(a==='back')back();
    else if(a==='reload')render();
    else if(a==='logout'){saveS(null);me=null;stack=[{view:'login',p:{}}];render()}
    else if(a==='month'){stack[stack.length-1].p={m:d.m};render()}
    else if(a==='att'){const day=$('#attday').value||today();await api('/rest/v1/attendance?on_conflict=child_id,day',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:{child_id:d.id,day,present:d.v==='1'}});toast('تم تسجيل الحضور');render()}
    else if(a==='delChild'){if(confirm('هل تريدين حذف هذا المتدرب نهائيًا؟')){await api('/rest/v1/children?id=eq.'+d.id,{method:'DELETE'});toast('تم الحذف');history.back()}}
    else if(a==='delVideo'){if(confirm('حذف الفيديو؟')){await api('/storage/v1/object/videos/'+d.path,{method:'DELETE'}).catch(()=>{});await api('/rest/v1/videos?id=eq.'+d.id,{method:'DELETE'});render()}}
    else if(a==='play'){t.textContent='جاري التحميل...';const r=await api('/storage/v1/object/sign/videos/'+d.path,{method:'POST',body:{expiresIn:3600}});$('#v-'+d.id).innerHTML='<video controls playsinline autoplay src="'+esc(SB+'/storage/v1'+r.signedURL)+'"></video>'}
    else if(a==='role'){await api('/rest/v1/rpc/set_role',{method:'POST',body:{uid:d.id,r:d.r}});toast('تم');render()}
  }catch(err){toast(arErr(err.message))}
});
document.addEventListener('submit',async e=>{
  const f=e.target.closest('form[data-form]');if(!f)return;e.preventDefault();
  if(busy)return;busy=true;
  const fd=new FormData(f),n=f.dataset.form,fe=f.querySelector('#fe');
  const btn=f.querySelector('[type=submit]');const old=btn&&btn.textContent;if(btn){btn.disabled=true;btn.textContent='...'}
  const showErr=m=>{if(fe)fe.innerHTML='<div class="err">'+esc(arErr(m))+'</div>';else toast(arErr(m))};
  try{
    if(n==='login'){
      const r=await fetch(SB+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json'},body:JSON.stringify({email:emailOf(fd.get('phone')),password:fd.get('pw')})});
      const j=await r.json();if(!r.ok)throw new Error(j.msg||j.error_description||'Invalid login');
      setSess(j);await loadMe();stack=[{view:'children',p:{}}];history.replaceState({n:1},'');render();
    }else if(n==='register'){
      const ph=digits(fd.get('phone'));if(ph.length<8)throw new Error('اكتبي رقم موبايل صحيح');
      const r=await fetch(SB+'/auth/v1/signup',{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json'},body:JSON.stringify({email:emailOf(ph),password:fd.get('pw'),data:{phone:ph,full_name:String(fd.get('name')).trim(),want_captain:!!fd.get('cap')}})});
      const j=await r.json();if(!r.ok)throw new Error(j.msg||j.error_description||j.message||'خطأ');
      if(!j.access_token)throw new Error('تعذر إنشاء الحساب، حاولي مرة أخرى');
      setSess(j);await loadMe();stack=[{view:'children',p:{}}];history.replaceState({n:1},'');render();
    }else if(n==='childForm'){
      const row={name:String(fd.get('name')).trim(),age:fd.get('age')?+fd.get('age'):null,grp:fd.get('grp')||'',level:fd.get('level')||'',captain_id:me.role==='owner'?fd.get('captain'):me.id,parent_id:fd.get('parent')||null};
      if(me.role==='owner'&&!row.captain_id)throw new Error('لا يوجد كابتن معتمد، اعتمدي كابتنًا أولًا من تبويب الكباتن');
      await api('/rest/v1/children',{method:'POST',headers:{Prefer:'return=minimal'},body:row});toast('تمت الإضافة');history.back();
    }else if(n==='childEdit'){
      await api('/rest/v1/children?id=eq.'+f.dataset.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{level:fd.get('level')||'',notes:fd.get('notes')||'',parent_id:fd.get('parent')||null}});toast('تم الحفظ');render();
    }else if(n==='ask'){
      await api('/rest/v1/questions',{method:'POST',headers:{Prefer:'return=minimal'},body:{child_id:f.dataset.id,body:fd.get('b')}});toast('تم إرسال السؤال');render();
    }else if(n==='answer'){
      await api('/rest/v1/questions?id=eq.'+f.dataset.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{answer:fd.get('a'),answered_at:new Date().toISOString()}});toast('تم الرد');render();
    }else if(n==='video'){
      const file=fd.get('file');if(!file||!file.size)throw new Error('اختاري فيديو');if(file.size>50*1024*1024)throw new Error('الفيديو أكبر من 50 ميجا');
      const ext=(file.name.split('.').pop()||'mp4').replace(/[^a-z0-9]/gi,'').slice(0,5)||'mp4';
      const path=me.id+'/'+Date.now()+'.'+ext;
      if(btn)btn.textContent='جاري الرفع، انتظري...';
      await api('/storage/v1/object/videos/'+path,{method:'POST',raw:true,body:file,headers:{'Content-Type':file.type||'video/mp4'}});
      await api('/rest/v1/videos',{method:'POST',headers:{Prefer:'return=minimal'},body:{title:String(fd.get('title')).trim(),path}});
      toast('تم رفع الفيديو');history.back();
    }else if(n==='top3'){
      const m=f.dataset.m;
      for(let i=1;i<=3;i++){
        const nm=String(fd.get('n'+i)||'').trim();
        if(nm)await api('/rest/v1/top3?on_conflict=month,place',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:{month:m,place:i,name:nm,note:fd.get('t'+i)||''}});
        else await api('/rest/v1/top3?month=eq.'+m+'&place=eq.'+i,{method:'DELETE'});
      }
      toast('تم الحفظ');history.back();
    }else if(n==='profile'){
      const b={full_name:String(fd.get('name')).trim()};if(fd.has('bio'))b.bio=fd.get('bio');
      await api('/rest/v1/profiles?id=eq.'+me.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:b});await loadMe();toast('تم الحفظ');render();
    }else if(n==='owner'){
      await api('/rest/v1/rpc/claim_owner',{method:'POST',body:{code:String(fd.get('code')).trim()}});await loadMe();toast('تم تفعيل حساب المالكة');tab('children');
    }
  }catch(err){showErr(err.message)}
  finally{busy=false;if(btn&&btn.isConnected){btn.disabled=false;btn.textContent=old}}
});

(async function boot(){
  history.replaceState({n:1},'');history.pushState({n:1},'');
  if(S){try{await loadMe()}catch(e){}}
  stack=[{view:me?'children':'login',p:{}}];
  render();
})();
