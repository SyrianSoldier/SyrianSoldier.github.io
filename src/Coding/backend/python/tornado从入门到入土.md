# tornado从入门到入土

> 整理自 [Tornado](http://demo.pythoner.com/itt2zh/ch1.html#ch1-1)

## 一、C10K问题

[C10K问题概述](https://cloud.tencent.com/developer/article/1031629)

## 二、第一个Tornado程序

### 2.1 安装虚拟环境

1. 创建一个空目录, 并切换到该目录下
2. 新建虚拟环境: `python -m venv tornado_study_env`
3. 激活虚拟环境: `. .\tornado_study_env\Scripts\Activate.ps1` (windows + powshell)
4. 下载tornado: `pip install tornado`

### 2.2 编写tornado程序

1. 编写下面的实例程序
2. 在命令输入 `python .\main.py --port=9090`, 成功看见`程序启动成功:请访问 http://127.0.0.1:9090`
3. 双击`http://127.0.0.1:9090`打开浏览器, 在浏览器上地址栏输入`http://127.0.0.1:9090/?my_name_is=客户端`, 成功看见 在浏览器上显示 "hello, 客户端"

```python
from tornado.web import RequestHandler, Application
from tornado.options import define, options, parse_command_line
from tornado.httpserver import HTTPServer
import tornado.ioloop

# define可以声明一些变量, 应用启动时, 可以通过命令行参数注入这些变量, 如果没有注入, 则使用默认值
define(name="port", default=8080, type=int, help="请提供程序的端口号")
define(name="host", default="127.0.0.1", type=str, help="请提供程序运行的主机名")


# 接口的Controller
# 所有Controller都要继承RequestHandler
class IndexHandler(RequestHandler):
    # get方法用于捕获get请求
    def get(self):
        # get_argument()用于捕获query参数, default为缺省默认值
        hi = self.get_argument("my_name_is", default="")

        # write用于向客户端返回字符串
        self.write(f"hello, {hi}")


# 定义路由地址和controller的映射. 格式是 (path,Handler)的list
routes = [(r"/", IndexHandler)]

if __name__ == "__main__":
    parse_command_line()  # 解析命令行参数, 并自动注入到 options 中
    app = Application(routes)  # 初始化app程序
    server = HTTPServer(app)  # 初始化内置服务器
    server.listen(port=options.port)  # 开启服务器

    print(f"程序启动成功:请访问 http://{options.host}:{options.port}")
    tornado.ioloop.IOLoop.instance().start()  # 启动loop(阻塞程序结束)

```

### 2.3 tornado的动态路由参数

Tornado在元组中使用正则表达式来匹配HTTP请求的路径。（这个路径是URL中主机名后面的部分，不包括查询字符串。）Tornado把这些正则表达式看作已经包含了行开始和结束锚点（即，字符串"/"被看作为"^/$"）。

如果一个正则表达式包含一个捕获分组（即，正则表达式中的部分被括号括起来），匹配的内容将作为相应HTTP请求的参数传到RequestHandler对象中

```python


# 1. \w+ 代表一个以上的 数字或字母或下划线(不包括汉字)
# 2. 这里捕捉了两个动态路由参数
routes = [(r"/user/(\w+)/(\w+)", UserHandler)]

# 3. 捕捉的两个路由参数, 会依次传入get方法中
class UserHandler(RequestHandler):
    def get(self, id, name):
        print(id, name)
        self.write(f"用户信息:{id=}, {name=}")
```

## 三、Tornado设置状态码

### 3.1 显式设置状态码

如下程序所示, 可以通过set_status显式的返回状态码

```python
class FrobHandler(tornado.web.RequestHandler):
    def head(self, frob_id):
        frob = retrieve_from_db(frob_id)
        if frob is not None:
            self.set_status(200)
        else:
            self.set_status(404)
    def get(self, frob_id):
        frob = retrieve_from_db(frob_id)
        self.write(frob.serialize())
```

### 3.2 隐式返回状态码

1. 404 Not Found
   - **无法匹配url** :Tornado会在HTTP请求的路径无法匹配任何RequestHandler类相对应的模式时返回404（Not Found）响应码。
2. 400 Bad Request
   - **查询参数没传, 又没给默认值** :如果你调用了一个没有默认值的get_argument函数，并且没有发现给定名称的参数，Tornado将自动返回一个400（Bad Request）响应码。
3. 405 Method Not Allowed
   - **url匹配上了, 但匹配不上方法** :如果传入的请求使用了RequestHandler中没有定义的HTTP方法（比如，一个POST请求，但是处理函数中只有定义了get方法），Tornado将返回一个405（Methos Not Allowed）响应码。

4. 500 Internal Server Error
    - **python程序报错** :当程序遇到任何不能让其退出的错误时，Tornado将返回500（Internal Server Error）响应码。你代码中任何没有捕获的异常也会导致500响应码。
5. 200 OK
    - **默认成功** :如果响应成功，并且没有其他返回码被设置，Tornado将默认返回一个200（OK）响应码。

### 3.3 自定义错误状态码/错误返回信息

```python
error_html = f"""
<html>
  <body>
    <div style="color:red">
      朋友, 你出错了
    </div>
  </body>
</html>
"""

# 当使用get请求访问下边的handler时, 原本默认的状态码为405, 返回的文本为: 405 Method Not Allowed
class UserHandler(RequestHandler):
    def post(self, id, name):
        self.write(f"用户信息:{id=}, {name=}")

    # 由于自定义了错误, 状态码被改为400, 返回的文本信息为error_html
    def write_error(self, status_code, **kwargs):
        self.set_status(400)
        self.write(error_html)


routes = [(r"/user/(\w+)/(\w+)", UserHandler)]

```


## 四、jinja2模版
> tornado自带模版程序, 由于项目中使用jinja2代替了自带模版, 所以写一个jinja2的模版示例程序

### 4.1 模版基础程序

首先要在项目根目录下新建`templates/index.html` 和 `templates/submit.html`

index.html的内容是一个简单的表单

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form action="/submit" method="post">
    <div>
      <label>
        <span>你的姓名是:</span> <input type="text" name="name">
      </label>
    </div>

    <div>
      <label>
        <span>你的年龄是:</span> <input type="text" name="age">
      </label>
    </div>


    <div>
      <label>
        <span>你的性别是:</span> <input type="text" name="sex">
      </label>
    </div>

    <div>
      <input type="submit">
    </div>
  </form>
</body>

</html>
```

submit.html的内容是一个表单提交后的呈现页面

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div>
    <div style="color: rebeccapurple;">您好啊, 尊贵的程序员大人:</div>
    您的姓名是: {{name}}, 年龄是: {{ age }}, 性别是:{{sex}}
  </div>
</body>

</html>
```

main.py中的python代码, 主要是 1. 用jinja2替代原有的模版 2. 编写接口

```python
from tornado.web import RequestHandler, Application
from tornado.options import define, options, parse_command_line
from tornado.httpserver import HTTPServer
import tornado.ioloop
import jinja2
import os

define(name="port", default=8080, type=int, help="请提供程序的端口号")
define(name="host", default="127.0.0.1", type=str, help="请提供程序运行的主机名")


# 配置jinja2, 让jinja2代替tornado自带的模版
template_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), "templates")
jinja2_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(template_path), autoescape=True
)

# 1. tornado中要求接口的handler 程序必须继承tornado.web.RequestHandler
# 2. 为了实现让jinja2代替tornado自带的模版, 我们在 tornado.web.RequestHandler 和 各个接口的Handler 中夹一层BaseHandler
# 3. 以后接口的Handler程序不再继承tornado.web.RequestHandler 而是继承 BaseHandler
class BaseHandler(tornado.web.RequestHandler):
    def jinja2_render(self, template_name, **kwargs):
        template = jinja2_env.get_template(template_name) # 获得模版
        self.write(template.render(**kwargs)) # 返回模版html


class IndexHandler(BaseHandler):
    def get(self):
        self.jinja2_render("index.html") # 当访问首时, 返回index.html


class SubmitHandler(BaseHandler):
    def post(self):
        name, age, sex = (
            self.get_argument("name"),
            self.get_argument("age"),
            self.get_argument("sex"),
        )

        self.jinja2_render("submit.html", name=name, age=age, sex=sex) # 当访问/submit时, 返回submit.html


routes = [(r"/", IndexHandler), (r"/submit", SubmitHandler)]

if __name__ == "__main__":
    parse_command_line()
    app = Application(routes)
    server = HTTPServer(app)
    server.listen(port=options.port)

    print(f"程序启动成功:请访问 http://{options.host}:{options.port}")
    tornado.ioloop.IOLoop.instance().start()  # 启动loop

```

### 4.2 全局函数和自定义全局函数

> jinja2中提供了很多全局函数可以在模版中直接用, 另外也可以手动添加自定义的全局函数

| **函数**                                   | **说明**                           |
| ---------------------------------------- | -------------------------------- |
| `range(start, stop, step)`               | 生成一个整数范围，类似 Python 的 `range()`   |
| `dict(**kwargs)`                         | 创建一个字典                           |
| `lipsum(n=5, html=True, min=20, max=100)` | 生成随机文本（Lorem Ipsum）              |
| `join(iterable, delimiter=", ")`         | 将可迭代对象转换为字符串并用 `delimiter` 连接    |
| `list(iterable)`                         | 将可迭代对象转换为列表                      |
| `length(value)`                          | 获得长度                             |
| `int(value, default=0, base=10)`         | 转换为整数                            |
| `float(value, default=0.0)`              | 转换为浮点数                           |
| `bool(value)`                            | 转换为布尔值                           |
| `round(value, precision=0, method="common")` | 四舍五入                             |
| `max(iterable, default=None)`            | 获取最大值                            |
| `min(iterable, default=None)`            | 获取最小值                            |
| `sum(iterable, start=0)`                 | 计算总和                             |
| `sort(iterable, reverse=False, case_sensitive=False, attribute=None)` | 对可迭代对象排序                         |
| `reversed(iterable)`                     | 反转可迭代对象                          |
| `enumerate(iterable, start=0)`           | 返回带索引的可迭代对象                      |
| `zip(*iterables)`                        | 合并多个可迭代对象为元组列表                   |
| `type(value)`                            | 获取对象类型                           |
| `default(value, default_value, boolean=False)` | 若 `value` 为空，则返回 `default_value` |
| `escape(value)`                          | 转义 HTML                          |
| `urlencode(value)`                       | URL 编码                           |



**添加全局自定义函数**

```python
from jinja2 import Environment, FileSystemLoader

# 自定义函数
def greet(name):
    return f"Hello, {name}!"

# 创建环境
env = Environment(loader=FileSystemLoader("templates"))

# 添加全局函数
env.globals["greet"] = greet
```



### 4.2 更多的模版语法和示例

Jinja2 也提供了一些全局关键字，类似于 Python 关键字：

| **关键字**             | **作用**                                   |
| ------------------- | ---------------------------------------- |
| `true, false, none` | 布尔值和空值，分别对应 `True`, `False`, `None`      |
| `loop`              | 访问当前循环对象，可用于 `for` 语句内部, 详见 [jinja2 loop的用法](https://blog.csdn.net/weixin_45066823/article/details/128675351) |
| `self`              | 访问当前模板                                   |
| `super()`           | 继承模板时调用父级的块                              |
| `caller`            | 用于 `macro` 结构，允许宏调用者传递内容                 |
| `block`             | 定义可重写的代码块                                |
| `extends`           | 继承模板                                     |
| `include`           | 导入另一个模板                                  |
| `import`            | 导入宏                                      |
| `set`               | 赋值变量                                     |
| `macro`             | 定义宏（类似函数）                                |

这里是格式清晰的 **Jinja2** 模板语法对照表：

| **类别**      | **语法**                                   | **说明**            |
| ----------- | ---------------------------------------- | ----------------- |
| **变量输出**    | `{{ 变量 }}`                               | 变量会被解析并输出到 HTML   |
| **条件判断**    | `{% if 条件 %}...{% else %}...{% endif %}` | 条件判断              |
| **循环**      | `{% for item in list %}...{% endfor %}`  | 遍历列表              |
| **继承模板**    | `{% extends "父模板.html" %}`               | 继承父模板             |
| **定义块**     | `{% block 名称 %}...{% endblock %}`        | 用于模板继承时替换内容       |
| **包含模板**    | `{% include "文件.html" %}`                | 引入另一个 HTML 片段     |
| **设置变量**    | `{% set 变量 = 值 %}`                       | 定义模板内变量           |
| **访问字典**    | `{{ 字典.key }}` 或 `{{ 字典['key'] }}`       | 访问字典中的值           |
| **访问列表**    | `{{ 列表[索引] }}`                           | 访问列表中的元素          |
| **逻辑运算**    | `{% if a and b %}` / `{% if not a %}`    | 逻辑判断              |
| **比较运算**    | `{% if a == b %}` / `{% if a > b %}`     | 进行条件判断            |
| **Raw 代码块** | `{% raw %}...{% endraw %}`               | 显示 Jinja2 语法，不被解析 |



### 4.2 尽可能用上述语法的示例程序

**base.html**

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

    <header>
        <h1>网站导航</h1>
        <nav>
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/about">关于</a></li>
            </ul>
        </nav>
    </header>

    <main>
        {% block content %}  {# 这里会被子模板替换 #}{% endblock %}
    </main>

</body>
</html>
```



**index.html**

```python
{% extends "base.html" %}  {# 继承 base.html 模板 #}

{% block content %}  {# 定义 content 块，继承的模板会覆盖这里 #}

    <h1>{{ title | default("默认标题") }}</h1>  {# 全局函数default, 默认值的过滤器用法 #}

    {# 条件判断示例 #}
    {% if user.is_admin %}
        <p>欢迎，管理员 {{ user.name }}！</p>
    {% else %}
        <p>你好，{{ user.name }}！</p>
    {% endif %}

    {# 循环示例，遍历用户列表 #}
    <ul>
        {% for user in users %}
            <li>
                {{ loop.index }}. {{ user.name | capitalize }} - {{ user.age }} 岁
                {% if user.age >= 18 %}（成年）{% else %}（未成年）{% endif %}
            </li>
        {% endfor %}
    </ul>

    {# 使用过滤器 #}
    <p>网站标题（大写）：{{ site_name | upper }}</p>

    {# show_message是传进来的一个lambda表达式 #}
    {{ show_message("欢迎访问本站！") }}

    {# jinja2中可以使用include导入另外一个html #}
    {% include "footer.html" %}

{% endblock %}

```



**footer.html**

```html
<footer>
    <p>&copy; {{ current_year }} 我的博客</p>
</footer>
```

### 4.4 动态设置资源路径

假设你有一个环境变量 `RESOURCE_PATH`，它指示资源的基础路径。

**Python 代码：**

```python
import os
import tornado.ioloop
import tornado.web
import jinja2

# 从环境变量中读取RESOURCE_PATH, 若没有用/static
resource_path = os.environ.get("RESOURCE_PATH", "/static")

# Jinja2 配置
template_loader = jinja2.FileSystemLoader("templates")
template_env = jinja2.Environment(loader=template_loader)

class BaseHandler(tornado.web.RequestHandler):
    def jinja2_render(self, template_name, **kwargs):
        template = template_env.get_template(template_name)
        # 在这里设置资源路径
        self.write(template.render(resource_path=resource_path, **kwargs))

class IndexHandler(BaseHandler):
    def get(self):
        self.jinja2_render("index.html")

# 设置路由
routes = [(r"/", IndexHandler)]

# Tornado 应用
application = tornado.web.Application(routes)
application.listen(8888)
tornado.ioloop.IOLoop.current().start()

```

**index.html（模板文件）：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="{{ resource_path }}/css/style.css">
</head>
<body>
    <h1>欢迎来到首页</h1>
</body>
</html>

```

在这个例子中，`resource_path` 被动态设置，并通过 `jinja2_render` 方法传递给模板。模板会使用这个变量来设置静态资源的路径，而不是硬编码 `/static`。





#### 五、数据库与`orm`, 项目实战

### 5.1 连接`mysql`



## 线程, 进程, 协程

[聊聊线程, 进程, 协程](https://www.bilibili.com/video/BV1Wr4y1A7DS/?spm_id_from=333.337.search-card.all.click&vd_source=20bf77d62633a13b190b5fb3785b2e34) 