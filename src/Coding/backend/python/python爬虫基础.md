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

### xpath chrome插件的安装
> XPath是一门在XML和HTML文档中查找信息的语言，它用于在XML和HTML文档中对元素和属性进行遍历，广泛用于解析HTML数据。XPath几乎可以在所有语言中使用，例如Java和C语言。除了XPath，还有其他手段用于XML解析，如BeautifulSoup、lxml、DOM、SAX、JSDOM、DOM4J、minxml等。12
极简插件搜索xpath helper搜索安装

XPath Helper 可轻松提取、编辑和评估任何网页上的 XPath 查询。

重要提示：安装此扩展后，必须重新加载任何现有标签页或重启 Chrome 浏览器，扩展才能正常工作。

使用说明
1. 打开一个新标签页并导航到任何网页。
2. 点击 Ctrl-Shift-X（或 OS X 上的 Command-Shift-X），或点击工具栏上的 XPath Helper 按钮，打开 XPath Helper 控制台。
3. 按住 Shift 键，将鼠标移到页面上的元素上。查询框将不断更新，显示鼠标指针下方元素的 XPath 查询，结果框将显示当前查询的结果。
4. 如果需要，可直接在控制台中编辑 XPath 查询。结果框将立即反映您的更改。
5. 重复步骤 (2) 关闭控制台。

如果控制台挡住了您的视线，请按住 Shift 键，然后将鼠标移到控制台上，控制台就会移动到页面的另一侧。

提醒一点： 在渲染 HTML 表格时，Chrome 浏览器会在 DOM 中插入人为的
``<tbody>``标记，因此这些标记会出现在该扩展提取的查询中。

###
