self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('push',function(e){
  var d={title:'Dolphin Academy',body:'لديك تنبيه جديد'};
  try{if(e.data)d=Object.assign(d,e.data.json())}catch(x){}
  e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'icon-192.png',badge:'icon-192.png',lang:'ar',dir:'rtl',tag:'dolphin'}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){
    for(var i=0;i<l.length;i++){if('focus' in l[i])return l[i].focus()}
    return self.clients.openWindow('./');
  }));
});
