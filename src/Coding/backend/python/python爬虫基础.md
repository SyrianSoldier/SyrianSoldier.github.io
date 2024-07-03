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
## 下载网页资源: url.request.retrieve

### urlretrieve的使用

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




