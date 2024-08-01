import{_ as e}from"./a1-007762be.js";import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as t,d as a,e as n,f as s}from"./app-1a768e6a.js";const d={},c=a(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C++</h1><h2 id="vs操作" tabindex="-1"><a class="header-anchor" href="#vs操作" aria-hidden="true">#</a> VS操作</h2><h3 id="vs中如何格式化代码" tabindex="-1"><a class="header-anchor" href="#vs中如何格式化代码" aria-hidden="true">#</a> vs中如何格式化代码</h3><p>在 Visual Studio 中，可以使用内置的格式化功能来格式化代码。以下是格式化代码的步骤：</p><ol><li>打开要格式化的文件。</li><li>选择要格式化的代码部分。您可以选择整个文件或仅选择某个部分。</li><li>打开“编辑”菜单，并选择“高级”-&gt;“格式化文档”或“格式化选定内容”。</li><li>等待 Visual Studio 格式化代码。</li><li>查看代码格式是否符合您的要求。如果不符合，可以撤销格式化，或者尝试不同的格式化选项。</li></ol><p>另外，您也可以使用快捷键 Ctrl + K，Ctrl + D 来格式化整个文档，或者使用 Ctrl + K，Ctrl + F 来格式化选定的文本。如果您想要自定义代码格式化选项，可以打开“工具”菜单-&gt;“选项”，然后选择“文本编辑器”-&gt;“C#”-&gt;“代码样式”来进行设置。</p><h3 id="vs中注释的快捷键" tabindex="-1"><a class="header-anchor" href="#vs中注释的快捷键" aria-hidden="true">#</a> vs中注释的快捷键</h3><p>在 Visual Studio 中，有以下两种常用的快捷键可以注释代码：</p><ol><li>注释选定的行或代码块：选定要注释的行或代码块，然后按下快捷键 Ctrl + K，Ctrl + C。</li><li>取消选定行或代码块的注释：选定要取消注释的行或代码块，然后按下快捷键 Ctrl + K，Ctrl + U。</li></ol><p>需要注意的是，这些快捷键在不同的语言和文件类型中可能会有所不同，因此请确保您在正确的上下文中使用这些快捷键。另外，如果您希望自定义这些快捷键，可以打开“工具”菜单-&gt;“选项”，然后选择“环境”-&gt;“键盘”，在搜索框中输入“注释”来查找并更改相应的快捷键设置。</p><h2 id="vs中只编译不运行的快捷键" tabindex="-1"><a class="header-anchor" href="#vs中只编译不运行的快捷键" aria-hidden="true">#</a> vs中只编译不运行的快捷键</h2><p>在 Visual Studio 中，可以使用以下快捷键只编译代码而不运行程序：</p><ol><li>编译当前项目：按下快捷键 <code>Ctrl + Shift + B</code>，即可编译当前项目。</li><li>编译当前打开的文件：选中当前打开的文件，然后按下快捷键 <code>Ctrl + F7</code>，即可编译当前文件。</li></ol><p>需要注意的是，这些快捷键在不同版本的 Visual Studio 中可能会有所不同，因此请根据您使用的版本和上下文选择相应的快捷键。另外，编译后的程序需要手动运行，可以通过在命令行窗口中输入程序的可执行文件名来运行程序。</p><h2 id="c-基础模板" tabindex="-1"><a class="header-anchor" href="#c-基础模板" aria-hidden="true">#</a> c++基础模板</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std; // 使用命名空间std. 则cout就不用std::cout了

int main()
{
	cout &lt;&lt; &quot;你好&quot; &lt;&lt; endl; //cout想控制台输出. endl代表一行结束. &lt;&lt; 分隔符
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><h3 id="宏常量" tabindex="-1"><a class="header-anchor" href="#宏常量" aria-hidden="true">#</a> 宏常量</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

//1. 宏常量不用声明类型. 不正确:#define double PI 3.1415926
//2. 宏常量不用等号 不正确: #define PI = 3.1415926
//3. 宏常量后不能使用分号.不正确: #define PI = 3.1415926;
//4. 宏常量拥有全局作用域
#define PI 3.1415926

int main()
{
	cout &lt;&lt; PI &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const-修饰的常量" tabindex="-1"><a class="header-anchor" href="#const-修饰的常量" aria-hidden="true">#</a> const 修饰的常量</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{
	const double PI = 3.1415926; // 在数据类型前加const关键词
	cout &lt;&lt; PI &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bool类型的隐式转换" tabindex="-1"><a class="header-anchor" href="#bool类型的隐式转换" aria-hidden="true">#</a> bool类型的隐式转换</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{  
	// 在c++中, false == 0, true == 1. 真值会被隐式转换为1, 假值会被隐式转换为0
	const bool b1 = 0; // 0
	const bool b2 = 1; // 1
	const bool b3 = 12314; // 1
	const bool b4 = &quot;12312&quot;; // 1
	const bool b5 = true; // 1
	const bool b6 = false; // 0
	const bool b7 = NULL; // 0

	cout &lt;&lt; &quot;b1: &quot; &lt;&lt; b1 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b2: &quot; &lt;&lt; b2 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b3: &quot; &lt;&lt; b3 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b4: &quot; &lt;&lt; b4 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b5: &quot; &lt;&lt; b5 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b6: &quot; &lt;&lt; b6 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; &quot;b7: &quot; &lt;&lt; b7 &lt;&lt; &quot;\\n&quot;
		&lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 在括号中会自动隐式转换</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;你好&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-11初始化" tabindex="-1"><a class="header-anchor" href="#c-11初始化" aria-hidden="true">#</a> c++11初始化</h2><blockquote><p>在linux环境下需要加 -std=c++11</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{  
	// 小括号赋值
	int num1(10);
	bool flag(true);
	string text(&quot;你好&quot;);

	// 中括号赋值
	double price{ 5.2 };
	string html{ &quot;&lt;span&gt;你好&lt;/span&gt;&quot; };

	cout&lt;&lt; 
		num1 &lt;&lt; &quot;\\n&quot; &lt;&lt;
		flag &lt;&lt; &quot;\\n&quot; &lt;&lt;
		text &lt;&lt; &quot;\\n&quot; &lt;&lt;
		price &lt;&lt; &quot;\\n&quot; &lt;&lt;
		html &lt;&lt; &quot;\\n&quot; &lt;&lt;
	endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-11初始化晋级" tabindex="-1"><a class="header-anchor" href="#c-11初始化晋级" aria-hidden="true">#</a> c++11初始化晋级</h2><p>结构体中与类的初始化</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Point p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 结构体初始化</span>
Point p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>     <span class="token comment">// 所有成员初始化为默认值</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&amp;</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">name</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">age</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Person person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 类初始化，调用构造函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值中的应用</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	string name<span class="token punctuation">;</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Person <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">17</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Vector2D</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>

    Vector2D <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Vector2D<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>x <span class="token operator">+</span> other<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> other<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-11原始字面量" tabindex="-1"><a class="header-anchor" href="#c-11原始字面量" aria-hidden="true">#</a> c++11原始字面量</h2><blockquote><p>更方便的描述字符串</p></blockquote><p>语法:</p><p>\`\`string str1 = R “表述(raw string)表述”\`</p><p>特点:</p><ol><li>可以换行, 无视转义反斜杠</li><li>括号两旁的注释字符串必须相同</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	
	// 支持换行, span必须是两对, 五十反斜杠
	string str1 = R&quot;span( 
		&lt;span&gt;
			你好
		&lt;/span&gt;	
	)span&quot;;

	cout &lt;&lt; str1 &lt;&lt; endl;
}

void main() {
	string str = R&quot;(\\n)&quot;; // 无视反斜杠, 两侧注释可以省略
	cout &lt;&lt; str &lt;&lt; endl; // 输出\\n
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goto语句" tabindex="-1"><a class="header-anchor" href="#goto语句" aria-hidden="true">#</a> goto语句</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

// c++中可以给起行号
int main()
{
row1:
	cout &lt;&lt; &quot;这是第一行&quot; &lt;&lt; endl;
	goto row3;  // 跳转到第三行
row2:
	cout &lt;&lt; &quot;这是第二行&quot; &lt;&lt; endl;
row3:
	cout &lt;&lt; &quot;这是第三行&quot; &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><h3 id="全局作用域" tabindex="-1"><a class="header-anchor" href="#全局作用域" aria-hidden="true">#</a> 全局作用域</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

// 全局作用域
int MAX_AGE = 20000;

int main()
{
	cout &lt;&lt; MAX_AGE &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域" aria-hidden="true">#</a> 函数作用域</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

void func1();
void func2();

int main()
{
	func1();
	func2();
}

void func1()
{
	int a = 1;
}

void func2()
{
	cout &lt;&lt; a &lt;&lt; endl; // 报错不能访问另外函数中a
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块作用域" tabindex="-1"><a class="header-anchor" href="#块作用域" aria-hidden="true">#</a> 块作用域</h3><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{
	if (true)
	{
		int a = 1;
	};

	cout &lt;&lt; a &lt;&lt; endl; // 不能访问a
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-中的分号" tabindex="-1"><a class="header-anchor" href="#c-中的分号" aria-hidden="true">#</a> c++中的分号</h2><p>在 C++ 中，语句以分号（;）结尾。一般来说，除了以下几种情况，所有语句都需要以分号结尾：</p><ol><li><p>类的定义</p><p>类的定义中，不需要在最后的右括号后加分号。</p></li><li><p>函数定义</p><p>函数定义的末尾不需要加分号，只需要在函数体的末尾加上右花括号即可。</p></li><li><p>条件编译指令</p><p>条件编译指令中，不需要在末尾加上分号。</p></li></ol><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cppCopy code
#ifdef DEBUG
    std::cout &lt;&lt; &quot;Debugging is enabled.&quot; &lt;&lt; std::endl;
#endif

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>初始值设定项</p><p>在变量定义时，如果使用初始值设定项（使用 = 符号赋值），则不需要在末尾加上分号。例如：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cppCopy code
int a = 1, b = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>跳出语句</p><p>跳出语句（如 break、continue 和 return）在语句末尾不需要加分号，因为它们本身就是语句的结束符。</p><p>总之，大多数情况下，C++ 中的语句都需要以分号结尾，只有上述特殊情况下才不需要。</p></li></ol><h2 id="static-修饰的静态变量" tabindex="-1"><a class="header-anchor" href="#static-修饰的静态变量" aria-hidden="true">#</a> static 修饰的静态变量</h2><blockquote><p>函数内的静态变量只能被该函数访问.</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

void fn1();

int main()
{
	fn1(); // 1
	fn1(); // 2
	fn1(); // 3
}

void fn1()
{
	static int a = 1;
	cout &lt;&lt; a++ &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问全局变量" tabindex="-1"><a class="header-anchor" href="#访问全局变量" aria-hidden="true">#</a> :: 访问全局变量</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

void fn1();

int main()
{
	fn1(); 
}

int a = 2;
void fn1()
{
	// 在变量前加 ::变量名, 代表访问全局变量
	int a = 1;
	cout &lt;&lt; a &lt;&lt; endl; // 输出1 
	cout &lt;&lt; ::a &lt;&lt; endl; // 输出2 
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-算数运算的细节" tabindex="-1"><a class="header-anchor" href="#c-算数运算的细节" aria-hidden="true">#</a> c++算数运算的细节</h2><p><strong>除数不要为0</strong></p><ol><li>整型除法(包括取模运算), 被除数为0, 程序异常退出</li><li>浮点数除法, 被除数为0, 结果无限大</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main()
{
	int a = 1;
	int b = 0;
	cout &lt;&lt; a / b &lt;&lt; endl; // 程序异常退出
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main()
{
	int a = 1;
	double b = 0; // 浮点数0
	cout &lt;&lt; a / b &lt;&lt; endl; // 输infinite
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>除法运算的类型</strong></p><ol><li>整数与浮点数运算 = 浮点数</li><li>整数 / 整数 = 整数</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main()
{
	int a = 1;
	double b = 0.1;
	cout &lt;&lt; a + b &lt;&lt; endl; // 1.1
  	cout &lt;&lt; a * b &lt;&lt; endl; // 0.1
  	cout &lt;&lt; 200 / 3 &lt;&lt; endl;  // 输出66 整型
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数分文件编写" tabindex="-1"><a class="header-anchor" href="#函数分文件编写" aria-hidden="true">#</a> 函数分文件编写</h2><blockquote><p>函数在实际开发中一般分文件编写</p></blockquote><ol><li><p>.h 文件是头文件, 存放函数/结构体/类的定义和引入其他的头文件</p></li><li><p>.cpp文件是程序文件, 存放函数/结构体/类的实现, 和引入自己的头文件</p></li><li><p>主程序在使用时候只需要引入对应的头文件</p></li><li><p>引入系统头文件使用#include&lt;文件名&gt; 引入自定义头文件使用#include &quot;文件名&quot;</p></li></ol><p>hello.h头文件</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#pragma once
#include &lt;iostream&gt;
using namespace std;

void sayHello();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hello.cpp 文件</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &quot;hello.h&quot;;

void sayHello()
{
	cout &lt;&lt; &quot;你好&quot; &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main函数</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &quot;hello.h&quot;
using namespace std;


int main()
{
	sayHello();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vs-debug程序" tabindex="-1"><a class="header-anchor" href="#使用vs-debug程序" aria-hidden="true">#</a> 使用VS debug程序</h2><blockquote><ol><li>在断点程序前√红圆圈</li><li>开启本地调试</li><li>在菜单栏中控制程序的运行</li></ol></blockquote><img src="`+e+'"><h2 id="sizeof-测量变量-数据类型的内存大小" tabindex="-1"><a class="header-anchor" href="#sizeof-测量变量-数据类型的内存大小" aria-hidden="true">#</a> sizeof 测量变量/数据类型的内存大小</h2><ol><li>可以测量数据类型本身: sizeof(int)</li><li>可以测量变量/字面量: sizeof(a) sizeof(10)</li><li>测量变量/字面量时可以不加(), 但是测量数据类型本身必须加() : sizeof(a) 或者 sizeof a 都可以</li><li>得到的是所占内存的字节数, 数据类型是int</li><li>相同数据类型在不同操作系统中所占内存大小 <mark>可能</mark> 不同</li></ol><h2 id="c-的数据类型" tabindex="-1"><a class="header-anchor" href="#c-的数据类型" aria-hidden="true">#</a> c++ 的数据类型</h2><p>c++中基本数据类型分成四大种</p><ol><li>整数型</li><li>字符型</li><li>布尔型</li><li>浮点型</li></ol><p>基础知识:</p><ol><li>bit == 位. 计算机靠二进制存储数据, 如 001, 其中每一位就称为1bit, 1bit只有两种可能, 0或者1</li><li>byte == 字节. 字节是计算机存储容量的一种计量单位. 一字节有8位/bit. 举例如: 0000 0000</li></ol><p>整数型</p><ul><li>根据数值的大小分有三种short, int, long, 以及加上unsigned代表对应的无符号的数据类型. 共计6种</li><li>c++11推出了long long表示更大的整数类型.</li></ul><p>整数类型所占内存大小</p>',92),u=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"数据类型"),n("th",null,"解释"),n("th",null,"所占字节"),n("th",null,"取值范围"),n("th",null,"备注")])]),n("tbody",null,[n("tr",null,[n("td",null,"unsigned short"),n("td",null,"无符号short"),n("td",null,"2"),n("td",null,"[0, 65535]"),n("td",null,[s("1个byte == 8bit. 那么2字节有16位, 共能存储 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2"),n("mrow",null,[n("msup",null,[n("mrow"),n("mn",null,"16")]),n("mo",null,"="),n("mn",null,"65536")])]),n("annotation",{encoding:"application/x-tex"},"2{^{16} = 65536}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"16")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord"},"65536")])])])]),s("个数字, 故取值范围为 [0, 65535]")])]),n("tr",null,[n("td",null,"short"),n("td",null,"有符号short"),n("td",null,"2"),n("td",null,"[-32768, 32767]"),n("td",null,[s("因为带符号, 最高位代表符号位.故正数能存储 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2"),n("mrow",null,[n("msup",null,[n("mrow"),n("mn",null,"15")]),n("mo",null,"="),n("mn",null,"32768")])]),n("annotation",{encoding:"application/x-tex"},"2{^{15} = 32768}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"15")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord"},"32768")])])])]),s(" 个数字, 负数也能存储"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"2"),n("mrow",null,[n("msup",null,[n("mrow"),n("mn",null,"15")]),n("mo",null,"="),n("mn",null,"32768")])]),n("annotation",{encoding:"application/x-tex"},"2{^{15} = 32768}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"15")])])])])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mord"},"32768")])])])]),s("个数字. 给取值范围为[-32768, 32767]")])]),n("tr",null,[n("td",null,"int"),n("td",null,"有符号int"),n("td",null,"4"),n("td",null,"--略--"),n("td",null,"-- 略---")]),n("tr",null,[n("td",null,"unsigned int"),n("td",null,"无符号int"),n("td",null,"4"),n("td",null,"--略--"),n("td",null,"-- 略---")]),n("tr",null,[n("td",null,"long"),n("td",null,"有符号long"),n("td",null,"32位操作系统 4字节;64位操作系统 8字节;"),n("td",null,"--略--"),n("td",null,"-- 略---")]),n("tr",null,[n("td"),n("td"),n("td"),n("td"),n("td")]),n("tr",null,[n("td",null,"unsigned long"),n("td",null,"无符号long"),n("td",null,"32位操作系统 4字节;64位操作系统 8字节;"),n("td",null,"--略--"),n("td",null,"-- 略---")]),n("tr",null,[n("td",null,"long long"),n("td",null,"有符号long long"),n("td",null,"8"),n("td",null,"--略--"),n("td",null,"-- 略---")])])],-1),p=a(`<p>字符型</p><ol><li>字符型所占1字节. 有符号signed char范围为[-128, 127], 无符号字符unsigned范围为[0, 255]</li><li>字符型本质是将字符转为对应的ASCII码整数, 存储这个整数</li><li>字符可以强转成整形</li><li>在c++中可以写c风格(char[])的字符串, 也可以写c++风格字符串(string)</li></ol><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	char a = 97; // 输出a, 证明char本质是ASCII码存储
	cout &lt;&lt; a &lt;&lt; endl; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	char str1[]  = &quot;我是字符串&quot;; // c风格字符串, char数组
	string str2 = &quot;我是字符串2&quot;; // c++风格字符串
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布尔型</p><ol><li>布尔型所占1字节</li><li>布尔型底层用0代表false, 用1代表true</li></ol><p>浮点型</p><ol><li>float 所占4字节, 有效位数为7位</li><li>double所占8字节, 有效位数15位</li><li>long double 所占字节与有效位数不低于double, VS中占8字节, Linux占16字节</li><li>有效位数记忆小技巧: 2 * 字节数 - 1</li><li>有效数既包括小数点前的数, 也包括小数点后的数</li></ol><h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h2><blockquote><p>c++中的数据类型转换分为两种</p><ol><li>自动数据类型转换</li><li>强制数据类型转换</li></ol></blockquote><p><strong>自动类型转换</strong></p><ol><li><p>多种数据类型运算, 向高类型转换</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	char a(&#39;a&#39;); // 97
	int b(10); // 10
	double c(20.0);// 20.0

	// 朝更高精度计算, 输出127.000000000000
	cout &lt;&lt; sizeof (a + b + c) &lt;&lt; endl; // 8字节, double数据类型
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>整形和浮点数运算必得浮点数, 即使整形所占字节大. 优先级比第一条规则高</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	long long num1 = 1000; //占8字节
	float num2 = 3.2; // 占4字节

	cout &lt;&lt; num1 - num2 &lt;&lt; endl; // 996.8
	cout &lt;&lt; sizeof(num1 - num2) &lt;&lt; endl; // 4字节, 即float
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>声明与字面量类型不同时候会自动转化类型, 以声明为主</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>
int main()
{
	int a = 3.1415;

	cout &lt;&lt; a &lt;&lt; endl; // 输出3, 将浮点数字面量转成了int, 并且丢失了精度
	cout &lt;&lt; sizeof(a) &lt;&lt; endl; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li></ol><p><strong>强制类型转换</strong></p><p>在类型前可以强制类型转换</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	int a = (int)3.1415;

	cout &lt;&lt; a &lt;&lt; endl; 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2><blockquote><p>给系统的类型起别名, 方便使用</p></blockquote><p>作用1: 类型写的字符太多了, 很麻烦, 可以用类型别名定义标识符</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	// 无符号整形
	typedef unsigned int uint;
	// 长整形
	typedef long long llong;
	// 无符号长整形
	typedef unsigned long long ullong;

	uint a = 255;
	llong b = 655;
	ullong c = 2000;

	cout &lt;&lt; a &lt;&lt; endl;
	cout &lt;&lt; b &lt;&lt; endl;
	cout &lt;&lt; c &lt;&lt; endl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>作用2: 屏蔽不同系统的类型所占内存大小, 做兼容</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	// 在windows中longlong占8字节, 64位
	typedef long long int64_t; // 定义1

	// 在linux中long占8字节, 64位
	typedef long int64_t; // 定义2

	// 在程序中只使用int64_t, 在windows下引入第一个定义, 在linux下引入第二个定义
	// 就可以消除在windows上使用long为4字节, 在linux下使用long为8字节可能带来的风险
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针" tabindex="-1"><a class="header-anchor" href="#指针" aria-hidden="true">#</a> 指针</h2><blockquote><p>指针是变量所占内存的第一个内存地址, 比如一个int所占4字节, 指针保存的就i是int第一个字节的内存地址</p></blockquote><ol><li><p>取地址符号: &amp;变量. 即可取出变量的内存地址, 16进制保存</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	int a = 10;
	cout &lt;&lt; &amp;a &lt;&lt; endl; // 0000009868CFFAD4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li><li><p>指针语法: 数据类型 * 名称 = 内存地址</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	int b = 200;
	int* a = &amp;b; // 指针只能保存内存地址, 所以要先取地址再赋值

	cout &lt;&lt; a &lt;&lt; endl; //000000FBCD12F8E4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li><li><p>指针大小</p><ul><li>32位操作系统下, 指针永远占4字节, 无论什么数据类型</li><li>64位操作系统下, 指针永远占8字节, 无论什么数据类型</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
    int b = 200;
	int* a = &amp;b; 

	cout &lt;&lt; sizeof a &lt;&lt; endl; //输出8; int为4字节, 但是指针的内存在64操作系统下不管什么数据类型都占8字节
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li><li><p>cout 输出指针会导致输出字符串, 可以采用void * 强转, 或者转为long long十进制</p></li></ol><h2 id="指针操作" tabindex="-1"><a class="header-anchor" href="#指针操作" aria-hidden="true">#</a> 指针操作</h2><p><strong>通过指针修改数据</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{ 
	int num = 10;
	int* num_ptr = &amp;num;
	*num_ptr = 20; // 通过指针修改数据
	cout &lt;&lt; num &lt;&lt; endl;  //20
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数地址传递VS值传递</strong></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void func(int num1, int* num2)
{
	num1 = 200;
	cout &lt;&lt; &quot;num1:&quot; &lt;&lt; num1 &lt;&lt; endl; //值传递
	*num2 = 200;
	cout &lt;&lt; &quot;num2:&quot; &lt;&lt; num2 &lt;&lt; endl; //引用传递
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针与常量" tabindex="-1"><a class="header-anchor" href="#指针与常量" aria-hidden="true">#</a> 指针与常量</h2><p><strong>常量指针</strong></p><p>语法: const int* num1<br> 特点: 不能通过解引用修改值, 可以重新赋值<br> 应用特点: 函数中的形参指针, 表示不修改此指针中的值</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>void func(const int* num1)
{	
	int num2 = 200;
	num1 = &amp;num2; // 可以重新赋值指针
	*num1 = 200; // 编译器报错: 表达式必须是可修改的左值

}
int main()
{
	int num1 = 10;
	func(&amp;num1);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>指针常量</strong></p><p>语法: int* const num</p><p>特点: 指针不能重新赋值, 可以通过解引用重新赋值. 而且初始化的时候必须赋初始值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>int <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	int num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token comment">// int* const num2; // 不初始化报错</span>
	int<span class="token operator">*</span> <span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">;</span>
	<span class="token operator">*</span>num2 <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// 可以解引用赋值</span>
	num2 <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">// 不能对指针重新赋值</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常指针常量</strong></p><p>语法: const int* const num</p><p>特点: 既不能给指针重新赋值, 也不通过解引用重新赋值. 而且初始化的时候必须赋初始值</p><h2 id="任意指针" tabindex="-1"><a class="header-anchor" href="#任意指针" aria-hidden="true">#</a> 任意指针</h2><p>语法: void* 指针名</p><p>特点: 任意指针可以是任意的数据类型的指针., 但解引用且必须强制类型转换成具体类型</p><p>应用场景: 不适合写死的函数的形参指针</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

void func(void* ptr) 
{
	cout &lt;&lt; R&quot;(ptr的内存地址是: )&quot; &lt;&lt; ptr &lt;&lt; endl;
	// *ptr = 10; // 不能直接解引用, 需要强制类型转换
	*(int*)ptr = 200; // 先强转为具体类型, 再解引用
}
int main()
{
	int num1 = 10;
	func(&amp;num1);
	cout &lt;&lt; num1 &lt;&lt; endl;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new和delete控制堆内存空间" tabindex="-1"><a class="header-anchor" href="#new和delete控制堆内存空间" aria-hidden="true">#</a> new和delete控制堆内存空间</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main()
{
	int* num1 = new int(10); 
	delete num1; // 释放num1的内存空间
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空指针与野指针" tabindex="-1"><a class="header-anchor" href="#空指针与野指针" aria-hidden="true">#</a> 空指针与野指针</h2><p><strong>空指针</strong></p><p>定义: 指针指向的地址为空的指针</p><p>特点: 0和NULL和nullptr都可以作为空指针, 对空指针解引用会引发程序崩溃</p><p>应用: 为了保证程序的健壮, 在代码中增加对空指针的判断</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int main()
{
	int* p1 = NULL;
	int* p2 = 0;
	int* p3 = nullptr; // c11新增初始化空指针的方式
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>野指针</strong></p><p>定义: 没有明确指向地址的指针</p><p>特点: 对野指针解引用 <mark>可能</mark> 会导致程序崩溃</p><p>出现场景:</p><ol><li><p>未给指针赋初始值, 后面也忘了, 拿来就用</p><ul><li>解决方法: 赋值为空指针</li></ul></li><li><p>delete了指针, 但是忘了, 还继续用</p><ul><li>delete指针后, 让指针指向空</li></ul></li><li><p>函数返回了栈内变量的地址</p><ul><li>不返回就可以</li></ul></li><li><p>c++将arr[i]解释为指针, 当指针越界时候即为野指针</p></li></ol><h2 id="函数指针与回调函数" tabindex="-1"><a class="header-anchor" href="#函数指针与回调函数" aria-hidden="true">#</a> 函数指针与回调函数</h2><p>语法:</p><p>int (* callback)(int num1, int num2);</p><p>返回值类型 (指针变量名) (形参列表)</p><p>特点: 其中形参列表中的变量名可以省略.</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;stdio.h&gt;
#include &lt;iostream&gt;
using namespace std;


void animation(int delay, void (*cb)(bool flag)) {
	cout &lt;&lt; delay &lt;&lt; &quot;s后执行&quot; &lt;&lt; endl;
	// cb(true); // c++风格回调
	cb(true); // c++风格回调
	(*cb)(true); // c风格回调
}

void cb(bool flag) {
	if (flag) {
		cout &lt;&lt; &quot;回调函数&quot; &lt;&lt; endl;
	}
}
int main() {
	animation(100, cb);
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一维数组声明-memset-memcpy函数" tabindex="-1"><a class="header-anchor" href="#一维数组声明-memset-memcpy函数" aria-hidden="true">#</a> 一维数组声明, memset, memcpy函数</h2><p>memccpy(destination, source, size)</p><p>memset(destination, value, size)</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main()
{
	int nums[5] = { 1,2,3,4,5 };

	// 1. sizeof(数组)可以得到数组所占内存大小. 只对基本数据类型有效
	for (int i = 0; i &lt; sizeof(nums) / sizeof(int); i++) 
	{
		int num = nums[i];
		cout &lt;&lt; num &lt;&lt; endl;
	}

	int nums2[5] = {}; // 2. 数组空位默认用0填充
	memcpy(nums2, nums, sizeof(nums)); // 复制数组的方法
	memset(nums2,0, sizeof(nums)); // 清空数组的方法
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针的加法-一维数组的运算表示法" tabindex="-1"><a class="header-anchor" href="#指针的加法-一维数组的运算表示法" aria-hidden="true">#</a> 指针的加法, 一维数组的运算表示法</h2><p><strong>指针的加法</strong></p><p>指针 + 1 = 原指针地址 + 1 * 该地址地址的存储的数据类型的大小</p><p>例子1</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main() {
	char* a = new char(&#39;中&#39;);

	printf(&quot;a指针的内存地址为:%d\\n&quot;,&amp;a);
	printf(&quot;a指针+1的内存地址为:%d\\n&quot;, &amp;a + 1); // &amp;a存储的是指针, 在64操作系统上, 指针占8B
	// a指针的内存地址为:1339030520
	// a指针 + 1的内存地址为:1339030528
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子2</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>


<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">char</span> a <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span><span class="token punctuation">;</span>

	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a指针的内存地址为:%d\\n&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a指针+1的内存地址为:%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &amp;a存储的是字符,占1B</span>
   <span class="token comment">// a指针的内存地址为:154138564</span>
   <span class="token comment">// a指针 + 1的内存地址为 : 154138565</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一维数组的运算表示法</strong></p><p>c++将数组名解释为数组的首地址, 除了sizeof(数组名)时候, 返回数组的总地址</p><p>*<em>数组[n] == <em>(数组名 + n) 即利用加法得到地址再解引用</em></em></p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main() {
	// nums[2]为数组的下标表示法, *(nums+2)为数组的指针运算表示法
	int arr[5] = { 1,2,3,4,5 };
	printf(&quot;第一个元素是: %d\\n&quot;, *arr);
	printf(&quot;第二个元素是: %d\\n&quot;,*(arr + 1));
	printf(&quot;第三个元素是: %d\\n&quot;, *(arr + 2));
	printf(&quot;第四个元素是: %d\\n&quot;, *(arr + 3));
	printf(&quot;第五个元素是: %d\\n&quot;, *(arr + 4));
	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数中形参为数组" tabindex="-1"><a class="header-anchor" href="#函数中形参为数组" aria-hidden="true">#</a> 函数中形参为数组</h2><p>形参列表中的数组变量是数组指针的语法糖</p><p>void func (int arr[], int len){}</p><p>等价于</p><p>void func(int* arr, int len){}</p><p><strong>注意点: 形参为数组, 尽量传递数组的长度</strong>.</p><p>因为在函数中中的数组指针为指向数组首地址的指针, 不是数组名, 对其用sizeof得到的永远是数据类型所占内存的大小</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

void func(int arr[], int len)
{
	//指针所占的内存大小: 如果操作系统是64位，则占8个字节；如果操作系统是32位，则占4个字节。
	cout &lt;&lt; R&quot;(数组大小为: )&quot; &lt;&lt; sizeof(arr) &lt;&lt; endl; // Except: 4 * 4 = 16, Output: 8
	cout &lt;&lt; R&quot;(数组长度为: )&quot; &lt;&lt; sizeof(len) &lt;&lt; endl; // Except: 4
}
int main()
{
	int nums[4] = { 1,2,3,4 }, len = sizeof(nums) / sizeof (int);

	cout &lt;&lt; R&quot;(数组大小为: )&quot; &lt;&lt; sizeof(nums) &lt;&lt; endl; // Except: 4 * 4 = 16
	cout &lt;&lt; R&quot;(数组长度为: )&quot; &lt;&lt; len &lt;&lt; endl; // Except: 4

	func(nums, len);
	
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>不传递数组长度的解决办法</strong></p><ol><li><p><strong>使用特殊值来标识数组的末尾</strong>：有时候，你可以约定一种特殊的值（例如，0或-1）来表示数组的末尾，而不显式传递数组的长度。这种方法在C字符串中很常见，字符串以空字符 &#39;\\0&#39; 结尾。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在函数中使用arr来操作数组</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用标准库容器</strong>：如果你使用C++，可以使用标准库容器如<code>std::vector</code>，它们自动管理了数组的大小，无需显式传递长度。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在函数中使用arr来操作数组</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="防止new声明的数组空间溢出" tabindex="-1"><a class="header-anchor" href="#防止new声明的数组空间溢出" aria-hidden="true">#</a> 防止new声明的数组空间溢出</h2><blockquote><p>可以在new时候跟(std::nothrow), 如果分配失败, 返回nullptr</p></blockquote><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;


int main()
{
	int* nums = new (std::nothrow) int[100000000000];
	if (nums == nullptr) 
	{
		cout &lt;&lt; &quot;数组分配空间失败&quot; &lt;&lt; endl;
	}
	else
	{
		cout &lt;&lt; &quot;数组分配空间成功&quot; &lt;&lt; endl;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组的qsort函数" tabindex="-1"><a class="header-anchor" href="#数组的qsort函数" aria-hidden="true">#</a> 数组的qsort函数</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int compare_func(const void* a, const void* b){
	return *(int*)a - *(int*)b;
};

int main()
{
	int* nums = new int[5]{ 1,22,1,55,2 };

	// qsort(排序数组指针, 数组的数量, 数组的大小, 比较函数)
	
	qsort(nums, 5, 4, compare_func);

	for (int i = 0; i &lt; 5; i++)
	{
		cout &lt;&lt; *(nums + i) &lt;&lt; endl;
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态数组与动态数组</strong></p><p>静态声明长度必须是常量, 动态声明长度可以使变量</p><ol><li><p><strong>静态数组声明：</strong></p><p>静态数组是在编译时期分配内存，其大小在声明时确定，无法动态改变。</p><p>例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> numbers<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 声明一个包含 5 个整数的数组</span>
<span class="token keyword">double</span> values<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 声明一个包含 10 个双精度浮点数的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>动态数组声明（使用动态内存分配）：</strong></p><p>动态数组是在运行时通过动态内存分配来创建的，其大小可以根据需要进行更改。在C++中，通常使用<code>new</code>和<code>delete</code>或者<code>std::vector</code>来管理动态数组。</p><p>使用 <code>new</code> 和 <code>delete</code>：</p><p>例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span><span class="token operator">*</span> dynamicArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 创建包含 20 个整数的动态数组</span>
<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dynamicArray<span class="token punctuation">;</span> <span class="token comment">// 释放内存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>std::vector</code>（推荐的动态数组容器）：</p><p>例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">dynamicVector</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个包含 10 个整数的动态数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>二维数组的动态声明</p><p>vector:</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;vector&gt;
std::vector&lt;std::vector&lt;dataType&gt;&gt; arrayName(rowCount, std::vector&lt;dataType&gt;(columnCount));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>两个指针</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int** arr;
int n = 10;
arr = new int*[n];
for (int i = 0; i &lt; n; i++) {
    arr[i] = new int[n];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指针形参与引用形参" tabindex="-1"><a class="header-anchor" href="#指针形参与引用形参" aria-hidden="true">#</a> 指针形参与引用形参</h2><ol><li><p><strong>指针形参 <code>int* num2</code>：</strong></p><p>这个形参是一个指向整数的指针。在函数内部，您可以通过解引用该指针来访问传递给函数的整数值。指针传递允许在函数内部修改指向的值，也可以在函数外部对传递的指针进行更改。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>num2 <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 修改传递的整数值</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递整数的地址</span>
    <span class="token comment">// 现在 num 的值变为 42</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>引用形参 <code>int &amp;num3</code>：</strong></p><p>这个形参是一个整数的引用。引用允许您在函数内部通过别名修改函数外部传递的值，实际上是原值的一个别名。与指针不同，引用不需要使用地址运算符（<code>&amp;</code>）进行传递，而且在函数内外部的语法上更为一致。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>num3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    num3 <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 修改传递的整数值</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传递整数的引用</span>
    <span class="token comment">// 现在 num 的值变为 42</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>总结: 引用形参实际上是传递了别名, 用取址符号取地址</p><p>​</p><p>​</p></li></ol><h2 id="malloc和-free函数" tabindex="-1"><a class="header-anchor" href="#malloc和-free函数" aria-hidden="true">#</a> malloc和 free函数</h2><p>在C和C++编程中，<code>malloc</code> 和 <code>free</code> 是用于动态内存分配和释放的函数。</p><ol><li><p><strong><code>malloc</code> 函数：</strong></p><p><code>malloc</code>（Memory Allocation）是C和C++中的函数，用于在运行时从堆（heap）中分配一块指定大小的内存空间。它接受一个参数，即要分配的内存大小（以字节为单位），并返回一个指向新分配内存的指针。</p><p>例如：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分配足够存放 5 个整数的内存空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong><code>free</code> 函数：</strong></p><p><code>free</code> 函数用于释放通过 <code>malloc</code> 或相关函数分配的动态内存。当不再需要使用分配的内存块时，应该使用 <code>free</code> 将其归还给系统，以便系统可以重新利用这些内存块。</p><p>例如：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">free</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放之前分配的内存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>请注意以下几点：</p><ul><li><code>malloc</code> 分配的内存是在堆上，不同于栈上的局部变量，因此需要手动释放。</li><li>释放已经被释放的内存会导致未定义行为，因此确保只释放分配的内存一次。</li><li>在C++中，推荐使用 <code>new</code> 和 <code>delete</code> 运算符来执行动态内存分配和释放，它们提供了更好的类型安全性和更好的异常处理能力。</li></ul><p>示例（C++）：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 动态分配一个包含 5 个整数的数组</span>
<span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ptr<span class="token punctuation">;</span> <span class="token comment">// 释放分配的内存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，为了避免内存泄漏和不确定的行为，分配的内存应在不再使用时进行释放。</p><h2 id="结构体" tabindex="-1"><a class="header-anchor" href="#结构体" aria-hidden="true">#</a> 结构体</h2><p>在C++中，结构体（struct）是一种用户自定义的数据类型，它允许你组合不同类型的数据成员以表示一个复杂的数据结构。与C语言相比，C++的结构体更加强大，可以包含成员函数、构造函数、析构函数等。</p><p>以下是C++中结构体的一些用法示例：</p><ol><li><p><strong>定义结构体：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>声明结构体变量：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>Person person1<span class="token punctuation">;</span> <span class="token comment">// 声明一个Person类型的变量</span>
person1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
person1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

Person person2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 声明并初始化结构体变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>成员函数：</strong></p><p>在C++中，结构体可以包含成员函数。这就是与C语言中的结构体最大的不同之一。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> radius<span class="token punctuation">;</span>
    
    <span class="token keyword">double</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">3.14159</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Circle myCircle<span class="token punctuation">;</span>
myCircle<span class="token punctuation">.</span>radius <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> area <span class="token operator">=</span> myCircle<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用成员函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>构造函数：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>

    <span class="token comment">// 构造函数</span>
    <span class="token function">Point</span><span class="token punctuation">(</span><span class="token keyword">int</span> _x<span class="token punctuation">,</span> <span class="token keyword">int</span> _y<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">x</span><span class="token punctuation">(</span>_x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">y</span><span class="token punctuation">(</span>_y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Point <span class="token function">p1</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>访问控制：</strong></p><p>与类一样，结构体中的成员可以设置为<code>public</code>、<code>private</code> 或 <code>protected</code>，用于控制其在类外的可见性。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setDimensions</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Rectangle r<span class="token punctuation">;</span>
r<span class="token punctuation">.</span><span class="token function">setDimensions</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以调用公有成员函数</span>
<span class="token comment">// r.width = 5; // 不能直接访问私有成员</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>运算符重载：</strong></p><p>与类一样，你也可以在结构体中重载运算符，实现特定的操作。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Vector2D</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>

    Vector2D <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Vector2D<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>x <span class="token operator">+</span> other<span class="token punctuation">.</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> other<span class="token punctuation">.</span>y<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Vector2D v1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">3.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Vector2D v2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Vector2D result <span class="token operator">=</span> v1 <span class="token operator">+</span> v2<span class="token punctuation">;</span> <span class="token comment">// 运算符重载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
using namespace std;

int binary_search(int arr[], int length, int target) {
  int left = 0;
  int right = length - 1;
  int mid;

  while (left &lt;= right) {
    mid = (left + right) / 2;

    if (arr[mid] &gt; target)  right = mid - 1;
    else if (arr[mid] &lt; target) left = mid + 1;
    else return mid;
  }
};


int main() {
  int arr[] = { 1,2,3,4,5,6,7 };

  cout &lt;&lt; binary_search(arr, sizeof(arr) / sizeof(int), 3);
  return 0;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c风格字符串" tabindex="-1"><a class="header-anchor" href="#c风格字符串" aria-hidden="true">#</a> C风格字符串</h2><ol><li><p>C风格字符串用char[]表示, 其最后一位必须为0</p></li><li><p>初始化字符串</p></li></ol><ul><li><p>错误的初始化方式: char name[11]; 未手动初始, 11位里都是垃圾字符</p></li><li><p>char name[11] = { 0 }. 将所有字符初始化为0, 其中第11位为C风格字符串的结尾0</p></li></ul><ol start="3"><li>清空字符串</li></ol><ul><li>memset(字符串, 填充值, 占用内存空间的大小)</li></ul><ol start="4"><li>字符串方法</li></ol><ul><li>拷贝: strcpy(目标字符, 源字符串)</li><li>指定拷贝: strncpy( 目标字符, 原字符串, 拷贝的位数 )</li><li>拼接: strcat( 目标字符, 原字符串 ), 将原字符串拼接到目标字符串后</li><li>指定拼接: strncat( 目标字符, 原字符串, 指定的位数 )</li></ul><h2 id="二维数组" tabindex="-1"><a class="header-anchor" href="#二维数组" aria-hidden="true">#</a> 二维数组</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// int arr[行数][列数]</span>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120),o=[c,u,p];function r(v,m){return l(),t("div",null,o)}const h=i(d,[["render",r],["__file","c__.html.vue"]]);export{h as default};
