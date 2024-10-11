import{o,c as r,e as t,w as u,j as d,t as m,a as h,p as c,m as f,b as w,f as N}from"./app-d5f9c614.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";const v={data(){return{moduleName:"",baseUrl:"",tsDefinition:"",apiCode:"",isPreviewVisible:!1}},methods:{generateCode(){this.generateTsDefinition(),this.generateApiCode()},generateTsDefinition(){const e=this.capitalize(this.moduleName);this.tsDefinition=`declare global {
  namespace API {
    namespace ${e} {
      interface add_${this.moduleName} {
        params: unknown
        data: unknown
        result: unknown
      }

      interface edit_${this.moduleName} {
        params: unknown
        data: unknown
        result: unknown
      }

      interface del_${this.moduleName} {
        params: unknown
        data: unknown
        result: unknown
      }

      interface get_${this.moduleName}_list {
        params: unknown
        data: unknown
        result: unknown
      }

      interface get_${this.moduleName}_by_id {
        params: unknown
        data: unknown
        result: unknown
      }
    }
  }
}
export {}`},generateApiCode(){const e=this.capitalize(this.moduleName);this.apiCode=`import http from '@/utils/request'

const url = '${this.baseUrl}'

// 增
export function add_${this.moduleName}(data: API.${e}.add_${this.moduleName}['data']) {
  return http.request<API.${e}.add_${this.moduleName}['result']>({
    method: 'post',
    url: url,
    data,
  })
}

// 删
export function del_${this.moduleName}(id: string | number) {
  return http.request<API.${e}.del_${this.moduleName}['result']>({
    method: 'delete',
    url: url + \`/\${id}\`,
  })
}

// 改
export function edit_${this.moduleName}(data: API.${e}.edit_${this.moduleName}['data']) {
  return http.request<API.${e}.edit_${this.moduleName}['result']>({
    method: 'put',
    url: url,
    data,
  })
}

// 查
export function get_${this.moduleName}_list(params: API.${e}.get_${this.moduleName}_list['params']) {
  return http.request<API.${e}.get_${this.moduleName}_list['result']>({
    method: 'get',
    url: url + '/list',
    params,
  })
}

// 查(详情)
export function get_${this.moduleName}_by_id(id: number) {
  return http.request<API.${e}.get_${this.moduleName}_by_id['result']>({
    method: 'get',
    url: url + \`/\${id}\`,
  })
}`},showPreview(){this.isPreviewVisible=!0},closePreview(){this.isPreviewVisible=!1},capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}}},l=e=>(c("data-v-0b350505"),e=e(),f(),e),b=l(()=>t("h2",null,"API 生成器",-1)),P=l(()=>t("label",null,"模块名:",-1)),g=l(()=>t("label",null,"URL:",-1)),$={key:0,class:"modal"},k={class:"modal-content"},A=l(()=>t("h3",null,"生成的 TypeScript 定义:",-1)),I=l(()=>t("h3",null,"生成的 API 调用代码:",-1));function x(e,i,_,U,a,s){return o(),r("div",null,[b,t("div",null,[P,u(t("input",{"onUpdate:modelValue":i[0]||(i[0]=n=>a.moduleName=n),onInput:i[1]||(i[1]=(...n)=>s.generateCode&&s.generateCode(...n))},null,544),[[d,a.moduleName]])]),t("div",null,[g,u(t("input",{"onUpdate:modelValue":i[2]||(i[2]=n=>a.baseUrl=n),onInput:i[3]||(i[3]=(...n)=>s.generateCode&&s.generateCode(...n))},null,544),[[d,a.baseUrl]])]),t("button",{onClick:i[4]||(i[4]=(...n)=>s.showPreview&&s.showPreview(...n))},"预览生成的代码"),a.isPreviewVisible?(o(),r("div",$,[t("div",k,[t("span",{class:"close",onClick:i[5]||(i[5]=(...n)=>s.closePreview&&s.closePreview(...n))},"×"),A,t("pre",null,[t("code",null,m(a.tsDefinition),1)]),I,t("pre",null,[t("code",null,m(a.apiCode),1)])])])):h("v-if",!0)])}const C=p(v,[["render",x],["__scopeId","data-v-0b350505"],["__file","ApiGen.vue"]]),V=t("h1",{id:"api生成工具",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api生成工具","aria-hidden":"true"},"#"),N(" API生成工具")],-1),y={__name:"api生成工具.html",setup(e){return(i,_)=>(o(),r("div",null,[V,w(C)]))}},z=p(y,[["__file","api生成工具.html.vue"]]);export{z as default};
