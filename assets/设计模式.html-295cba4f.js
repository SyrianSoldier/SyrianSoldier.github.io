import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as p}from"./app-fafee10e.js";const t={},e=p(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="设计模式的分类" tabindex="-1"><a class="header-anchor" href="#设计模式的分类" aria-hidden="true">#</a> 设计模式的分类</h2><p>设计模式可以分为三类：创建型模式、结构型模式和行为型模式。</p><ol><li>创建型模式（Creational Pattern）创建型模式关注的是对象的创建过程，目标是尽可能地将对象的创建和使用分离，从而达到解耦的目的。其中比较常见的有工厂模式、单例模式、建造者模式等。</li><li>结构型模式（Structural Pattern）结构型模式关注的是对象的组成方式，目标是设计出符合要求的结构，让对象之间的关系更加清晰明了，从而降低耦合度，提高代码的可维护性和可扩展性。其中比较常见的有代理模式、装饰器模式、适配器模式等。</li><li>行为型模式（Behavioral Pattern）行为型模式关注的是对象的行为和职责，目标是设计出各种对象之间的高效协作方式，从而达到实现复杂业务逻辑的目的。其中比较常见的有观察者模式、迭代器模式、策略模式等。</li></ol><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><blockquote><p>定义: 保证一个类只有一个实例, 并且提供一个全局访问点</p></blockquote><h3 id="单例模式示意" tabindex="-1"><a class="header-anchor" href="#单例模式示意" aria-hidden="true">#</a> 单例模式示意</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token comment">// 保存实例的属性</span>

    <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj1 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;实例1&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&#39;实例2&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出, 这种设置可以保证每次调用getInstance时候获取的都是一个对象.</p><p>但本身这个例子, 没有什么实际意义. 下面是一个是有意义的示例</p><p>=</p><h3 id="透明单例-创建div单例" tabindex="-1"><a class="header-anchor" href="#透明单例-创建div单例" aria-hidden="true">#</a> 透明单例 : 创建DIV单例</h3><blockquote><p>上面的单例模式的实现, 是对使用者不透明的. 什么意思呢? 使用者本来使用new...的方式创建一个类的示例, 但为了实现单例模式, 我们强行让用户使用getInstance方法创建对象</p><p>虽然这样达到了目标, 但是对于使用者来说, 增加了学习额外API的学习成本.</p><p>所谓的&quot;透明的&quot;实现就是要让使用者无感知, 使用者还是之前的用法, 但是我们已经加了一些功能. 在上个例子中, 就是用户还是new调用, 但是已经多了单例的功能</p></blockquote><p>利用闭包+IIFE实现单例 : 一个只会创建一个DIV的例子</p><blockquote><p>这个例子事项是想实现, 当new CreateDiv时候, 自动创建并添加DIV, 并依靠闭包, 缓存了实例</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> CreateDiv <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 保存CreateDiv的示例</span>

    <span class="token keyword">class</span> <span class="token class-name">Create</span> <span class="token punctuation">{</span>
        div
        <span class="token doc-comment comment">/**
          <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">divText</span> div的文本
          @target <span class="token class-name"><span class="token punctuation">{</span>DOMNode<span class="token punctuation">}</span></span> target 将div添加到哪个父节点
        */</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">divText<span class="token punctuation">,</span>target</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token keyword">return</span> instance
            <span class="token keyword">this</span><span class="token punctuation">.</span>divText <span class="token operator">=</span> divText
            <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            instance <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token punctuation">}</span>

        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token comment">// 创建div, 将其添加到父节点上</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
           <span class="token keyword">this</span><span class="token punctuation">.</span>div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>divText
           <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>div<span class="token punctuation">)</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Create
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token keyword">const</span> cd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;HELLO&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cd1 <span class="token operator">===</span> cd2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理模式实现creatediv" tabindex="-1"><a class="header-anchor" href="#代理模式实现creatediv" aria-hidden="true">#</a> 代理模式实现CreateDiv</h3><blockquote><p>上面的代码可读性很差, 违反了单一职责原则. 既负责创建div又有单例的功能, 再加上闭包的写法, 对理解力是个不小的考验</p><p>将创建单例的功能抽出去, 单独抽成一个类, 这个类的作用就是代替原来CreateDiv, 并附加一个单例模式</p></blockquote><blockquote><p>代理类ProxyCreateDiv不返回自己本身类的实例, 而是返回CreateDiv的引用, 并且加了单例的功能</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CreateDiv</span> <span class="token punctuation">{</span>
    div <span class="token doc-comment comment">/**
          <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">divText</span> div的文本
          @target <span class="token class-name"><span class="token punctuation">{</span>DOMNode<span class="token punctuation">}</span></span> target 将div添加到哪个父节点
        */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">divText<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// if(instance) return instance //取消单例功能的代码</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>divText <span class="token operator">=</span> divText
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// instance = this // 取消单例功能的代码</span>
    <span class="token punctuation">}</span>

    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建div, 将其添加到父节点上</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>divText
        <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>div<span class="token punctuation">)</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ProxyCreateDiv</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> instance<span class="token punctuation">;</span> 
    
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ProxyCreateDiv<span class="token punctuation">.</span>instance<span class="token punctuation">)</span>
            <span class="token keyword">return</span> ProxyCreateDiv<span class="token punctuation">.</span>instance

        <span class="token keyword">return</span> ProxyCreateDiv<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CreateDiv</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> cd1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyCreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;你好&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token keyword">const</span> cd2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyCreateDiv</span><span class="token punctuation">(</span><span class="token string">&#39;HELLO&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cd1 <span class="token operator">===</span> cd2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js中的单例模式" tabindex="-1"><a class="header-anchor" href="#js中的单例模式" aria-hidden="true">#</a> js中的单例模式</h3><blockquote><p>上面的实例都是通过class实现的, 但是前端开发中使用class实现类似功能是非常不常见的</p><p>这是由于设计模式最初是由后端语言者提出的, 很多demo都是使用后端的思考方式实现的, 在前端, 在js下如何实现单例模式呢</p></blockquote><blockquote><p>其实非常简单, 想想单例模式的定义: 全局只存在一个对象, 并且提供一个可访问的引用. 那么 const a = {} 其实就是一种单例模式</p><p>但是这种单例的实现有很多问题, 主要是污染全局变量, 随着对象越来越多, 那么可能出现命名重复的问题</p><p>下面是解决办法</p></blockquote><h3 id="命名空间解决全局污染" tabindex="-1"><a class="header-anchor" href="#命名空间解决全局污染" aria-hidden="true">#</a> 命名空间解决全局污染</h3><blockquote><p>命名空间不能完全让全局没有单例, 但是可以大大减少全局的单例数</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> namespce1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">person1</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token literal-property property">person2</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> namespce2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">person1</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token literal-property property">person2</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过不同的命名空间, 使得相同的单例不再冲突</p><h3 id="动态命名空间" tabindex="-1"><a class="header-anchor" href="#动态命名空间" aria-hidden="true">#</a> 动态命名空间</h3><blockquote><p>以上的命名空间, 需要手动实现. 可扩展性很差. 比如我想对上面namespace2添加一个变量person3, 就需要动源代码, 不是很好. 下面是一个动态创建命名空间的例子</p><p>看懂下面的代码需要一点点的算法技术(迭代法的应用, 也可以用递归..)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//假如全局下有个App对象</span>
App<span class="token punctuation">.</span><span class="token function-variable function">addNamespce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">names</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> namesArr <span class="token operator">=</span> names<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 将dom.style--&gt; [&#39;dom&#39;,&#39;style&#39;]</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> App <span class="token comment">//记录添加的层级对象, 默认从App开始</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> namesArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> namesArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>current<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      current<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    current <span class="token operator">=</span> current<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token comment">// 继续添加子命名空间</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

