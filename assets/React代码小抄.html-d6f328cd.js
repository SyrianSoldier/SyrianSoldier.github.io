import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-8ad3651e.js";const t={},p=e(`<h1 id="react代码小抄" tabindex="-1"><a class="header-anchor" href="#react代码小抄" aria-hidden="true">#</a> React代码小抄</h1><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>TS定义</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> <span class="token constant">API</span> <span class="token punctuation">{</span>
    <span class="token keyword">namespace</span> 模块名称 <span class="token punctuation">{</span>
      <span class="token comment">// 增</span>
      <span class="token keyword">interface</span> <span class="token class-name">add</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span>  <span class="token builtin">never</span>
        params<span class="token operator">:</span> <span class="token builtin">never</span>
        result<span class="token operator">:</span> <span class="token builtin">never</span>  
      <span class="token punctuation">}</span>

       <span class="token comment">// 删</span>
      <span class="token keyword">interface</span> <span class="token class-name">del</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span>  <span class="token builtin">never</span>
        params<span class="token operator">:</span> <span class="token builtin">never</span>
        result<span class="token operator">:</span> <span class="token builtin">never</span>  
      <span class="token punctuation">}</span>
      
      <span class="token comment">// 改</span>
      <span class="token keyword">interface</span> <span class="token class-name">edit</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span>  <span class="token builtin">never</span>
        params<span class="token operator">:</span> <span class="token builtin">never</span>
        result<span class="token operator">:</span> <span class="token builtin">never</span>  
      <span class="token punctuation">}</span>

      <span class="token comment">// 查</span>
      <span class="token keyword">interface</span> <span class="token class-name">get_list</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span>  <span class="token builtin">never</span>
        params<span class="token operator">:</span> <span class="token builtin">never</span>
        result<span class="token operator">:</span> <span class="token builtin">never</span>  
      <span class="token punctuation">}</span>

      <span class="token comment">// 查(详情)</span>
      <span class="token keyword">interface</span> <span class="token class-name">get_by_id</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span>  <span class="token builtin">never</span>
        params<span class="token operator">:</span> <span class="token builtin">never</span>
        result<span class="token operator">:</span> <span class="token builtin">never</span>
      <span class="token punctuation">}</span>
          
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API定义</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>
<span class="token comment">// 增</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>add<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>add<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 删</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">del</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>del<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 改</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">edit_user</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>edit<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>edit_user<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>



<span class="token comment">// 查</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get_list</span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_list<span class="token punctuation">[</span><span class="token string">&#39;params&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_list<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查(详情)</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get_by_id</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">axios</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_by_id<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标准业务页面-搜索-表格-分页-弹框" tabindex="-1"><a class="header-anchor" href="#标准业务页面-搜索-表格-分页-弹框" aria-hidden="true">#</a> 标准业务页面(搜索 + 表格 + 分页 + 弹框)</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token comment">//@ts-nocheck</span>
<span class="token comment">/* eslint-disable */</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> AdminButton <span class="token keyword">from</span> <span class="token string">&#39;@/components/Button/AdminButton&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Form<span class="token punctuation">,</span>
  Modal<span class="token punctuation">,</span>
  SelectProps<span class="token punctuation">,</span>
  Space<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  message<span class="token punctuation">,</span>
  TableColumnsType<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd&#39;</span>
