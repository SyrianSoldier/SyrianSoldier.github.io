# Python语法基础

## 一: 前置知识

### 1.1 下载

翻墙访问www.python.org

下载最新的Release版

### 1.2 解释器

python是一门解释型语言, 而非编译型语言. 所以需要存在解释器对语法进行解析.

其中``CPython``是自带的解释器, 使用C语言编写, 另外还有``IPython, PyPy``等

## 二: 第一个python程序

### 2.1 hello, world

**编辑器运行**

1) **新建**: 使用VS_Code新建文件hello.py

2) **编辑**: 编辑代码``print("hello,world")``, 并保存

3) **命令行**: 在当前目录打开命令行, 输入``python hello.py``

 

**解释器运行**

1) **命令行**: 通过``cmd``打开命令行

2) **进入交互**: 输入``python``或``ipython``进入交互式程序

3) **编辑代码**:编辑代码 ``print("hello,world")``, 完成后敲回车, 查看结果

4) **退出**: 输入``exit() 或者 Ctrl + z`` 退出交互式程序



### 2.2 输入与输出

``input: (string prompt) => {}``

```python
name = input("Enter your name, please! ") # 输入CanSu
print("Your name is", name) # 输出 Your name is Sucan
```

## 三: Python基础

### 3.1 数据类型

| 数据类型        | 特点                                                                                                                                                                     |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 整数型-int     | 1) **16进制**:  十六进制用`0x`前缀和0-9，a-f表示，例如：`0xff00`，`0xa5b4c3d2`<br <br/>/> 2) **分隔符**:  Python允许在数字中间以`_`分隔，`10_000_000_000`和`10000000000`是完全一样的。十六进制数也可以写成`0xa1b2_c3d4`。 |
| 浮点数-float   | 1) **科学计数法**: $把10用e替代，1.23 * 10^9就是1.23e9，或者12.3e8，0.<br/>000012可以写成1.2e-5$                                                                                           |
| 字符串-string  | 1) **单双引号**: 不区分单双引号<br />2) **三引号**: Python将三对引号解释为可换行的文本<br />3) **元字符**: Python将``r""`` 解释为元字符串, 元字符串即纯文本, 内部没有任何转义字符.                                              |
| 布尔型-boolean | 1) **True和False:<br/>** 含有True 和 False两个关键词<br /> 2) **and, not与or**:  and 等同于 &&, not 等同于 ! , or 等同于 \                                                                |\| |
| 列表型-list    | 即js中的数组                                          <br/>                                                                                                                 |
| 字典-map      | 即js中的对象.python中的key一定要写引号,否则会识别为变量                                   <br/>                 <br/>                                                                       |


查看数据类型
```python
name = "你好"
print(type(name))
```


数据类型转换
```python
print(int("123")) #123将字符串转换成为整数
print(int(123.78)) #123将浮点数转换成为整数, !!将小数掉后面全舍去(向下取整)!!
print(int(True)) #1布尔值True转换成为整数是1
print(int(False)) #0布尔值False转换成为整数是0
print(str(1111))
print(bool(123)) #python也遵循真假值转换的规则, 真值转为True, 假值转为False
```

### 3.2 字符串编码



**数字信号** :因为计算机只能保存,传输数字信号，如果要处理文本，就必须先把文本转换为数字才能处理。

**字符编码的种类**

1) **``ASCII``编码**: `ASCII`编码有127个字符，包括大小写英文字母、数字和一些符号. 如  大写字母`A`的编码是`65`，小写字母`z`的编码是`122`。

2) **`GB2312`编码:** 一个字节无法处理中文，至少需要两个字节，而且还不能和ASCII编码冲突，所以，中国制定了`GB2312`编码，用来把中文编进去。

3) **其他编码**: 日本把日文编到`Shift_JIS`里，韩国把韩文编到`Euc-kr`里，各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。

4)**Unicode字符集**: Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了.Unicode标准也在不断发展，但最常用的是UCS-16编码，**用两个字节表示一个字符**（如果要用到**非常偏僻的字符**，**就需要4个字节**）



**UTF-8**

**存储空间:** 由于``ASCII``使用1字节存储, ``Unicode``使用2字节存储. 如果文本全部是英文，用``Unicode``编码比``ASCII``编码需要多一倍的存储空间，在存储和传输上就十分不划算。

**再编码:** ``UTF-8``是对``Unicode``的再编码. 

1.  **英文被编成1个字节**
2.  **中文一般编成3个字节**
3.  很生僻的词被编成4-6个字节

使用UTF-8在万国码的基础上, 既保证了不同国家之间不乱码, 又提高了存储和传输的效率. 



