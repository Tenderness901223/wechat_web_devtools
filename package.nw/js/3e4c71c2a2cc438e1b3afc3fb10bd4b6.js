'use strict';!function(require,directRequire){async function a(a,b={}){const{appConfig:c,config:d,type:e}=b;let{wxmlFiles:j,wxsFiles:l}=q(c,d);return new Promise(async(b,n)=>{let o=m.srcPath,p=j.concat(l),q=!1;l&&0<l.length&&(q=!0,i('wxs_compile',a.appid)),p=p.map((a)=>{return`./${a}`});let r=d?`$${new Buffer(d.root).toString('hex')}`:'$gwx',s=await k.getCompileConfig(a,c,d),t=['-d',e,s.join(' ')].concat(p).concat(['-gn',r]);const u=f.getWXMLParsePath();let v=g(u,t,{cwd:o}),w=[],x=[];v.on('close',(c)=>{if(0===c){let a=Buffer.concat(w).toString();return b({code:a,name:r})}q&&i('wxs_compile_fail',a.appid);let d=Buffer.concat(x).toString(),e=new Error(`编译 .wxml 文件错误，错误信息如上，可在控制台查看更详细信息`);return e.code=h,e.msgForConsole=d,n(e)}),v.stdout.on('data',(a)=>{w.push(a)}),v.stderr.on('data',(a)=>{x.push(a)})})}function b(a,b){let c=d.extname(b);'.wxml'===c||'.wxs'===c?p():'.json'==c&&p()}async function c(a){if(n){let b=n.setting&&n.setting.newFeature,c=a.setting&&a.setting.newFeature;b!=c&&p()}n=a;let c=await j(a);m&&m.srcPath==c.srcPath||(p(),m&&m.unWatch(b),m=c,m.watch(b))}const d=require('path'),e=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),f=require('./d28a711224425b00101635efe1034c99.js'),{spawn:g}=require('child_process'),{TRANS_WXML_JS_ERR:h}=require('./949d8235c744ced2a80121e4dba34c28.js'),i=require('./da7c31daaf542cf1796023d8e344b98a.js'),j=require('./162bf2ee28b76d3b3d95b685cede4146.js'),k=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),l=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');var m,n,o={main:{}};const p=()=>{o={main:{}}},q=(a,b)=>{let c=m.getAllWXMLFiles(),d=m.getAllWXSFiles();if(a.subPackages){let e=c.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c}),f=d.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c});b?(c=e.concat(c.filter((a)=>{return 0==a.indexOf(b.root)})),d=f.concat(d.filter((a)=>{return 0==a.indexOf(b.root)}))):(c=e,d=f)}return{wxmlFiles:c,wxsFiles:d}};module.exports=async function(b,d={}){await c(b);let f=await e(b);const{app:g,page:h,cut:i}=d;let j,k=i?'-xc':'-cc',m='main';if(!g){if(j=l.checkIsInSubPackage(f,h)||'',!j)return{code:'',name:'$gwx'};m=`sub_${j.root}`}return o[m]||(o[m]={}),o[m][k]||(o[m][k]=await a(b,{appConfig:f,config:j,type:k})),o[m][k]}}(require('lazyload'),require);