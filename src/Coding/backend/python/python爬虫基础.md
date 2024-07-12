# python爬虫基础
## urllib
> urllib是python内置的HTTP请求库, 企业中一般使用Requests库. 前者的好处是内置无需下载, 更接近底层, 能处理更多的细节.
> 缺点是繁琐, 一些场景需要手动处理. Requests库是基于urllib和其他库集成的二次封装, 功能更强大

### 打开并读取网站: url.request.urlopen
**使用url.request访问获取百度html**
```python
"""
from urllib.request import urlopen

response = urlopen("http://www.baidu.com")  # 访问url, 获取response对象
content = response.read().decode("utf-8")  # 读取二进制形式html, 并将其转为string

print(content)

```

**urlopen的一个类型6个方法**

```python
"""
urlopen 方法返回的是一个类文件对象（file-like object），这个对象允许你像读取文件一样读取 HTTP 响应内容。这个对象具有一些特定的方法和属性，用于获取 HTTP 响应的信息。

以下是一些常用的方法和属性：

read()：读取响应的内容，可以指定读取的字节数。
readline()：逐行读取响应内容。
readlines()：读取所有行并返回一个列表。
getcode()：获取 HTTP 响应状态码。
geturl()：获取实际访问的 URL（可能会跟请求的 URL 不同，如果发生了重定向）。
info ()：获取 HTTP 响应头信息，返回一个类似字典的对象。
"""

from urllib.request import urlopen

response = urlopen("http://www.baidu.com")  # 访问url, 获取response对象
print(type(response))  # HTTPResponse类型
print(response.getcode())  # 200

headers = response.info()  # headers为一个响应头对象, 获取并打印所有响应头
for header, value in headers.items():
    print(f"{header}: {value}")

```

### 下载网页资源: urlretrieve的使用

**urlretrieve类型**
```typescript
type ReportHook = (cout/*已下载的块儿数*/: number, blockSize/*每块的字节数*/: number, totalSize/*总字节数*/:number) => void

interface URLRetrieveOptions {
  url: string,
  filename?: string // 下载后的文件名
  reporthook?: ReportHook // 下载时的回调函数, 可以用于监控进度
  data?: any // 如果提供，应该是一个字节对象，将作为 POST 数据发送到 URL
}

interface URLRetrieveResult {
  filename: string //保存文件的路径。
  headers: Record<string,string>
}
type URLRetrieve = (URLRetrieveOptions) => Promise<URLRetrieveResult>
```

**urlretrieve的使用**
```python
from urllib.request import urlretrieve


def result_progress(dowloaded_count, block_size, total_size):
    # end默认值为/n换行, end='\r' 的作用是使用回车符 \r 作为输出的结尾字符。回车符 \r 会将光标移动到当前行的开头，而不换行。这意味着后续的输出会覆盖当前行的内容。
    print(
        f"Donloaded: {int(dowloaded_count * block_size / total_size * 100)}%", end="\r"
    )


url = "https://vdept3.bdstatic.com/mda-mfuf163rfmkn36i7/cae_h264_nowatermark/1624963807373246350/mda-mfuf163rfmkn36i7.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1719986700-0-0-3e228fbf951dc8715b925045260484b0&bcevod_channel=searchbox_feed&pd=1&cr=0&cd=0&pt=3&logid=0300230982&vid=10554454971571011271&klogid=0300230982&abtest=101830_2-102148_1-17451_1-3000225_1"
urlretrieve(url, "./test.mp4", result_progress)

```

### Reqeust的使用-带参数(data,headers..)的请求

```python
from urllib.request import Request, urlopen

# 1. 生成请求对象
url = "http://www.baidu.com"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}
request_obj = Request(url=url, headers=headers)  # 这里必须指定关键词, 因为参数顺序不同

# 2.发起请求
response = urlopen(
    request_obj
)  # urlopen第一个参数可以传string的url, 也可以传一个Request对象

# 3. 读取,解码,并打印请求数据
print(response.read().decode("utf-8"))

```

### URL编码与quote函数
> js中发送请求不需要对url进行URL编码,是因为浏览器对每个请求有默认的编码功能. 但是url.
> request既没有浏览器环境, 也没有对URL进行过多的处理, 所以发送请求时需要对URL特殊处理 

url.parse.quote函数是一个进行URL编码的函数
```python
from urllib.parse import quote

url = quote("https://www.baidu.com/s?wd=周杰伦")

print(url)

```

### 将字典转为query参数
> 将字典转为query参数的形式, 并且将生成的query参数进行url编码

```python
from urllib.parse import urlencode

# 输出: name=zhangsan&age=18
params = urlencode({"name": "zhangsan", "age": 18})
print(params)

```

### post请求获取百度翻译的结果

```python
from urllib.parse import urlencode, quote
from urllib.request import Request, urlopen
import json

# 1.生成请求对象
params = Request(
    method="POST",  # 区分大小写
    url="https://fanyi.baidu.com/sug",
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
    },
    # 在network可知该请求的编码格式application/x-www-form-urlencoded, 即将key-value的键值对放在请求体传输
    # 故要先要将字典转为键值对字符串, 然后又因为data参数被要求时字节字符串格式, 还需要进行编码(注:python中编码就是将字符串转为字节字符串)
    data=urlencode({"kw": "英雄"}).encode("utf-8"),
)

# 2. 发送请求
response = urlopen(params)

# 3. 解析响应结果(读取结果-->解码-->反序列化)
content = json.loads(response.read().decode("utf-8"))


print(content)

```

