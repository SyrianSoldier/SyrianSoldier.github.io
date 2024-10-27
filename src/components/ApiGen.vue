<template>
  <div>
    <h2>API 生成器</h2>

    <div>
      <label>模块名:</label>
      <input v-model="moduleName" @input="generateCode" />
    </div>

    <div>
      <label>URL:</label>
      <input v-model="baseUrl" @input="generateCode" />
    </div>

    <button @click="showPreview">预览生成的代码</button>

    <div v-if="isPreviewVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="closePreview">&times;</span>
        <h3>生成的 TypeScript 定义:</h3>
        <pre><code>{{ tsDefinition }}</code></pre>
        <h3>生成的 API 调用代码:</h3>
        <pre><code>{{ apiCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moduleName: "",
      baseUrl: "",
      tsDefinition: "",
      apiCode: "",
      isPreviewVisible: false,
    };
  },
  methods: {
    generateCode() {
      this.generateTsDefinition();
      this.generateApiCode();
    },
    generateTsDefinition() {
      const lowerCaseModuleName = this.moduleName.toLowerCase();
      this.tsDefinition = `type GenAPI<
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
      export type add_${lowerCaseModuleName} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type edit_${lowerCaseModuleName} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type del_${lowerCaseModuleName} = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type get_${lowerCaseModuleName}_list = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;

      export type get_${lowerCaseModuleName}_by_id = GenAPI<{
        params: unknown;
        data: unknown;
        result: unknown;
      }>;
    }
  }
}
export {};`;
    },
    generateApiCode() {
      const capitalizedModuleName = this.capitalize(this.moduleName);
      const lowerCaseModuleName = this.moduleName.toLowerCase();
      this.apiCode = `import http from '@/utils/request'

const url = '${this.baseUrl}'

// 增
export function add_${lowerCaseModuleName}(data: API.${capitalizedModuleName}.add_${lowerCaseModuleName}['data']) {
  return http.request<API.${capitalizedModuleName}.add_${lowerCaseModuleName}['result']>({
    method: 'post',
    url: url,
    data,
  })
}

// 删
export function del_${lowerCaseModuleName}(id: string | number) {
  return http.request<API.${capitalizedModuleName}.del_${lowerCaseModuleName}['result']>({
    method: 'delete',
    url: url + \`/\${id}\`,
  })
}

// 改
export function edit_${lowerCaseModuleName}(data: API.${capitalizedModuleName}.edit_${lowerCaseModuleName}['data']) {
  return http.request<API.${capitalizedModuleName}.edit_${lowerCaseModuleName}['result']>({
    method: 'put',
    url: url,
    data,
  })
}

// 查
export function get_${lowerCaseModuleName}_list(params: API.${capitalizedModuleName}.get_${lowerCaseModuleName}_list['params']) {
  return http.request<API.${capitalizedModuleName}.get_${lowerCaseModuleName}_list['result']>({
    method: 'get',
    url: url + '/list',
    params,
  })
}

// 查(详情)
export function get_${lowerCaseModuleName}_by_id(id: number) {
  return http.request<API.${capitalizedModuleName}.get_${lowerCaseModuleName}_by_id['result']>({
    method: 'get',
    url: url + \`/\${id}\`,
  })
}`;
    },
    showPreview() {
      this.isPreviewVisible = true;
    },
    closePreview() {
      this.isPreviewVisible = false;
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style scoped>
/* 模态框样式 */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-height: 70vh;
  overflow-y: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* 其他样式 */
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

button {
  margin: 10px 0;
  padding: 5px 10px;
}

input,
select,
textarea {
  margin: 5px 0;
  width: 100%;
}
</style>
