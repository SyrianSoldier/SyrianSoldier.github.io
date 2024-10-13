import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-aca4be3a.js";const p={},e=t(`<h1 id="react代码小抄" tabindex="-1"><a class="header-anchor" href="#react代码小抄" aria-hidden="true">#</a> React代码小抄</h1><h2 id="初始化数据" tabindex="-1"><a class="header-anchor" href="#初始化数据" aria-hidden="true">#</a> 初始化数据</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> useInitialStateLoader<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  InitializersType<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useInitialStateLoader&#39;</span>

<span class="token comment">// 初始化页面时, 需要从后端拉取的数据</span>
<span class="token keyword">type</span> <span class="token class-name">InitialState</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  userStatusOptions<span class="token operator">:</span> SelectProps<span class="token punctuation">[</span><span class="token string">&#39;options&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">useUserInitialStateLoader</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initialState<span class="token operator">:</span> InitialState <span class="token operator">=</span> <span class="token punctuation">{</span>
    userStatusOptions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> initializers<span class="token operator">:</span> InitializersType<span class="token operator">&lt;</span>InitialState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">userStatusOptions</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">get_user_status_dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        label<span class="token operator">:</span> item<span class="token punctuation">.</span>dictLabel<span class="token punctuation">,</span>
        value<span class="token operator">:</span> item<span class="token punctuation">.</span>dictValue<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token generic-function"><span class="token function">useInitialStateLoader</span><span class="token generic class-name"><span class="token operator">&lt;</span>InitialState<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>initialState<span class="token punctuation">,</span> initializers<span class="token punctuation">)</span>


  <span class="token comment">// state</span>
  <span class="token comment">// 初始化页面需要从后端拉取的状态</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loaderData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useUserInitialStateLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索表单" tabindex="-1"><a class="header-anchor" href="#搜索表单" aria-hidden="true">#</a> 搜索表单</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> SearchForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> SearchFormColumnsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/SearchForm&#39;</span>

<span class="token comment">// 搜索表单字段</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">SearchFields</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 搜索表单相关状态</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>searchForm<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>total<span class="token punctuation">,</span> setTotal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">,</span> setPagination<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>PaginationObj<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    pageNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    pageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token comment">// 搜索表单配置字段</span>
<span class="token keyword">const</span> searchColumns<span class="token operator">:</span> SearchFormColumnsType<span class="token operator">&lt;</span>SearchFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 文本框 + placeholder</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&#39;用户名称&#39;</span><span class="token punctuation">,</span>
    inputProps<span class="token operator">:</span> <span class="token punctuation">{</span>
      placeholder<span class="token operator">:</span> <span class="token string">&#39;请输入用户名称&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 下拉框</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&#39;状态&#39;</span><span class="token punctuation">,</span>
    inputProps<span class="token operator">:</span> <span class="token punctuation">{</span>
      options<span class="token operator">:</span> loaderData<span class="token punctuation">.</span>userStatusOptions<span class="token punctuation">,</span>
      placeholder<span class="token operator">:</span> <span class="token string">&#39;请选择用户状态&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 日期范围选择器</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;dateRange&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;createTime&#39;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
    inputProps<span class="token operator">:</span> <span class="token punctuation">{</span>
      format<span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">,</span>
      placeholder<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;开始日期&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;结束日期&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
  <span class="token comment">// 搜索</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setPagination</span><span class="token punctuation">(</span>prevState <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevState<span class="token punctuation">,</span> pageNum<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重置</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    searchForm<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">onSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">{</span><span class="token comment">/* 搜索表单 */</span><span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchForm</span></span>
    <span class="token attr-name">layout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;inline&#39;</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>searchForm<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSearch<span class="token punctuation">}</span></span>
    <span class="token attr-name">onResetSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onReset<span class="token punctuation">}</span></span>
    <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>searchColumns<span class="token punctuation">}</span></span>
  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 表格字段</span>
<span class="token keyword">type</span> <span class="token class-name">TableFields</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>get_list<span class="token punctuation">[</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">]</span>

<span class="token comment">// 表格相关状态</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>listLoading<span class="token punctuation">,</span> setListLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>TableFields<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>selectedRowKeys<span class="token punctuation">,</span> setSelectedRowKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 表格选中行的id数组</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">,</span> setPagination<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>PaginationObj<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    pageNum<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    pageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>total<span class="token punctuation">,</span> setTotal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// Effects</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pagination<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 表格配置字段</span>
<span class="token keyword">const</span> tableColumns<span class="token operator">:</span> TableColumnsType<span class="token operator">&lt;</span>TableFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 正常字段</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;用户昵称&#39;</span><span class="token punctuation">,</span>
    dataIndex<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义render</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;部门&#39;</span><span class="token punctuation">,</span>
    dataIndex<span class="token operator">:</span> <span class="token string">&#39;deptName&#39;</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">&#39;deptName&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> record<span class="token operator">?.</span>dept<span class="token operator">?.</span>deptName<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>
    dataIndex<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">.</span>userId <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AdminButton</span></span>
              <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;edit&#39;</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 1. 根据编辑的id, 查询详情接口, 并设置到编辑表单中</span>
                <span class="token comment">// TODO...</span>
                <span class="token comment">// 2. 设置edit状态</span>
                <span class="token function">setIsEdit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token comment">// 3. 设置编辑默认值</span>
                <span class="token function">setEditModalFormInitialValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            &lt;AdminButton
              name=</span><span class="token punctuation">{</span><span class="token string">&#39;delete&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
              type=</span><span class="token punctuation">{</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">}</span><span class="token plain-text">
              onClick=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  title<span class="token operator">:</span> <span class="token string">&#39;系统确认&#39;</span><span class="token punctuation">,</span>
                  icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExclamationCircleOutlined</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
                  content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">是否删除数据编号为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">{</span><span class="token comment">/* TODO: id */</span><span class="token punctuation">}</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的数据项</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                  okText<span class="token operator">:</span> <span class="token string">&#39;确认&#39;</span><span class="token punctuation">,</span>
                  cancelText<span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
                  <span class="token function-variable function">onOk</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token comment">/* TODO: 传入id */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
            /&gt;
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AdminButton</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;more&#39;</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 获取列表数据</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token function">setListLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">transformSearchParams</span><span class="token punctuation">(</span>searchForm<span class="token punctuation">.</span><span class="token function">getFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> rows<span class="token punctuation">,</span> total <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">get_list</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token operator">...</span>searchParams<span class="token punctuation">,</span>
        <span class="token operator">...</span>pagination<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setList</span><span class="token punctuation">(</span>
        rows<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token operator">...</span>item<span class="token punctuation">,</span>
          key<span class="token operator">:</span> user<span class="token punctuation">.</span>userId<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      <span class="token function">setTotal</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setListLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 将搜索表单数据转换为列表查询接口的数据(如果搜索表单需要数据转换, 在这里转换)</span>
  <span class="token keyword">const</span> transformSearchParams <span class="token operator">=</span> <span class="token punctuation">(</span>values<span class="token operator">:</span> SearchFields<span class="token punctuation">)</span><span class="token operator">:</span> SearchParams <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> queryParams <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> SearchParams

    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  
    queryParams<span class="token punctuation">[</span>key <span class="token keyword">as</span> <span class="token keyword">keyof</span> SearchParams<span class="token punctuation">]</span> <span class="token operator">=</span> value <span class="token keyword">as</span> <span class="token builtin">any</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
    <span class="token keyword">return</span> queryParams
  <span class="token punctuation">}</span>



  <span class="token comment">// 删除</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onDelete</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">del</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;删除成功&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">{</span><span class="token comment">/* 表格 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>Table
    size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;small&#39;</span><span class="token punctuation">}</span>
    columns<span class="token operator">=</span><span class="token punctuation">{</span>tableColumns<span class="token punctuation">}</span>
    dataSource<span class="token operator">=</span><span class="token punctuation">{</span>list<span class="token punctuation">}</span>
    loading<span class="token operator">=</span><span class="token punctuation">{</span>listLoading<span class="token punctuation">}</span>
    pagination<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      total<span class="token punctuation">,</span>
      current<span class="token operator">:</span> pagination<span class="token punctuation">.</span>pageNum<span class="token punctuation">,</span>
      pageSize<span class="token operator">:</span> pagination<span class="token punctuation">.</span>pageSize<span class="token punctuation">,</span>
      <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setPagination</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pageNum<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
    rowSelection<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      selectedRowKeys<span class="token punctuation">,</span>
      <span class="token function-variable function">onChange</span><span class="token operator">:</span> newSelectedRowKeys <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setSelectedRowKeys</span><span class="token punctuation">(</span>newSelectedRowKeys<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="弹框" tabindex="-1"><a class="header-anchor" href="#弹框" aria-hidden="true">#</a> 弹框</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// 新增和编辑弹窗表单字段</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ModalFormFields</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 弹窗表单的查询参数(可能需要对搜索表单的字段进行额外的转换和处理)</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AddModalFormQueryParams</span> <span class="token operator">=</span> ModalFormFields
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">EditModalFormQueryParams</span> <span class="token operator">=</span> <span class="token constant">API</span><span class="token punctuation">.</span>模块<span class="token punctuation">.</span>edit_模块<span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 新增/编辑弹框表单相关状态</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>isEdit<span class="token punctuation">,</span> setIsEdit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>addModalFormInitialValues<span class="token punctuation">,</span> setAddModalFormInitialValues<span class="token punctuation">]</span> <span class="token operator">=</span>
  <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>AddModalFormQueryParams<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>editModalFormInitialValues<span class="token punctuation">,</span> setEditModalFormInitialValues<span class="token punctuation">]</span> <span class="token operator">=</span>
  <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>EditModalFormQueryParams<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">useUpdateEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isEdit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      NiceModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;模块-edit-modal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      NiceModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;模块-add-modal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isEdit<span class="token punctuation">,</span> addModalFormInitialValues<span class="token punctuation">,</span> editModalFormInitialValues<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// 弹框表单配置字段</span>
  <span class="token keyword">const</span> modalFormColumns<span class="token operator">:</span> ModalFormColumns<span class="token operator">&lt;</span>ModalFormFields<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 文本框 + rules + placeholder + style</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;nickName&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;用户昵称&#39;</span><span class="token punctuation">,</span>
      style<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span> marginRight<span class="token operator">:</span> <span class="token string">&#39;5%&#39;</span><span class="token punctuation">,</span> display<span class="token operator">:</span> <span class="token string">&#39;inline-block&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;请输入用户昵称&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      inputProps<span class="token operator">:</span> <span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token string">&#39;请输入用户昵称&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 树选择器 + placeholder + style + treeData + fieldNames</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;treeSelect&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;deptId&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;归属部门&#39;</span><span class="token punctuation">,</span>
      style<span class="token operator">:</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token string">&#39;45%&#39;</span><span class="token punctuation">,</span> display<span class="token operator">:</span> <span class="token string">&#39;inline-block&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      inputProps<span class="token operator">:</span> <span class="token punctuation">{</span>
        placeholder<span class="token operator">:</span> <span class="token string">&#39;请输入归属部门&#39;</span><span class="token punctuation">,</span>
        treeData<span class="token operator">:</span> loaderData<span class="token punctuation">.</span>deptTree<span class="token punctuation">,</span>
        fieldNames<span class="token operator">:</span> <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// visible + 多个rules</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&#39;用户名称&#39;</span><span class="token punctuation">,</span>
      visible<span class="token operator">:</span> <span class="token operator">!</span>isEdit<span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;请输入用户名称&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          min<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          max<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          message<span class="token operator">:</span> <span class="token string">&#39;用户名长度应在 3 到 20 个字符之间&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          pattern<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z0-9_]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          message<span class="token operator">:</span> <span class="token string">&#39;用户名只能包含字母、数字和下划线&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当前表单项的rules依赖另一个字段rules生成</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;password2&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;确认密码&quot;</span><span class="token punctuation">,</span>
      dependencies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;password1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      rules<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function">validator</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">&quot;password1&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;密码不匹配&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 表单联动: 当前表单项依赖另一个表单项的值动态生成</span>
    <span class="token punctuation">{</span>
      noStyle<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      dependencies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;password1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">&quot;password1&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">&quot;password2&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Form.Item</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>用户信息<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Form.Item</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>

  

  <span class="token comment">// 新增表单保存</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">onEditModalFormSave</span><span class="token punctuation">(</span>values<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// try {</span>
    <span class="token comment">//   await add({ ...values })</span>
    <span class="token comment">//   await getList()</span>
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

  
  <span class="token punctuation">{</span><span class="token comment">/* 弹窗表单 */</span><span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ModalForm</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-modal<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>新增用户<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>modalFormColumns<span class="token punctuation">}</span></span>
    <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>addModalFormInitialValues<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onAddModalFormSave<span class="token punctuation">}</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ModalForm</span></span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>edit-modal<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>编辑用户<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>modalFormColumns<span class="token punctuation">}</span></span>
    <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>editModalFormInitialValues<span class="token punctuation">}</span></span>
    <span class="token attr-name">onSave</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onEditModalFormSave<span class="token punctuation">}</span></span>
  <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按钮栏" tabindex="-1"><a class="header-anchor" href="#按钮栏" aria-hidden="true">#</a> 按钮栏</h2><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>
  <span class="token comment">// 搜索按钮栏配置字段</span>
  <span class="token keyword">const</span> buttonColumns<span class="token operator">:</span> ButtonColumnsType <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">setIsEdit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token function">setAddModalFormInitialValues</span><span class="token punctuation">(</span>prevState <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>prevState<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
      disabled<span class="token operator">:</span> selectedRowKeys<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">&#39;系统确认&#39;</span><span class="token punctuation">,</span>
          icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExclamationCircleOutlined</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
          content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">是否删除数据编号为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token operator">/</span><span class="token operator">*</span> <span class="token constant">TODO</span><span class="token operator">:</span> id <span class="token operator">*</span><span class="token operator">/</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">的数据项</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          okText<span class="token operator">:</span> <span class="token string">&#39;确认&#39;</span><span class="token punctuation">,</span>
          cancelText<span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">onOk</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token comment">/* TODO: id */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
              <span class="token function">setSelectedRowKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 重置选择的行</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;export&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
      

<span class="token punctuation">{</span><span class="token comment">/* 按钮栏 */</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ButtonList</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>buttonColumns<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","React代码小抄.html.vue"]]);export{r as default};
