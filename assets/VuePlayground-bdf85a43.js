import{i as _,j as m,k as f,s,l as g,v as y,m as R,n as a,C as w,_ as r}from"./app-dff598be.js";const S=e=>JSON.parse(decodeURIComponent(e));var h=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const u=m(),n=f(!0),t=s(),l=s(),i=s(),o=g(()=>y({},u,S(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([r(()=>import("./vue-repl-355392bd.js"),["assets/vue-repl-355392bd.js","assets/app-dff598be.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-de833af9.js","assets/utils-a5e1dbae-143be013.js"]),r(()=>import("./codemirror-editor-987778c5.js"),["assets/codemirror-editor-987778c5.js","assets/utils-a5e1dbae-143be013.js","assets/app-dff598be.js"])]);t.value=p,i.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),n.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[n.value?a(w,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:i.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{h as default};