### Cookie与反爬
[Cookie的知识](https://www.bilibili.com/video/BV1SL4y1i7ZL/?spm_id_from=333.337.search-card.all.click&vd_source=20bf77d62633a13b190b5fb3785b2e34)

可以这样观察set-cookie的过程

1. 在chrome浏览器设置里手动清除cookie
2. 重启浏览器, 打开百度
3. 摁下f12,打开控制台
4. 打开B站后, 可以在network中观察html中响应头有set-cookie, 在后续的请求的请求头中中有Cookie

**注: 访问一个html, 可能涉及到其他请求(请求其他css,js,图片), 假如在html返回的响应头里有set-cookie, 
那么在该页面的所有后续请求头中都有cookie字段. 并且若set-cookie字段设置的是持久性cookie,
直到过期时间到达或用户手动删除它们前, 重启浏览器并再次访问该网页时，这些 Cookie依然会被携带**

cookie中多存储身份信息(账号密码等)

```python
# 具体代码和post请求百度没什么区别, 就是要注意, 有些API需要在请求头里携带Cookie访问, 不带访问不通
```


### 抓取豆瓣电影数据与with..as, json.dump函数的使用

```python
from urllib.request import Request, urlopen
import json

# 请求豆瓣排行榜json数据
request = Request(
    method="GET",
    url="https://movie.douban.com/j/chart/top_list?type=5&interval_id=100%3A90&action=&start=0&limit=20",
    headers={
        "Cookie": 'll="108199"; bid=joYJqLtAFmc; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1720010142%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DgeqoiqwgS4ibGjiAr8nYk3cLx8Q1HWuOlIQBnplGe7JI_elYLMCibOSJKSztGGOL%26wd%3D%26eqid%3D8a8432090076b0c50000000666854591%22%5D; _pk_id.100001.4cf6=bdafaa71f9526788.1720010142.; _pk_ses.100001.4cf6=1; __utma=30149280.1925336388.1720010142.1720010142.1720010142.1; __utmb=30149280.0.10.1720010142; __utmc=30149280; __utmz=30149280.1720010142.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.953958908.1720010142.1720010142.1720010142.1; __utmb=223695111.0.10.1720010142; __utmc=223695111; __utmz=223695111.1720010142.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __yadk_uid=BxVw4c21gdefs9ixMeeF35TouPBfNMPp; ap_v=0,6.0; __gads=ID=bc3fcc74dca25807:T=1720010144:RT=1720010144:S=ALNI_MYALClZEvttEHotijTk5ybe2ylgyA; __gpi=UID=00000e711c3b870f:T=1720010144:RT=1720010144:S=ALNI_MajElrbN12fwkIO-TZmDpNq1RrNoA; __eoi=ID=5385e667ebffc925:T=1720010144:RT=1720010144:S=AA-AfjZKj-nXxGfGuqpcgM4vO36O; FCNEC=%5B%5B%22AKsRol9DOu7T43N5oXMqg1XKMyizjh143xpfZ-jVf-6Qsu8nZad2Tvvdk4n4JO80kVWakMtZhZkqoIYS1sOheX7OMubsC3Ov6ejvQccjWlgwo0j0JlUdrCGdCDJ7WskCSuc_26msUt1zV34cdKghyBFjYxz2vgArGw%3D%3D%22%5D%5D; _cc_id=c172068aa4674a2ecae791f749719777; panoramaId_expiry=1720096551300',
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    },
)

# 2. 提取json对象
content = json.loads(urlopen(request).read().decode("utf-8"))

# 写入本地文件
# with...as... 可以打开文件流, 并且自动捕获可能出现的异常, 自动在代码块结束后关闭文件流
with open("./movies.json", "w", encoding="utf-8") as fs:

    # json.dump函数可以向文件写入json数据的同时, 将json数据格式化
    # json.dump(jsonObject:json对象, fileObject:可写入的文件对象, indent: 缩进, ensure_ascii:设置成false可以正确显示汉字 )
    json.dump(content, fs, ensure_ascii=False, indent=4)

```


### 爬取指定开始到结束页的豆瓣电影数据
```python
from urllib.request import Request, urlopen
import json


# 封装支持分页的请求函数
def douban_request(start, limit):
    return Request(
        method="GET",
        url=f"https://movie.douban.com/j/chart/top_list?type=5&interval_id=100%3A90&action=&start={start}&limit={limit}",
        headers={
            "Cookie": 'll="108199"; bid=joYJqLtAFmc; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1720010142%2C%22https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DgeqoiqwgS4ibGjiAr8nYk3cLx8Q1HWuOlIQBnplGe7JI_elYLMCibOSJKSztGGOL%26wd%3D%26eqid%3D8a8432090076b0c50000000666854591%22%5D; _pk_id.100001.4cf6=bdafaa71f9526788.1720010142.; _pk_ses.100001.4cf6=1; __utma=30149280.1925336388.1720010142.1720010142.1720010142.1; __utmb=30149280.0.10.1720010142; __utmc=30149280; __utmz=30149280.1720010142.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.953958908.1720010142.1720010142.1720010142.1; __utmb=223695111.0.10.1720010142; __utmc=223695111; __utmz=223695111.1720010142.1.1.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __yadk_uid=BxVw4c21gdefs9ixMeeF35TouPBfNMPp; ap_v=0,6.0; __gads=ID=bc3fcc74dca25807:T=1720010144:RT=1720010144:S=ALNI_MYALClZEvttEHotijTk5ybe2ylgyA; __gpi=UID=00000e711c3b870f:T=1720010144:RT=1720010144:S=ALNI_MajElrbN12fwkIO-TZmDpNq1RrNoA; __eoi=ID=5385e667ebffc925:T=1720010144:RT=1720010144:S=AA-AfjZKj-nXxGfGuqpcgM4vO36O; FCNEC=%5B%5B%22AKsRol9DOu7T43N5oXMqg1XKMyizjh143xpfZ-jVf-6Qsu8nZad2Tvvdk4n4JO80kVWakMtZhZkqoIYS1sOheX7OMubsC3Ov6ejvQccjWlgwo0j0JlUdrCGdCDJ7WskCSuc_26msUt1zV34cdKghyBFjYxz2vgArGw%3D%3D%22%5D%5D; _cc_id=c172068aa4674a2ecae791f749719777; panoramaId_expiry=1720096551300',
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        },
    )


# 将json数据写入本地
def write_to_local(response, page):
    # 获取json数据
    obj = json.loads(response.read().decode("utf-8"))
    # 写入本地
    with open(f"./douban_movie_{page}.json", "w", encoding="utf-8") as fs:
        json.dump(obj, fs, ensure_ascii=False, indent=4)


if __name__ == "__main__":
    # 1. 获取爬取的开始和结束页码
    start = int(input("请输入开始页码: "))
    end = int(input("请输入结束页码: "))

    # 循环请求每一页数据
    for page in range(start, end + 1):
        # 生成请求
        request_obj = douban_request((page - 1) * 20, 20)
        # 发起响应
        response = urlopen(request_obj)
        # 写入到本地
        write_to_local(response, page)

```


### URLError和HTTPError

```python
from urllib.request import Request, urlopen

from urllib.error import URLError, HTTPError


try:
    response = urlopen(
        Request(
            url="http://ww25.asdasdasd.com/asd/asd?subid1=20240704-0056-3809-a1e6-ba15b98ac1f8",
            method="GET",
            headers={},
        )
    )
    content = response.read().decode("utf-8")
    print(content)
except HTTPError as e:  # 注: URLError是HTTPError的子类, 要放在下面, 否则捕获不到
    print(f"HTTP错误, 返回非200的错误状态码, 如4xx,5xx错误\n{e.code}-{e.reason}")
except URLError as e:
    print(f"URL错误, 比如写错url了以及相关异常\n{e.reason}")

```


### HTTP中的referer字段

HTTP Referer是 HTTP 请求头中的一个字段，用于指示当前请求的来源，即用户是从哪个页面点击过来的。
这个字段可以帮助服务器了解用户的来源，从而进行流量分析、广告跟踪等。

浏览器访问资源时, 通常会自动在请求头中加上referer字段

一些网站会检查Referer字段, 如某图片防盗功能, 服务端可以通过检查referer,判断下载行为是从本网页发起的
还是使用爬虫下载的.


### 查询本机IP地址与配置(正向)代理服务器
注: 建立代理池(多个代理ip的数组), 并在每次请求前使用random函数随机挑选一个代理ip访问目标网站, 可以降低爬虫
被封禁IP的风险

```python
from urllib.request import Request, ProxyHandler, build_opener
import json

# 随便网上找个ip查询的接口,查询当前ip信息和归属地

# 1. 需要购买代理服务器, 并将IP卸载这里(网上搜索代理服务器购买)
proxy = "http://202.117.115.6:80"
handler = ProxyHandler({"http": proxy})

# 2. 固定写法, 记住
opener = build_opener(handler)

# 3. 不再使用urlopen发送请求, 直接使用opener.open发送请求
response = opener.open(
    Request(
        url="https://www.cz88.net/api/cz88/ip/base?ip=",
        headers={
            "Cookie": "_ga=GA1.1.720837650.1720078542; Hm_lvt_5fe556ebe1c9d856695a9a35f4d18ce3=1720078542; AGL_USER_ID=b54f1e9e-738f-4934-bd6f-bb3537495e0c; __bid_n=1907caba8164912a79e90c; sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221907caba844581-042f325b71912c-26001f51-1474560-1907caba845b8e%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.baidu.com%2F%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTkwN2NhYmE4NDQ1ODEtMDQyZjMyNWI3MTkxMmMtMjYwMDFmNTEtMTQ3NDU2MC0xOTA3Y2FiYTg0NWI4ZSJ9%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%221907caba844581-042f325b71912c-26001f51-1474560-1907caba845b8e%22%7D; Hm_lpvt_5fe556ebe1c9d856695a9a35f4d18ce3=1720080328; SECKEY_ABVK=yqp54ZglfLi8IAuQTJIRjuX0Z4ntJOIol73pQQW6O4E%3D; BMAP_SECKEY=Oul9zDS5T4D5toNy4x8QnXkYLI_yUwOcyvTe0H3w3i840u1vjY-eKjwp9D29JLZ2bGol3aZwweShOvNAv4cwFdnid3P8Mt-b3tCKFTfCsMW0RKpCGkuUzBqY96QPnfCX2E7SA_BqPZBTIYUjkmrFyEwXWQU7hvoukO-sk3E7Vwey0EWghmaMJPgG5QXhatuB; _ga_SGEY66BFK5=GS1.1.1720078542.1.1.1720080359.0.0.0",
            "Referer": "https://www.cz88.net/?keyword=695684574687&bd_vid=8137345353181552953",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        },
    )
)
content = json.loads(response.read().decode("utf-8"))

with open("./ip2.json", "w", encoding="utf-8") as fp:
    json.dump(content, fp, ensure_ascii=False, indent=4)

```

## xpath

### Xpath语言

XPath 是一种用于在 XML 或 HTML 文档中查找信息的语言。它提供了丰富的语法来选择节点集。以下是一些在开发中常用的 XPath 表达式和语法示例：

| 语法                                       | 描述                             |
| ---------------------------------------- | ------------------------------ |
| `//tag`                                  | 选择所有的 `tag` 节点                 |
| `//tag[@attribute='value']`              | 选择具有特定属性值的 `tag` 节点            |
| `//tag[contains(text(), 'text')]`        | 选择包含特定文本的 `tag` 节点             |
| `/tag/subtag`                            | 选择 `tag` 的直接子节点 `subtag`       |
| `//tag`                                  | 选择任意位置的 `tag` 节点               |
| `(//tag)[1]`                             | 选择第一个 `tag` 节点                 |
| `(//tag)[last()]`                        | 选择最后一个 `tag` 节点                |
| `//tag[@attribute1='value1' and @attribute2='value2']` | 选择同时具有两个特定属性值的 `tag` 节点        |
| `//tag[@attribute='value']/..`           | 选择具有特定属性的 `tag` 节点的父节点         |
| `//tag[position()>=start and position()<=end]` | 选择索引范围内的 `tag` 节点              |
| `//tag[position()<number]`               | 选择特定数量的 `tag` 节点               |
| `//tag[text()='text']`                   | 选择文本内容完全匹配的 `tag` 节点           |
| `//tag[contains(@attribute, 'value')]`   | 选择属性值包含特定文本的 `tag` 节点          |
| `/parent/tag[position()=index]`          | 选择 `parent` 节点下特定位置的 `tag` 子节点 |
| `//@attribute`                           | 选择所有的 `attribute` 属性           |
| `//tag/child::subtag`                    | 选择 `tag` 的子节点 `subtag`         |
| `/tag/parent::parenttag`                 | 选择 `tag` 的父节点 `parenttag`      |
| `/tag/ancestor::ancestortag`             | 选择 `tag` 的祖先节点 `ancestortag`   |
| `/tag/descendant::descendanttag`         | 选择 `tag` 的后代节点 `descendanttag` |
| `/tag/following-sibling::siblingtag`     | 选择 `tag` 的兄弟节点 `siblingtag`    |

### xpath chrome插件
> XPath插件可以在chrome中输入Xpath语言, 并可以在控制台中查看查询的结果. 
>
> 也可以**根据选中的元素, 生成对应的Xpath语言**
>
> 

极简插件搜索xpath helper搜索安装

XPath Helper 可轻松提取、编辑和评估任何网页上的 XPath 查询。

重要提示：安装此扩展后，必须重新加载任何现有标签页或重启 Chrome 浏览器，扩展才能正常工作。

使用说明
1. 打开一个新标签页并导航到任何网页。
2. 点击 Ctrl-Shift-X（或 OS X 上的 Command-Shift-X），或点击工具栏上的 XPath Helper 按钮，打开 XPath Helper 控制台。
3. **按住 Shift 键，将鼠标移到页面上的元素上。查询框将不断更新，显示鼠标指针下方元素的 XPath 查询，结果框将显示当前查询的结果。**
4. 如果需要，可直接在控制台中编辑 XPath 查询。结果框将立即反映您的更改。
5. 重复步骤 (2) 关闭控制台。

如果控制台挡住了您的视线，请按住 Shift 键，然后将鼠标移到控制台上，控制台就会移动到页面的另一侧。

提醒一点： 在渲染 HTML 表格时，Chrome 浏览器会在 DOM 中插入人为的
``<tbody>``标记，因此这些标记会出现在该扩展提取的查询中。

### lxml

> lxml完全兼容Xpath语言, 根据语法解析HTML结构.

>[官方文档](https://lxml.de/apidoc/lxml.html) 

1. 在虚拟环境中(详细见python高级)执行``pip install lxml``,并激活该环境
2. 执行以下程序
```python
from lxml import html

# 1. 读取本地文件
with open("./index.html", "r", encoding="utf-8") as file:
    content = file.read()

# 2. 解析本地html文件
# html.fromstring 是 lxml.html 模块中的一个函数，用于将 HTML 字符串解析为一个 Element 对象
tree = html.fromstring(content)

# 2. 寻找ul>li
"""
xpath()返回一个列表, 列表内是查询后的元素
// : 查找任意后代节点
/  : 查找子节点
"""
li_list_1 = tree.xpath("//body/ul/li")

# 3. 输出ul>li的内容
"""
text: 获取或设置标签的文本内容。
attrib: 获取或设置标签的属性字典。
tag: 获取标签的名称。
get(): 获取特定属性的值。
set(): 设置特定属性的值。
append(): 向标签中添加子元素。
"""
for li in li_list_1:
    print(li.text, li.tag)

# 查找id为my_li的标签, 并展示为一个数组
"""
属性查找: 标签[@id/class='名字']
text(): 标签的innerText
"""
li_list2 = tree.xpath("//body//li[@id='my_li']/text()")
print(li_list2)


# 查找 id为my_li且class也为my_li的li标签
"""
1. //body可以省略
2. 可以先查id再查class, 也可以反过来
"""
li_list3 = tree.xpath("//li[@id='my_li' and @class='my_li']")


# 查询所有li元素中, id中包含_1的标签
li_list4 = tree.xpath("//li[contains(@id,'_1')]/text()")
print("4:", li_list4)
```

### 用lxml获取百度一下文本
```
from urllib.request import urlopen, Request
from lxml.html import fromstring

# 1. 获取html网页, 并转为字符串
htmml_str = urlopen(Request(url="http://www.baidu.com")).read().decode("utf-8")

# 2. 查询html中的元素
# 使用xpath-helper插件辅助生成(注: 插件的语句并不一定完全准确, 如果查不出来手动修改下)
xpath = "//input[@id='su']/@value"

tree = fromstring(htmml_str)
list = tree.xpath(xpath)
print(list)

```




### 爬取图片
```python
from urllib.request import urlopen, Request
from lxml.html import fromstring
from urllib.request import urlretrieve
from tqdm import tqdm  # 一个好看的进度条的库

"""
分析:
   1. 请求html --> 通过xpath筛选所有图片 ---> 根据图片的src属性下载图片 
   2. 经过观察可知该网站当前懒加载的方案是"用白色占位图当成src, 然后真实src记录在data-original属性内, 当懒加载时候做替换"
"""

src_xpath = "//img[@class='lazy']/@data-original"
text_xpath = "//div[@class='bot-div']/a[@class='name']/text()"


def get_html(page):
    # 对页码做特殊处理
    if page == 1:
        page = ""
    else:
        page = f"_{page}"

    response = urlopen(
        Request(url=f"https://sc.chinaz.com/tupian/chouxiangtupian{page}.html")
    )

    return response.read().decode("utf-8")


def get_imgs(html):
    tree = fromstring(html)
    imgs_srcs = tree.xpath(src_xpath)
    imgs_texts = tree.xpath(text_xpath)

    imgs = []
    for index in range(0, len(imgs_srcs)):
        imgs.append({"text": imgs_texts[index], "src": f"https:{imgs_srcs[index]}"})

    return imgs


def download_imgs(imgs):
    # tqdm是一个进度条的库, 语法tqdm(迭代对象)
    for img in tqdm(imgs, desc="Downloading Images"):
        urlretrieve(img["src"], f"imgs/{img['text']}.jpg")


start = int(input("请输入下载的开始页码: "))

end = int(input("请输入下载的截止页码: "))

for page in range(start, end + 1):
    print(f"\n第{page}页开始下载....")
    html = get_html(page)
    imgs = get_imgs(html)
    download_imgs(imgs)

print("\n下载成功..")

```


## jsonpath
> jsonpath可以对JSON数据进行查找, 筛选，它支持多种编程语言，包括但不限于以下几种：python, js, java等

### jsonpath的基本语法
```python
# 写一个jsonpath的示例代码
import jsonpath

# 示例json数据
data = {
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95,
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99,
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99,
            },
        ],
        "bicycle": {"color": "red", "price": 19.95},
    }
}
# 使用jsonpath获取数据
"""
.. : 表示任意层级的任意节点
$ : 表示根节点
?() : 过滤表达式
@ : 表示当前节点
[] : 子元素操作符
"""
result = jsonpath.jsonpath(data, "$..book[?(@.price>10)]")
print(result)

```


### beatifulsoup的使用
> BeautifulSoup和lxml最大的区别的是语法简单, 类似css. 同样支持解析HTML

| **API**                                  | **描述**                                  | **示例**                                   |
| ---------------------------------------- | --------------------------------------- | ---------------------------------------- |
| `BeautifulSoup(markup, parser)`          | 创建一个 BeautifulSoup 对象，解析 HTML 或 XML 文档。 | `soup = BeautifulSoup(response.content, 'html.parser')` |
| `soup.find(name, attrs, recursive, text, **kwargs)` | 搜索第一个符合条件的元素。                           | `soup.find('a')`                         |
| `soup.find_all(name, attrs, recursive, text, limit, **kwargs)` | 搜索所有符合条件的元素，返回一个列表。                     | `soup.find_all('a')`                     |
| `soup.select(selector)`                  | 使用 CSS 选择器语法搜索元素，返回一个列表。                | `soup.select('div > p')`                 |
| `soup.get_text(separator, strip)`        | 获取元素内的所有文本，返回一个字符串。                     | `soup.get_text()`                        |
| `soup.attrs`                             | 获取或设置元素的所有属性，返回一个字典。                    | `soup.attrs`                             |
| `soup['attribute']`                      | 获取或设置元素的指定属性。                           | `soup['href']`                           |
| `soup.find_parent(name, attrs, **kwargs)` | 搜索第一个符合条件的父元素。                          | `soup.find_parent('div')`                |
| `soup.find_parents(name, attrs, **kwargs)` | 搜索所有符合条件的父元素，返回一个列表。                    | `soup.find_parents('div')`               |
| `soup.find_next_sibling(name, attrs, **kwargs)` | 搜索下一个符合条件的兄弟元素。                         | `soup.find_next_sibling('p')`            |
| `soup.find_previous_sibling(name, attrs, **kwargs)` | 搜索上一个符合条件的兄弟元素。                         | `soup.find_previous_sibling('p')`        |
| `soup.find_next(name, attrs, **kwargs)`  | 搜索下一个符合条件的元素。                           | `soup.find_next('a')`                    |
| `soup.find_previous(name, attrs, **kwargs)` | 搜索上一个符合条件的元素。                           | `soup.find_previous('a')`                |
| `soup.decompose()`                       | 将元素从文档中移除。                              | `soup.decompose()`                       |
| `soup.prettify()`                        | 以缩进格式输出文档，便于阅读。                         | `print(soup.prettify())`                 |



```python
import requests
from bs4 import BeautifulSoup

# 发送HTTP请求获取网页内容
url = 'https://example.com'
response = requests.get(url)

# 使用BeautifulSoup解析网页内容
soup = BeautifulSoup(response.content, 'html.parser')

# 提取标题
title = soup.find('title').text
print(f'Title: {title}')

# 提取所有段落
paragraphs = soup.find_all('p')
for i, p in enumerate(paragraphs, start=1):
    print(f'Paragraph {i}: {p.text}')
```

## selenium
### 驱动
驱动一般指硬件设备与操作系统之间的桥梁,  用于硬件设备和操作系统之间的通信.

广义的驱动不仅包括硬件驱动, 还包括软件驱动, 如数据库驱动:JDBC驱动程序连接JAVA和数据库,提供了使用一系列java的api操作和
控制数据库 ,如浏览器驱动程序连接各种编程语言和浏览器等

WebDriver(浏览器驱动) 是一个 API 和协议，它定义了一个语言中立的接口，用于控制 web 浏览器的行为。每个浏览器都有一个特定的 WebDriver 实现，称为驱动程序。 

### selenium的安装
> selenium可以通过Webdriver和浏览器通讯, 实现模拟浏览器行为, 支持多种语言, 如python, java, javascript等
> [selenium官网](https://www.selenium.dev/zh-cn/documentation/)

1. 安装对应浏览器的webdriver, 为selenium提供运行环境
    - [下载对应chrome浏览器版本的chrome-webdriver](https://developer.chrome.com/docs/chromedriver/downloads?hl=zh-cn)
    - 将下载好的webdriver放在项目根目录下会自动加载.
2. 使用pip命令安装selenium库
```bash 
pip install selenium
```
3. 在代码中导入selenium库, 并指定浏览器驱动

```python
from selenium import webdriver

driver = webdriver.Chrome()

input()  # 这里是用于暂停程序，如果不暂停，程序会立即结束，无法看到浏览器打开的效果
```

4. 使用selenium库提供的API, 模拟浏览器行为, 如打开网页, 点击按钮, 输入文本等


### selenium元素定位
```python
from selenium import webdriver
from selenium.webdriver.common.by import By  # By是一个枚举, 可以通过By来指定定位方式

driver = webdriver.Chrome()

# 1. 打开页面
driver.get("http://www.baidu.com")

# 2. 定位元素
# 注: 可以在浏览器开发者工具, 通过右键->检查, 找到元素, 然后右键->Copy->Copy Selector或Copy xpath, 复制定位方式
e1 = driver.find_element(By.CSS_SELECTOR, "#su")
e2 = driver.find_element(By.XPATH, '//*[@id="su"]')

# 3. 向浏览器控制台输出e1,e2
driver.execute_script("console.log(arguments[0], arguments[1])", e1, e2)

# 4. 阻止浏览器自动关闭
input()

```

### selenium模拟输入,点击行为
```python
from selenium import webdriver
from selenium.webdriver.common.by import By  # By是一个枚举, 可以通过By来指定定位方式

driver = webdriver.Chrome()

# 1. 打开页面
driver.get("http://www.baidu.com")

# 2. 查找input框,并输入文本
e1 = driver.find_element(By.CSS_SELECTOR, "#kw").send_keys("雷军")

# 3.查找搜索按钮,并模拟点击
e2 = driver.find_element(By.XPATH, '//*[@id="su"]').click()


# 4. 阻止浏览器自动关闭
input()

```

### selenium的APIs-两大对象
#### WebDriver对象
WebDriver对象代表一个浏览器实例，可以用来控制浏览器的行为，如打开网页、关闭网页、获取网页源代码等。
```python
# 窗口最大化
driver.maximize_window()
# 获取网页标题
driver.title
# 获取网页源代码
driver.page_source
# 执行js代码
driver.execute_script("console.log('hello world')")
# 截图并写入到本地
with open("screenshot.png", "wb") as f:
    f.write(driver.get_screenshot_as_png())
```

#### WebElement对象
WebElement对象代表一个网页元素，可以用来获取元素的信息，如元素的文本、元素的属性等，也可以用来操作元素，如点击元素、输入文本等。

```python
# 获取元素
element = driver.find_element(By.CSS_SELECTOR, "#kw")

# 获取元素的文本
element.text
# 获取元素截图(只截图元素本身)
element.screenshot("element.png")
# 获取元素位置和大小
element.rect
# 改变css属性
element.value_of_css_property("color")
# 左键单击
element.click()
# 左键双击
element.double_click()
# 右键单击
element.context_click()
# 按下左键并保持
element.click_and_hold()
# 拖动
element.drag_and_drop()
# 滚动
element.scroll_into_view()
# 按键
element.send_keys()

```

#### chrome-handless(了解)

chrome-handless可以让chrome浏览器在后台运行，不显示界面，运行效果与有界面相同，但是速度更快，且与selenium的api完全相同

当使用selenium时, 如果出现性能问题, 卡顿等可以考虑使用chrome-handless优化性能(代码不写了)

## requests库
requests库是一个用于发送HTTP请求的Python库，企业一般用这个, urllib也可以, 但是requests库更简单, 更强大

### requests基本用法
```python
import requests

# 1. 发送get请求, 读取响应的json数据并打印
response = requests.get("https://api.github.com/users/defunkt")
print(response.json())

# 2. 发送get请求, 读取响应的html页面并保存到本地
response = requests.get("https://www.baidu.com")
with open("baidu.html", "w", encoding="utf-8") as f:
    f.write(response.text) # 以字符串的形式返回网页源码

# 2. 发送get请求, 读取返回的图片, 并保存到本地
response = requests.get("https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png")
with open("baidu.png", "wb") as f:
    f.write(response.content) # 返回响应的二进制

# 3. 发送post请求, 并设置Authorization头, 并携带query参数和body参数
response = requests.post({
    "url": "https://api.github.com/some/endpoint",
    "headers": {
        "Authorization": "token ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    # query参数
    "params": {
        "q": "python"
    },
    
    # body参数
    "json": {
        "key": "value"
    }})

if response.status_code == 200:
    print(response.json())

# 4. 上传图片, 并获取服务器返回的图片地址
with open("baidu.png", "rb") as f:
    response = requests.post("https://api.github.com/some/endpoint", files={"file": f})
    print(response.json()) # response.json()返回的是json格式的数据, 可以直接使用
```

### requests高级用法(代理,超时,session)
```python
import requests

# 1. 设置代理
response = requests.get({
    "url": "https://www.baidu.com",
    "proxies": {
        "http": "http://127.0.0.1:1080",
        "https": "http://127.0.0.1:1080"
    }
})
print(response.text)

# 2. 设置超时时间
response = requests.get({
    "url": "https://www.baidu.com",
    "timeout": 5
})
print(response.text)

```

### 爬取古诗文网用户登录信息
**登录校验验证码逻辑**
1. 访问登录页面, 访问验证码图片接口
2. 验证码接口返回验证码图片, 并通过set-cookie将"验证码答案"字符串(已加密)存到Cookie中
3. 登录时, 用户携带"账号", "密码","用户输入的验证码"等身份信息信息访问后端登录接口, 
   并且浏览器自动将夹带在Cookie中"验证码的答案"字符串带给后端
4. 后端把"账号","密码"跟用户信息数据库对比, 从Cookie中取出验证码答案, 和用户提交的"验证码大难"串对比看是否正确

优点: 后端不存储验证码, 节省内存


**OCR工具之tesseract**
tesseract是一个google维护的开源的OCR工具, 可以识别图片中的文字(对中文识别效果不好) 

[tesseract教程](https://www.bilibili.com/video/BV1Pi4y157Eh/?spm_id_from=333.337.search-card.all.click)

[pytesseract参数](https://blog.csdn.net/CSDN_224022/article/details/137773262)
```python
import requests
import pytesseract
from PIL import Image
import io

# 请求验证码接口
res_img = requests.get(url="https://so.gushiwen.cn/RandCode.ashx")
res_img2 = Image.open(io.BytesIO(res_img.content))

# 使用pytesseract识别验证码
code = pytesseract.image_to_string(res_img2)
print(code)

```


**隐藏表单**
[html表单有隐藏域，python爬虫怎么post](https://docs.pingcode.com/ask/232304.html)


```python
import requests
import pytesseract
from PIL import Image
import io
from lxml import html

session = requests.session()

# 1-1请求验证码接口
res_code = session.get(url="https://so.gushiwen.cn/RandCode.ashx")

# 1-2:将二进制流转换为图片
code_img = Image.open(io.BytesIO(res_code.content))

# 1-3: 使用pytesseract识别验证码

code = pytesseract.image_to_string(code_img, lang="eng", config="--oem 1 --psm 6")


# 2-1: 请求登录页html
res_html = session.get(
    url="https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx"
)
# 2-2: 解析html
login_html = html.fromstring(res_html.text)

# 2-3: 获取登录页的__VIEWSTATE和__VIEWSTATEGENERATOR(隐藏域)
__VIEWSTATE = login_html.xpath('//input[@id="__VIEWSTATE"]/@value')[0]
__VIEWSTATEGENERATOR = login_html.xpath('//input[@id="__VIEWSTATEGENERATOR"]/@value')[0]

# 3: 登录
res_login = session.post(
    url="https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx",
    headers={
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    },
    data={
        "__VIEWSTATE": __VIEWSTATE,
        "__VIEWSTATEGENERATOR": __VIEWSTATEGENERATOR,
        "from": "https://www.gushiwen.cn/",
        "email": "19139386300",
        "pwd": "a123456",
        "code": code,
        "denglu": "登录",
    },
)


with open("login.html", "w", encoding="utf-8") as f:
    f.write(res_login.text)



```

## scrapy

### scrapy安装和基本api
> scrapy是一个基于python的爬虫框架, 提供了非常丰富的api, 可以方便的进行爬虫开发

**1.scrapy安装:** 

``pip install scrapy``

**2.scrapy创建项目**
在任意目录下, 输入该指令, 创建项目
``scrapy startproject 项目名称``

**3.创建爬虫文件**

在项目的spider目录下输入以下指令, 创建爬虫文件

``scrapy genspider 文件名 爬取网站的域名``

例子: 
``scrapy genspider baidu www.baidu.com``


**4.爬虫文件结构**
```python
import scrapy

class BaiduSpider(scrapy.Spider):
    # 爬虫名称
    name = "baidu"
    # 爬虫允许的域名(根域名), 只能爬取该域名下的网页
    allowed_domains = ["www.baidu.com"]
    # 起始URL, 第一次爬取的网页
    start_urls = ["https://www.baidu.com"]

    # 爬取start_url后, 执行的函数. response是起始URL的响应对象
    def parse(self, response):
        # pass
        print("测试程序")
```

**5. 关闭robots.txt协议**
> robots.txt协议是一种君子协议, 网站通过该协议告诉爬虫哪些网页可以爬取, 哪些网页不可以爬取. 一般放在"根域名/robots.txt"中
> [robots协议语法](https://zhuanlan.zhihu.com/p/683759639)

在settings.py中将 ``ROBOTSTXT_OBEY = True`` 注释掉, 即可使scrapy框架无视robots协议爬取网站


**6. 运行爬虫文件**
在项目根目录下, 输入以下指令, 即可运行爬虫文件
``scrapy crawl 爬虫文件名``

### scrapy项目目录结构
```python
my_scrapy_project/
│
├── my_scrapy_project/                 项目的 Python 包目录，包含项目的代码和配置。
│   ├── __init__.py                    使该目录成为一个 Python 包，可以忽略或保留为空文件
│   ├── items.py                       定义爬取的数据结构。通常使用 Scrapy 提供的 Item 类和 Field 类。
│   ├── middlewares.py                 定义项目的中间件。中间件可以处理请求和响应，进行预处理或后处理。
│   ├── pipelines.py                   定义项目的数据管道。管道用于处理和存储爬取的数据。
│   ├── settings.py                    项目的全局设置文件。配置爬虫的行为、管道、下载延迟等参数。
│   ├── spiders/                       存放爬虫定义文件的目录。每个爬虫文件都定义了一个具体的网站爬虫。
│   │   ├── __init__.py    
│   │   └── example_spider.py          具体的爬虫文件，定义了爬虫的行为和逻辑。
│   └── __pycache__/
│
├── scrapy.cfg                         Scrapy 项目的配置文件，定义了项目的基本设置和配置。
```

### 爬虫文件中parse函数中response的常用方法

在 Scrapy 爬虫文件中的 `parse` 函数中，`response` 对象代表了一个 HTTP 响应。Scrapy 提供了丰富的方法和属性来处理和解析这个响应对象。以下是 `response` 对象的一些常用方法和属性：

**常用方法**

1. **response.xpath(query)**：

   - 使用 XPath 表达式从响应中提取数据。

   ```python
   titles = response.xpath('//title/text()').getall()
   ```

2. **response.css(query)**：

   - 使用 CSS 选择器从响应中提取数据。

   ```python
   titles = response.css('title::text').getall()
   ```

3. **response.follow(url, callback)**：

   - 创建一个新的请求，并将其加入爬虫的调度队列中。该方法使用相对 URL 或绝对 URL 并调用指定的回调函数。

   ```python
   yield response.follow(next_page_url, self.parse)
   ```

4. **response.follow_all(urls, callback)**：

   - 跟踪多个 URL，并调用指定的回调函数。

   ```python
   yield from response.follow_all(next_page_urls, self.parse)
   ```

5. **response.urljoin(url)**：

   - 将相对 URL 转换为绝对 URL。

   ```python
   absolute_url = response.urljoin(relative_url)
   ```

6. **response.meta**：

   - 获取请求时传递的元数据。

   ```python
   some_data = response.meta.get('some_data')
   ```

7. **response.request**：

   - 获取与该响应相关的请求对象。

   ```python
   original_request = response.request
   ```

**常用属性**

1. **response.url**：

   - 获取当前响应的 URL。

   ```python
   current_url = response.url
   ```

2. **response.status**：

   - 获取 HTTP 响应状态码。

   ```python
   status_code = response.status
   ```

3. **response.headers**：

   - 获取响应头。

   ```python
   content_type = response.headers.get('Content-Type')
   ```

4. **response.body**：

   - 获取响应体的原始二进制数据。

   ```python
   raw_data = response.body
   ```

5. **response.text**：

   - 获取响应体的文本数据。

   ```python
   page_content = response.text
   ```

6. **response.encoding**：

   - 获取或设置响应体的编码。

   ```python
   encoding = response.encoding
   response.encoding = 'utf-8'
   ```



### Scrapy爬取汽车之家汽车品牌信息
```python
import scrapy


class AutoSpider(scrapy.Spider):
    name = "auto"
    allowed_domains = ["autohome.com.cn"]
    start_urls = ["https://www.autohome.com.cn/car/0_0-1.1_1.6-0-0-0-0-0-0-0-0/"]

    def parse(self, response):
        # 获取存放汽车信息的父盒子
        cars = response.css(".uibox .rank-list dl dd .rank-list-ul li")

        with open("anjuke.txt", "a", encoding="utf-8") as f:
            for car in cars:
                # 获取汽车名字
                name = car.css("h4 a::text").get()
                # 获取汽车价格
                price = car.css("div:nth-of-type(1) a::text").get()
                if name and price:
                    f.write(f"{name}   {price}\n")

```


### Scrapy Shell(了解)
以下为ChatGpt生成:

Scrapy Shell 是 Scrapy 提供的一个强大的交互式命令行工具，用于调试和测试爬虫。在 Scrapy Shell 中，你可以手动输入命令并立即查看结果，这对调试选择器和分析网页结构非常有帮助。以下是使用 Scrapy Shell 的详细流程笔记：

1. **启动 Scrapy Shell**

在终端中运行以下命令启动 Scrapy Shell：

```
scrapy shell <测试网站的URL>
```

例如：

```
scrapy shell https://www.autohome.com.cn/car/0_0-1.1_1.6-0-0-0-0-0-0-0-0/
```

2. **通过 Shell 获取网页内容**

Scrapy Shell 启动后，会自动发送请求并加载指定 URL 的内容，你可以在 Shell 中输入各种命令来探索网页内容。

3. **检查页面内容**

首先查看页面的标题，确保页面已正确加载：

```
response.css('title::text').get()
```

4. **测试 CSS 选择器**

使用 CSS 选择器提取你感兴趣的内容。比如，要获取所有汽车名称，可以使用以下命令：

```
response.css('.uibox .rank-list dl dd .rank-list-ul li h4 a::text').getall()
```

5. **测试 XPath 选择器**

也可以使用 XPath 选择器来提取内容。例如：

```
response.xpath('//div[@class="uibox"]//dl//dd//ul//li//h4//a/text()').getall()
```

6. **提取特定元素**

如果想要提取某个特定的元素，如第一个 `div` 元素中的价格信息，可以使用：

```
response.css('.uibox .rank-list dl dd .rank-list-ul li div:nth-of-type(1) a::text').getall()
```

**7. 退出 Scrapy Shell**

完成调试后，可以输入 `exit()` 或按 `Ctrl+D` 退出 Scrapy Shell。



### Scrapy爬取当当网图书(实战案例)

#### 1. 创建当当网爬虫
在项目根目录下, 终端输入 


```shell
scrapy  genspider dangdang http://category.dangdang.com/cp01.01.02.00.00.00.html
```


#### 2. 编写图书数据结构
在items.py中定义爬取的数据结构

```python
# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


# 按照Scrapy框架的规范, 定义每本书的数据结构
class BookItem(scrapy.Item):
    title = scrapy.Field()
    price = scrapy.Field()
    image = scrapy.Field()

```


#### 3. 编写爬虫代码
在spiders/dangdang.py下, 编写爬虫代码

```python
import scrapy

# 1. 导入图书item数据结构
from s_demo.items import BookItem


class DangdangSpider(scrapy.Spider):
    name = "dangdang"
    allowed_domains = ["category.dangdang.com"]

    # 会依次访问urls数组的url, 并为每个url调用parse方法
    start_urls = [
        # 生成式列表, 详见python高级
        f"http://category.dangdang.com/pg{i}-cp01.01.02.00.00.00.html"
        for i in range(1, 101)
    ]

    def parse(self, response):
        # 找图书信息的父级
        books = response.css("#search_nature_rg ul li")

        # 1. 创建图书item对象
        for book in books:
            # 2. 创建图书item对象
            item = BookItem()

            # 3. 将数据填充到item对象中
            item["title"] = book.css("a::attr(title)").get()

            item["price"] = book.css(".price .search_now_price::text").get()

            # 处理特殊情况, 有的图片没用懒加载, 没用懒加载的图片url放在了src属性里, 懒加载的图片放在了data-original里
            image = book.css("a img::attr(data-original)").get()

            if not image:
                image = book.css("a img::attr(src)").get()

            item["image"] = "http:" + image

            print(item)
        # 4. 将item对象提交给管道
        yield item

```


#### 4. 新增管道
管道类似于拦截器, 爬虫爬出来的数据会交给管道进行处理, 在管道中可以做数据处理的工作
在 Scrapy 中，Spider 如何知道将其生成的 Item 传递给哪个 Pipeline，主要依赖于以下两个因素：

**1. 配置文件 settings.py 中的 ITEM_PIPELINES 设置：**
在 Scrapy 项目中，可以通过配置文件 settings.py 明确指定每个 Spider 生成的 Item 应该传递给哪些 Pipeline，并且定义它们的优先级顺序。这个设置是一个字典，键是 Pipeline 的类路径，值是其权重值（0 到 1000 之间的整数，数字越低优先级越高）或者一个字典（包含优先级和其他设置）。

```python
ITEM_PIPELINES = {
'myproject.pipelines.SomePipeline': 300,
'myproject.pipelines.AnotherPipeline': 800,
}
```
在这个示例中，当 Spider 生成的 Item 被 yield 到 Scrapy 中时，Scrapy 将按照设置的优先级依次传递给 SomePipeline 和 AnotherPipeline。

**2. Spider 类中的 custom_settings 属性：**
除了全局的 settings.py，每个 Spider 类也可以定义自己的 custom_settings 属性，用于指定特定于该 Spider 的配置，包括要使用的 Pipeline。

```python
class MySpider(scrapy.Spider):
   name = 'myspider'
   custom_settings = {
      'ITEM_PIPELINES': {
      'myproject.pipelines.MyCustomPipeline': 200,
   }
}
```
settings.py里的是全局的管道, 每个spider的item都要走一遍这个管道, 
spider自己custom_settings里的管道是只数据这个spider的. 并且优先级要比全局的高. 我的理解对吗

**3. 在Dangdang Spider中新增管道**

```python
import scrapy

# 1. 导入图书item数据结构
from s_demo.items import BookItem


class DangdangSpider(scrapy.Spider):
    # 略
    custom_settings = {
        "ITEM_PIPELINES": {"s_demo.pipelines.DangdangPipeline": 300},
    }
    # 略

```
#### 5. 在管道中生成md文档

```python
# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class DangdangPipeline:
    # 管道开始运行之前会自动调用, 往实例上挂载一个文件流
    def open_spider(self, spider):
        self.count = 1
        self.file = open("books.md", "a", encoding="utf-8")
        self.file.write("# 当当网言情小说数据\n\n")

    # 管道结束运行之后会自动调用, 关闭文件流
    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):

        self.file.write(f"### {self.count}-{item['title']}\n")
        self.file.write(f"![{item['title']}]({item['image']})\n\n")
        self.file.write(f"**Price:** {item['price']}\n\n")

        self.count += 1
        return item

```