**字符编码工作方式**

**内存中:**  在计算机内存中，统一使用Unicode编码，

**硬盘或传输中**:  当需要保存到硬盘或者需要传输的时候，转换为UTF-8编码, 因为更节省空间。

### 3.3 字节字符串

1) **字符串的操作**: 字符串的操作是==逐字符==的, 英文字符是一个字节存储, 中文一般是三字节存储, 偏僻字可能需要4-6字节存储

2) **字节字符串的操作**: 字节字符串是==逐字节==操作的, 英文字符串和对应的字节字符串长度相等. 中文字节字符串一般等于3倍字符串长度.



**字符串和字节字符串的转换**

python中`\x` 后面跟着两个十六进制数字表示一个字节的值。如`\xe6` 表示十六进制数 `0xe6`

| API                               | 说明                                       | 例子                                       |
| --------------------------------- | ---------------------------------------- | ---------------------------------------- |
| ``str.encode(charset: string)``   | 将==字符串==以指定编码==转为字节字符串==.<br />1) 若指定为ASCII编码, 则1字符占1字节<br />2) 若指定为``utf-8``, 则英文占1字节, 中文一般占3字节 | ``'中文'.encode('utf-8')``<br /> # output: b'\xe4\xb8\xad\xe6\x96\x87' 共6字节 |
| ``bytes.decode(charset: string)`` | 将==字节字符串==以指定编码==转为字符串==.                | b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')<br /> #output: '中文' |

### 3.4 字符串的格式化

**%字符串**

>**语法示例**: `` '您的名字是%s'  %  name``, 或者 ``'您的名字是%s, 年龄是$d' % (name, age)``

| 占位符  | 替换内容   |
| ---- | ------ |
| %d   | 整数     |
| %f   | 浮点数    |
| %s   | 字符串    |
| %x   | 十六进制整数 |

```python
>>> name = input('请输入您的名字');
请输入您的名字: 张三
  
>>> age = input('请输入您的年龄: ')
请输入您的年龄: 18

>>> print('您的名字是%s, 年龄是$s' % (name, age))
'您的名字是张三, 年龄是18'
```



**format()**

```python
>>> '我的名字是{0}, 今年{1}岁'.format('苏灿',22)
'我的名字是苏灿, 今年22岁'
```



**f-string**

```python
>>> name = '苏灿'; age = 18
>>> f'我的名字是{name}, 年龄是{age}'
'我的名字是苏灿, 年龄是18'
```



**格式控制符**

**语法:** ``{:[标志][最小宽度][.精度][类型]}``, 所有参数都是可选的

1. **标志**: 

   - `+`：显示正负号（对数字有效）。
   - `-`：左对齐。
   - `0`：用零填充（通常与最小宽度一起使用，对数字有效）。

2. **最小宽度**

   - 最小宽度指定了数据应该至少占用多少字符的宽度。如果数据的宽度不足最小宽度，可以使用填充字符（通常是空格或零）来填充空白部分。

3. **精度**

   -  精度用于控制小数部分的显示位数（对浮点数有效）

4. **类型**

   - `d`：整数。
   - `f`：浮点数。
   - `s`：字符串。
   - `x`：十六进制（通常与整数一起使用)

   ​

```python
'蒙牛鲜奶一盒{:.2f}元'.format(5.231) #保留两位小数
'蒙牛鲜奶一盒5.23元'

'现在{:02d}点{:02d}分{:02d}秒'.format(23,2,7)
'现在23点02分07秒'

r = ((85-72) / 72) * 100
print('%+2.1f%%' % r) # +18.1%
```

### 3.5 字符串``api``

| API                | 说明 | 例子                        |
|--------------------|--| ------------------------- |
| ``ord: (str: string) => number`` | 获取字符串的数字编码 | ``ord('A')`` # output: 65 |
| ``chr: (num: number) => string`` | 获取数字编码对应的字符 | ``chr(97)`` # output: 'a' |
| ``len: (str: bytes || string) => number`` | 若str是字节字符串, 返回字节数.<br/>若str是字符串,返回字符数 |     ``len(strs)``       |
| ``find: (c:char) => int`` | 返回字符串某字符在串中出现第一次的索引 | ``str.find(char)`` |
|``startswith:(str:string)=>boolean`` | 判断字符串是否以某个字符开始 | ``str.starswith(char)``|
|``endswith:(str:string)=>boolean`` | 判断字符串是否以某个字符结束 | ``str.endswith(char)``|
|``count:(str:string)=>int`` | 统计字符串中某字符出现的次数 | ``str.count(char)``|
|``replace:(oldstr:string,newstr)=>string`` | 替换字符串中子串 | ``str.replace(str1,str2)``|
|``splite:(str: 分隔符)=>list`` | 以分隔符切割字符串,返回值为列表 | ``str.splite(str)``|
|``upper:()=>string`` | 将字符串转为大小写 | ``str.upper()``|
|``lower:()=>string`` | 将字符串转为小写 | ``str.lower()``|
|``strip:()=>string`` | 去除收尾空格 | ``str.strip()``|


