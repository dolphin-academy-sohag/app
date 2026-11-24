var LOGO="data:image/png;base64,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";
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
const LEVELS=['جيد','جيد جدًا','ممتاز'],PARTS=['حر','صدر','فراشة','ظهر'];
const opt=(a,v,blank)=>(blank?'<option value="">'+blank+'</option>':'')+a.map(x=>'<option'+(x===v?' selected':'')+'>'+x+'</option>').join('');
const nz=v=>(v===''||v==null)?null:+v;
const SKILLS=['الطفو على الظهر','الطفو على البطن','ضربات الرجلين','التنفس تحت الماء','سباحة الحر','سباحة الظهر','سباحة الصدر','سباحة الفراشة','الغطس من الحافة','سباحة 25 متر'];
const normName=x=>String(x||'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[^ء-ي]/g,'');
const isOwnerName=x=>normName(x)===normName('محمود بدري عبد الموجود غزالي');
const av=(p,c)=>p&&p.photo?'<img class="av '+(c||'')+'" src="'+esc(p.photo)+'" alt="">':'';
function resizePhoto(file){return new Promise((ok,no)=>{const im=new Image(),u=URL.createObjectURL(file);im.onload=()=>{const c=document.createElement('canvas');const z=Math.min(1,220/Math.max(im.width,im.height));c.width=Math.round(im.width*z);c.height=Math.round(im.height*z);c.getContext('2d').drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);ok(c.toDataURL('image/jpeg',0.75))};im.onerror=()=>no(new Error('الصورة غير صالحة'));im.src=u})}
let deferredInstall=null;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e});
const installBox=()=>'<button class="btn alt" data-act="install">📲 تثبيت التطبيق على الموبايل</button>';
const isStaff=()=>me&&(me.role==='owner'||me.role==='captain');

/* navigation */
function go(view,p){stack.push({view,p:p||{}});history.pushState({n:stack.length},'');render()}
function tab(view){stack=[{view,p:{}}];render();window.scrollTo(0,0)}
function back(){if(stack.length>1){history.back()}else{tab('children')}}
window.addEventListener('popstate',()=>{if(stack.length>1){stack.pop();render()}else{history.pushState({n:1},'')}});
function toast(t,cls){const e=document.createElement('div');e.className='toast';e.textContent=t;document.body.appendChild(e);setTimeout(()=>e.remove(),2600)}

