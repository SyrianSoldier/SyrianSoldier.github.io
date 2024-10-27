import{o as i,c as l,e as n,w as u,j as d,t as p,a as c,p as h,m as w,b as P,f}from"./app-e2f22f85.js";import{_}from"./plugin-vue_export-helper-c27b6911.js";const v={data(){return{moduleName:"",baseUrl:"",tsDefinition:"",apiCode:"",isPreviewVisible:!1}},methods:{generateCode(){this.generateTsDefinition(),this.generateApiCode()},generateTsDefinition(){const t=this.moduleName.toLowerCase();this.tsDefinition=`type GenAPI<
  T extends {
    data: any;
    params: any;
    result: any;
  }
> = {
  [key in keyof T]: T[key];
};

declare global {
  namespace API {
    namespace ${this.capitalize(this.moduleName)} {
      export type add_${t} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type edit_${t} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type del_${t} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type get_${t}_list = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type get_${t}_by_id = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;
    }
  }
}
export {};`},generateApiCode(){const t=this.capitalize(this.moduleName),e=this.moduleName.toLowerCase();this.apiCode=`import http from '@/utils/request'

const url = '${this.baseUrl}'

// 增
export function add_${e}(data: API.${t}.add_${e}['data']) {
  return http.request<API.${t}.add_${e}['result']>({
    method: 'post',
    url: url,
    data,
  })
}

// 删
export function del_${e}(id: string | number) {
  return http.request<API.${t}.del_${e}['result']>({
    method: 'delete',
    url: url + \`/\${id}\`,
  })
}

// 改
export function edit_${e}(data: API.${t}.edit_${e}['data']) {
  return http.request<API.${t}.edit_${e}['result']>({
    method: 'put',
    url: url,
    data,
  })
}

// 查
export function get_${e}_list(params: API.${t}.get_${e}_list['params']) {
  return http.request<API.${t}.get_${e}_list['result']>({
    method: 'get',
    url: url + '/list',
    params,
  })
}

// 查(详情)
export function get_${e}_by_id(id: number) {
  return http.request<API.${t}.get_${e}_by_id['result']>({
    method: 'get',
    url: url + \`/\${id}\`,
  })
}`},showPreview(){this.isPreviewVisible=!0},closePreview(){this.isPreviewVisible=!1},capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},r=t=>(h("data-v-2c4707d0"),t=t(),w(),t),A=r(()=>n("h2",null,"API 生成器",-1)),I=r(()=>n("label",null,"模块名:",-1)),k=r(()=>n("label",null,"URL:",-1)),g={key:0,class:"modal"},$={class:"modal-content"},x=r(()=>n("h3",null,"生成的 TypeScript 定义:",-1)),y=r(()=>n("h3",null,"生成的 API 调用代码:",-1));function b(t,e,m,G,a,o){return i(),l("div",null,[A,n("div",null,[I,u(n("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.moduleName=s),onInput:e[1]||(e[1]=(...s)=>o.generateCode&&o.generateCode(...s))},null,544),[[d,a.moduleName]])]),n("div",null,[k,u(n("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>a.baseUrl=s),onInput:e[3]||(e[3]=(...s)=>o.generateCode&&o.generateCode(...s))},null,544),[[d,a.baseUrl]])]),n("button",{onClick:e[4]||(e[4]=(...s)=>o.showPreview&&o.showPreview(...s))},"预览生成的代码"),a.isPreviewVisible?(i(),l("div",g,[n("div",$,[n("span",{class:"close",onClick:e[5]||(e[5]=(...s)=>o.closePreview&&o.closePreview(...s))},"×"),x,n("pre",null,[n("code",null,p(a.tsDefinition),1)]),y,n("pre",null,[n("code",null,p(a.apiCode),1)])])])):c("v-if",!0)])}const C=_(v,[["render",b],["__scopeId","data-v-2c4707d0"],["__file","ApiGen.vue"]]),N=n("h1",{id:"api生成工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api生成工具","aria-hidden":"true"},"#"),f(" API生成工具")],-1),V={__name:"api生成工具.html",setup(t){return(e,m)=>(i(),l("div",null,[N,P(C)]))}},D=_(V,[["__file","api生成工具.html.vue"]]);export{D as default};