App<span class="token punctuation">.</span><span class="token function">addNamespce</span><span class="token punctuation">(</span><span class="token string">&#39;Javascirpt&#39;</span><span class="token punctuation">)</span>
App<span class="token punctuation">.</span><span class="token function">addNamespce</span><span class="token punctuation">(</span><span class="token string">&#39;CSS.Color&#39;</span><span class="token punctuation">)</span>
App<span class="token punctuation">.</span><span class="token function">addNamespce</span><span class="token punctuation">(</span><span class="token string">&#39;CSS.Border&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 输出App: </span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Javascirpt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;CSS&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;Color&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;Border&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><blockquote><p>策略模式是关于算法的模式(广义的算法, 指多个程序的运行逻辑)</p><p>策略模式需要有两部分组成 1. 一组策略类, 每个策略封装了具体的算法, 并提供名字相同的运行接口 2. Context类, 保存了所有策略 类的引用. 负责接受使用策 略者的调用, 委派给具体策略类运算.</p><p>策略模式可以取消大量的if..else嵌套逻辑</p></blockquote><h3 id="typescript实现策略模式" tabindex="-1"><a class="header-anchor" href="#typescript实现策略模式" aria-hidden="true">#</a> Typescript实现策略模式</h3><blockquote><p>由于策略模式的后端实现需要抽象类/接口, js并不支持抽象类.接口, 所以使用ts实现策略模式. 在下个例子会举出js的实现, 更贴近前端开发场景</p></blockquote><blockquote><p>下面是购物车结算相关的例子</p><p>在一个购物车结算的场景下, 我们可能有各种不同结算方式, 比如原价结算, 比如打7折计算, 比如优惠券减免. 这组成了一组算法, 也就是我们定义中的一组策略类</p><p>另外我们需要一个Context类, 负责将使用者的请求委派给具体的策略类, 起一个中转</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 所有的策略类都需要一个结算的方法</span>
<span class="token comment">// 使用接口约束</span>
<span class="token keyword">interface</span> <span class="token class-name">ShopCartStrategy</span> <span class="token punctuation">{</span> 
  <span class="token function">settleAccounts</span><span class="token punctuation">(</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 打七折的策略类</span>
<span class="token keyword">class</span> <span class="token class-name">DiscountStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">ShopCartStrategy</span> <span class="token punctuation">{</span> 
  <span class="token function">settleAccounts</span><span class="token punctuation">(</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> price <span class="token operator">*</span> <span class="token number">0.7</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 优惠券策略</span>
<span class="token keyword">class</span> <span class="token class-name">CouponStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">ShopCartStrategy</span> <span class="token punctuation">{</span>
  coupon<span class="token operator">:</span> <span class="token builtin">number</span> 
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>coupon<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>coupon <span class="token operator">=</span> coupon
  <span class="token punctuation">}</span>
  <span class="token function">settleAccounts</span><span class="token punctuation">(</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> price <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>coupon
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通结算</span>
<span class="token keyword">class</span> <span class="token class-name">CommonStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">ShopCartStrategy</span> <span class="token punctuation">{</span> 
  <span class="token function">settleAccounts</span><span class="token punctuation">(</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> price
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SeetleContext</span> <span class="token punctuation">{</span> 
  <span class="token function">getPrice</span><span class="token punctuation">(</span>strategyType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>price<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>counpon<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">{</span> 
    <span class="token keyword">let</span> strategy<span class="token operator">:</span>ShopCartStrategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//默认普通结算</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>strategyType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&#39;discount&#39;</span><span class="token operator">:</span> <span class="token comment">// 打折计算</span>
        strategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscountStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">&#39;coupon&#39;</span><span class="token operator">:</span> <span class="token comment">// 优惠券计算</span>
        counpon <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CouponStrategy</span><span class="token punctuation">(</span>counpon<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> strategy<span class="token punctuation">.</span><span class="token function">settleAccounts</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用者</span>
<span class="token keyword">new</span> <span class="token class-name">SeetleContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">SeetleContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token string">&#39;discount&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">SeetleContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token string">&#39;coupon&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js实现策略模式" tabindex="-1"><a class="header-anchor" href="#js实现策略模式" aria-hidden="true">#</a> JS实现策略模式</h3><blockquote><p>由于在JS中, 函数是一等公民和创建对象的便利性. 我们不必用class声明, 下面用js重构上面的购物车例子</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 策略组</span>
<span class="token keyword">const</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">discount</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> price <span class="token operator">*</span> <span class="token number">0.7</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">coupon</span><span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> coupon</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> price <span class="token operator">-</span> coupon
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">common</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">return</span> price
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// context 上下文, 为了给使用者调用算法</span>
<span class="token keyword">function</span> <span class="token function">settle</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户</span>
<span class="token function">settle</span><span class="token punctuation">(</span><span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token function">settle</span><span class="token punctuation">(</span><span class="token string">&#39;coupon&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token function">settle</span><span class="token punctuation">(</span><span class="token string">&#39;discount&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2><blockquote><p>代理模式是一种结构型设计模式，它通过创建一个代理对象来控制对另一个对象的访问，为其他对象提供一种代理以控制对这个对象的访问。</p><p>代理模式通常涉及三个角色：</p><ol><li>抽象主题角色：定义了代理类和真实主题类的公共接口，这样在任何可以使用真实主题的地方都可以使用代理类。</li><li>真实主题角色：定义了代理所表示的真实对象，在代理角色中被代理的对象。</li><li>代理角色：代理角色内部含有对真实主题的引用，并且提供与真实主题角色相同的接口，代理角色可以在客户端和真实主题之间起到中介的作用。</li></ol><p>代理模式有多种类型，常见的有远程代理、虚拟代理、保护代理和智能引用代理等。其中，远程代理用于在不同地址空间中代表对象，虚拟代理用于创建开销大的对象，保护代理用于控制对原始对象的访问，而智能引用代理则在访问对象时添加一些额外的操作。</p><p>代理模式可以带来许多好处，比如增加代码的可复用性、降低系统的耦合度、控制对对象的访问、提高系统的性能等。在实际应用中，代理模式经常用于构建安全、稳定和高效的系统。</p><p>代理模式: 为一个对象提供一个替代对象. 替代对象称为代理对象, <strong>代理对象应该持有原对象的引用</strong>, 并且为了对用户使用透明, <strong>应该向上抽取接口定义代理对象和原对象共同的调用接口</strong></p></blockquote><blockquote><p>生活场景: 小明想认识刘亦菲, 但是刘亦菲不是容易接触的, 小明需要通过刘亦菲的经纪人才能联系到刘亦菲. 这个经纪人就起到代理对象的作用.</p><p>其中刘亦菲是元对象, 经纪人是代理对象.经纪人持有刘亦菲的引用(电话号码). 小明对象身上应该有个联系的方法, 刘亦菲和经纪人对象身上应该都有接受联系的方法. 这个方法应该被抽取到接口以约束他们</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> liuYiFei <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;刘亦菲接受到联系&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> proxyLiuYiFei <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lyf</span><span class="token operator">:</span>liuYiFei
  <span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lyf<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoMing <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">contact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    proxyLiuYiFei<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中, 为刘亦菲的对象建立了一个代理对象, 代理对象持有了刘亦菲的引用. 并且共同实现了receive方法, 在js中没有interface, 在后端语言中, 这个方法应该提到接口中强制约束, 好处是对于小明调用方法来说, 是透明的, 无差别的</p><h3 id="保护代理" tabindex="-1"><a class="header-anchor" href="#保护代理" aria-hidden="true">#</a> 保护代理</h3><blockquote><p>保护代理是有益于代理对象的, 虚拟代理是为了有益于客户的</p><p>保护代理是为了屏蔽一些操作, 比如小明追刘亦菲, 如果学历不高, 钱也少, 颜值也低,她大概率是不愿意的(无恶意). 那么代理对象姐可以在接受到联系请求的时候, 做一些判断, 如果不符合一定的要求, 选择拒绝. 这是保护代理</p><p>虚拟代理作为创建开销大的对象的代表，经常会直到我们真正需要一个对象的时候才创建它。当对象在创建前和创建中时，由虚拟代理地来扮演对象的替身。对象创建后，代理就会将请求直接委托给对象。</p></blockquote><h3 id="虚拟代理" tabindex="-1"><a class="header-anchor" href="#虚拟代理" aria-hidden="true">#</a> 虚拟代理</h3><blockquote><p>在真实开发中. 虚拟代理应用场景很多. 下面是几个例子</p></blockquote><p><strong>图片懒加载</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个函数是创建和添加图片的函数, 但是在网络延迟情况下, 图片可能未即时加载</span>
<span class="token comment">// 此时可以用代理模式</span>
<span class="token keyword">const</span> <span class="token function-variable function">createImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span>
  img<span class="token punctuation">.</span>src <span class="token operator">=</span> src
  parent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
  <span class="token keyword">return</span> img
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">proxyCreateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">src<span class="token punctuation">,</span>parent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token function">createImg</span><span class="token punctuation">(</span><span class="token string">&#39;file://本地占位图的url&#39;</span><span class="token punctuation">,</span>parent<span class="token punctuation">)</span> <span class="token comment">// 将图片显示未本地占位图</span>
  
  <span class="token keyword">const</span> loadImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Imgage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 新建一个image图像</span>
  loadImg<span class="token punctuation">.</span>src <span class="token operator">=</span> src           <span class="token comment">// 将图像的src指向真正的链接, 下载图片</span>
  loadImg<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 当图片下载完成, 将真正img的src做切换</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>src
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用户</span>
<span class="token function">proxyCreateImg</span><span class="token punctuation">(</span><span class="token string">&#39;https://百度.png&#39;</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子里, 原对象为createImg函数, 代理对象为proxyCreateImg函数. 由于都是函数. 没有共同的接口, 这是由于js的便利性和后端语言的实现产生了差别. 其次, 代理对象proxyCreateImg函数内部中调用了createImg函数, 即代理对象持有原对象的引用</p><p>最后, 这是一个虚拟代理. 因为代理的目的是对客户有利的, 并且延缓了开销大的操作, 在这段时间内占位图充当了虚拟的原对象的角色.</p><h3 id="缓存代理" tabindex="-1"><a class="header-anchor" href="#缓存代理" aria-hidden="true">#</a> 缓存代理</h3><blockquote><p>缓存代理即代理的主要目的是缓存的需求</p></blockquote><blockquote><p>一个实际开发需求: 分页秒开的功能.</p><p>很多人都有阅读网文的习惯, 那就一定体会的到, 当点击下一页时候即使是1s的loading也让使用者痛苦, 当阅读到小说高潮时候的时候, 他点击下一页时候希望的是迅速的切到下一页, 多0.5s的延迟都会流失大量的客户.</p><p>下面是使用缓存代理模拟分页秒开需求</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一个请求某一页文章数据的方法, 一般后端会要求传页码和每页的数量大小</span>
<span class="token keyword">const</span> <span class="token function-variable function">getText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span>pageSize</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&#39;url地址&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span> page<span class="token punctuation">,</span>pageSize <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 代理对象应该和被代理者输出的接口相同, 所以也要返回promise</span>
<span class="token keyword">const</span> proxyGetText <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 缓存的数组, 其中下标的含义是页码, value是缓存的数据</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">page<span class="token punctuation">,</span>pageSize</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果本页和下一页都有数据, 直接返回本页数据</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>cache<span class="token punctuation">[</span>page<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> cache<span class="token punctuation">[</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> cache<span class="token punctuation">[</span>page<span class="token punctuation">]</span>
   	  <span class="token comment">// 如果本页或者下一页没有数据, 请求完放在缓存中 </span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         cache<span class="token punctuation">[</span>page<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getText</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
      <span class="token comment">// 请求下一页数据应该是异步的, 因为同步的话第一次打开会是双倍的慢</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>cache<span class="token punctuation">[</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token function">getText</span><span class="token punctuation">(</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">)</span> <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">[</span>page<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 客户端伪代码. 比如react环境</span>
<span class="token keyword">function</span> App <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span>setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span>setPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">getText</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">proxyGetText</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token function">setText</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂代理" tabindex="-1"><a class="header-anchor" href="#工厂代理" aria-hidden="true">#</a> 工厂代理</h3><blockquote><p>工厂代理是提供一个工厂产生代理对象. 工厂模式和代理模式的混合应用</p><p>上面的代码中, 主要的问题存在于</p><ol><li>代理对象采用了闭包的方式实现, 复杂且可读性差, 基于工厂模式的代理模式可能会清晰易读</li><li>变量命名不规范, 可读性差</li><li>采用数组做缓存, 如果是连续的页码还好, 但是如果是不连续的页码, 数组会出现&quot;空洞&quot;, 并且数组的删除效率很低. 这里采用Map</li></ol></blockquote><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 服务端接口
async function fetchArticles(pageNumber, pageSize) {
  const response = await axios.get(&#39;/api/articles&#39;, {
    params: {
      page: pageNumber,
      size: pageSize
    }
  });
  return response.data;
}

// 工厂模式返回代理对象
function createArticleProxy(fetcher) {
  const cache = new Map();

  return async function getArticles(pageNumber, pageSize) {
    if (cache.has(pageNumber) &amp;&amp; cache.has(pageNumber + 1)) {
      return cache.get(pageNumber);
    }
	
    if(!cache.has(pageNumber)){
      const result = await fetcher(pageNumber, pageSize);
      cache.set(pageNumber, result);
     }

    // 异步请求下一页
    if (!cache.has(pageNumber + 1)) {
      fetcher(pageNumber + 1, pageSize).then((res) =&gt; {
        cache.set(pageNumber + 1, res);
      });
    }

    return result;
  }
}

// 客户端代码
import React, { useState, useEffect } from &#39;react&#39;;

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getArticles = createArticleProxy(fetchArticles);

  useEffect(() =&gt; {
    async function fetchArticlesAsync() {
      const result = await getArticles(pageNumber, 10);
      setArticles(result);
    }
    fetchArticlesAsync();
  }, [pageNumber]);

  return (
    &lt;div&gt;
      {articles.map(article =&gt; (
        &lt;div key={article.id}&gt;
          &lt;h2&gt;{article.title}&lt;/h2&gt;
          &lt;p&gt;{article.content}&lt;/p&gt;
        &lt;/div&gt;
      ))}
      &lt;button onClick={() =&gt; setPageNumber(prevPageNumber =&gt; prevPageNumber + 1)}&gt;Load More&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式" aria-hidden="true">#</a> 迭代器模式</h2><blockquote><p>迭代器模式是一种行为设计模式，它允许你在不暴露集合底层表现形式（如列表、栈和树等）的情况下访问集合中的元素。</p><p>在迭代器模式中，集合对象提供一个访问它的元素的接口，而客户端代码则使用这个接口来遍历集合中的元素，而不需要了解集合底层的数据结构。这样做的好处是，可以随时改变集合底层的数据结构，而不需要改变客户端代码。</p><p>迭代器模式包含两个核心组件：</p><ol><li>迭代器(Iterator)：定义了遍历集合元素的接口。</li><li>集合对象(Aggregate)：定义了创建迭代器的接口，同时提供了遍历集合元素的方法。</li></ol><p>迭代器模式的优点包括：</p><ol><li>隐藏了集合的具体实现，使得代码更加灵活和可维护。</li><li>提供了一种遍历集合元素的标准方法，使得客户端代码更加简洁和易读。</li><li>支持多种遍历方式，如正序遍历、倒序遍历、跳跃遍历等。</li></ol><p>迭代器模式的缺点包括：</p><ol><li>增加了代码的复杂度，需要定义迭代器接口和实现类。</li><li>对于简单的集合结构，使用迭代器模式可能会显得过于繁琐。</li></ol><p>在 JavaScript 中，迭代器模式通常与 ES6 中的迭代器协议和生成器函数一起使用，这样可以更方便地遍历数组、集合等数据结构。</p></blockquote><blockquote><p>大部分语言已经实现了迭代器模式, 比如ES6 的forEach,same,map..等方法, 不用手写实现</p></blockquote><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2><blockquote><p>观察者模式是一种一对多的依赖关系设计模式, 使得当一个对象状态改变时，所有依赖它的对象都能够自动得到通知并且更新.</p><p>其需有Subject主题类, 观察者Observer类, 其中Subject主题类为被观察的对象.</p><p>Subject应该有以下类似属性: observers: 报错所有的观察者. items: 保存变化的数据结构. 以及若干方法: 对observers和items增删改查的方法. notify: 用于刷新observers, 通知每一个观察者改变了的方法</p><p>每一个Observer应该具有共同的接口用于接收变化.</p></blockquote><p>###Typescript实现购物车案例的观察者模式</p><blockquote><p>下面是一个购物车的观察者模式的例子.</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 观察者应该具有收到变化的相同的更新接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Good</span> <span class="token punctuation">{</span> 
  key<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span> 
  <span class="token function">update</span><span class="token punctuation">(</span>goods<span class="token operator">:</span>Good<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// Subject类, 被观察的对象类</span>
<span class="token keyword">class</span> <span class="token class-name">Shopcar</span> <span class="token punctuation">{</span> 
  goods<span class="token operator">:</span> Good<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 商品</span>
  observers<span class="token operator">:</span> Observer<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//观察者们</span>
  
  <span class="token function">addGood</span><span class="token punctuation">(</span>good<span class="token operator">:</span>Good<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>good<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeGood</span><span class="token punctuation">(</span>good<span class="token operator">:</span> Good<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>goods <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>key <span class="token operator">!==</span> good<span class="token punctuation">.</span>key<span class="token punctuation">)</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>goods<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">addObserver</span><span class="token punctuation">(</span>ob<span class="token operator">:</span> Observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>ob<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">notify</span><span class="token punctuation">(</span>goods<span class="token operator">:</span>Good<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>ob <span class="token operator">=&gt;</span> ob<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 记录商品总价的组件, 当购物车中的商品变化的时候自动更新总价</span>
<span class="token keyword">class</span> <span class="token class-name">CartTotal</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span> 
  price<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  
  <span class="token function">update</span><span class="token punctuation">(</span>goods<span class="token operator">:</span> Good<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> goods<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> curr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> pre <span class="token operator">+</span> curr<span class="token punctuation">.</span>price<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>price
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 记录商品总数的组件, 当购物车中的商品变化的时候自动更新总价</span>
<span class="token keyword">class</span> <span class="token class-name">CartCount</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span> 
  count<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  
  <span class="token function">update</span><span class="token punctuation">(</span>goods<span class="token operator">:</span> Good<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> goods<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用react重构购物车案例" tabindex="-1"><a class="header-anchor" href="#使用react重构购物车案例" aria-hidden="true">#</a> 使用React重构购物车案例</h3><blockquote><p>上面使用ts实现的观察者模式案例, 但是由于开发的灵活性, 我们不必严格按照定义的那样定义观察者</p><p>下面是一个React重构购物车案例的例子, 也是用的观察者模式</p></blockquote><p>ShopcartContext.js</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {createContext,useState,useContext} from &#39;react&#39;

const ShopcartContext = createContext({})

const ShopcartProvider = ({children}) =&gt; {
  const [goods,setGoods] = useState([])
  const addGoods = (good) =&gt; setGoods(pre =&gt; [...pre,good])
  const removeGoods = (id) =&gt; setGoods(pre =&gt; pre.filter(item.id !== id))
  
  return (
    &lt;ShopcartContext.Provider value={[goods,addGoods,removeGoods]}&gt; 
      { children } 
    &lt;/ShopcartContext.Provider&gt;
  )
}

const useShopcart = () =&gt; {
  const context = useContext(ShopcartContext)
  return context
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总数组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useShopcart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ShopcartContext&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">CartCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>goods<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useShopcart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> count <span class="token operator">=</span> goods<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CartCount<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总价组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useShopcart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ShopcartContext&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">CartTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>goods<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useShopcart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> total <span class="token operator">=</span> goods<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> sum <span class="token operator">+</span> item<span class="token punctuation">.</span>price<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Total<span class="token operator">:</span> $<span class="token punctuation">{</span>total<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CartTotal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中, Subject主题, 即被观察的对象为ShopcartContext对象, 当上下文对象变化的时候, 依赖于它的总价和总数组件都会更新.</p><p>Observers为总价和总数组件.</p><p>和上面的ts实现区别是, Subject并没有显式的实现的notify方法,Observer也没有显式的接口update, 这是依赖于react实现的&quot;当Context刷新时候, 所有组件自动渲染.&quot; 并且需要注意的是Context.Provider持有了所有Observer的引用, 这是和发布订阅模式的重要区别.</p><h2 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h2><blockquote><p>命令模式是一种行为型设计模式，它将一个请求封装成一个对象，从而使你可以使用不同的请求、队列或者日志来参数化其他对象。命令模式可以让请求的发送者和接收者彻底解耦，发送者不需要知道请求的具体执行过程，只需要知道如何发送命令和命令对象的接口。</p><p>命令模式通常由四个部分组成：命令对象、接收者对象、调用者对象和客户端对象。命令对象封装了请求的操作和参数，接收者对象负责实际执行命令的操作，调用者对象将命令对象传递给接收者对象，并负责调用命令对象的方法，客户端对象创建命令对象并设置命令对象的接收者对象和参数。</p><p>命令模式可以使代码更加灵活，可以动态地添加新的命令，也可以将命令对象序列化到磁盘上，从而实现撤销和恢复操作。它还可以将多个命令组合成一个复合命令，从而实现批处理操作。命令模式在很多应用中都有广泛的应用，例如图形界面的菜单、工具条和快捷键操作等。</p><p>命令模式的作用在于 命令的发出者和接受者之间的解耦合. 命令的发出者不知道接受者是谁, 也不知道接受者是如何实现功能的, 命令的接受者不知道谁发出的命令, 何时会发出命令. 双方都面向命令编程</p><p>在命令模式中, 命令类持有接受者的引用</p></blockquote><h3 id="命令模式实现文本编辑器" tabindex="-1"><a class="header-anchor" href="#命令模式实现文本编辑器" aria-hidden="true">#</a> 命令模式实现文本编辑器</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 命令的接口. 最基本的命令应该包含以下几点 1. 共同的触发方法 2. 撤销方法 3. 接受者的引用</span>
<span class="token comment">// 此外命令对象会存储该命令操作的相关数据, 用于undo. 这些需要在创建命令时候传进来</span>
<span class="token keyword">interface</span> <span class="token class-name">Command<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> 
  receiver<span class="token operator">:</span><span class="token constant">R</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编辑器组件, 提供插入文本,  删除文本,撤销和重做操作,</span>
<span class="token keyword">class</span> <span class="token class-name">Editer</span> <span class="token punctuation">{</span> 
  text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  commands<span class="token operator">:</span> Command<span class="token operator">&lt;</span>Editer<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token function">insertText</span><span class="token punctuation">(</span>position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> position<span class="token punctuation">)</span> <span class="token operator">+</span> text <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InsertTextCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>text<span class="token punctuation">,</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">deleteText</span><span class="token punctuation">(</span>position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> deleteText <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>position<span class="token punctuation">,</span> position <span class="token operator">+</span> length<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> position<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>position <span class="token operator">+</span> length<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DeleteTextCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>deleteText<span class="token punctuation">,</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 编辑器的重做, 由于不知道上一步是什么. 所以需要调出历史记录栈, 依靠命令来重做</span>
  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> command <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      command<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">redo</span><span class="token punctuation">(</span>step<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>step <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      step<span class="token operator">--</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 插入文本命令</span>
<span class="token keyword">class</span> <span class="token class-name">InsertTextCommand<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Command<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> 
  receiver<span class="token operator">:</span> <span class="token constant">R</span>
  insertText<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  position<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>receiver<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">,</span> text<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> position<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver
    <span class="token keyword">this</span><span class="token punctuation">.</span>insertText <span class="token operator">=</span> text
    <span class="token keyword">this</span><span class="token punctuation">.</span>position <span class="token operator">=</span> position
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token keyword">instanceof</span> <span class="token class-name">Editer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>position<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>insertText<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token keyword">instanceof</span> <span class="token class-name">Editer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">deleteText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>position<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>insertText<span class="token punctuation">.</span>length<span class="token punctuation">)</span> 
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
      
<span class="token comment">// 删除文本的命令</span>
<span class="token keyword">class</span> <span class="token class-name">DeleteTextCommand<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Command<span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span> 
  receiver<span class="token operator">:</span> <span class="token constant">R</span>
  deleteText<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  position<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>receiver<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">,</span>deleteText<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>postion<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver
    <span class="token keyword">this</span><span class="token punctuation">.</span>deleteText <span class="token operator">=</span> deleteText
    <span class="token keyword">this</span><span class="token punctuation">.</span>position <span class="token operator">=</span> postion
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token keyword">instanceof</span> <span class="token class-name">Editer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">deleteText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>position<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>deleteText<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token keyword">instanceof</span> <span class="token class-name">Editer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>position<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>deleteText<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 测试插入文本</span>
<span class="token keyword">const</span> editor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Editer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// expect: hello</span>
editor<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39; world&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// expect: hel worldlo</span>

<span class="token comment">// 测试删除文本</span>
editor<span class="token punctuation">.</span><span class="token function">deleteText</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// expect: hello</span>

<span class="token comment">// 测试撤销</span>
editor<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// expect: hel worldlo</span>

<span class="token comment">// 测试重做</span>
editor<span class="token punctuation">.</span><span class="token function">redo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment">// expect: hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2><blockquote><p>组合模式是一种设计模式，它允许你将对象组合成树形结构，以表示“部分-整体”的层次结构。组合模式使得客户端可以以统一的方式处理单个对象以及对象组合，因此在处理对象时可以忽略对象组合与单个对象之间的差异。</p><p>在组合模式中，有两种类型的对象：叶子对象和组合对象。叶子对象是不可再分的基本对象，而组合对象是由多个叶子对象或组合对象组成的树形结构。组合对象可以递归地包含更多的组合对象和叶子对象。</p><p>通过使用组合模式，你可以将对象组织成树形结构，使得客户端可以统一处理单个对象和对象组合。这样，你可以将某些行为委托给树中的对象，从而简化了客户端代码，并且可以在不改变客户端代码的情况下添加新的对象或组合对象。</p><p>总结:</p><p>组合模式是应用与一下场景. 将对象维护成树形结构, 并且在操作树形结构时候, 能够以统一的方式操作叶子节点和非叶子节点. 也就是说, 对于使用者来说, 操作叶子节点和非叶子节点是相同, 至于内部代码是怎么回事, 不需要关系.</p><p>这就需要 1. 组合对象拥有维护叶子节点的数据结构 2. 组合对象和叶子节点具有相同的接口, 使用者根据接口屏蔽两个对象的差异</p></blockquote><p>###组合模式实现导航菜单栏</p><blockquote><p>对于菜单栏需求来说, 叶子节点是每个菜单项. 整个菜单栏的数据结构一定是树形的, 针对这样的场景, 可以考虑用组合模式</p><p>为菜单项提供一个组合对象, 即子菜单栏, 他维护了叶子节点们, 并且跟叶子节点具有相同的接口</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Menu</span> <span class="token keyword">implements</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> children<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span>menuItem<span class="token operator">:</span> MenuItem<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>menuItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span>menuItem<span class="token operator">:</span> MenuItem<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>menuItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建菜单项</span>
<span class="token keyword">const</span> home <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> about <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;About&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> products <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Products&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/products&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> services <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Services&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/services&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建子菜单项</span>
<span class="token keyword">const</span> webDesign <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Web Design&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/services/web-design&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> webDevelopment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Web Development&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/services/web-development&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> seo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;SEO&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/services/seo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将子菜单项添加到 Services 菜单项中</span>
services<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>webDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>
services<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>webDevelopment<span class="token punctuation">)</span><span class="token punctuation">;</span>
services<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>seo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将所有菜单项添加到主菜单中</span>
<span class="token keyword">const</span> mainMenu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Menu</span><span class="token punctuation">(</span><span class="token string">&quot;Main Menu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mainMenu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>home<span class="token punctuation">)</span><span class="token punctuation">;</span>
mainMenu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>about<span class="token punctuation">)</span><span class="token punctuation">;</span>
mainMenu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>products<span class="token punctuation">)</span><span class="token punctuation">;</span>
mainMenu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>services<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印输出菜单</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mainMenu<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react重构菜单导航栏" tabindex="-1"><a class="header-anchor" href="#react重构菜单导航栏" aria-hidden="true">#</a> React重构菜单导航栏</h3><blockquote><p>在这个示例中，我们使用了 React 函数式组件来实现菜单栏。<code>Menu</code> 组件和 <code>MenuItem</code> 组件分别对应组合模式中的组合对象和叶子对象，它们的实现类似于之前的类实现版本。</p><p><code>Menu</code> 组件接受一个菜单项数组 <code>menu</code> 作为属性，遍历 <code>menu</code> 数组，并为每个菜单项渲染一个 <code>MenuItem</code> 组件。<code>MenuItem</code> 组件接受一个菜单项对象 <code>item</code> 作为属性，并根据菜单项是否包含子菜单项来决定渲染方式。</p><p>如果菜单项包含子菜单项，则渲染一个带有子菜单项的列表项，其中包含一个链接和一个 <code>Menu</code> 组件，用于渲染子菜单项。如果菜单项不包含子菜单项，则只渲染一个链接的列表项。由于 <code>MenuItem</code> 组件本身是递归嵌套的，因此可以无限层级地渲染嵌套菜单。</p><p>通过这种方式实现，客户端可以以相同的方式处理菜单项和包含子菜单项的菜单对象，而不需要在处理它们时进行特殊的区分，这符合组合模式的设计思想。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MenuProps</span> <span class="token punctuation">{</span>
  menu<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Menu</span><span class="token punctuation">(</span><span class="token punctuation">{</span> menu <span class="token punctuation">}</span><span class="token operator">:</span> MenuProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>menu<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>MenuItem key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> item<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MenuItemProps</span> <span class="token punctuation">{</span>
  item<span class="token operator">:</span> MenuItem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MenuItem</span><span class="token punctuation">(</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token operator">:</span> MenuItemProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hasChildren <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hasChildren<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Menu menu<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>children<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>url<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p><p>在之前的版本中，<code>Menu</code> 类既可以作为组合对象，又可以作为叶子对象，这并不符合组合模式的设计思想。组合模式的目标是使客户端可以以统一的方式处理单个对象和对象组合，因此组合对象和叶子对象应该有清晰的区分。在之前的版本中，<code>Menu</code> 类即有组合对象的特点（包含子菜单项），也有叶子对象的特点（没有子菜单项时直接渲染菜单项），这就使得客户端在处理 <code>Menu</code> 对象时需要根据其是否包含子菜单项进行特殊的区分，不符合组合模式的设计思想。</p><p>React 版本中，<code>Menu</code> 组件作为组合对象，只包含菜单项数组 <code>menu</code>，而不包含子菜单项。<code>MenuItem</code> 组件作为叶子对象，根据菜单项是否包含子菜单项来决定渲染方式。这样设计符合组合模式的思想，使得客户端在处理菜单时可以以统一的方式处理单个菜单项和包含子菜单项的菜单对象。</p><p>需要注意的是，组合模式并不要求组合对象和叶子对象必须是不同的类或接口，可以根据实际情况灵活设计。重点在于通过组合模式，让客户端可以以统一的方式处理单个对象和对象组合，从而降低系统复杂性。</p><h2 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式" aria-hidden="true">#</a> 模板方法模式</h2><p>模板方法模式（Template Method Pattern）是一种行为型设计模式，它定义了一个操作中的算法骨架，而将一些步骤延迟到子类中实现。模板方法使得子类可以在不改变算法结构的情况下，重新定义算法中某些步骤。</p><p>在模板方法模式中，将算法的骨架定义在抽象类中，而具体实现则交由子类来完成。抽象类中的模板方法会调用多个抽象方法和具体方法，这些方法可以在子类中被重写或者直接继承。通过这种方式，模板方法模式可以让子类在不改变算法结构的情况下，根据需要重新定义算法的具体步骤。</p><p>模板方法模式常用于多个类中有相同的算法，但是其中某些步骤的实现方式可能不同的情况下。通过将相同的算法封装在抽象类中，可以避免代码重复，并且让子类可以根据需要实现不同的步骤，从而实现代码的重用和灵活性。</p><p><strong>总结: 将共同的方法抽取到抽象类中. 抽象类中定义了方法的调用顺序.</strong></p><h3 id="模板方法模式实现todolist" tabindex="-1"><a class="header-anchor" href="#模板方法模式实现todolist" aria-hidden="true">#</a> 模板方法模式实现TodoList</h3><p>todoList可以显示&quot;已完成&quot;, &quot;未完成&quot;, &quot;所有&quot;的待办事项.</p><p>思考一下, 这三个行为都是执行相同的算法流程</p><ol><li>获取原始todo数据</li><li>筛选出已完成/未完成/或者不筛选数据</li><li>渲染到页面上</li></ol><p>所以针对这种, 多个行为具有相同的算法流程的, 可以使用模板方法模式</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  isDone<span class="token operator">:</span><span class="token builtin">boolean</span>
<span class="token punctuation">}</span>


<span class="token comment">// 封装了一些方法, 有些是实现和未实现的. 以及对方法的调用顺序</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">DisplayTodo</span> <span class="token punctuation">{</span> 
  <span class="token function">getTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> todos <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;todo-list&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>todos<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">abstract</span> <span class="token function">filterTodo</span><span class="token punctuation">(</span>todos<span class="token operator">:</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">abstract</span> <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token operator">:</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> 
  
  <span class="token comment">// 模板方法. 封装了算法的调用流程</span>
  <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> htmlString <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
    div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>htmlString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AllTodoDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">DisplayTodo</span> <span class="token punctuation">{</span>
  <span class="token function">filterTodo</span><span class="token punctuation">(</span>todos<span class="token operator">:</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> todos
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让全部怎么渲染..不再写代码</span>
  <span class="token punctuation">}</span> 
  
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DoneTodoDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">DisplayTodo</span> <span class="token punctuation">{</span>
  <span class="token function">filterTodo</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>todo <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让未完成怎么渲染..不再写代码</span>
  <span class="token punctuation">}</span> 
  
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NotDoneTodoDisplay</span> <span class="token keyword">extends</span> <span class="token class-name">DisplayTodo</span> <span class="token punctuation">{</span>
  <span class="token function">filterTodo</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>todo <span class="token operator">=&gt;</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让未完成怎么渲染..不再写代码</span>
  <span class="token punctuation">}</span> 
  
<span class="token punctuation">}</span>


<span class="token comment">// 使用时候.</span>
<span class="token comment">// 当点击&quot;未完成&quot;的按钮时候</span>
<span class="token keyword">new</span> <span class="token class-name">NotDoneTodoDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 当点击&quot;完成&quot;按钮的时候</span>
<span class="token keyword">new</span> <span class="token class-name">DoneTodoDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 当点击&quot;所有&quot;按钮的时候</span>
<span class="token keyword">new</span> <span class="token class-name">AllTodoDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码使用了模板方法模式来封装一个显示 todo list 的逻辑，其中 <code>DisplayTodo</code> 是一个抽象类，实现了 <code>getTodos</code> 方法来从本地存储获取 todo list，同时声明了抽象方法 <code>filterTodo</code> 和 <code>render</code>，需要具体的子类来实现。</p><p>具体的子类 <code>AllTodoDisplay</code>，<code>DoneTodoDisplay</code>，<code>NotDoneTodoDisplay</code> 分别实现了 <code>filterTodo</code> 和 <code>render</code> 方法，来达到不同的显示效果。</p><p>在 <code>DisplayTodo</code> 抽象类中定义了一个 <code>display</code> 方法，使用了模板方法模式，将获取数据、过滤和渲染的具体实现封装在了一个方法中，并规定了调用流程，具体实现交由子类完成。</p><p>最后，通过实例化具体的子类对象，调用 <code>display</code> 方法来展示不同的 todo list 显示效果。</p><h3 id="使用react和模板方法模式重构" tabindex="-1"><a class="header-anchor" href="#使用react和模板方法模式重构" aria-hidden="true">#</a> 使用React和模板方法模式重构</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">isDone</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DisplayTodoProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">todos</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">filterTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 封装了一些方法, 有些是实现和未实现的. 以及对方法的调用顺序</span>
<span class="token keyword">function</span> <span class="token function">DisplayTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> DisplayTodoProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> todos<span class="token punctuation">,</span>filterTodo<span class="token punctuation">,</span>render <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token comment">// 模板方法. 封装了算法的调用流程</span>
  <span class="token keyword">function</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filteredTodos <span class="token operator">=</span> <span class="token function">filterTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>filteredTodos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>html<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">AllTodoDisplay</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> DisplayTodoProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">filterTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> props<span class="token punctuation">.</span>todos<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todos</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让全部怎么渲染..不再写代码</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DisplayTodo</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>todos<span class="token punctuation">}</span></span> <span class="token attr-name">filterTodo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filterTodo<span class="token punctuation">}</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>render<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">DoneTodoDisplay</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> DisplayTodoProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">filterTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> props<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todos</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让完成的怎么渲染..不再写代码</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DisplayTodo</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>todos<span class="token punctuation">}</span></span> <span class="token attr-name">filterTodo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filterTodo<span class="token punctuation">}</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>render<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">NotDoneTodoDisplay</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> DisplayTodoProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">filterTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> props<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>isDone<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todos</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">{</span>
    <span class="token comment">// 这里可以实现, 你想让未完成的怎么渲染..不再写代码</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DisplayTodo</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>todos<span class="token punctuation">}</span></span> <span class="token attr-name">filterTodo</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>filterTodo<span class="token punctuation">}</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>render<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用时候.</span>
<span class="token comment">// 当点击&quot;未完成&quot;的按钮时候</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>todos<span class="token punctuation">,</span> setTodos<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NotDoneTodoDisplay</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todos<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token comment">// 当点击&quot;完成&quot;按钮的时候</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DoneTodoDisplay</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todos<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token comment">// 当点击&quot;所有&quot;按钮的时候</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AllTodoDisplay</span></span> <span class="token attr-name">todos</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todos<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在重构后的代码中，<code>DisplayTodo</code> 组件接收 <code>todos</code> 作为 props，通过函数来实现 <code>filterTodo</code> 和 <code>render</code> 方法。在 <code>display</code> 方法中，调用 <code>filterTodo</code> 和 <code>render</code> 方法来得到要渲染的内容，并将其展示在页面上。</p><p>具体的子组件 <code>AllTodoDisplay</code>、<code>DoneTodoDisplay</code> 和 <code>NotDoneTodoDisplay</code> 分别实现了 <code>filterTodo</code> 和 <code>render</code> 方法，并通过传递这些方法来调用 <code>DisplayTodo</code> 组件进行展示。</p><p>在使用时，只需要将 <code>todos</code> 作为 props 传递给相应的子组件，就可以渲染出相应的 todo list</p><h2 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h2><blockquote><p>享元模式（Flyweight Pattern）是一种结构型设计模式，它通过共享已经存在的对象来减少创建新对象的数量，从而节省内存和提高性能。</p><p>在享元模式中，对象通常被分为两类：内部状态和外部状态。内部状态是对象可以共享的状态，它通常存储在享元对象内部，并且不随环境的变化而改变。外部状态则是对象依赖于环境的状态，它不可以共享，通常由客户端在运行时动态传递给享元对象。</p><p>通过共享内部状态和分离外部状态，享元模式可以大幅度减少对象的数量，从而降低内存的消耗和系统的负担，提高程序的运行效率和性能。</p><p>享元模式通常适用于以下场景：</p><ul><li>当系统中存在大量的相似对象需要创建时，可以使用享元模式来减少对象的数量。</li><li>当创建对象的代价较高，而且多个对象之间可以共享同一状态时，可以使用享元模式来降低系统的开销。</li><li>当需要对对象进行缓存，以提高系统性能和响应速度时，也可以使用享元模式来实现对象的复用和共享。</li></ul></blockquote><blockquote><p>总结 :</p><p>享元模式应该具备两点 1. 根据内部状态缓存对象的工厂 2. 根据外部状态动态添加的状态机</p><p>内部状态指的是, 我们可以根据内部状态将一堆对象分成若干组的属性, 是共享的属性</p><p>外部状态是后期添加的属性, 是每个对象间可能不一样的属性的集合</p></blockquote><h3 id="享元模式实现文件上传" tabindex="-1"><a class="header-anchor" href="#享元模式实现文件上传" aria-hidden="true">#</a> 享元模式实现文件上传</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 上传类, 可以选择上传方式</span>
<span class="token keyword">class</span> <span class="token class-name">Upload</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">uploadType</span><span class="token operator">:</span> string <span class="token comment">// 内部状态</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span>Blob <span class="token comment">// 外部状态动态添加</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>uploadType <span class="token operator">=</span> type
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span>id<span class="token operator">:</span>string <span class="token operator">|</span> number<span class="token punctuation">,</span><span class="token literal-property property">url</span><span class="token operator">:</span>string<span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
      UploadManager<span class="token punctuation">.</span><span class="token function">mergeExternalState</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> fm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      fm<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>file<span class="token punctuation">)</span>
      <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> fm
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// 缓存Upload对象</span>
<span class="token keyword">const</span> UploadFactory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span>Upload<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token operator">!</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Upload</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
      cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>upload<span class="token punctuation">)</span>
      <span class="token keyword">return</span> upload
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 状态机, 动态添加外部状态</span>
<span class="token comment">// 具有 1. 缓存具体Upload的外部状态 2. 合并外部状态 3. 获取Upload对象的功能</span>
<span class="token comment">// 这里其实可以不用缓存外部状态...看实际需求把</span>
<span class="token keyword">const</span> UploadManager <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
  <span class="token comment">// 缓存外部状态</span>
  <span class="token keyword">const</span> externalStateDB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token operator">&lt;</span>any<span class="token punctuation">,</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">getUpload</span><span class="token punctuation">(</span>id<span class="token operator">:</span>string <span class="token operator">|</span> number<span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span>string<span class="token punctuation">,</span> <span class="token literal-property property">file</span><span class="token operator">:</span>Blob<span class="token punctuation">)</span><span class="token operator">:</span> Upload <span class="token punctuation">{</span> 
      <span class="token keyword">const</span> upload <span class="token operator">=</span> UploadFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
      <span class="token comment">// 缓存外部状态</span>
      externalStateDB<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        file
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      
      <span class="token keyword">return</span> upload
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
    <span class="token function">mergeExternalState</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span>string<span class="token punctuation">,</span> <span class="token literal-property property">upload</span><span class="token operator">:</span> Upload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">const</span> externalState <span class="token operator">=</span> externalStateDB<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> externalState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        upload<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> externalState<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 测试</span>
<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> upload <span class="token operator">=</span> UploadManager<span class="token punctuation">.</span><span class="token function">getUpload</span><span class="token punctuation">(</span>id<span class="token operator">++</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;插件&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;ss.text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  upload<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&#39;http://baidu.com&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子它展示了享元模式的基本思想和实现方式。在这个示例中，Upload 类是享元对象，uploadType 属性是内部状态，file 属性是外部状态，外部状态可以在执行 execute 方法时动态添加。通过 UploadFactory 工厂类和 UploadManager 状态机类，可以实现 Upload 对象的缓存和外部状态的合并，从而减少了重复创建对象和减少了内存占用。</p><p>需要注意的是，这个示例仅仅是为了说明享元模式的思想和实现方式，并不一定适用于所有场景。在实际应用中，需要根据具体的业务需求和性能要求来选择是否使用享元模式。</p><h2 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h2><blockquote><p>职责链模式（Chain of Responsibility pattern）是一种行为设计模式，它允许将请求沿着一个处理链进行传递，直到其中一个处理程序能够处理它为止。</p><p>在职责链模式中，多个处理器（也称为处理者）被链接在一起。当一个请求被发出时，它沿着这个链传递，直到有一个处理器能够处理它。每个处理器都有一个处理级别和一个处理策略，如果它不能处理请求，则会将请求转发给链中的下一个处理器，直到找到能够处理请求的处理器为止。</p><p>职责链模式的好处是它可以灵活地扩展和修改处理链，而不影响代码的其余部分。此外，它还可以帮助将复杂的代码逻辑分解为较小的处理单元，使代码更易于维护和测试。</p></blockquote><blockquote><p>实际实现的时候, 一般需要职责链节点向上抽取接口, 规定共同的接口, 方便迭代</p></blockquote><blockquote><p>职责链模式在前端十分常见: 比如axios的拦截器: 将所有请求和响应拦截器存在数组里, 形成顺序数组, 在得到请求配置/响应时候遍历顺序表, 得到最终config或者response</p><p>比如各种第三方库的插件系统: webpack的plugins, vuex的plugins等</p></blockquote><h3 id="职责链模式实现ajax请求中间件" tabindex="-1"><a class="header-anchor" href="#职责链模式实现ajax请求中间件" aria-hidden="true">#</a> 职责链模式实现ajax请求中间件</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span> 
  url<span class="token operator">:</span><span class="token builtin">string</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> object
  method<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span> 
  headers<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  status<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 请求插件的抽象类</span>
<span class="token comment">// 规定了每个中间件都需要维护下个节点的索引</span>
<span class="token comment">// 必须实现插件的调用方法</span>
<span class="token comment">// 提供了调用下个插件的方法(迭代职责链的方法)</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">RequestMiddleWare</span> <span class="token punctuation">{</span> 
  next<span class="token operator">:</span> RequestMiddleWare <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>next<span class="token operator">?</span><span class="token operator">:</span> RequestMiddleWare<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">abstract</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span>Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span> 

  <span class="token keyword">async</span> <span class="token function">handleNextMiddleWare</span><span class="token punctuation">(</span>request<span class="token operator">:</span>Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>next<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;没有下一个中间件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 添加token的插件</span>
<span class="token keyword">class</span> <span class="token class-name">TokenMiddleWare</span> <span class="token keyword">extends</span> <span class="token class-name">RequestMiddleWare</span> <span class="token punctuation">{</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>next<span class="token operator">:</span>RequestMiddleWare<span class="token punctuation">,</span>token<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">super</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>token <span class="token operator">=</span> token
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Autorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleNextMiddleWare</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
<span class="token comment">// 将Bofy序列化的插件</span>
<span class="token keyword">class</span> <span class="token class-name">JSONBodyMiddleware</span>  <span class="token keyword">extends</span> <span class="token class-name">RequestMiddleWare</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>body <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span>
      request<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleNextMiddleWare</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 真正发送请求的方法</span>
<span class="token keyword">class</span> <span class="token class-name">HttpMiddleWare</span> <span class="token keyword">extends</span> <span class="token class-name">RequestMiddleWare</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> Request<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      headers<span class="token operator">:</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">,</span>
      body<span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">,</span>
      method<span class="token operator">:</span> request<span class="token punctuation">.</span>method
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> 
      headers<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">mapHeaders</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">,</span>
      body<span class="token operator">:</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      status<span class="token operator">:</span> response<span class="token punctuation">.</span>status
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
  
  <span class="token function">mapHeaders</span><span class="token punctuation">(</span>headers<span class="token operator">:</span> Headers<span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> h<span class="token operator">:</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span>value<span class="token punctuation">]</span> <span class="token keyword">of</span> headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      h<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> h
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>


<span class="token comment">// 测试代码</span>
<span class="token keyword">const</span> request<span class="token operator">:</span> Request <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">,</span>
  method<span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    hobby<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;吃饭&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;睡觉&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 合成职责链</span>
<span class="token keyword">const</span> chain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TokenMiddleWare</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JSONBodyMiddleware</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HttpMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 将请求传递到职责链每一个地方处理</span>
chain<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式" aria-hidden="true">#</a> 中介者模式</h2><blockquote><p>中介者模式(Mediator Pattern）又称为调解者模式或调停者模式。用一个中介对象封装一 系列的对象交互，中介者使各对象不需要显示地相互作用，从而使其耦合松散，而且可以独立 地改变它们之间的交互。属于行为型模式。</p></blockquote><blockquote><p>中介模式避免了复杂的依赖关系. 所有的对象在改变自身的时候通知中介者, 由中介者封装运算逻辑, 并将逻辑通知到依赖关系的第三方</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">interface</span> <span class="token class-name">IPlane</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">airline</span><span class="token operator">:</span> string
  <span class="token literal-property property">id</span><span class="token operator">:</span> string
  <span class="token literal-property property">tower</span><span class="token operator">:</span>Tower
  <span class="token function">receiveMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">sendMessage</span><span class="token punctuation">(</span>meesage<span class="token operator">:</span>string<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Plane</span> <span class="token keyword">implements</span> <span class="token class-name">IPlane</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">airline</span><span class="token operator">:</span> string
  <span class="token literal-property property">id</span><span class="token operator">:</span> string
  tower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">airline</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>airline <span class="token operator">=</span> airline
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
  <span class="token punctuation">}</span>
  <span class="token function">sendMessage</span><span class="token punctuation">(</span>meesage<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tower<span class="token punctuation">.</span><span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>meesage<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">receiveMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 

<span class="token punctuation">}</span>

<span class="token comment">// 灯塔: 中介者</span>
<span class="token keyword">class</span> <span class="token class-name">Tower</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> tower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Tower<span class="token punctuation">.</span>tower
  <span class="token punctuation">}</span>
  
  <span class="token function">receiveMessage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plane</span><span class="token operator">:</span>Plane<span class="token punctuation">,</span><span class="token literal-property property">message</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message <span class="token operator">===</span> <span class="token string">&#39;降落&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. 判断当前机场是否有空位</span>
      <span class="token comment">// 2. 若有空位..</span>
      <span class="token comment">// 3. 若无空位....</span>
      <span class="token comment">// 4. 通知飞机结果</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>plane<span class="token punctuation">,</span> <span class="token string">&#39;可以降落/不可以降落/其他...&#39;</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">plane</span><span class="token operator">:</span> Plane<span class="token punctuation">,</span> <span class="token literal-property property">meesage</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    plane<span class="token punctuation">.</span><span class="token function">receiveMessage</span><span class="token punctuation">(</span>meesage<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h2><blockquote><p>装饰器模式（Decorator Pattern）是一种结构型设计模式，它允许向一个对象动态地添加新的行为。它是通过将对象包装在一个装饰器类的实例中来实现的。这个装饰器类具有与被包装的对象相同的接口，因此可以无缝地替换原始对象。</p><p>装饰器模式的目的是在不改变现有对象接口的情况下，动态地向对象添加功能。这使得装饰器模式与继承相比具有更大的灵活性，因为继承会将新功能硬编码到对象中，而装饰器模式则允许在运行时动态地添加新功能。</p><p>装饰器模式通常使用组合而非继承来扩展对象的功能，这使得它更加灵活和易于扩展。同时，装饰器模式还遵循了开放封闭原则，即对扩展开放，对修改封闭。这意味着可以通过添加新的装饰器类来扩展对象的功能，而无需修改现有代码。</p></blockquote><h3 id="使用装饰者模式实现前端性能监控" tabindex="-1"><a class="header-anchor" href="#使用装饰者模式实现前端性能监控" aria-hidden="true">#</a> 使用装饰者模式实现前端性能监控</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Monitor</span> <span class="token punctuation">{</span>
  <span class="token function">upload</span><span class="token punctuation">(</span>time<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> startMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> endMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BasePageLoadedMonitor</span> <span class="token keyword">implements</span> <span class="token class-name">Monitor</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">metrics</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> PerformanceEntry<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 获得某个entry</span>
  <span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> startMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> endMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>entry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      performance<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> startMark<span class="token punctuation">,</span> endMark<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>metrics<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> entry
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 上传检测日志</span>
  <span class="token function">upload</span><span class="token punctuation">(</span>time<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>metrics<span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>metrics<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

abstract <span class="token keyword">class</span> <span class="token class-name">BasePageLoadedDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">Monitor</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">monitor</span><span class="token operator">:</span> Monitor

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">monitor</span><span class="token operator">:</span> Monitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>monitor <span class="token operator">=</span> monitor
  <span class="token punctuation">}</span>

  <span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> startMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> endMark<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>monitor<span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> startMark<span class="token punctuation">,</span> endMark<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">upload</span><span class="token punctuation">(</span>time<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>monitor<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">FCPDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BasePageLoadedDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">measure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;first-contentful-paint&#39;</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>PerformanceObserver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        ob<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      ob<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> name<span class="token punctuation">,</span> <span class="token literal-property property">buffered</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LoadedDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BasePageLoadedDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">monitor</span><span class="token operator">:</span> Monitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>monitor<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadedEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadedEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;loaded&#39;</span>
    performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DOMContentLoadedDecorator</span> <span class="token keyword">extends</span> <span class="token class-name">BasePageLoadedDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">monitor</span><span class="token operator">:</span> Monitor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>monitor<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadedEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadedEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;dom-content-loaded&#39;</span>
    performance<span class="token punctuation">.</span><span class="token function">mark</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">measure</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 初始化</span>
<span class="token keyword">interface</span> <span class="token class-name">DecoratorConstructor</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>monitor<span class="token operator">:</span> Monitor<span class="token punctuation">)</span><span class="token operator">:</span> Monitor
<span class="token punctuation">}</span>

<span class="token keyword">const</span> createMonitor <span class="token operator">=</span> <span class="token punctuation">(</span>decorators<span class="token operator">:</span> DecoratorConstructor<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Monitor</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> baseMonitor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BasePageLoadedMonitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> decorators<span class="token punctuation">.</span>reduce<span class="token operator">&lt;</span>Monitor<span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">monitor<span class="token punctuation">,</span> Decorator</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Decorator</span><span class="token punctuation">(</span>monitor<span class="token punctuation">)</span><span class="token punctuation">,</span>
    baseMonitor
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> monitor <span class="token operator">=</span> <span class="token function">createMonitor</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  FCPDecorator<span class="token punctuation">,</span>
  LoadedDecorator<span class="token punctuation">,</span>
  DOMContentLoadedDecorator
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> monitor

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><blockquote><p>工厂模式是一种创建对象的设计模式，它提供了一种通过调用工厂方法来创建对象的方式，而不是直接使用 new 操作符。工厂方法是一个负责创建其他对象的方法，它通常被定义在一个接口或抽象类中，并由具体工厂类实现。</p></blockquote><h3 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h3><blockquote><p>简单工厂模式是最简单的工厂模式, 客户端只需要知道工厂类, 不需要知道原对象. <strong>一个工厂类可以创建不同的产品对象</strong></p></blockquote><blockquote><p>例子: 比如说动态的创建图表, 你可以决定想创建柱状图还是饼状图还是雷达图</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span> 
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// 柱状图</span>
<span class="token keyword">class</span> <span class="token class-name">BarChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染柱状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 饼状图</span>
<span class="token keyword">class</span> <span class="token class-name">PieChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染饼状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 雷达图</span>
<span class="token keyword">class</span> <span class="token class-name">RadarChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;渲染雷达图&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 图表工厂</span>
<span class="token keyword">type</span> <span class="token class-name">ChartType</span> <span class="token operator">=</span> <span class="token string">&quot;radar&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pie&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;bar&quot;</span>
<span class="token keyword">class</span> <span class="token class-name">ChartFactory</span>  <span class="token punctuation">{</span> 
  <span class="token function">create</span><span class="token punctuation">(</span>type<span class="token operator">:</span>ChartType<span class="token punctuation">)</span><span class="token operator">:</span>Chart <span class="token punctuation">{</span> 
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">&quot;radar&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RadarChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> <span class="token string">&quot;pie&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PieChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> <span class="token string">&quot;bar&quot;</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BarChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;请传入正确的表格信息&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端</span>
<span class="token keyword">new</span> <span class="token class-name">ChartFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;pie&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工厂方法模式" tabindex="-1"><a class="header-anchor" href="#工厂方法模式" aria-hidden="true">#</a> 工厂方法模式</h3><blockquote><p>简单工厂模式的优点是写法简单, 可以满足绝大部分需求.</p><p>但也有缺点</p><p>简单工厂的定义是 &quot;一个工厂可以创建不同的产品对象&quot;. 当新增一个产品类时候, 假如我们想通过工厂创建这个对象. 则需要修改原工厂的实现, 违反了开闭原则. 而且一个工厂负责了多个不同对象的创建, 颗粒度也不够细.</p><p>工厂方法模式要求 &quot;一个工厂对应一个产品&quot;, 为了保证多个工厂的相同特性, 需要向上抽取为一个接口(约定工厂方法). 从而解决上述问题</p></blockquote><blockquote><p>将之前的例子改为工厂方法模式</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 抽象产品类</span>
<span class="token keyword">interface</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品类</span>
<span class="token keyword">class</span> <span class="token class-name">BarChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染柱状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PieChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染饼状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RadarChart</span> <span class="token keyword">implements</span> <span class="token class-name">Chart</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染雷达图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ChartFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Chart<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂类</span>
<span class="token keyword">class</span> <span class="token class-name">BarChartFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ChartFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Chart <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BarChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PieChartFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ChartFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Chart <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PieChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RadarChartFactory</span> <span class="token keyword">implements</span> <span class="token class-name">ChartFactory</span> <span class="token punctuation">{</span>
  <span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Chart <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RadarChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端</span>
<span class="token keyword">const</span> barChartFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BarChartFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pieChartFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PieChartFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> radarChartFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RadarChartFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> barChart <span class="token operator">=</span> barChartFactory<span class="token punctuation">.</span><span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pieChart <span class="token operator">=</span> pieChartFactory<span class="token punctuation">.</span><span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> radarChart <span class="token operator">=</span> radarChartFactory<span class="token punctuation">.</span><span class="token function">createChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

barChart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 渲染柱状图</span>
pieChart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 渲染饼状图</span>
radarChart<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 渲染雷达图</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h3><blockquote><p>简单工厂的确非常简单，但是可扩展性和灵活性都比较差，因为当需要添加新的产品时，需要修改工厂类的代码，这违反了开闭原则。同时，简单工厂的颗粒度比较粗，只能创建一类产品。</p><p>工厂方法模式通过将产品的创建交给子类来实现，避免了工厂类的修改，扩展性和灵活性都得到了提升。但是，工厂方法模式也存在一些问题，比如当产品种类非常多时，需要创建大量的工厂类，增加了系统的复杂度。</p><p>抽象工厂模式在工厂方法模式的基础上进行了进一步的抽象，它不仅负责创建一个产品，而是负责创建一族产品。抽象工厂将工厂的方法抽象成了一个接口或抽象类，让具体的工厂来实现创建一族产品的方法。这样，在需要添加新的产品时，只需要添加一个新的产品族和一个新的工厂类即可，不需要修改原有的代码，符合开闭原则。同时，抽象工厂也避免了工厂方法模式中创建大量工厂类的问题。</p></blockquote><blockquote><p>抽象工厂模式, 将不同产品再向上抽取一层, 形成不同的产品簇</p><p>比如之前的例子, 渲染柱状图,饼状图, 雷达图. 可以向上抽取成渲染2d图, 然后一些渲染地球球体, 渲染立体房子..向上抽取成渲染3d图</p><p>而与之对应的工厂的职责也变得不同, 工厂之前值渲染柱状图或是其他什么图, 现在渲染一个产品簇, 比如一个工厂创建渲染2d图的工作, 一个工厂创建3d的工作.</p><p>而在工厂的内部, 再通过方法进行拆分, 一个方法创建一个产品簇的某一个具体的产品.</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 图形接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span> 
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2D图表接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ChartGraph</span> <span class="token keyword">extends</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span> 
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3D图形接口</span>
<span class="token keyword">interface</span> <span class="token class-name">ThreeDGraph</span> <span class="token keyword">extends</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span> 
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2D图表产品簇</span>
<span class="token keyword">class</span> <span class="token class-name">BarChart</span> <span class="token keyword">implements</span> <span class="token class-name">ChartGraph</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染柱状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PieChart</span> <span class="token keyword">implements</span> <span class="token class-name">ChartGraph</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染饼状图&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3D图形产品簇</span>
<span class="token keyword">class</span> <span class="token class-name">Earth3D</span> <span class="token keyword">implements</span> <span class="token class-name">ThreeDGraph</span> <span class="token punctuation">{</span> 
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;地球3d图形实现&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CityBuild3D</span> <span class="token keyword">implements</span> <span class="token class-name">ThreeDGraph</span> <span class="token punctuation">{</span> 
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;城市3d立体图形实现&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2D工厂</span>
<span class="token keyword">class</span> <span class="token class-name">TwoDFactory</span> <span class="token punctuation">{</span> 
  <span class="token function">createPie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> PieChart <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PieChart</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">createBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> BarChart <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BarChart</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3D工厂</span>
<span class="token keyword">class</span> <span class="token class-name">ThreeDFactory</span> <span class="token punctuation">{</span> 
  <span class="token function">createEarth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Earth3D <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Earth3D</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">createCity3D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CityBuild3D <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CityBuild3D</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式" aria-hidden="true">#</a> 状态模式</h2><blockquote><p>状态模式（State Pattern）是一种设计模式，它允许对象在其内部状态发生变化时改变其行为。状态模式是一种行为型模式，它将对象的行为封装在不同的状态对象中，从而使得对象在运行时可以根据其内部状态而改变行为，而不需要使用大量的条件判断语句。</p></blockquote><h3 id="状态模式与订单系统" tabindex="-1"><a class="header-anchor" href="#状态模式与订单系统" aria-hidden="true">#</a> 状态模式与订单系统</h3><blockquote><p>在订单系统中, 订单的状态可能有很多 &quot;待支付&quot; &quot;已支付&quot; &quot;待收获&quot; &quot;已收货&quot;. 而且随着业务的增进, 也有可能出现更多的状态, 比如&quot;已使用优惠券&quot; &quot;618折扣订单&quot;等.... 这时候使用状态模式很好</p><p>状态模式允许对象在状态改变的时候, 做副作用.</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  order<span class="token operator">:</span>Order
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PendingPaymentState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> order<span class="token operator">:</span>Order<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在支付...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>paidState<span class="token punctuation">)</span> <span class="token comment">// 切换状态</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PaidState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> order<span class="token operator">:</span>Order<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在付款...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>pendingTakeState<span class="token punctuation">)</span> <span class="token comment">// 切换状态</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PendingTakeState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> order<span class="token operator">:</span>Order<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在收货...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>takedGoodsState<span class="token punctuation">)</span> <span class="token comment">// 切换状态</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">TakedGoodsState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> order<span class="token operator">:</span>Order<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;收货完成....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>order<span class="token punctuation">.</span>pendingPaymentState<span class="token punctuation">)</span> <span class="token comment">// 切换状态</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
   pendingPaymentState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PendingPaymentState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
   paidState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaidState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
   pendingTakeState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PendingPaymentState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
   takedGoodsState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TakedGoodsState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

  <span class="token keyword">private</span> currentState<span class="token operator">:</span> State <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pendingPaymentState

  <span class="token comment">// 支付接口</span>
  <span class="token function">makePayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pendingPaymentState
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 收货接口</span>
  <span class="token function">takeGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pendingTakeState
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">setState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> State<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> state
  <span class="token punctuation">}</span>
  
  <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentState
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><blockquote><p>适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个已存在的接口转化为客户端需要的接口，以解决接口不兼容的问题。适配器模式通过封装一个类，将客户端的请求转化为另一个接口，从而使得不兼容的接口可以协同工作。</p></blockquote><h3 id="适配器模式的前端应用" tabindex="-1"><a class="header-anchor" href="#适配器模式的前端应用" aria-hidden="true">#</a> 适配器模式的前端应用</h3><blockquote><p>前端中适配器模式十分常见</p><p>我们从后端拉取数据, 渲染到页面上这个过程中, 经常会遇到后端给的数据多了, 给的数据的字段和组件库要的字段不一致, 或者你所需要的数据来源于两个接口请求, 需要手动合并的情况</p><p>这时候就可以使用适配器模式, 将后端的接口转成组件库要的接口</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 后端数据接口</span>
<span class="token keyword">interface</span> <span class="token class-name">PersonData</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span><span class="token builtin">string</span>
  name<span class="token operator">:</span><span class="token builtin">string</span>
  gender<span class="token operator">:</span><span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span>
  age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// 请求方法, 拉取后端数据</span>
<span class="token keyword">const</span> getPersons <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span>PersonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    method<span class="token operator">:</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&#39;xxxx&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
<span class="token punctuation">}</span>

<span class="token comment">// 前端页面组件, react编写</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useState<span class="token punctuation">,</span>useEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// antd要的表格数据</span>
<span class="token keyword">interface</span> <span class="token class-name">TableData</span>  <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  gender<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器, 将后端数据转为前端数据</span>
<span class="token comment">// 不一定用类实现, 用函数更简单.</span>
<span class="token keyword">class</span> <span class="token class-name">PersonsAdaptor</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">adapt</span><span class="token punctuation">(</span>persons<span class="token operator">:</span>PersonData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span>TableData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> persons<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token operator">:</span> person<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      name<span class="token operator">:</span>person<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      age<span class="token operator">:</span>person<span class="token punctuation">.</span>age<span class="token punctuation">,</span>
      gender<span class="token operator">:</span>person<span class="token punctuation">.</span>age <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;男&#39;</span><span class="token operator">:</span><span class="token string">&#39;女&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>persons<span class="token punctuation">,</span>setPersons<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> colums <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;姓名&quot;</span><span class="token punctuation">,</span>
      dataIndex<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;年龄&quot;</span><span class="token punctuation">,</span>
      dataIndex<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">,</span>
      dataIndex<span class="token operator">:</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">&quot;gender&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getPersons</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> persons <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getPersons</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    persons <span class="token operator">=</span> PersonsAdaptor<span class="token punctuation">.</span><span class="token function">adapt</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span> <span class="token comment">//适配器转换接口</span>
    <span class="token function">setPersons</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getPersons</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Table datasource<span class="token operator">=</span><span class="token punctuation">{</span>persons<span class="token punctuation">}</span> colums<span class="token operator">=</span><span class="token punctuation">{</span>colums<span class="token punctuation">}</span><span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,159),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","设计模式.html.vue"]]);export{k as default};
