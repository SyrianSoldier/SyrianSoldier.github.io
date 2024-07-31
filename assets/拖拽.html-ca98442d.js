import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as t}from"./app-e9ec3034.js";const p="/assets/base-2f87234c.png",e="/assets/拖拽Apis-bb2964eb.png",o="/assets/draging-6886e0f2.png",l={},c=t('<p>#js原生实现拖拽</p><h2 id="_1-drag-drop-apis" tabindex="-1"><a class="header-anchor" href="#_1-drag-drop-apis" aria-hidden="true">#</a> 1. Drag &amp; Drop Apis</h2><h3 id="_1-1-建立基本结构与样式" tabindex="-1"><a class="header-anchor" href="#_1-1-建立基本结构与样式" aria-hidden="true">#</a> 1.1 建立基本结构与样式</h3><img src="'+p+`" width="500px"><p>代码:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>拖拽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">ul li</span> <span class="token punctuation">{</span>
      <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.container</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.container</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.empty</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 246px<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 138px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 253px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 253px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> gold<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/衣服png.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>persons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/p1.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./images/p2.png<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-drag-drop-apis介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-drag-drop-apis介绍" aria-hidden="true">#</a> 1.2 Drag &amp; Drop Apis介绍</h3><img src="`+e+'"><h3 id="_1-3-拖拽时为预留位置元素添加虚线边框" tabindex="-1"><a class="header-anchor" href="#_1-3-拖拽时为预留位置元素添加虚线边框" aria-hidden="true">#</a> 1.3 拖拽时为预留位置元素添加虚线边框</h3><blockquote><p>注意点: 需要为拖拽的元素指定 draggable = true 再绑定事件</p></blockquote><img src="'+o+`" width="500"><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span>
        content<span class="token operator">=</span><span class="token string">&quot;width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>拖拽<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    ul li <span class="token punctuation">{</span>
      list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>empty <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> 246px<span class="token punctuation">;</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> 138px<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> 253px<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 253px<span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> gold<span class="token punctuation">;</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
      justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
      align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
      <span class="token literal-property property">transition</span><span class="token operator">:</span> border 300ms ease<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/衣服png.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;empty&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;persons&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/p1.png&quot;</span> draggable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span>  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;imgs&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/p2.png&quot;</span> draggable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;imgs&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">// 1. 为拖拽的元素设置draggable=&quot;true&quot;</span>
  <span class="token comment">// 2. 为拖拽的元素绑定拖拽事件</span>
  <span class="token keyword">const</span> empty <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.empty&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> imgs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.imgs&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dashedBoderStyled <span class="token operator">=</span> <span class="token string">&#39;3px dashed red&#39;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> img <span class="token keyword">of</span> imgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drag&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> dashedBoderStyled
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragend&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;unset&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-实现拖拽效果" tabindex="-1"><a class="header-anchor" href="#_1-4-实现拖拽效果" aria-hidden="true">#</a> 1.4 实现拖拽效果</h3><blockquote><p>注意:</p><ol><li>浏览器默认不支持放置事件(drop), 需要提前在dropover事件中阻止浏览器的默认行为</li></ol></blockquote><p>完整代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span>
        content<span class="token operator">=</span><span class="token string">&quot;width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>拖拽<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    ul li <span class="token punctuation">{</span>
      list<span class="token operator">-</span>style<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>container <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>empty <span class="token punctuation">{</span>
      <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> 246px<span class="token punctuation">;</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> 138px<span class="token punctuation">;</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> 253px<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 253px<span class="token punctuation">;</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> gold<span class="token punctuation">;</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
      justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
      align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
      <span class="token literal-property property">transition</span><span class="token operator">:</span> border 300ms ease<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/衣服png.png&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;empty&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

  <span class="token operator">&lt;</span>ul <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;persons&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/p1.png&quot;</span> draggable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span>  <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;imgs&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">&quot;./images/p2.png&quot;</span> draggable<span class="token operator">=</span><span class="token string">&quot;true&quot;</span> alt<span class="token operator">=</span><span class="token string">&quot;&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;imgs&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token comment">// 1. 为拖拽的元素设置draggable=&quot;true&quot;</span>
  <span class="token comment">// 2. 为拖拽的元素绑定拖拽事件</span>
  <span class="token keyword">const</span> empty <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.empty&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> imgs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.imgs&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> dashedBoderStyled <span class="token operator">=</span> <span class="token string">&#39;3px dashed red&#39;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> empty<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>

  <span class="token keyword">let</span> dragingImg <span class="token comment">//新增</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> img <span class="token keyword">of</span> imgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drag&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      dragingImg <span class="token operator">=</span> e<span class="token punctuation">.</span>target <span class="token comment">//新增</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> dashedBoderStyled
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragend&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      dragingImg <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">//新增</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;unset&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 3. 为空元素绑定放置事件, 移除图片, 并将图片添加到放置区域</span>
  <span class="token comment">//  - 1. 利用dragingImg记录正在拖动的dom元素</span>
  <span class="token comment">//  - 2. 为empty绑定放置事件</span>

<span class="token comment">// 浏览器默认不支持放置事件(drop), 需要提前在dropover事件中阻止浏览器的默认行为</span>
  empty<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragover&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  empty<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drop&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 移除老图片</span>
    <span class="token keyword">const</span> li <span class="token operator">=</span> dragingImg<span class="token punctuation">.</span>parentNode
    ul<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 如果不为空则先清空</span>
      empty<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>empty<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 向空白区域添加新图片</span>
    empty<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dragingImg<span class="token punctuation">)</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-拖拽与获取文件对象" tabindex="-1"><a class="header-anchor" href="#_1-5-拖拽与获取文件对象" aria-hidden="true">#</a> 1.5 拖拽与获取文件对象</h3><blockquote><p>如果想拖拽一个文件放置到某个DIV中, 并且获取到这个文件怎么做?</p></blockquote><ol><li>在dragover和drop事件中阻止默认行为</li><li>通过e.dataTransfer.files获取文件对象</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragover&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 想drop必须先在over中阻止默认行为</span>
  e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>dropEffect <span class="token operator">=</span> <span class="token string">&#39;copy&#39;</span> <span class="token comment">// 指定拖拽的手势</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>



div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drop&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止浏览器的自动打开行为</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">)</span> <span class="token comment">// 获取拖拽的文件对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[c];function r(u,k){return s(),a("div",null,i)}const m=n(l,[["render",r],["__file","拖拽.html.vue"]]);export{m as default};
