import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c as o,a as c,e as n,f as s,b as i,d as a}from"./app-c3af226f.js";const u="/assets/render基础语法-26142052.png",r="/assets/组件封装之自定义HX标题-e16571ae.png",d={},k=n("h1",{id:"声明式渲染进阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#声明式渲染进阶","aria-hidden":"true"},"#"),s(" 声明式渲染进阶")],-1),v=n("p",null,[n("code",null,"template模板进阶"),n("br"),s(" render函数 , createElement() , JSX在Vue中的用法")],-1),m=a(`<h2 id="一-createelement函数" tabindex="-1"><a class="header-anchor" href="#一-createelement函数" aria-hidden="true">#</a> 一: createElement函数</h2><ol><li><p>作用: 用于创建虚拟DOM的函数</p></li><li><p>参数:</p></li></ol><p><code> ( &#39;html标签名/组件名/组件实例&#39; , { 属性对象 } , [ 子节点的虚拟dom, 文本节点 ])</code></p><p>3.<a href="https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1">属性对象完整格式文档</a></p><p>​</p><h2 id="二-render函数" tabindex="-1"><a class="header-anchor" href="#二-render函数" aria-hidden="true">#</a> 二: render函数</h2><ol><li><p>render函数必须返回一个虚拟DOM</p></li><li><p>render函数用于替代template的.</p><p>template标签会被Vue底层的模板编译器编译成虚拟DOM参与构建页面.<br> render函数直接生成虚拟DOM参与构建页面. 不需要模板编译</p></li><li><p>render函数接受一个参数, 即函数 createElement, 该函数返回一个虚拟DOM, 在Vue中, 约定此函数又称为h函数</p></li><li><p>示例 render(h)=&gt;h(App)</p></li></ol><h2 id="三-render-函数-createelement替代-template-标签" tabindex="-1"><a class="header-anchor" href="#三-render-函数-createelement替代-template-标签" aria-hidden="true">#</a> 三: render 函数 + createElement替代 <code>&lt;template&gt;标签</code></h2><p>​ Hello.vue组件代码</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
		<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 原生属性</span>
					<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;01&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				on <span class="token punctuation">{</span> <span class="token comment">// 绑定事件</span>
					<span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 样式</span>
					<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;gold&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">//可读取到组件实例的数据</span>

			<span class="token keyword">return</span> div
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;你好, JSX&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ App.vue代码</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hello</span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

	<span class="token keyword">import</span> Hello <span class="token keyword">from</span> <span class="token string">&#39;./components/Hello&#39;</span>

	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			Hello
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 最终效果</p><figure><img src="`+u+'" alt="render基础语法" tabindex="0" loading="lazy"><figcaption>render基础语法</figcaption></figure><h2 id="五-render-函数-jsx语法-代替三-template-标签" tabindex="-1"><a class="header-anchor" href="#五-render-函数-jsx语法-代替三-template-标签" aria-hidden="true">#</a> 五: render 函数 + JSX语法 代替三 <code>&lt;template&gt;标签</code></h2><p>JSX规则:</p>',16),g=n("li",null,"所有的变量都需要用 {} 读取",-1),b=n("strong",null,"数据对象",-1),h=n("br",null,null,-1),y={href:"https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>​</p><p>只需要 将Hello.vue组件代码改成如下即可, 上面代码其他的不变</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
		<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span>
		
			<span class="token keyword">return</span> <span class="token punctuation">(</span>
			 <span class="token operator">&lt;</span>div 
				 style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">&#39;pink&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span> 
				 attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&#39;001&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span> 
				 on<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
			 <span class="token operator">&gt;</span>
				<span class="token punctuation">{</span>message<span class="token punctuation">}</span>
			 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;你好, JSX&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-练习-组件封装之自定义hx标题" tabindex="-1"><a class="header-anchor" href="#六-练习-组件封装之自定义hx标题" aria-hidden="true">#</a> 六: 练习: 组件封装之自定义HX标题</h2><p>CustomH.vue文件</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">/* 自定义HX标题 */</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token operator">|</span> Number<span class="token punctuation">,</span>
				<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>
				<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">h</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
		<span class="token comment">// 所有父元素的插槽都保存在$slots中</span>
		<span class="token comment">// $slots.default 保存了默认插槽的虚拟DOM节点</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default
			<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue代码</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomH</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>你好,李银河<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CustomH</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> CustomH <span class="token keyword">from</span> <span class="token string">&#39;./components/CustomH&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			CustomH
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><figure><img src="`+r+'" alt="组件封装之自定义HX标题" tabindex="0" loading="lazy"><figcaption>组件封装之自定义HX标题</figcaption></figure>',10);function _(x,w){const t=e("ExternalLinkIcon");return l(),o("div",null,[k,v,c(" more "),m,n("ol",null,[g,n("li",null,[s("标签体的属性需要遵循 "),b,s("的格式, 详细见"),h,s(" 属性对象完整格式文档: "),n("a",y,[s("https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象"),i(t)])])]),f])}const A=p(d,[["render",_],["__file","声明式渲染进阶.html.vue"]]);export{A as default};