<span class="token keyword">import</span> ModalForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> ModalFormColumns <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ModalForm&#39;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>
<span class="token keyword">import</span> SearchForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> SearchFormColumnsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/SearchForm&#39;</span>
<span class="token keyword">import</span> ButtonList<span class="token punctuation">,</span> <span class="token punctuation">{</span> ButtonColumnsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ButtonList&#39;</span>
<span class="token keyword">import</span> useInitialStateLoader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  InitializersType<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useInitialStateLoader&#39;</span>
<span class="token keyword">import</span> NiceModal <span class="token keyword">from</span> <span class="token string">&#39;@ebay/nice-modal-react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUpdateEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ahooks&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ExclamationCircleOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@ant-design/icons&#39;</span>

<span class="token comment">// 表格字段</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">TableFields</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_list<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 搜索表单字段</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SearchFields</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 列表查询参数(可能需要对搜索表单的字段进行额外的转换和处理)</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SearchParams</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 新增和编辑弹窗表单字段</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ModalFormFields</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 弹窗表单的查询参数(可能需要对搜索表单的字段进行额外的转换和处理)</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AddModalFormQueryParams</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>add<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">EditModalFormQueryParams</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>edit<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 初始化页面时, 需要从后端拉取的数据</span>
<span class="token keyword">type</span> <span class="token class-name">InitialState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 示例</span>
  <span class="token comment">// userStatusOptions: SelectProps[&#39;options&#39;]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useUserInitialStateLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initialState<span class="token operator">:</span> InitialState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 示例</span>
    <span class="token comment">// userStatusOptions: [],</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> initializers<span class="token operator">:</span> InitializersType<span class="token operator">&lt;</span>InitialState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 示例</span>
    <span class="token comment">// userStatusOptions: async () =&gt; {</span>
    <span class="token comment">//   const { data } = await get_user_status_dict()</span>
    <span class="token comment">//   return data.map((item: any) =&gt; ({</span>
    <span class="token comment">//     label: item.dictLabel,</span>
    <span class="token comment">//     value: item.dictValue,</span>
    <span class="token comment">//   }))</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">useInitialStateLoader</span><span class="token generic class-name"><span class="token operator">&lt;</span>InitialState<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>initialState<span class="token punctuation">,</span> initializers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">模块</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化页面需要从后端拉取的状态</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loaderData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useUserInitialStateLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 搜索表单相关状态</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchForm<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 新增/编辑弹框表单相关状态</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isEdit<span class="token punctuation">,</span> setIsEdit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>addModalFormInitialValues<span class="token punctuation">,</span> setAddModalFormInitialValues<span class="token punctuation">]</span> <span class="token operator">=</span>
    <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>AddModalFormQueryParams<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* 新增表单默认值 */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">[</span>editModalFormInitialValues<span class="token punctuation">,</span> setEditModalFormInitialValues<span class="token punctuation">]</span> <span class="token operator">=</span>
    <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>EditModalFormQueryParams<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">/* 编辑表单默认值 */</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 表格相关状态</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>listLoading<span class="token punctuation">,</span> setListLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_list<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedRowKeys<span class="token punctuation">,</span> setSelectedRowKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 表格选中行的id数组</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>total<span class="token punctuation">,</span> setTotal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">,</span> setPagination<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>PaginationObj<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    pageNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    pageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Effects</span>
  <span class="token comment">// 监听分页变化, 重新获取表格数据</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useUpdateEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isEdit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      NiceModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;模块-edit-modal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      NiceModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;模块-add-modal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isEdit<span class="token punctuation">,</span> addModalFormInitialValues<span class="token punctuation">,</span> editModalFormInitialValues<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// 表格配置字段</span>
  <span class="token keyword">const</span> tableColumns<span class="token operator">:</span> TableColumnsType<span class="token operator">&lt;</span>TableFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 正常字段</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   title: &#39;用户昵称&#39;,</span>
    <span class="token comment">//   dataIndex: &#39;nickName&#39;,</span>
    <span class="token comment">//   key: &#39;nickName&#39;,</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 自定义render</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   title: &#39;部门&#39;,</span>
    <span class="token comment">//   dataIndex: &#39;deptName&#39;,</span>
    <span class="token comment">//   key: &#39;deptName&#39;,</span>
    <span class="token comment">//   render: (_, record) =&gt; record?.dept?.deptName,</span>
    <span class="token comment">// },</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   title: &#39;操作&#39;,</span>
    <span class="token comment">//   dataIndex: &#39;action&#39;,</span>
    <span class="token comment">//   key: &#39;action&#39;,</span>
    <span class="token comment">//   render: (_, record) =&gt; {</span>
    <span class="token comment">//     if (record.userId !== 1) {</span>
    <span class="token comment">//       return (</span>
    <span class="token comment">//         &lt;Space size={2}&gt;</span>
    <span class="token comment">//           &lt;AdminButton</span>
    <span class="token comment">//             name={&#39;edit&#39;}</span>
    <span class="token comment">//             type={&#39;link&#39;}</span>
    <span class="token comment">//             onClick={() =&gt; {</span>
    <span class="token comment">//               // 1. 根据编辑的id, 查询详情接口, 并设置到编辑表单中</span>
    <span class="token comment">//               // TODO...</span>
    <span class="token comment">//               // 2. 设置edit状态</span>
    <span class="token comment">//               setIsEdit(true)</span>
    <span class="token comment">//               // 3. 设置编辑默认值</span>
    <span class="token comment">//               setEditModalFormInitialValues({})</span>
    <span class="token comment">//             }}</span>
    <span class="token comment">//           /&gt;</span>
    <span class="token comment">//           &lt;AdminButton</span>
    <span class="token comment">//             name={&#39;delete&#39;}</span>
    <span class="token comment">//             type={&#39;link&#39;}</span>
    <span class="token comment">//             onClick={() =&gt; {</span>
    <span class="token comment">//               Modal.confirm({</span>
    <span class="token comment">//                 title: &#39;系统确认&#39;,</span>
    <span class="token comment">//                 icon: &lt;ExclamationCircleOutlined /&gt;,</span>
    <span class="token comment">//                 content: \`是否删除数据编号为\${{/* TODO: id */}}的数据项\`,</span>
    <span class="token comment">//                 okText: &#39;确认&#39;,</span>
    <span class="token comment">//                 cancelText: &#39;取消&#39;,</span>
    <span class="token comment">//                 onOk: () =&gt; onDelete({/* TODO: 传入id */}),</span>
    <span class="token comment">//               })</span>
    <span class="token comment">//             }}</span>
    <span class="token comment">//           /&gt;</span>
    <span class="token comment">//           &lt;AdminButton name={&#39;more&#39;} type={&#39;link&#39;} /&gt;</span>
    <span class="token comment">//         &lt;/Space&gt;</span>
    <span class="token comment">//       )</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">]</span>

  <span class="token comment">// 搜索表单配置字段</span>
  <span class="token keyword">const</span> searchColumns<span class="token operator">:</span> SearchFormColumnsType<span class="token operator">&lt;</span>SearchFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 文本框 + placeholder</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;text&#39;,</span>
    <span class="token comment">//   name: &#39;userName&#39;,</span>
    <span class="token comment">//   label: &#39;用户名称&#39;,</span>
    <span class="token comment">//   inputProps: {</span>
    <span class="token comment">//     placeholder: &#39;请输入用户名称&#39;,</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 下拉框</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;select&#39;,</span>
    <span class="token comment">//   name: &#39;status&#39;,</span>
    <span class="token comment">//   label: &#39;状态&#39;,</span>
    <span class="token comment">//   inputProps: {</span>
    <span class="token comment">//     options: loaderData.userStatusOptions,</span>
    <span class="token comment">//     placeholder: &#39;请选择用户状态&#39;,</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 日期范围选择器</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;dateRange&#39;,</span>
    <span class="token comment">//   name: &#39;createTime&#39;,</span>
    <span class="token comment">//   label: &#39;创建时间&#39;,</span>
    <span class="token comment">//   inputProps: {</span>
    <span class="token comment">//     format: &#39;YYYY-MM-DD&#39;,</span>
    <span class="token comment">//     placeholder: [&#39;开始日期&#39;, &#39;结束日期&#39;],</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">]</span>

  <span class="token comment">// 搜索按钮栏配置字段</span>
  <span class="token keyword">const</span> buttonColumns<span class="token operator">:</span> ButtonColumnsType <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   name: &#39;add&#39;,</span>
    <span class="token comment">//   onClick: () =&gt; {</span>
    <span class="token comment">//     setIsEdit(false)</span>
    <span class="token comment">//     setAddModalFormInitialValues(prevState =&gt; ({...prevState}))</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   name: &#39;delete&#39;,</span>
    <span class="token comment">//   disabled: selectedRowKeys.length === 0,</span>
    <span class="token comment">//   onClick: () =&gt; {</span>
    <span class="token comment">//     Modal.confirm({</span>
    <span class="token comment">//       title: &#39;系统确认&#39;,</span>
    <span class="token comment">//       icon: &lt;ExclamationCircleOutlined /&gt;,</span>
    <span class="token comment">//       content: \`是否删除数据编号为\${/* TODO: id */}的数据项\`,</span>
    <span class="token comment">//       okText: &#39;确认&#39;,</span>
    <span class="token comment">//       cancelText: &#39;取消&#39;,</span>
    <span class="token comment">//       onOk: async () =&gt; {</span>
    <span class="token comment">//         onDelete(/* TODO: id */).then(() =&gt;</span>
    <span class="token comment">//           setSelectedRowKeys([]) // 重置选择的行</span>
    <span class="token comment">//         )</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//     })</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   name: &#39;import&#39;,</span>
    <span class="token comment">//   onClick: () =&gt; {},</span>
    <span class="token comment">// },</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   name: &#39;export&#39;,</span>
    <span class="token comment">//   onClick: () =&gt; {},</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">]</span>

  <span class="token comment">// 弹框表单配置字段</span>
  <span class="token keyword">const</span> modalFormColumns<span class="token operator">:</span> ModalFormColumns<span class="token operator">&lt;</span>ModalFormFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 文本框 + rules + placeholder + style</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;text&#39;,</span>
    <span class="token comment">//   name: &#39;nickName&#39;,</span>
    <span class="token comment">//   label: &#39;用户昵称&#39;,</span>
    <span class="token comment">//   style: { width: &#39;45%&#39;, marginRight: &#39;5%&#39;, display: &#39;inline-block&#39; },</span>
    <span class="token comment">//   rules: [{ required: true, message: &#39;请输入用户昵称&#39; }],</span>
    <span class="token comment">//   inputProps: {</span>
    <span class="token comment">//     placeholder: &#39;请输入用户昵称&#39;,</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 树选择器 + placeholder + style + treeData + fieldNames</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;treeSelect&#39;,</span>
    <span class="token comment">//   name: &#39;deptId&#39;,</span>
    <span class="token comment">//   label: &#39;归属部门&#39;,</span>
    <span class="token comment">//   style: { width: &#39;45%&#39;, display: &#39;inline-block&#39; },</span>
    <span class="token comment">//   inputProps: {</span>
    <span class="token comment">//     placeholder: &#39;请输入归属部门&#39;,</span>
    <span class="token comment">//     treeData: loaderData.deptTree,</span>
    <span class="token comment">//     fieldNames: { label: &#39;label&#39;, value: &#39;id&#39; },</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
    <span class="token comment">// visible + 多个rules</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &#39;text&#39;,</span>
    <span class="token comment">//   name: &#39;userName&#39;,</span>
    <span class="token comment">//   label: &#39;用户名称&#39;,</span>
    <span class="token comment">//   visible: !isEdit,</span>
    <span class="token comment">//   rules: [</span>
    <span class="token comment">//     { required: true, message: &#39;请输入用户名称&#39; },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       min: 3,</span>
    <span class="token comment">//       max: 20,</span>
    <span class="token comment">//       message: &#39;用户名长度应在 3 到 20 个字符之间&#39;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       pattern: /^[a-zA-Z0-9_]+$/,</span>
    <span class="token comment">//       message: &#39;用户名只能包含字母、数字和下划线&#39;,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 当前表单项的rules依赖另一个字段rules生成</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   type: &quot;text&quot;,</span>
    <span class="token comment">//   name: &quot;password2&quot;,</span>
    <span class="token comment">//   label: &quot;确认密码&quot;,</span>
    <span class="token comment">//   dependencies: [&quot;password1&quot;],</span>
    <span class="token comment">//   rules: [</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       required: true,</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//     {</span>
    <span class="token comment">//       validator(_, value) {</span>
    <span class="token comment">//         if (form.getFieldValue(&quot;password1&quot;) === value) {</span>
    <span class="token comment">//           return Promise.resolve();</span>
    <span class="token comment">//         }</span>
    <span class="token comment">//         return Promise.reject(new Error(&quot;密码不匹配&quot;));</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//     },</span>
    <span class="token comment">//   ],</span>
    <span class="token comment">// },</span>
    <span class="token comment">// 表单联动: 当前表单项依赖另一个表单项的值动态生成</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   noStyle: true,</span>
    <span class="token comment">//   dependencies: [&quot;password1&quot;, &quot;password2&quot;],</span>
    <span class="token comment">//   render: () =&gt; {</span>
    <span class="token comment">//     if (</span>
    <span class="token comment">//       form.getFieldValue(&quot;password1&quot;) === form.getFieldValue(&quot;password2&quot;)</span>
    <span class="token comment">//     ) {</span>
    <span class="token comment">//       return (</span>
    <span class="token comment">//         &lt;Form.Item label=&quot;用户信息&quot;&gt;</span>
    <span class="token comment">//           &lt;Input /&gt;</span>
    <span class="token comment">//         &lt;/Form.Item&gt;</span>
    <span class="token comment">//       );</span>
    <span class="token comment">//     }</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// },</span>
  <span class="token punctuation">]</span>

  <span class="token comment">// 获取列表数据</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// try {</span>
    <span class="token comment">//   setListLoading(true)</span>
    <span class="token comment">//   const searchParams = transformSearchParams(searchForm.getFieldsValue())</span>
    <span class="token comment">//   const { rows, total } = await get_list({</span>
    <span class="token comment">//     ...searchParams,</span>
    <span class="token comment">//     ...pagination,</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   setList(</span>
    <span class="token comment">//     rows.map(item =&gt; ({</span>
    <span class="token comment">//       ...item,</span>
    <span class="token comment">//       key: user.userId,</span>
    <span class="token comment">//     }))</span>
    <span class="token comment">//   )</span>
    <span class="token comment">//   setTotal(total)</span>
    <span class="token comment">// } catch (e) {</span>
    <span class="token comment">//   console.log(e)</span>
    <span class="token comment">// } finally {</span>
    <span class="token comment">//   setListLoading(false)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将搜索表单数据转换为列表查询接口的数据(如果搜索表单需要数据转换, 在这里转换)</span>
  <span class="token comment">// const transformSearchParams = (values: SearchFields): SearchParams =&gt; {</span>
  <span class="token comment">//   const queryParams = {} as SearchParams</span>

  <span class="token comment">// Object.entries(values).forEach(([key, value]) =&gt; {</span>
  <span class="token comment">//   if (typeof value === &#39;string&#39;) {</span>
  <span class="token comment">//     value = value.trim()</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//</span>
  <span class="token comment">//   if (false /* TODO: 判断条件 */) {</span>
  <span class="token comment">//     // .. TODO</span>
  <span class="token comment">//   } else {</span>
  <span class="token comment">//     queryParams[key as keyof SearchParams] = value as any</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// })</span>
  <span class="token comment">//</span>
  <span class="token comment">//   return queryParams</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 搜索</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setPagination</span><span class="token punctuation">(</span>prevState <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevState<span class="token punctuation">,</span> pageNum<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重置</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    searchForm<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 删除</span>
  <span class="token comment">// const onDelete = async (id: string | number) =&gt; {</span>
  <span class="token comment">// try {</span>
  <span class="token comment">//   await del(id)</span>
  <span class="token comment">//   await getList()</span>
  <span class="token comment">//   message.success(&#39;删除成功&#39;)</span>
  <span class="token comment">// } catch (e) {</span>
  <span class="token comment">//   console.log(e)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 新增表单保存</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onEditModalFormSave</span><span class="token punctuation">(</span>values<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// try {</span>
    <span class="token comment">//   await add({ ...values })</span>
    <span class="token comment">//   await getUserList()</span>
    <span class="token comment">// } catch (e) {</span>
    <span class="token comment">//   console.log(e)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onAddModalFormSave</span><span class="token punctuation">(</span>values<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// try {</span>
    <span class="token comment">//   await edit({</span>
    <span class="token comment">//     ...values,</span>
    <span class="token comment">//   })</span>
    <span class="token comment">//   await getList()</span>
    <span class="token comment">// } catch (e) {</span>
    <span class="token comment">//   console.log(e)</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 编辑表单保存</span>
  <span class="token comment">// 其他函数</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Styled</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token comment">/* 搜索表单 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchForm</span></span>
        <span class="token attr-name">layout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;inline&#39;</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>searchForm<span class="token punctuation">}</span></span>
        <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
        <span class="token attr-name">onResetSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onReset<span class="token punctuation">}</span></span>
        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>searchColumns<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">

      </span><span class="token punctuation">{</span><span class="token comment">/* 按钮栏 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ButtonList</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>buttonColumns<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">

      </span><span class="token punctuation">{</span><span class="token comment">/* 表格 */</span><span class="token punctuation">}</span><span class="token plain-text">
      &lt;Table
        size=</span><span class="token punctuation">{</span><span class="token string">&#39;small&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
        columns=</span><span class="token punctuation">{</span>tableColumns<span class="token punctuation">}</span><span class="token plain-text">
        dataSource=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span><span class="token plain-text">
        loading=</span><span class="token punctuation">{</span>listLoading<span class="token punctuation">}</span><span class="token plain-text">
        pagination=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          total<span class="token punctuation">,</span>
          current<span class="token operator">:</span> pagination<span class="token punctuation">.</span>pageNum<span class="token punctuation">,</span>
          pageSize<span class="token operator">:</span> pagination<span class="token punctuation">.</span>pageSize<span class="token punctuation">,</span>
          <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setPagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pageNum<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
        rowSelection=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          selectedRowKeys<span class="token punctuation">,</span>
          <span class="token function-variable function">onChange</span><span class="token operator">:</span> newSelectedRowKeys <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setSelectedRowKeys</span><span class="token punctuation">(</span>newSelectedRowKeys<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
      /&gt;

      </span><span class="token punctuation">{</span><span class="token comment">/* 弹窗表单 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ModalForm</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-modal<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>新增用户<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>modalFormColumns<span class="token punctuation">}</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addModalFormInitialValues<span class="token punctuation">}</span></span>
        <span class="token attr-name">onSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onAddModalFormSave<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ModalForm</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edit-modal<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>编辑用户<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>modalFormColumns<span class="token punctuation">}</span></span>
        <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>editModalFormInitialValues<span class="token punctuation">}</span></span>
        <span class="token attr-name">onSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onEditModalFormSave<span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Styled</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Styled <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> 模块



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[p];function l(o,i){return s(),a("div",null,c)}const m=n(t,[["render",l],["__file","React代码小抄.html.vue"]]);export{m as default};