const TITLES={login:'تسجيل الدخول',register:'حساب جديد',children:'المتدربون',child:'صفحة المتدرب',childForm:'إضافة متدرب',videos:'الفيديوهات',videoForm:'رفع فيديو',top3:'أوائل الشهر',top3Form:'تعديل الأوائل',captains:'الكباتن وأولياء الأمور',account:'حسابي',reqForm:'تسجيل طفل',signin:'تسجيل الدخول',ownerWelcome:'أهلاً بك',inbox:'أسئلة الأهل',news:'إعلانات الأكاديمية',newsForm:'إعلان جديد',requests:'طلبات التسجيل'};
function tabsFor(){
  const t=[['children','👦',me.role==='parent'?'أطفالي':'المتدربون']];
  if(me.role==='owner')t.push(['captains','🧑‍🏫','الكباتن']);
  if(isStaff())t.push(['inbox','❓','الأسئلة']);
  t.push(['news','📢','إعلانات'],['videos','🎬','الفيديوهات'],['top3','🏆','الأوائل'],['account','👤','حسابي']);
  return t;
}
async function render(){
  const cur=stack[stack.length-1];
  const authed=!!S&&!!me;
  if(!authed&&!['login','register','signin','ownerWelcome'].includes(cur.view)){stack=[{view:'login',p:{}}]}
  const v=stack[stack.length-1];
  let html='<div class="card center">...</div>';
  $('#app').innerHTML=header(v)+'<main id="main">'+html+'</main>';
  try{html=await VIEWS[v.view](v.p||{})}catch(e){html='<div class="err">'+esc(arErr(e.message))+'</div><button class="btn" data-act="reload">إعادة المحاولة</button>'}
  $('#app').innerHTML=header(v)+'<main id="main">'+html+'</main>'+(authed?tabbar(v):'');
  window.scrollTo(0,0);
}
function header(v){
  const showBack=stack.length>1;
  return '<header>'+(showBack?'<button class="back" data-act="back">→ رجوع</button>':'<img src="'+LOGO+'" alt="">')+'<h1>'+esc(TITLES[v.view]||'Dolphin Academy')+'</h1></header>';
}
function tabbar(v){
  const root=stack[0].view;
  const map={newsForm:'news',child:'children',childForm:'children',reqForm:'children',requests:'children',videoForm:'videos',top3Form:'top3'};
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

const bodyFields=(c)=>'<label>السن</label><input name="age" type="number" inputmode="numeric" min="2" max="60" value="'+esc(c.age??'')+'">'+
 '<label>السنة الدراسية</label><input name="school_year" placeholder="مثال: الصف الأول الابتدائي" value="'+esc(c.school_year||'')+'">'+
 '<label>الطول (سم)</label><input name="height" type="number" inputmode="decimal" step="0.1" value="'+esc(c.height??'')+'">'+
 '<label>الوزن (كجم)</label><input name="weight" type="number" inputmode="decimal" step="0.1" value="'+esc(c.weight??'')+'">'+
 '<label>محيط الصدر (سم)</label><input name="chest" type="number" inputmode="decimal" step="0.1" value="'+esc(c.chest??'')+'">'+
 '<label>رقم التليفون</label><input name="child_phone" type="tel" inputmode="numeric" value="'+esc(c.child_phone||'')+'">'+
 '<label>الجانب الصحي (أمراض، حساسية، علاج، أي ملاحظة صحية)</label><textarea name="health_notes">'+esc(c.health_notes||'')+'</textarea>';
const bodyVals=fd=>({age:nz(fd.get('age')),school_year:fd.get('school_year')||'',height:nz(fd.get('height')),weight:nz(fd.get('weight')),chest:nz(fd.get('chest')),child_phone:fd.get('child_phone')||'',health_notes:fd.get('health_notes')||''});
const VIEWS={
  async login(){return '<img class="logo" src="'+LOGO+'" alt=""><h2 class="center">Dolphin Academy</h2><p class="center mut">اختاري نوع حسابك للتسجيل</p>'+
   '<button class="bubble" data-go="register" data-role="parent"><span>👪</span>أنا ولي أمر</button>'+
   '<button class="bubble cap" data-go="register" data-role="captain"><span>🏊</span>أنا كابتن</button>'+
   '<button class="btn alt" data-go="signin">لدي حساب، دخول</button>'+installBox()},
  async signin(){return '<img class="logo" src="'+LOGO+'" alt="">'+
   '<form data-form="login" class="card"><label>رقم الموبايل</label><input name="phone" type="tel" inputmode="numeric" autocomplete="username" placeholder="01xxxxxxxxx" required>'+
   '<label>كلمة السر</label><input name="pw" type="password" autocomplete="current-password" required><div id="fe"></div>'+
   '<button class="btn" type="submit">دخول</button></form>'},
  async register(p){const cap=p.role==='captain';return '<form data-form="register" class="card"><h3>'+(cap?'تسجيل كابتن':'تسجيل ولي أمر')+'</h3><input type="hidden" name="role" value="'+(cap?'captain':'parent')+'"><label>الاسم</label><input name="name" required>'+
   '<label>رقم الموبايل</label><input name="phone" type="tel" inputmode="numeric" placeholder="01xxxxxxxxx" required>'+
   '<label>اختاري كلمة السر الخاصة بك (6 أحرف أو أرقام على الأقل). لا تعطيها لأحد، فهي تحمي بيانات طفلك.</label><input name="pw" type="password" minlength="6" autocomplete="new-password" required>'+
   (cap?'<label>صورتك (اختياري)</label><input name="photo" type="file" accept="image/*"><p class="mut">تحتاج موافقة المالكة بعد التسجيل.</p>':'')+
   '<div id="fe"></div><button class="btn" type="submit">تسجيل</button></form>'},
  async ownerWelcome(p){return '<img class="logo" src="'+LOGO+'" alt=""><div class="card center"><h2>أهلاً كابتن محمود</h2><p>المالك الحقيقي للأكاديمية 🌊</p></div>'+
   '<form data-form="ownerSetup" data-name="'+esc(p.name)+'" data-phone="'+esc(p.phone)+'" class="card"><p class="mut">لفتح نسخة المالك اكتبي كلمة سر المالك. ستكون هي كلمة سر دخولك بعد ذلك.</p>'+
   '<label>كلمة سر المالك</label><input name="pw" type="password" autocomplete="new-password" required><div id="fe"></div>'+
   '<button class="btn" type="submit">فتح نسخة المالك</button></form>'},
  async inbox(){
    const qs=await api('/rest/v1/questions?answer=is.null&order=created_at&select=*,author:profiles(full_name),child:children(name,captain_id)');
    const mine=qs.filter(q=>me.role==='owner'||(q.child&&q.child.captain_id===me.id));
    if(!mine.length)return '<div class="card center mut">لا توجد أسئلة بدون رد 👍</div>';
    return mine.map(q=>'<div class="card"><div class="mut">'+esc(q.child&&q.child.name)+' · '+esc(q.author&&q.author.full_name||'')+'</div><p>'+esc(q.body)+'</p><form data-form="answer" data-id="'+esc(q.id)+'" data-child="'+esc(q.child_id)+'" data-back="inbox"><input name="a" placeholder="اكتبي الرد" required><button class="btn sm" type="submit">إرسال الرد</button></form></div>').join('');
  },
  async children(){
    const rows=await api('/rest/v1/children?select=*,captain:profiles!children_captain_id_fkey(full_name,photo)&order=created_at.desc');
    let h='';
    if(me.role==='parent'&&me.want_captain)h+='<div class="warn">طلب الكابتن بانتظار موافقة المالكة. حتى ذلك الحين حسابك ولي أمر.</div>';
    if(isStaff())h+='<button class="btn" data-go="childForm">➕ إضافة متدرب</button>';
    if(me.role==='parent'){
      h+='<button class="btn" data-go="reqForm">➕ تسجيل بيانات طفلي</button>';
      const rq=await api('/rest/v1/child_requests?select=id,name,created_at&order=created_at.desc');
      h+=rq.map(r=>'<div class="card"><h3>'+esc(r.name)+'</h3><div class="mut">طلب التسجيل بانتظار اعتماد الأكاديمية وربطه بحسابك</div><button class="btn alt sm" data-act="delReq" data-id="'+esc(r.id)+'">إلغاء الطلب</button></div>').join('');
    }
    if(me.role==='owner'){
      const [pr,qq]=await Promise.all([api('/rest/v1/profiles?select=role,want_captain'),api('/rest/v1/questions?answer=is.null&select=id')]);
      h+='<div class="card"><h3>نظرة عامة</h3><div class="stats"><div><b>'+rows.length+'</b>متدرب</div><div><b>'+pr.filter(x=>x.role==='captain').length+'</b>كابتن</div><div><b>'+pr.filter(x=>x.role==='parent').length+'</b>ولي أمر</div><div><b>'+qq.length+'</b>سؤال بلا رد</div></div></div>';}
    if(me.role==='owner'){const n=(await api('/rest/v1/child_requests?select=id')).length;h+='<button class="btn alt" data-go="requests">📝 طلبات تسجيل أولياء الأمور ('+n+')</button>'}
    if(!rows.length)h+='<div class="card center mut">'+(me.role==='parent'?'لا يوجد طفل مرتبط بحسابك بعد. اضغطي تسجيل بيانات طفلي، والأكاديمية تتحقق وتربطه بحسابك.':'لا يوجد متدربون بعد. اضغطي إضافة متدرب.')+'</div>';
    h+=rows.map(c=>'<div class="card item" data-go="child" data-id="'+esc(c.id)+'"><h3>'+esc(c.name)+'</h3><div class="mut">'+(c.age?esc(c.age)+' سنة · ':'')+esc(c.grp||'بدون مجموعة')+(c.level?' · '+esc(c.level):'')+'</div><div class="mut">الكابتن: '+esc(c.captain&&c.captain.full_name||'غير محدد')+'</div></div>').join('');
    return h;
  },
  async reqForm(){return '<form data-form="reqForm" class="card"><p class="mut">اكتبي بيانات طفلك. لن تظهر صفحة الطفل في حسابك إلا بعد أن تتحقق الأكاديمية وتربطه بحسابك.</p><label>اسم الطفل</label><input name="name" required>'+bodyFields({})+'<div id="fe"></div><button class="btn" type="submit">إرسال للأكاديمية</button></form>'},
  async requests(){
    const rq=await api('/rest/v1/child_requests?select=*,parent:profiles!child_requests_parent_id_fkey(full_name,phone)&order=created_at');
    const caps=await api('/rest/v1/profiles?role=eq.captain&select=id,full_name&order=full_name');
    const kids=await api('/rest/v1/children?parent_id=is.null&select=id,name&order=name');
    if(!rq.length)return '<div class="card center mut">لا توجد طلبات.</div>';
    return rq.map(r=>'<form data-form="approve" data-id="'+esc(r.id)+'" class="card"><h3>'+esc(r.name)+'</h3><div class="mut">ولي الأمر: '+esc(r.parent&&r.parent.full_name)+' - '+esc(r.parent&&r.parent.phone)+'</div>'+
      '<div class="mut">'+(r.age?esc(r.age)+' سنة · ':'')+esc(r.school_year||'')+'</div>'+(r.health_notes?'<div class="mut">صحة: '+esc(r.health_notes)+'</div>':'')+
      '<label>اربطيه بمتدرب موجود (سجله كابتن)</label><select name="existing"><option value="">لا، أنشئي متدربًا جديدًا</option>'+kids.map(k=>'<option value="'+esc(k.id)+'">'+esc(k.name)+'</option>').join('')+'</select>'+
      '<label>الكابتن (للمتدرب الجديد)</label><select name="captain"><option value="">بدون</option>'+caps.map(c=>'<option value="'+esc(c.id)+'">'+esc(c.full_name)+'</option>').join('')+'</select>'+
      '<div id="fe"></div><button class="btn ok" type="submit">اعتماد وربط بولي الأمر بعد التحقق</button><button class="btn alt" type="button" data-act="delReq" data-id="'+esc(r.id)+'">رفض</button></form>').join('');
  },
  async news(){
    const rows=await api('/rest/v1/announcements?select=*,a:profiles(full_name)&order=created_at.desc&limit=30');
    let h=isStaff()?'<button class="btn" data-go="newsForm">➕ إعلان جديد</button>':'';
    if(!rows.length)h+='<div class="card center mut">لا توجد إعلانات.</div>';
    return h+rows.map(r=>'<div class="card"><div class="mut">'+esc(new Date(r.created_at).toLocaleDateString('ar-EG'))+'</div><p>'+esc(r.body)+'</p>'+((me.role==='owner'||r.author_id===me.id)?'<button class="btn alt sm" data-act="delNews" data-id="'+esc(r.id)+'">حذف</button>':'')+'</div>').join('');
  },
  async newsForm(){return '<form data-form="news" class="card"><label>نص الإعلان (يظهر لكل أولياء الأمور)</label><textarea name="b" required></textarea><div id="fe"></div><button class="btn" type="submit">نشر</button></form>'},
  async childForm(){
    const parents=await parentsList();
    let caps='';
    if(me.role==='owner'){const c=await api('/rest/v1/profiles?role=eq.captain&select=id,full_name&order=full_name');caps='<label>الكابتن</label><select name="captain"><option value="">بدون كابتن الآن</option>'+c.map(x=>'<option value="'+esc(x.id)+'">'+esc(x.full_name)+'</option>').join('')+'</select>'}
    return '<form data-form="childForm" class="card"><label>اسم المتدرب</label><input name="name" required>'+
     '<label>المجموعة</label><input name="grp" placeholder="مثال: مبتدئين">'+bodyFields({})+
     '<label>المستوى</label><select name="level">'+opt(LEVELS,'','بدون')+'</select><label>الجزء التعليمي</label><select name="learn_part">'+opt(PARTS,'','بدون')+'</select>'+caps+
     '<label>ولي الأمر (اختياري، يمكن ربطه لاحقًا)</label><select name="parent"><option value="">بدون</option>'+parents.map(p=>'<option value="'+esc(p.id)+'">'+esc(p.full_name)+' - '+esc(p.phone)+'</option>').join('')+'</select><div id="fe"></div>'+
     '<button class="btn" type="submit">حفظ</button></form>'},
  async child(p){
    const [c]=await api('/rest/v1/children?id=eq.'+p.id+'&select=*,captain:profiles!children_captain_id_fkey(full_name,photo),parent:profiles!children_parent_id_fkey(full_name,phone)');
    if(!c)return '<div class="err">لم يتم العثور على الصفحة</div>';
    const att=await api('/rest/v1/attendance?child_id=eq.'+c.id+'&order=day.desc&limit=60');
    const qs=await api('/rest/v1/questions?child_id=eq.'+c.id+'&order=created_at&select=*,author:profiles(full_name)');
    const sk=await api('/rest/v1/skills?child_id=eq.'+c.id+'&select=skill');
    const logs=await api('/rest/v1/daily_logs?child_id=eq.'+c.id+'&order=day.desc&limit=10');
    const canEdit=me.role==='owner'||(me.role==='captain'&&c.captain_id===me.id);
    const pres=att.filter(a=>a.present).length;
    let h='<div class="card"><h3>'+esc(c.name)+'</h3><div class="mut">'+(c.age?esc(c.age)+' سنة · ':'')+esc(c.grp||'بدون مجموعة')+'</div>'+
      '<p>المستوى: <b>'+esc(c.level||'لم يحدد بعد')+'</b>'+(c.learn_part?' · الجزء التعليمي: <b>'+esc(c.learn_part)+'</b>':'')+'</p><p>'+av(c.captain,'sm')+'الكابتن: '+esc(c.captain&&c.captain.full_name||'غير محدد')+'</p>'+
      '<p class="mut">'+(c.school_year?'السنة الدراسية: '+esc(c.school_year)+' · ':'')+(c.height?'الطول: '+esc(c.height)+' سم · ':'')+(c.weight?'الوزن: '+esc(c.weight)+' كجم · ':'')+(c.chest?'محيط الصدر: '+esc(c.chest)+' سم':'')+'</p>'+
      (c.child_phone?'<p class="mut">رقم التليفون: '+esc(c.child_phone)+'</p>':'')+(c.health_notes?'<p>الجانب الصحي:<br>'+esc(c.health_notes)+'</p>':'')+
      (c.notes?'<p>ملاحظات الكابتن:<br>'+esc(c.notes)+'</p>':'')+
      (isStaff()?'<p class="mut">ولي الأمر: '+esc(c.parent?c.parent.full_name+' - '+c.parent.phone:'غير مربوط')+'</p>':'')+'</div>';
    h+='<div class="card"><h3>الحضور</h3>'+(att.length?'<p>حضر <b>'+pres+'</b> من <b>'+att.length+'</b> حصة</p>':'<p class="mut">لا يوجد تسجيل حضور بعد.</p>');
    if(canEdit)h+='<label>اليوم</label><input type="date" id="attday" value="'+today()+'"><div class="row"><button class="btn ok" data-act="att" data-id="'+esc(c.id)+'" data-v="1">✔ حاضر</button><button class="btn no" data-act="att" data-id="'+esc(c.id)+'" data-v="0">✘ غائب</button></div>';
    h+=att.slice(0,10).map(a=>'<div class="mut">'+esc(fmtDay(a.day))+': '+(a.present?'✔ حاضر':'✘ غائب')+'</div>').join('')+'</div>';
    h+='<div class="card"><h3>المهارات ('+sk.length+' من '+SKILLS.length+')</h3><div class="bar"><i style="width:'+Math.round(sk.length/SKILLS.length*100)+'%"></i></div>'+SKILLS.map(k=>{const on=sk.some(x=>x.skill===k);return '<div class="sk'+(on?' on':'')+'">'+(on?'✔ ':'○ ')+esc(k)+(canEdit?'<button class="btn alt sm" data-act="skill" data-id="'+esc(c.id)+'" data-k="'+esc(k)+'" data-on="'+(on?1:0)+'">'+(on?'إلغاء':'أتقن')+'</button>':'')+'</div>'}).join('')+'</div>';
    h+='<div class="card"><h3>تقييم الكابتن اليومي</h3>'+(logs.length?'':'<p class="mut">لا يوجد تقييم بعد.</p>')+logs.map(l=>'<div class="q"><b>'+esc(fmtDay(l.day))+':</b> '+esc(l.rating||'')+(l.lesson?' · الدرس: '+esc(l.lesson):'')+(l.learn_part?' · الجزء التعليمي: '+esc(l.learn_part):'')+(l.note?'<br>'+esc(l.note):'')+'</div>').join('')+'</div>';
    if(canEdit)h+='<form data-form="daily" data-id="'+esc(c.id)+'" class="card"><h3>تسجيل تقييم اليوم</h3><label>اليوم</label><input type="date" name="day" value="'+today()+'" required><label>تقييم الطفل اليوم</label><select name="rating">'+opt(LEVELS,'')+'</select><label>الدرس اليوم</label><input name="lesson"><label>الجزء التعليمي اليوم</label><select name="learn_part">'+opt(PARTS,'','بدون')+'</select><label>ملاحظة</label><textarea name="note"></textarea><div id="fe"></div><button class="btn" type="submit">حفظ التقييم</button></form>';
    if(canEdit){
      const parents=await parentsList();
      h+='<form data-form="childEdit" data-id="'+esc(c.id)+'" class="card"><h3>تعديل البيانات</h3><label>المستوى</label><select name="level">'+opt(LEVELS,c.level,'بدون')+'</select><label>الجزء التعليمي</label><select name="learn_part">'+opt(PARTS,c.learn_part,'بدون')+'</select>'+bodyFields(c)+'<label>ملاحظات للأهل</label><textarea name="notes">'+esc(c.notes)+'</textarea>'+
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
    const kids=await api('/rest/v1/children?select=captain_id');
    const row=(x,btn)=>'<div class="card">'+av(x)+'<h3>'+esc(x.full_name)+'</h3><div class="mut">'+esc(x.phone)+(x.role==='captain'?' · المتدربون: '+kids.filter(k=>k.captain_id===x.id).length:'')+'</div>'+btn+'</div>';
    let h='<h3>طلبات كباتن بانتظار الموافقة ('+pend.length+')</h3>'+(pend.length?pend.map(x=>row(x,'<button class="btn ok" data-act="role" data-id="'+esc(x.id)+'" data-r="captain">اعتماد كابتن</button><button class="btn alt" data-act="role" data-id="'+esc(x.id)+'" data-r="parent">رفض</button>')).join(''):'<div class="mut">لا يوجد.</div>');
    h+='<h3>الكباتن ('+caps.length+')</h3>'+(caps.length?caps.map(x=>row(x,'<button class="btn alt" data-act="role" data-id="'+esc(x.id)+'" data-r="parent">إلغاء الكابتن</button>')).join(''):'<div class="mut">لا يوجد.</div>');
    h+='<h3>أولياء الأمور ('+par.length+')</h3>'+(par.length?par.map(x=>row(x,'')).join(''):'<div class="mut">لا يوجد.</div>');
    return h;
  },
  async account(){
    let h='<div class="card"><h3>'+esc(me.full_name)+'</h3><div class="mut">'+esc(me.phone)+' · '+esc(ROLE[me.role])+'</div></div>'+
     '<form data-form="profile" class="card"><label>الاسم</label><input name="name" value="'+esc(me.full_name)+'" required>'+(isStaff()?'<label>نبذة عنك (تظهر للأهل)</label><textarea name="bio">'+esc(me.bio)+'</textarea>':'')+'<div id="fe"></div><button class="btn" type="submit">حفظ</button></form>';
    if(isStaff()||me.want_captain)h+='<div class="card">'+av(me)+'<h3>صورتي (اختياري)</h3><form data-form="photo"><input name="photo" type="file" accept="image/*"><div id="fe"></div><button class="btn" type="submit">حفظ الصورة</button></form>'+(me.photo?'<button class="btn alt" data-act="rmPhoto">حذف الصورة</button>':'')+'</div>';
    h+=installBox();
    if(me.role!=='owner')h+='<form data-form="owner" class="card"><h3>حساب مالكة الأكاديمية</h3><p class="mut">للمالكة فقط: اكتبي الرمز الذي أعطيناه لك.</p><input name="code" type="tel" inputmode="numeric" placeholder="الرمز"><div id="fe"></div><button class="btn alt" type="submit">تفعيل</button></form>';
    h+='<button class="btn no" data-act="logout">تسجيل الخروج</button>';
    return h;
  }
};

/* events */
document.addEventListener('click',async e=>{
  const t=e.target.closest('[data-go],[data-act],[data-tab]');if(!t)return;
  if(t.dataset.tab){tab(t.dataset.tab);return}
  if(t.dataset.go){const p={};if(t.dataset.id)p.id=t.dataset.id;if(t.dataset.m)p.m=t.dataset.m;if(t.dataset.role)p.role=t.dataset.role;go(t.dataset.go,p);return}
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
    else if(a==='delReq'){if(confirm('حذف الطلب؟')){await api('/rest/v1/child_requests?id=eq.'+d.id,{method:'DELETE'});render()}}
    else if(a==='delNews'){await api('/rest/v1/announcements?id=eq.'+d.id,{method:'DELETE'});render()}
    else if(a==='skill'){if(d.on==='1')await api('/rest/v1/skills?child_id=eq.'+d.id+'&skill=eq.'+encodeURIComponent(d.k),{method:'DELETE'});else await api('/rest/v1/skills',{method:'POST',headers:{Prefer:'return=minimal'},body:{child_id:d.id,skill:d.k}});render()}
    else if(a==='install'){if(deferredInstall){deferredInstall.prompt();deferredInstall=null}else alert('على أندرويد: اضغطي قائمة المتصفح (⋮) ثم "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية". على آيفون: زر المشاركة ثم "إضافة إلى الشاشة الرئيسية".')}
    else if(a==='rmPhoto'){await api('/rest/v1/profiles?id=eq.'+me.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{photo:null}});await loadMe();render()}
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
      const nm=String(fd.get('name')).trim();
      if(isOwnerName(nm)){stack=[{view:'ownerWelcome',p:{name:nm,phone:ph}}];history.replaceState({n:1},'');render();return}
      const pw=String(fd.get('pw'));if(pw.length<6)throw new Error('كلمة السر قصيرة، 6 على الأقل');
      const cap=fd.get('role')==='captain';
      let photo=null;const pf=fd.get('photo');if(cap&&pf&&pf.size)photo=await resizePhoto(pf);
      const r=await fetch(SB+'/auth/v1/signup',{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json'},body:JSON.stringify({email:emailOf(ph),password:pw,data:{phone:ph,full_name:nm,want_captain:cap}})});
      const j=await r.json();if(!r.ok)throw new Error(j.msg||j.error_description||j.message||'خطأ');
      if(!j.access_token)throw new Error('تعذر إنشاء الحساب، حاولي مرة أخرى');
      setSess(j);await loadMe();
      if(photo)await api('/rest/v1/profiles?id=eq.'+me.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{photo}}).catch(()=>{});
      stack=[{view:'children',p:{}}];history.replaceState({n:1},'');render();
    }else if(n==='ownerSetup'){
      const pw=String(fd.get('pw'));
      const ck=await fetch(SB+'/rest/v1/rpc/check_owner_pw',{method:'POST',headers:{apikey:KEY,Authorization:'Bearer '+KEY,'Content-Type':'application/json'},body:JSON.stringify({pw})});
      const cj=await ck.json();if(!ck.ok)throw new Error(cj.message||'خطأ');if(cj!==true)throw new Error('wrong code');
      const ph=f.dataset.phone,nm=f.dataset.name;
      const r=await fetch(SB+'/auth/v1/signup',{method:'POST',headers:{apikey:KEY,'Content-Type':'application/json'},body:JSON.stringify({email:emailOf(ph),password:pw,data:{phone:ph,full_name:nm,want_captain:false}})});
      const j=await r.json();if(!r.ok)throw new Error(j.msg||j.error_description||j.message||'خطأ');
      if(!j.access_token)throw new Error('تعذر إنشاء الحساب');
      setSess(j);
      const ok=await api('/rest/v1/rpc/claim_owner2',{method:'POST',body:{code:pw}});
      await loadMe();stack=[{view:'children',p:{}}];history.replaceState({n:1},'');render();
      toast(ok===true?'أهلاً كابتن محمود، تم فتح نسخة المالك':'تعذر فتح نسخة المالك');
    }else if(n==='photo'){
      const pf=fd.get('photo');if(!pf||!pf.size)throw new Error('اختاري صورة');
      await api('/rest/v1/profiles?id=eq.'+me.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{photo:await resizePhoto(pf)}});await loadMe();toast('تم حفظ الصورة');render();
    }else if(n==='childForm'){
      const row={name:String(fd.get('name')).trim(),grp:fd.get('grp')||'',level:fd.get('level')||'',learn_part:fd.get('learn_part')||'',...bodyVals(fd),captain_id:me.role==='owner'?(fd.get('captain')||null):me.id,parent_id:fd.get('parent')||null};
      await api('/rest/v1/children',{method:'POST',headers:{Prefer:'return=minimal'},body:row});toast('تمت الإضافة');history.back();
    }else if(n==='childEdit'){
      await api('/rest/v1/children?id=eq.'+f.dataset.id,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{level:fd.get('level')||'',learn_part:fd.get('learn_part')||'',notes:fd.get('notes')||'',parent_id:fd.get('parent')||null,...bodyVals(fd)}});toast('تم الحفظ');render();
    }else if(n==='reqForm'){
      await api('/rest/v1/child_requests',{method:'POST',headers:{Prefer:'return=minimal'},body:{name:String(fd.get('name')).trim(),...bodyVals(fd)}});toast('تم الإرسال للأكاديمية');history.back();
    }else if(n==='approve'){
      const [r]=await api('/rest/v1/child_requests?id=eq.'+f.dataset.id+'&select=*');if(!r)throw new Error('الطلب غير موجود');
      const ex=fd.get('existing');
      if(ex){await api('/rest/v1/children?id=eq.'+ex,{method:'PATCH',headers:{Prefer:'return=minimal'},body:{parent_id:r.parent_id,age:r.age,school_year:r.school_year,height:r.height,weight:r.weight,chest:r.chest,child_phone:r.child_phone,health_notes:r.health_notes}})}
      else{await api('/rest/v1/children',{method:'POST',headers:{Prefer:'return=minimal'},body:{name:r.name,age:r.age,school_year:r.school_year,height:r.height,weight:r.weight,chest:r.chest,child_phone:r.child_phone,health_notes:r.health_notes,parent_id:r.parent_id,captain_id:fd.get('captain')||null}})}
      await api('/rest/v1/child_requests?id=eq.'+r.id,{method:'DELETE'});toast('تم الاعتماد والربط');render();
    }else if(n==='daily'){
      await api('/rest/v1/daily_logs?on_conflict=child_id,day',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:{child_id:f.dataset.id,day:fd.get('day'),rating:fd.get('rating')||'',lesson:fd.get('lesson')||'',learn_part:fd.get('learn_part')||'',note:fd.get('note')||''}});toast('تم حفظ التقييم');render();
    }else if(n==='news'){
      await api('/rest/v1/announcements',{method:'POST',headers:{Prefer:'return=minimal'},body:{body:String(fd.get('b')).trim()}});toast('تم النشر');history.back();
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
      const okc=await api('/rest/v1/rpc/'+(isOwnerName(me.full_name)?'claim_owner2':'claim_owner'),{method:'POST',body:{code:String(fd.get('code')).trim()}});if(okc===false)throw new Error('wrong code');await loadMe();toast('تم تفعيل حساب المالكة');tab('children');
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

(function(){var st=document.createElement('style');st.textContent='.bubble{display:flex;flex-direction:column;align-items:center;gap:6px;width:100%;margin:12px 0;padding:26px 10px;border:0;border-radius:22px;background:#1c3a6e;color:#fff;font:700 22px inherit;font-family:inherit}.bubble.cap{background:#1b8f5a}.bubble span{font-size:46px}.av{width:56px;height:56px;border-radius:50%;object-fit:cover;float:left;margin:0 0 6px 8px}.av.sm{width:28px;height:28px;float:none;vertical-align:middle;margin:0 0 0 6px}.stats{display:flex;gap:8px;text-align:center}.stats div{flex:1;background:#eef4fb;border-radius:12px;padding:8px 2px;font-size:12px}.stats b{display:block;font-size:22px;color:#1c3a6e}.tabs button{min-width:0;padding:6px 2px;font-size:11px}';document.head.appendChild(st)})();
