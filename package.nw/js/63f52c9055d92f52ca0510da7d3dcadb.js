'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b,c,d,e={}){const f=e.onProgressUpdate||F,g=async(c)=>{const d=(await m(a,c,{noWarnings:!0}))||'',e=x(i.join(b,decodeURI(c)),d,{inlineSources:!0}),f='object'==typeof e?JSON.stringify(e):'';return f?d.replace(/^\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/m,`\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${new Buffer(f).toString('base64')}`):d},k='weapp:///',n=i.join(b,'app.json'),o=j.readFileSync(n,'utf8'),p=await v(a);if(!p.pages)throw new Error('no pages defined.');let q=p.pages.map((a)=>{return a+'.js'}),y=await u.getFileList(a,p);if(y=y.length?y.map((a)=>a+'.js'):[],p.subPackages){const a=[];for(const b of p.subPackages)b&&b.root&&b.pages&&a.push(...b.pages.map((a)=>i.posix.join(b.root,a+'.js')));q=[...q,...a]}q=q.filter((a)=>{return 0>y.findIndex((b)=>b===a)});const z=l.sync('**/*.js',{cwd:b,ignore:[...['node_modules/**/*','**/node_modules/**','**/.git/**','.git/**/*','**/.svn/**','.svn/**/*','.DS_Store','**/.DS_Store'],'app.js',...y,...q],nocase:!0,dot:!0,nodir:!0});let A;try{A=await g('app.js')}catch(a){throw new Error('getjs app.js fail,'+a)}let B=[';'+A,';require("app.js");',`//# sourceURL=${k}app.js\n`].join('\n'),C=i.join(c,'app.js');h.sync(i.dirname(C)),j.writeFileSync(C,B,'utf-8'),B=o,C=i.join(c,'app.json'),h.sync(i.dirname(C)),j.writeFileSync(C,B,'utf-8'),f('preparefile','\u51C6\u5907 Components \u6587\u4EF6');for(const f of y){const d=i.join(b,f);if(!j.existsSync(d))throw new Error(f+' does not exists');if(j.lstatSync(d).isDirectory())throw new Error(f+' is a directory');const e=f.replace(/\.js$/i,''),l=(await r(a,e))||{};try{A=await g(encodeURI(f))}catch(a){throw new Error('getjs '+d+' fail,'+a)}if(p.plugins&&l.usingComponents)for(const a in l.usingComponents)l.usingComponents[a]=l.usingComponents[a].replace(/^plugin:\/\/([^\/]*)\/(.*)/,(a,b,c,d,e)=>{const f=p.plugins[b];return f?`plugin://${f.provider}/${c}`:e});B=[`;var __wxAppCode__ = __wxAppCode__ || {}; __wxAppCode__["${e}.json"] = ${JSON.stringify(l)}; var __wxRoute = "${e.replace(/"/g,'\\"')}"; var __wxRouteBegin = true; var __wxAppCurrentFile__ ="${f.replace(/"/g,'\\"')}"; `+A,`;require("${f.replace(/"/g,'\\"')}");`,`//# sourceURL=${k}${f}\n`].join('\n'),C=i.join(c,f),h.sync(i.dirname(C)),j.writeFileSync(C,B,'utf-8')}f('preparefile','\u51C6\u5907 Page \u6587\u4EF6');for(const f of q){const d=i.join(b,f);if(!j.existsSync(d))throw new Error(f+' does not exists');if(j.lstatSync(d).isDirectory())throw new Error(f+' is a directory');const e=f.replace(/\.js$/i,''),l=(await r(a,e))||{};try{A=await g(encodeURI(f))}catch(a){throw new Error('getjs '+d+' fail,'+a)}if(p.plugins&&l.usingComponents)for(const a in l.usingComponents)l.usingComponents[a]=l.usingComponents[a].replace(/^plugin:\/\/([^\/]*)\/(.*)/,(a,b,c,d,e)=>{const f=p.plugins[b];return f?`plugin://${f.provider}/${c}`:e});B=[`;var __wxAppCode__ = __wxAppCode__ || {}; __wxAppCode__["${e}.json"] = ${JSON.stringify(l)}; var __wxRoute = "${e.replace(/"/g,'\\"')}"; var __wxRouteBegin = true; var __wxAppCurrentFile__ ="${f.replace(/"/g,'\\"')}"; `+A,`;require("${f.replace(/"/g,'\\"')}");`,`//# sourceURL=${k}${f}\n`].join('\n'),C=i.join(c,f),h.sync(i.dirname(C)),j.writeFileSync(C,B,'utf-8')}f('preparefile','\u51C6\u5907 JS \u6587\u4EF6');for(const f of z){const a=i.join(b,f);if(!j.existsSync(a))throw new Error(f+' does not exists');if(j.lstatSync(a).isDirectory())throw new Error(f+' is a directory');try{A=await g(encodeURI(f))}catch(b){throw new Error('getjs '+a+' fail,'+b)}B=[';var __wxAppData = __wxAppData || {}; var __wxRoute; var __wxRouteBegin; var __wxAppCode__ = __wxAppCode__ || {}; var global = global || {}; var __wxAppCurrentFile__; var Component = Component || function() {}; var Behavior = Behavior || function() {}; '+A,`//# sourceURL=${k}${f}\n`].join('\n'),C=i.join(c,f),h.sync(i.dirname(C)),j.writeFileSync(C,B,'utf-8')}let D;try{D=await s(a)}catch(a){throw new Error('getWxAppCode fail,'+a)}C=i.join(d,'wxappcode.js'),j.writeFileSync(C,`;var __wxAppCode__ = __wxAppCode__ || {}; ${D.join(';\n')};\n//# sourceURL=[__wxAppCode__]`,'utf-8');let E;try{E=await t(a,{app:!0,cut:!0})}catch(a){throw new Error('transWXMLToJS fail,'+a)}const G=E.code;C=i.join(d,'wxmlxcjs.js'),j.writeFileSync(C,`${G}\n//# sourceURL=[__wxmlXCJS__]`,'utf-8');let H;try{if(p.plugins){let b=[];for(const c in p.plugins){const{provider:d,version:e}=p.plugins[c],f=await w.getServiceCode(a,{pluginId:d,version:e});b.push(`;${f};\n`)}H=b.join('\n')}}catch(a){throw new Error('getWxPluginCode fail,'+a)}return C=i.join(d,'wxplugincode.js'),j.writeFileSync(C,`${H}\n//# sourceURL=[__wxPluginCode__]`,'utf-8'),['app.json',...z,'app.js',...y,...q]}function b(){if(!0===y)return void(D=!0);if(y){try{y.destroy()}catch(a){}y=null}}const{RemoteTempDir:c,RemoteDir:d,RemoteDataDir:e}=require('./a148d3a11fd5268109e21fb40c9d527b.js'),{commonError:f,randomId:g}=require('./46d7303eb986fa402d60bf5e929aa077.js'),h=require('mkdir-p'),i=require('path'),j=require('fs'),k=require('rmdir'),l=require('glob'),m=require('./87c0ac209c25d8bb448550638bb17663.js'),{RemoteDebug:n}=require('./6c6f4dde020ed24929c4c4367c42d34d.js'),o=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),p=o.getState.bind(o),q=o.subscribe.bind(o),r=require('./d260ebf687a29f24aed49f66b233ab7d.js'),s=require('./334bc661e13bd1837a230f0835d0a1ee.js'),t=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),u=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),v=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),w=require('./b6d8659542036f6a35f417e0693e56db.js'),x=require('./cdbf7243dc99f8461acbb1d57af1d8ae.js');let y=!1,z=[],A=[],B=null,C=null,D=!1,E={mode:'server'};const F=function(){};let G=null;const H={getStatus(){if(!y||!0===y)return null;const a=E.mode;return{messager:'server'===a?{compressionSavedBytes:y.messager.compressionSavedBytes,status:y.messager.status,inSpeed:y.messager.inSpeed,outSpeed:y.messager.outSpeed,outDebugMessageSpeed:y.messager.outDebugMessageSpeed,inDebugMessageSpeed:y.messager.inDebugMessageSpeed,outDebugMessageCount:y.messager.outDebugMessageCount,inDebugMessageCount:y.messager.inDebugMessageCount,inCount:y.messager.inCount,outCount:y.messager.outCount,inBytesCount:y.messager.inBytesCount,outBytesCount:y.messager.outBytesCount,sendQueueLength:y.messager.sendQueue.length,cachedDebugMessagesCount:y.messager.debugMessagesToSend.length,unconfirmedMessagesCount:(()=>{const a=y.messager.cachedDebugMessageSendGroups;let b=0;for(const c of a)b+=((c&&!c.confirmed&&c.sendDebugMessageRequest||{}).debug_message||[]).length;return b})()}:{status:y.messager.status,inDebugMessageSpeed:y.messager.inDebugMessageSpeed,outDebugMessageSpeed:y.messager.outDebugMessageSpeed,outDebugMessageCount:y.messager.outDebugMessageCount,inDebugMessageCount:y.messager.inDebugMessageCount,inBytesCount:y.messager.inBytesCount,outBytesCount:y.messager.outBytesCount,cachedDebugMessagesCount:y.messager.debugMessagesToSend.length,unconfirmedMessagesCount:y.messager.unconfirmedMessagesCount},_debugger:{status:y.debuggerStatus},dirs:{dir:y.dir,tempDir:y.tempDir},client:{deviceInfo:y.deviceInfo,networkType:y.clientNetworkType,networkSpeed:y.clientNetworkSpeed,networkInterval:y.clientNetworkInterval},currentSyncSdkName:(()=>{let a=y.currentSyncSdkName;if(!a&&y.syncCallIds){const b=Object.keys(y.syncCallIds);0<b.length&&(a=y.syncCallIds[b[0]])}return a})()}},subscribeChange(a){z.push(a)},subscribeEvent(a){A.push(a)},changeDebuggerStatus(a){y&&!0!==y&&y.changeDebuggerStatus(a)},onAskForRetry(a){B=a},onOpenEditorFile(a){C=a},endDebug(){y&&!0!==y&&y.destroy()},getInstance(){return y&&!0!==y?y:null}};module.exports={init:async function(j,l={},m={}){return new Promise(async(o,r)=>{const s=m.onProgressUpdate||F;if(s('remotedebug','\u521D\u59CB\u5316\u8C03\u8BD5\u73AF\u5883'),y){console.warn('already an instance');const a=p();return a&&a.window&&a.window.remoteDebugWindow&&!a.window.remoteDebugWindow.show?(console.warn('shall be destroyed'),b(),r('\u8BF7\u91CD\u65B0\u5C1D\u8BD5\u4E00\u6B21\u3002')):r(f('remote debug instance already exists'))}const t=g(),u=i.join(d,j.appid||t,t),v=i.join(c,j.appid||t,t),w=i.join(e,j.appid||t),x=()=>{try{k(u),k(v)}catch(a){}};try{y=!0;const{projectpath:c,miniprogramRoot:d}=j;h.sync(u),h.sync(v),h.sync(w);const e=i.join(c,d||'');s('remotedebug','\u51C6\u5907\u6587\u4EF6');const f=await a(j,e,u,v,{onProgressUpdate:s});if(D){D=!1;throw'Aborted. Please retry'}y=new n({files:f,dir:u,tempDir:v,dataDir:w,initialRoomInfo:_extends({},l),config:_extends({},m),mode:m.remoteDebugLocal?m.remoteDebugLocal:'server',clientProxyPort:m.clientProxyPort});const g=m.onStatusUpdate||F,k=m.onEvent||F;y.onAskForRetry((a)=>{return new Promise(async(b)=>{B?b((await B(a))):b(!1)})}),y.onOpenEditorFile((...a)=>{C&&C(...a)}),y.onAskForChoosingAndroidDevice((a)=>{return new Promise(async(b)=>{console.log(a),setTimeout(()=>{b(0)},1e3)})}),y.onAskForAndroidAuthorize((a)=>{return new Promise(async(b)=>{console.log(a),setTimeout(()=>{b(!0)},1e3)})});let t;y.once('initsuccess',(a)=>{return D?(D=!1,y.destroy(),r('abort')):void(t=!0,o(_extends({},a)),'function'==typeof G&&(G(),G=null),G=q(()=>{const a=p();a&&a.window&&a.window.remoteDebugWindow&&a.window.remoteDebugWindow.show&&(console.log('subscribed remote window shown'),'function'==typeof G&&(G(),G=q(()=>{const a=p();a&&a.window&&a.window.remoteDebugWindow&&!a.window.remoteDebugWindow.show&&(console.warn('shall automatically be destroyed'),'function'==typeof G&&(G(),G=null),b())})))}))});const H=(a)=>{D=!1,z=[],A=[],B=null,C=null,x(),'function'==typeof G&&(G(),G=null),void 0===t&&(t=!1,r(a)),y&&y.destroy(),y=null};y.once('initfail',H),y.once('destroy',(a)=>{D=!1,y&&y.removeAllListeners(),y=null;for(const b of z)b(!0);z=[],A=[],B=null,C=null,x(),'function'==typeof G&&(G(),G=null),void 0===t&&(t=!1,r(a))});let I;y.on('statuschange',()=>{I||(I=setTimeout(()=>{I=void 0;for(const a of z)a();const a=y&&y.messager&&y.messager.status;g(a,4<a)},400))}),y.on('event',(a)=>{for(const b of A)b(a);a&&k(a)}),E={mode:m.remoteDebugLocal?m.remoteDebugLocal:'server'};try{s('remotedebug','\u521D\u59CB\u5316\u8C03\u8BD5\u5B9E\u4F8B'),await y.init(),s('remotedebug','\u7B49\u5F85\u8FDB\u7A0B')}catch(a){throw H(a),a}}catch(a){x(),y=null,r(f(a))}})},onUrlRequest:function(a){if(!y||!0===y)return void console.warn('no active instance');const b=a.replace(/^\/*remotedebug\/+/i,'').toLowerCase();switch(!0){case b.startsWith('registersyncpid/'):{const a=b.replace(/^\/*registersyncpid\/+/g,'');let[c,d]=a.split('/');if(c=parseInt(c,10),d=parseInt(d,10),isNaN(c)||isNaN(d))return void console.warn('invalid pid or sdkid');y.registerSyncPid(c,d);break}default:console.warn('invalid request href');}},destroy:b,model:H}}(require('lazyload'),require);