```python
# 字符串的拼接
print("123" + "234") # 输出: 123234
print("123"+ 123) #不允许!, python字符串的拼接需要两边都需要是字符串

# 字符串的乘法
print("hello, world" * 5) # 把把hello, world写五遍
```

### 3.6 list

list与JavaScript中的数组基本是一致的

```python
# list的声明
hobby = ["吃饭", "睡觉", "打豆豆"]

# 获取list的长度
print(len(hobby))

# 使用索引访问list, 获取倒数i个元素
print(hobby[-1], hobby[-2])  # python中的索引具备JavaScript的at方法的特性

# 索引越界
print(hobby[3])  # IndexError: list index out of range

# 增删改查APIs
#增
hobby.append("烫头")
hobby.insert(1, "--插入--")
hobby.extend(hobby2) #合并两个list

# 删除
del hobbys[1] # 根据索引删除

hobby.pop()  # 删除最后一个元素
hobby.pop(1)  # 删除第一个元素

hobby.remove("烫头") # 根据值删除

#查
if food in hobby_list # 判断元素是否在列表中
if food not in hobby_list # 判断元素是否不在列表中



```

### 3.7 tuple

```python
# tuple的声明
arr = ("吃饭", "睡觉", "打豆豆")

# tuple不能修改进行增, 删, 改操作. 只能进行查
# arr[-1] = "烫头"  # TypeError: 'tuple' object does not support item assignment

# 空turple的定义与单个元素的tuple的定义
arr = ()
arr = (1,)  # 定义单元素tuple时候要在其后添加逗号, 消除小括号带来的二义性(被误认为带着括号的数字)
```

### 3.8 条件语句

与其他编程语言不同的是

1) ``if``后没有(  )

2)`` else if`` 更名为 ``elif``

3)``if, elif, else ``后需要加``:``

4) 用一个缩进代表换行 

```python
flag = input()

if flag == 10:
    print("if")
elif flag == 20:
    print("elif 1")
elif flag == 20:
    print("elif 2")
else:
    print("else")
```

不可以进行字符串与整型的比较,  不像JavaScript一样会进行隐式转换

```python
a = input()  # 输入1000, input输入的都是字符串
# a = int(a) # 可以将a进行转换, 将str --> int			
if a > 100:  # TypeError: '>' not supported between instances of 'str' and 'int'
    print("OK~")
```

### 3.9 循环

``for循环``

```python
# 循环字符串
for c in "china":
    print(c)

# 循环数组
for age in [0, 1, 2, 3, 4]:
    print(age)


# 循环range

# range(len), 生成 [0,len-1], 如range(5), 生成[0,1,2,3,4]的整数序列
for age in range(5):
    print(age) #0,1,2,3,4
 
# range(起始值, 结束值),生成[起始值, 结束值-1]的整数序列
for age in range(2,5):
   print(age) # 2,3,4
   
# rage(起始值,结束值,步长) 生成从起始值开始按照补长一直增加到结束值的序列
for age in range(1,5,3):
   print(age) # 1 4 
   
# 遍历列表的下标
a_list = ["张三","李四","王二麻子"]
for index in range(len(a_list)): # 'int' object is not iterable. 整数是无法遍历的, 需要放进range里
   print(index)
```

``while循环``

```python
while aa == 10:
    print("a等于10")
```

### 3.10 注释
单行注释: #

多行注释: \`\`\` 注释内容 \`\`\`

### 3.11 算数运算符
只记录和其他语言不相同的语法
a//b   整除: a和b做除法, 答案向下取整
a**b   指数: a的b次方

### 3.12 切片
> 切片指对列表, 字符串, 元祖等数据结构截取其中一部分的操作

语法: ``[(起始):(结束):(步长)]`` 切片不包含结束位
```python
hobbys = ["吃饭", "睡觉", "烫头", "aaa", "bbb"]

print(hobbys[1:3])  # 输出['睡觉', '烫头'], 不包含结束位
print(hobbys[:3])  # 从0-2的切片
print(hobbys[3:])  # 从3-结束的切片 

```

### 3.13 字典
```python
# 读取
person = {"name": "张三", "age": 18}

