# python爬虫基础
## urllib
> urllib是python内置的HTTP请求库

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

**** urlretrieve类型
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