print(person["name"])  # 方式一: 获取不存在的key值, 会报错KeyError
print(person.get("age"))  # 方式二: 获取不存在的key值, 返回None
print(preson.name)  # 强调不能通过.的方式访问key

# 遍历
for key in person.keys() # 遍历所有的key
for value in person.values() # 遍历所有的value
for key,value in person.items() # 遍历所有的key和value
for item in person.items() # 遍历对象的每一个键值对, item一个key和value的元祖

# 改
person["name"] = "法外狂徒"

# 增
person["sex"] = "男"

# 删
del person["name"]
del person # 删除整个对象, 清空内存

person.clear() #情况所有key-value, 但保存字典对象结构()
```

### 3.14 函数
```python
# 函数的定义
def func(arg1, arg2): 
   # 函数体
   
# 关键词传参
def func(a,b):
   # 函数体
   
func(b = 100, a = 1000) # 100将会传到形参b上, 1000将会传到形参a上, 强行修改了顺序

# 函数作用域
```作用域和js一样, 有函数作用域, 全局作用域```
```

### 3.15 IO流
语法: open(pathName,mode)

打开模式（mode）决定了文件打开的方式，包括读取、写入等。常见的模式有：

| 模式 | 描述 |
|------|------|
| r | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。 |
| w | 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| a | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| r+ | 打开一个文件用于读写。文件指针将会放在文件的开头。 |
| w+ | 打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| a+ | 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| b | 二进制模式。 |
| rb | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。 |
| rb+ | 以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。 |
| wb | 以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| wb+ | 以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| ab | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| ab+ | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。 |


```python
# 写入操作
fs = open("./test.txt", "w")  # 以读打开文件, 文件若存在会覆盖
fs.write("hello, world")  # 写入文本
fs.close()  # 关闭文件流

# 追加操作
fs = open("./test.txt", "a")  # 以追加打开文件, 字符会追加
fs.write("hello, world")  # 写入文本
fs.close()  # 关闭文件流

# 读文件
fs = open("./test.txt", "r")  # 以只读打开文件
content = fs.read()  # 默认逐字节读
# content = fs.readline()  # 逐行读(只读一行)
# content = fs.readlines()  # 逐行读,读所有的数据, 但会将每一行数据保存到list的每一项中返回
print(content)
fs.close()  # 关闭文件流
```

### 序列化与反序列化
> 序列化: 将对象用二进制数字表示, 反序列化: 将对象的二进制序列读出来

序列化
```python
# 将列表转为json字符串并存
fs = open("./test.txt", "w")

import json # 必须因为JSON模块
jsonStr = json.dumps(["抽烟,喝酒,烫头"])  # 将列表转为JSON字符串
fs.write(jsonStr)
# json.dump(["抽烟,喝酒,烫头"], fs) # 相当于上面两行的总和, 不用再写fs.write(jsonStr)了

fs.close()  # 关闭文件流
```

反序列化
```python
# loads API
import json
fs = open("./test.txt","r")
hobby_list = json.loads(fs.read()) # 读取的是文件流提取的内容
fs.close()

# load API
import json
fs = open("./test.txt","r")
hobby_list = json.load(fs) # 读取的是整个文件流
fs.close()
```

### 异常与捕获
```python
try:
    print(a)
except Exception as e:
    print(e) # name 'a' is not defined
```

## 四: PIP
> pip是python的包管理工具

### 4.1 pip的基本使用
1. 查看python的安装路径： 可以在环境变量中查看
2. 手动切换到python/Scripts目录在该目录下下载包
3. 下载:尝试使用``pip install ipython``下载包(下载的为python的另一个解释器)

### 4.2 pip的命令

pip install/uninstall
pip list -- 显示已安装的包
pip freeze 以requirements.txt安装包

其他命令:
```shell
查看某个安装包的信息 pip show selenium

结果如下:
Name: selenium
Version: 4.22.0
Summary: Official Python bindings for Selenium WebDriver
Home-page: https://www.selenium.dev
Author:
Author-email:
License: Apache 2.0
Location: C:\Users\苏察哈尔灿\Desktop\python笔记\代码练习\envirment\Lib\site-packages
Requires: certifi, trio, trio-websocket, typing_extensions, urllib3, websocket-client
Required-by:
```


### 4.3 修改pip下载镜像源(国内镜像源)

pip install 包名 -i 镜像源地址

清华：https://pypi.tuna.tsinghua.edu.cn/simple

阿里云：http://mirrors.aliyun.com/pypi/simple/

中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

华中理工大学：http://pypi.hustunique.com/

山东理工大学：http://pypi.sdutlinux.org/

**豆瓣：http://pypi.douban.com/simple/** 推荐使用











