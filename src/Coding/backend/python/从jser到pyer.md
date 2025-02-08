从jser到pyer

> 本文是`JS`语法和`Py`语法的映射表. 未记下来的要么是 1. 遗漏 2. 和`js`语法用法一致. 原则上只记录和`js`有一定差异的语法 

## 一、基本数据类型

以下是完善后的表格，加入了简短的实例代码：

| 数据类型   | JS 实例代码                                | Python 实例代码                              | 备注                                       |
| ------ | -------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| 数值类型   | `let num = 42;`                        | `num = 42`                               | Python 区分整数和浮点数，JS 不区分                   |
| 字符串类型  | `"Hello, JS!";`'                       | `"Hello, Python!"`                       | JS 用双引号、单引号、模板字符串，Python 支持多行字符串         |
| 布尔类型   | `true/false`                           | `True/False `                            | 值为 `true` 或 `false`                      |
| null类型 | `null/undifined;`                      | ` None`                                  | JS 有两种空值类型(`null和undifined` )，Python 只有 `None` |
| 数组类型   | `[1, 2, 3];`                           | list:`[1, 2, 3]`<br />tuple: `(1,)或 (1,2,3)` | 1. Python 区分可变 `list` 和不可变 `tuple`<br />2. list是可变的, 可以增加, 删除元素, tuple内的元素不可改变 |
| 集合类型   | `new Set([1, 2, 3]);`                  | `s = {1, 2, 3}`                          | Python 自带集合类型<br />集合具有以下特点<br />1. 无序性: `{1,2,3}`的集合打印出可以是`{3,1,2}`<br />2. 去重性: `print({1,2,2,3})`的结果为`{1,2,3}`<br />等等 |
| 对象类型   | `{ key: "value" };`                    | `obj = { "key": "value" }`               | 1. Python 用 `dict` 表示键值对，类为 `object`<br />2. Python的`dict`中的key需要加双引号 |
| 日期类型   | `let now = new Date();`                | `import datetime`<br />`now = datetime.datetime.now()` | Python 需导入 `datetime` 模块                 |
| 正则表达式  | `let regex = /abc/;`                   | `import re`<br />`regex = re.compile("abc")` | JS 内建正则类型，Python 使用 `re`                 |
| 函数类型   | `function add(a, b) { return a + b; }` | `def add(a, b): return a + b`            | JS 函数是对象，Python 函数是定义的代码块                |



## 二、模板字符串( f字符串 )

### 2.1 基本用法

```js
// JavaScript
const result = `The sum of x and y is ${x + y}.`;

// Python
result = f"The sum of x and y is {x + y}."
```



### 2.2 多行字符串

> 多行字符串的意思是, 书写时是"多行的", 实际字符串也是"多行"的

```js
//js
const multiline = `This is line 1
This is line 2
This is line 3`;

//python
multiline = f"""This is line 1
This is line 2
This is line 3"""
```



### 2.3 换行续写

> 换行续写的意思是, 书写时是"多行的", 但实际字符串是"一行"的

```js
// js
const multiline = `This is line 1\
This is line 2\
This is line 3`;

//python
multiline = f"This is line 1\
This is line 2\
This is line 3"
```



#### 2.4 生成变量和值键值对的字符串

> 下面的代码等价

```js
// js
const msg = `name='${name}', age=${age}`

//pythpn
msg = f"{name=}, {age=}"
```



## 三、分支/循环语句/三目运算符

### 3.1 分支语句 

```js
// js
if () {

} else if () {

} else {

}


// python
if x > 0:
    
elif x == 0:
    
else:
    
```



### 3.2 循环语句

#### 3.2.1 普通for循环

```js
// js
for (let i = 0; i < 5; i++) {

}

//python. range(5)代表[0, 5)
for i in range(5):
    
```



#### 3.2.2 循环数组

```js
//js
const arr = [1, 2, 3, 4];
for (let item of arr) {
}

//python
arr = [1, 2, 3, 4]
for item in arr:
    print(item)

my_tuple = (1, 2, 3, 4, 5)
for item in my_tuple:
    print(item)

my_set = {1, 2, 3, 4, 5}
for item in my_set:
    print(item)

// 循环时, 同时获得索引和元素
for index, element in enumerate(my_list):
    print(f"Index: {index}, Element: {element}")

for index in range(len(my_string)):
    print(f"Index: {index}, Element: {my_string[index]}")
```



#### 3.2.3 循环对象

```js
//js
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

//python
obj = { "a": 1, "b": 2 }
for key, value in obj.items():
    print(f"{key}: {value}")
```



#### 3.3.4 while循环

```js
//js
while (i < 5) {
}

//python
while i < 5:
    print(i)
```



## 四、运算符

### 4.1 三目运算符

```js
//js
const message = x > 0 ? "条件成立时候返回的结果" : "条件不成立时候返回的结果"
//python
message = "条件成立时候返回的结果" if x > 0 else "条件不成立时候返回的结果"
```



### 4.2 逻辑与和逻辑或

```js
// js
const result = getReulst() || "默认值"
const result = obj && obj.name

//python
result = getReulst() or "默认值"
result = obj and obj.name
```

### 4.3 取反操作符和双取反操作符

```js
const condition = x > 0
const bool = !condition

//python
condition =  x > 0
bool = not condition
```



> `js`中双取反操作符可以快速判断一个值是"真值"还是"假值"
>
>  python不建议通过`not not 值`的方式实现, 不是很简洁, 推荐使用bool函数实现

```js
//js
console.log(!!true);  // true
console.log(!!0);     // false
console.log(!!'hello'); // true

//python
print(bool(True))  # True
print(bool(0))     # False
print(bool(''))    # False
print(bool(None))  # False
```



### 4.4 自增/减运算符

```js
// js
a++
--a

//python没有自增/减少运算符, 用+=实现
a+=1
a-=1
```



### 4.5 === 和 ==

```js
//js
if(a == b){}
if(a === b){}
  
//python
//is 和 is not 用来比较两个"引用数据类型"的内存地址是否相同, 不能比较"字面量", 比较"字面量请用=="
if(a == b){}
if(a is b){}
if(a is not b){}
```



## 五、箭头函数

> Python 中的 `lambda` 表达式**只支持单个表达式**，并且不能包含多个语句

```js
//js
const sum = (a, b) => a + b;
sum(1,2)

//python
sum = lambda a, b: a + b
sum(1,2)
```

## 六 、数组方法

###6.1 python的列表生成式

> `python`的列表生成式语法可以快速生成`list`, `python`的列表生成式主要迭代`list`, **也可以迭代其他可迭代数据结构**

#### 6.1.1 基本列表生成式

```python
# 循环list时, 每次迭代都执行表达式, 并将表达式的返回值组成为list
[表达式 for item in list]

# 例
sum_list =  [item * 10 for item in [1,2,3]] # [10,20,30]
```



#### 6.1.2 带条件的列表生成式

```python
# 循环list, 且只有满足condition才执行本次迭代, 并将表达式的返回值组成为list
[表达式 for item in list if condition]

# 例
sum_list =  [item * 10 for item in [1,2,3] if item > 1] # [20,30]
```



#### 6.1.3 多重循环列表生成式

```python
# 多重for循环生成式
[表达式 for item1 in list1 for item2 in list2]

# 例
pairs = [(x, y) for x in range(1, 4) for y in range(1, 4)]
```



###6.2 python的字典生成式

> 字典生成式和列表生成式语法类似, 语法如下

```js
{key的表达式: value的表达式 for item in iterable}
```



### 6.3 数组方法对照表

> `js`中ES6数组的高级方法(如`filter,map`等, 在python中主要靠`列表/字典`生成式语法实

#### 6.3.1 ES5

| 操作          | JavaScript 数组方法                | Python 实现                                | 备注                                       |
| ----------- | ------------------------------ | ---------------------------------------- | ---------------------------------------- |
| **添加元素**    | `arr.push(4)`                  | `arr.append(4)`                          |                                          |
| **删除元素**    | `arr.pop()`                    | `arr.pop(index)`<br />`del arr[index]`   | Python的`pop`方法不传参默认删除最后一个元素, 传入索引则删除指定索引的元素 |
| **插入元素**    | `arr.splice(index,0,...新增的元素)` | `list.insert(index, element)`            |                                          |
| **获取数组长度**  | `arr.length`                   | `len(arr)`                               |                                          |
| **合并数组**    | `arr.concat(arr2)`             | `arr + arr2`                             | 两者都返回新数组/列表                              |
| **排序**      | `arr.sort()`                   | 升序: `arr.sort()`<br />降序: `arr.sort(reverse=True)` <br />升序:`sorted(arr,key=lambda,)`<br />降序: `sorted_words = sorted(words, key=len, reverse=True)` | 1. `arr.sort()` 是原地排序，`sorted` 返回新的排序列表 <br />2. `sorted`的key参数可以为一个lambda表达式或者函数, 自定义排序的逻辑, 这个函数接收列表中的元素，并返回一个用于排序的值 |
| **反转数组**    | `arr.reverse()`                | `arr.reverse()`<br />` arr[::-1]`        | `arr[::-1]`会返回翻转后的新数组                    |
| **数组切片**    | `arr.slice(start, end)`        | `arr[start:end:step]`                    | `step`可以定义一个步长, 按步长截取元素                  |
| **数组浅拷贝**   | `arr.slice(0)`                 | `arr[:]`                                 |                                          |
| **查找元素的索引** | `arr.indexOf(element)`         | `arr.index(element)`                     |                                          |
| **数组转字符串**  | `arr.join(",")`                | `",".join(arr)`                          |                                          |
| **扁平化数组**   | `arr.flat()`                   | `arr = [elem for sublist in arr for elem in sublist]` |                                          |

------

#### 6.3.2 ES6

| 操作             | JavaScript 数组方法         | Python 实现                                | 备注                                       |
| -------------- | ----------------------- | ---------------------------------------- | ---------------------------------------- |
| **filter数组**   | `arr.filter(callback)`  | 方法一: `[x for x in arr if condition]`<br /> 方法二: `list(filter(callback, arr))` |                                          |
| **every函数**    | `arr.every(callback)`   | 方法一: `all(callback(x) for x in arr)`<br />方法二: `all(filter(callback, arr))` | `all()`函数接受一个可迭代对象作为参数，如果可迭代对象的所有元素都为真，则返回`True`，否则返回`False`。例子:`result = all(x > 0 for x in numbers)` |
| **some函数**     | `arr.some(callback)`    | 方法一: `any(callback(x) for x in arr)`<br />方法二: `any(filter(callback, arr))` | `any()`函数接受一个可迭代对象作为参数，如果可迭代对象的任何元素为真，则返回`True`，否则返回`False`。例子: `result = any(x > 10 for x in numbers)` |
| **map数组**      | `arr.map(callback)`     | 方法一: `[callback(x) for x in arr]`<br />方法二: `list(map(callback, arr))` | 1. `callback`可以是一个def定义的普通函数, 也可以是lambda表达式或者一个自执行的lambda表达式<br />2. 不一定要用`callback`, 简单的需求直接用列表生成式更简单<br />如:`[{"name": name} for name in ["张三","李四"]]` |
| **find元素**     | `arr.find(callback)`    | `next((x for x in arr if condition), None)` | 若只是检测元素是否在数组中, 请用`element in arr`进行判断    |
| **includes元素** | `arr.includes(element)` | `element in arr`                         |                                          |
| **reduce**     | `arr.reduce(callback)`  | `from functools import reduce`<br />` reduce(callback, list, [initializer])` | `callback`的参数和`js`的`reduce callback`的一致  |



## 七、字符串方法

| 操作             | JavaScript 字符串方法                         | Python 实现                                | 备注                                       |
| -------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| **获取字符串长度**    | `str.length`                             | `len(str)`                               |                                          |
| **获取子字符串**     | `str.slice(start, end)`                  | `str[start:end]`                         |                                          |
| **替换字符**       | `str.replace(search, replace)`           | `str.replace(search, replace, count?)`或<br /> `re.sub(正则字符串, 替换内容（可以是字符串或函数）, 待处理的字符串, 替换次数, 正则标志(如忽略大小写,全局等))` | 1. python中的replace不支持正则替换, 正则替换用`re.sub`<br />2. count为替换次数, 默认只替换一次, 即匹配上子串的第一次<br />3. 正则标志是枚举, 如` re.IGNORECASE` ` re.MULTILINE` |
| **大小写转换**      | `str.toLowerCase()` / `str.toUpperCase()` | `str.lower()` / `str.upper()`            |                                          |
| **去除空格**       | `str.trim()`                             | `str.strip()`                            | `strip()` 可以去除前后空白字符                     |
| **查找子字符串**     | `str.indexOf(search)`                    | `str.find(search)`                       | 如果未找到子串，JS 返回 -1，Python 返回 -1            |
| **判断是否包含子字符串** | `str.includes(search)`                   | `search in str`                          |                                          |
| **字符串分割并转数组**  | `str.split(separator)`                   | `str.split(separator)`                   | Python的`split`返回一个`list`                 |
| **检查字符串开头**    | `str.startsWith(prefix)`                 | `str.startswith(prefix)`                 |                                          |
| **检查字符串结尾**    | `str.endsWith(suffix)`                   | `str.endswith(suffix)`                   |                                          |
| **提取字符**       | `str.charAt(index)`                      | `str[index]`                             |                                          |
| **重复字符串**      | `str.repeat(count)`                      | `str * count`                            | Python 使用 `*` 运算符重复字符串                   |

## 八、时间方法

> 需要`import datetime`

| 操作              | JavaScript                            | Python                                   | 备注                                       |
| --------------- | ------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| **获取当前时间的时期对象** | `new Date()`                          | `datetime.datetime.now()`                |                                          |
| **获取时间戳**       | `Date.now()` 或 `new Date().getTime()` | 秒级时间戳:`datetime.datetime.now().timestamp()`<br />毫秒级时间戳: `int(datetime.datetime.now().timestamp()* 1000)` | JS 的 `getTime()` 返回毫秒，Python 的 `timestamp()` 返回秒 |
| **获取年**         | `date.getFullYear()`                  | `date.year`                              |                                          |
| **获取月**         | `date.getMonth()`（0-11）               | `date.month`（1-12）                       | JS 从 0 开始，Python 从 1 开始                  |
| **获取日**         | `date.getDate()`                      | `date.day`                               |                                          |
| **获取星期几**       | `date.getDay()`（0=周日）                 | `date.weekday()`（0=周一）                   | JS 以周日为 0，Python 以周一为 0                  |
| **获取小时**        | `date.getHours()`                     | `date.hour`                              |                                          |
| **获取分钟**        | `date.getMinutes()`                   | `date.minute`                            |                                          |
| **获取秒**         | `date.getSeconds()`                   | `date.second`                            |                                          |
| **获取毫秒**        | `date.getMilliseconds()`              | `date.microsecond // 1000`               | JS 返回毫秒，Python 需要转换                      |
| **格式化日期**       | 一般使用moment                            | `date.strftime("%Y-%m-%d %H:%M:%S")`     |                                          |
| **解析日期字符串**     | `new Date("2024-01-01")`              | ` date_obj = datetime.datetime.strptime("2024-01-01", "%Y-%m-%d")` |                                          |
| **获取时间差**       | `date1 - date2`（毫秒）                   | `(date1 - date2).total_seconds()`        | 1. `js`和python中都支持Date对象的减法<br />2. `python`此方法返回一个浮点数 |

## 九、序列化与反序列化 

Python 也支持 **JSON (反)序列化**，主要使用 `json` 模块。

#### **9.1 JSON (反)序列化**

```python
import json

obj = {"name": "Alice", "age": 30}
json_str = json.dumps(obj)
print(json_str)
# 输出: {"name": "Alice", "age": 30}


parsed_obj = json.loads(json_str)
print(parsed_obj["name"])
# 输出: Alice

```



#### **9.2 JSON 格式化（美化输出）**

```python
print(json.dumps(obj, indent=4))
# 输出:
# {
#     "name": "Alice",
#     "age": 30
# }

```



## 十、正则

| 功能      | JavaScript                    | Python                            |
| ------- | ----------------------------- | --------------------------------- |
| 是否匹配    | `/regex/.test(str)`           | `re.search(pattern, str)`         |
| 提取第一个匹配 | `str.match(/regex/)`          | `re.search(pattern, str).group()` |
| 提取所有匹配  | `str.matchAll(/regex/g)`      | `re.findall(pattern, str)`        |
| 替换      | `str.replace(/regex/, "new")` | `re.sub(pattern, "new", str)`     |



## 十一、文件IO

### 11.1 python的上下文管理器

> python中使用with语句代表使用了上下文管理器, 作用是自动释放资源(close), 即使在发生异常时候也会自动释放资源
> 上下文管理器被广泛用于"文件IO", "数据库连接", "网络连接"等方面

**`with` 语句的基本语法：**

```python
with expression as variable:
    # 代码块

```

- `expression`：一个上下文管理器（通常是实现了 `__enter__()` 和 `__exit__()` 方法的对象）。它负责设置并返回资源（如打开文件或数据库连接）。
- `as variable`：可选的部分，用于将 `expression` 返回的资源（对象）绑定到变量 `variable` 上。在代码块中，你可以通过 `variable` 来访问这个资源。
- 代码块：`with` 后面的代码块，是你操作资源的地方。代码块结束时，资源会自动释放。



另外可以自定义上下文管理器对象, 参考[上下文管理器](https://blog.csdn.net/u011352768/article/details/143793806)



### 11.2 读文件

```js
// nodejs
fs.readFile('file.txt', 'utf8', (err, data) => {

});

//python
with open('file.txt', 'r') as f:  	# 打开文件，并将文件io对象赋值给 f
    data = f.read()  				# 一次性读取所有文件内容
    line = file.readline()			# 读一行
    lines = file.readlines()		# 按行读, 并将每一行装到list中

```



### 11.3 写文件

#### 11.3.1 覆盖写

```js
// node
fs.writeFile('example.txt', 'Hello, World!', (err) => {  // fs.writeFile是异步写, fs.writeFileSync()是同步写
   
});

//python
with open('example.txt', 'w') as file: //'w' 为写文件,如果文件存在，则覆盖原有文件；如果文件不存在，会创建新文件。
    file.write('Hello, World!')
```

#### 11.3.2 追加写

```js
//node
fs.appendFile('example.txt', '\nAppended text.', (err) => {
  
});

//python
with open('example.txt', 'a') as file: // 'a' 模式 表示追加模式，会将内容追加到文件的末尾，而不是覆盖原有内容。
    file.write('\nAppended text.')
```



#### 11.3.3 写入多行

```python
lines = ['Hello, World!\n', 'This is the second line.\n']
with open('example.txt', 'w') as file:
    file.writelines(lines)

```

- **`writelines()`** 可以将多个字符串写入文件，每个字符串代表文件中的一行。



#### 11.3.4 文件读写模式总结

| 模式      | 描述      | 文件已存在 | 文件不存在 | 是否覆盖 | 使用场景        |
| ------- | ------- | ----- | ----- | ---- | ----------- |
| `'w'`   | 写模式     | 会覆盖   | 会创建   | 是    | 写入新内容，覆盖文件  |
| `'a'`   | 追加模式    | 内容追加  | 会创建   | 否    | 向文件末尾追加内容   |
| `'x'`   | 创建新文件   | 抛出异常  | 会创建   | 否    | 确保文件不存在时才创建 |
| `'wb'`  | 二进制写模式  | 会覆盖   | 会创建   | 是    | 写入二进制数据     |
| `'w+'`  | 读写模式    | 会覆盖   | 会创建   | 是    | 读写文件，覆盖内容   |
| `'a+'`  | 追加读写模式  | 内容追加  | 会创建   | 否    | 读写文件，追加内容   |
| `'rb'`  | 二进制读模式  | 可读取   | 抛出异常  | 否    | 读取二进制文件     |
| `'r+'`  | 读写模式    | 不会覆盖  | 抛出异常  | 否    | 读写文件，不创建文件  |
| `'rb+'` | 二进制读写模式 | 可读写   | 抛出异常  | 否    | 读写二进制文件     |



## 十二、网络请求

> `js`一般用`axios`发请求, `python`一般用`requests`发请求, 有一个重要区别是`axios`的请求是异步的, `requests`的请求是同步的

#### 12.1 get请求

```js
// js
const axios = require('axios');

try{
  const response = await axios({
    method:"GET",
    url: "https://jsonplaceholder.typicode.com/posts"
    params: {
      userId: 1,
      postId: 2
    }
  })
  
  console.log(response.data) // 服务端返回的数据被放在response.data里
}catch(e){}
```



```python
import requests

try:
    response = requests.get(
         url = 'https://jsonplaceholder.typicode.com/posts', 
         params={
        	'userId': 1, 
        	'postId': 2
         }
    )
    
    print(response.json())  # 将json转为字典
except Exception as e:
    print(f"An error occurred: {e}")
```



#### 12.2 post请求

```js
//js
const axios = require('axios');

try {
  const response = await axios({
    method: "POST",  
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {  
      "Content-Type": "application/json",  
      "Authorization": "Bearer your_token"  
    },
    params: {  
      userId: 1
    },
    data: {  
      title: "foo",
      body: "bar",
      userId: 1
    }
  });

  console.log(response.data);  
} catch (e) {
  console.error(e);  
}
```



```python
# python
import requests

try:
    response = requests.post(
        url = "https://jsonplaceholder.typicode.com/posts",
        headers={ 
            "Content-Type": "application/json",
            "Authorization": "Bearer your_token"
        },
        params={  # 查询参数
            "userId": 1
        },
        json={  # 请求体参数，JSON 数据
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
    )

    print(response.json())  
except Exception as e:
    print(e) 

```



## 十三、TS的类型与python中的类型

### 13.1. **基本类型**

- **TypeScript**：

  ```typescript
  function greet(name: string): string {
    return `Hello, ${name}`;  
  }
  ```

- **Python**：

  ```python
  def greet(name: str) -> str:
      return f"Hello, {name}" 

  ```



| **TypeScript**                | **Python**           |
| ----------------------------- | -------------------- |
| `number`                      | `int`, `float`       |
| `string`                      | `str`                |
| `boolean`                     | `bool`               |
| `undefined` / `null` /`void ` | `None`               |
| `any`                         | `Any` (Python 3.10+) |

### 13.2. **数组类型**

- **TypeScript**：

  ```typescript
  function sum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);  // 计算数组的和
  }
  ```

- **Python**：

  ```python
  from typing import List  # 导入 List 类型提示

  def sum(numbers: List[int]) -> int:
      return sum(numbers) 

  ```



### 13.3. **对象类型**

- **TypeScript**：

  ```typescript
  function printPerson(person: { name: string, age: number }): void {
    console.log(`${person.name} is ${person.age} years old.`); 
  }

  ```

  **注释**：`person` 是一个对象，包含 `name` 和 `age` 字段。`void` 表示没有返回值。

- **Python**：

  ```python
  from typing import Dict  # 导入 Dict 类型提示

  def print_person(person: Dict[str, int]) -> None:
      print(f"{person['name']} is {person['age']} years old.")  # 打印字典中的值

  ```

  **注释**：`person` 是一个字典，键为 `str` 类型，值为 `int` 类型。`None` 表示函数没有返回值。

------

### 13.4. **联合类型**

- **TypeScript**：

  ```typescript
  function process(value: string | number): string {
    return value.toString();  
  }

  ```

  ​

- **Python**：

  ```python
  from typing import Union  # 导入 Union 类型提示

  def process(value: Union[str, int]) -> str:
      return str(value)  # 将值转为字符串

  ```

------

### 13.5. **可选参数**

- **TypeScript**：

  ```typescript
  function greet(name?: string): string {
    return name ? `Hello, ${name}` : 'Hello, guest';  // 如果 name 存在，则打招呼
  }

  ```

- **Python**：

  ```python
  from typing import Optional  # 导入 Optional 类型提示

  def greet(name: Optional[str] = None) -> str:
      return f"Hello, {name or 'guest'}"  # 如果 name 为 None，则使用 'guest'

  ```

------

### 13.6. **回调函数类型**

- **TypeScript**：

  ```typescript

  function operate(a: number, b: number, callback: (x: number, y: number) => number): number {
    return callback(a, b);  // 执行回调函数并返回结果
  }

  ```

- **Python**：

  ```python

  from typing import Callable  # 导入 Callable 类型提示

  def operate(a: int, b: int, callback: Callable[[int, int], int]) -> int:
      return callback(a, b)  # 执行回调函数并返回结果

  ```

------

### 13.7. **类型别名**

- **TypeScript**：

  ```typescript
  type Point = { x: number, y: number };  // 定义一个 Point 类型

  function movePoint(point: Point, dx: number, dy: number): Point {
    return { x: point.x + dx, y: point.y + dy };  // 更新坐标并返回
  }

  ```

- **Python**：

  ```python
  from typing import TypedDict  # 导入 TypedDict 类型提示

  class Point(TypedDict):  # 定义一个 TypedDict 类型
      x: int
      y: int

  def move_point(point: Point, dx: int, dy: int) -> Point:
      return {'x': point['x'] + dx, 'y': point['y'] + dy}  # 更新坐标并返回

  ```

------

### 13.8. **泛型类型**

- **TypeScript**：

  ```TypeScript
  function identity<T>(value: T): T {
    return value;  // 返回传入的值
  }

  ```

- **Python**：

  ```python
  from typing import TypeVar  # 导入 TypeVar

  T = TypeVar('T')  # 定义一个类型变量

  def identity(value: T) -> T:
      return value  

  ```

------

### 13.9. **字面量类型**

- **TypeScript**：

  ```TypeScript
  function status(code: 'success' | 'error'): void {
    console.log(code);  
  }

  ```

- **Python**：

  ```Python
  from typing import Literal  # 导入 Literal 类型提示

  def status(code: Literal['success', 'error']) -> None:
      print(code)  
  ```



## 十四、class

### 14.1. 构造函数

**TypeScript**

在 TypeScript 中，构造函数通过 `constructor` 关键字定义，用来初始化类的实例。

```js
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('Alice');
console.log(person.name);  // 输出：Alice

```

**Python**

在 Python 中，构造函数使用 `__init__` 来定义。

```python
class Person:
    def __init__(self, name):  ## __init__ 方法的第一个参数是 self，用于指代当前实例对象。所以不需要this
        self.name = name

person = Person('Alice')
print(person.name)  # 输出：Alice
```

### 14.2. 访问修饰符

**TypeScript**

TypeScript 支持 `public`、`private` 和 `protected` 访问修饰符，用于控制属性或方法的可访问性。

```js
class Person {
    private name: string;  // 私有属性
    
    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
}
```

**Python** 

Python 默认没有强制的访问控制，约定使用 `_` 前缀表示私有变量

```python
class Person:
    def __init__(self, name):
        self._name = name  # 约定：_name 表示私有属性

```

### 14.3. 继承

**TypeScript**

TypeScript 使用 `extends` 来继承父类，子类可以通过 `super` 来调用父类的构造函数和方法。

```typescript
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

class Employee extends Person {
    role: string;

    constructor(name: string, role: string) {
        super(name);  
        this.role = role;
    }

    greet() {
        super.greet();  
        console.log(`I am a ${this.role}`);
    }
}



```

**Python**

Python 通过 `class Child(Parent)` 来继承，使用 `super()` 调用父类构造函数和方法。

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, {self.name}")

class Employee(Person):
    def __init__(self, name, role):
        super().__init__(name)  # 调用父类构造函数
        self.role = role

    def greet(self):
        super().greet()  # 调用父类方法
        print(f"I am a {self.role}")

emp = Employee('Alice', 'Developer')
emp.greet()
# 输出：
# Hello, Alice
# I am a Developer

```

### 14.4. 静态方法

**TypeScript**

TypeScript 使用 `static` 关键字来定义静态方法。

```typescript
class Person {
    static count: number = 0;

    static increment() {
        Person.count++;
    }
}

Person.increment();
console.log(Person.count);  // 输出：1

```

**Python**

Python 使用 `@staticmethod` 装饰器来定义静态方法。

```Python
class Person:
    count = 0 # 在python中这么写就是静态属性, 示例属性是在__init__方法里通过self.xxx = xxx定义的属性

    @staticmethod
    def increment():
        Person.count += 1

Person.increment()
print(Person.count)  # 输出：1

```

### 5. 抽象类

**TypeScript**

TypeScript 使用 `abstract` 关键字来定义抽象类，无法实例化。抽象方法必须由子类实现。

```typescript
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}

const dog = new Dog();
dog.makeSound();  // 输出：Woof

```

**Python**

Python 使用 `abc` 模块，并通过 `@abstractmethod` 装饰器定义抽象方法。

```Python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Woof")

dog = Dog()
dog.make_sound()  # 输出：Woof

```

### 6. Getter 和 Setter

**TypeScript**

TypeScript 使用 `get` 和 `set` 关键字来定义 getter 和 setter。

```TypeScript
class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

const person = new Person('Alice');
console.log(person.name);  // 输出：Alice
person.name = 'Bob';
console.log(person.name);  // 输出：Bob

```

**Python**

Python 使用 `@property` 和 `@<property_name>.setter` 装饰器来实现 getter 和 setter。

```Python
class Person:
    def __init__(self, name):
        self._name = name

    @property          # getter
    def name(self):
        return self._name

    @name.setter       # setter
    def name(self, value):
        self._name = value

person = Person('Alice')
print(person.name)  # 输出：Alice
person.name = 'Bob'
print(person.name)  # 输出：Bob

```



## 十五、枚举

ts

```ts
enum Color {
    Red = 5,
    Green = 10,
    Blue = 15
}

console.log(Color.Red);   // 输出：5
```

python

```python
from enum import Enum

class Direction(Enum):
    Up = "UP"
    Down = "DOWN"
    Left = "LEFT"
    Right = "RIGHT"

# 获取枚举成员的名称
print(Direction.Up.name)  # 输出：Up

# 获取枚举成员的值
print(Direction.Up.value)  # 输出：UP
```

## 十六、随机数, uuid

**随机数**

```python
import random

# 1. 从列表中随机选择一个元素
items = [1, 2, 3, 4, 5]
choice = random.choice(items)  # 随机选择一个元素
print(f"Random choice from list: {choice}")

# 2. 从列表中随机选择多个元素（不重复）
sample = random.sample(items, 3)  # 随机选择 3 个元素
print(f"Random sample from list: {sample}")

# 3. 生成一个 0 到 1 之间的随机浮动数
random_float = random.random()
print(f"Random float between 0 and 1: {random_float}")

# 4. 生成一个指定范围的随机整数
random_int = random.randint(1, 10)  # 随机选择 1 到 10 之间的整数
print(f"Random integer between 1 and 10: {random_int}")

# 5. 生成一个 1 到 100 之间的随机整数
random_randint = random.randint(1, 100)  # 随机选择 1 到 100 之间的整数
print(f"Random integer between 1 and 100: {random_randint}")
```



**uuid**

```python
import uuid
generated_uuid = uuid.uuid4()  # 生成一个 UUIDv4
print(generated_uuid)
```



##  十七、模块化

`python`中所有`.py`文件都是模块. 包含多个`.py`文件, 且有`__init__.py`的目录称为"包"



```python
# 导入模块
import <模块>
import <模块> as <别名>
from <模块> import <名称>
from <模块> import <名称1>,<名称2>,...


# 导入包中的模块
import <包>.<模块>
import <包>.<模块>.<名称>
from <包>.<模块> import <名称>
from <包>.<子包>.<模块> import <名称>
```



## 十六、语法特性

### 16.1隐式类型转换

Python 并没有像 JavaScript 那样的隐式类型转换, `Python`强烈推荐显示类型转换, 如下

**拼接字符串中的隐式类型转换**

```python
# 报错
result = "5" + 10  # TypeError: can only concatenate str (not "int") to str

# 正确
result = int("5") + 10
```



**==中的隐式类型转换**

```js
if 5 == "5":  # False, 不会进入分支语句
print(0 == False)  #  True, 一个例外: (Python 会将 `False` 隐式转换为 `0`)
```



### 16.2 try catch/finally/throw 与 异常类型

```js
try {
    if (x > 5) {
        throw new Error("Value is too large!"); // js用throw抛异常
    }
} catch (e) {
    // 捕获异常消息
} finally {
    // 无论是否有异常都会执行
}
```



```python
try:
    if x > 5:
        raise ValueError("Value is too large!")  # python用raise抛异常
except Exception as e: 
     # python用except捕捉异常
finally:
    # 无论是否有异常都会执行
```



### 16.3 事件循环与协程 

Python 是 **单线程** 的,  也有类似事件循环的机制，通常通过 **异步编程** 来实现，主要依赖 `asyncio` 库来处理异步任务。虽然 JavaScript 的事件循环机制与 Python 的事件循环有相似之处，但两者在实现和使用方式上有一些不同。

1. **事件循环的基本概念**

- **JavaScript**：事件循环（Event Loop）是 JavaScript 的一种机制，它允许非阻塞的异步操作，例如 I/O 操作、计时器、事件监听等。JavaScript 的事件循环非常依赖单线程，通过将异步操作的回调放入消息队列来依次处理。
- **Python**：Python 使用 `asyncio` 提供事件循环来处理异步操作，尤其是在 I/O 密集型的任务中。Python 的 `asyncio` 基于协程，通过 `async` 和 `await` 语法实现异步编程，配合事件循环来调度和执行这些协程。

2. **JavaScript 事件循环的特点**

- **单线程模型**：JavaScript 是单线程的，事件循环机制允许多个任务轮流执行，而不会阻塞主线程。它通过任务队列和执行栈来控制任务的执行顺序。
- **微任务与宏任务**：JavaScript 的事件循环分为宏任务（如 I/O 操作、定时器）和微任务（如 Promise 的回调）。微任务会在宏任务之前执行，确保回调尽可能快地执行。

3. **Python 事件循环的特点**

- **多任务并发**：Python 的 `asyncio` 库利用协程提供异步编程，通过事件循环调度并发任务。虽然 Python 本身是单线程的，但可以通过协程并发执行多个任务，而不会阻塞主线程。
- **协程与 asyncio**：Python 使用 `async` 定义协程，通过 `await` 来暂停和恢复任务，`asyncio` 的事件循环调度这些协程。它不会像 JavaScript 那样区分宏任务和微任务，而是通过 `asyncio` 的任务队列来管理任务。

4. **关键区别**

- **执行顺序**：JavaScript 在事件循环中处理宏任务和微任务，Python 的 `asyncio` 则是以协程的形式执行，并且通常不会像 JavaScript 那样明确区分宏任务与微任务。
- **编程模型**：JavaScript 通过回调函数来实现异步处理，而 Python 则通过 `async`/`await` 来直接定义协程函数，代码结构更接近同步代码，易于理解。
- **库支持**：Python 的事件循环主要依赖 `asyncio` 库，但它也可以与其他库（如 `aiohttp`、`curio`）一起使用，支持 Web、网络 I/O 等场景。

总结：

- JavaScript 的事件循环是基于回调和事件驱动的模型，强调异步回调和任务队列的管理。
- Python 的 `asyncio` 事件循环提供了更现代的协程支持，允许通过 `async`/`await` 语法实现并发异步编程。



1. **协程的基本概念**

协程允许一个函数在执行过程中“暂停”，然后在稍后的时间恢复执行。这种机制使得可以在单线程中执行多个任务，避免了线程切换和上下文切换的高开销。协程通常用于 I/O 密集型操作或需要等待的任务（如文件操作、网络请求等），而不必阻塞其他任务的执行。

2. **协程与线程的区别**

- **线程**：线程是操作系统管理的，线程之间的切换由操作系统调度，切换频繁时会产生较大的性能开销。而协程是由程序控制的，它们在同一线程中调度，因此不会有线程间的上下文切换开销。
- **协程的优势**：协程是非阻塞的，当遇到需要等待的操作（如 I/O 操作）时，协程可以暂停并让其他任务继续执行，从而提高程序的并发能力。相比多线程，协程的开销要小得多。

3. **协程的工作原理**

协程通过 `yield` 或 `await` 等关键字暂停自己的执行，告诉事件循环“我还没完成，但可以让其他任务执行”，然后当某个条件满足时，再从暂停的位置继续执行。

例如，在 Python 中，使用 `async` 和 `await` 来定义和执行协程。`async` 用于定义协程函数，`await` 用来暂停执行并等待另一个协程的结果。

4. **Python 中的协程示例**

```python

import asyncio

# 定义一个协程函数
async def greet(name):
    print(f"Hello, {name}!")
    await asyncio.sleep(1)  # 模拟一个异步操作
    print(f"Goodbye, {name}!")

# 事件循环来运行协程
async def main():
    await asyncio.gather(greet("Alice"), greet("Bob")) # 类似与Pormise.all, 并行执行多个异步任务

# 启动事件循环
asyncio.run(main()) # 最外层要用 asyncio.run开启事件循环

```

在这个例子中，`greet` 是一个协程函数，使用 `await asyncio.sleep(1)` 来模拟异步操作。`asyncio.run(main())` 启动了事件循环并调度了两个协程。

5. **协程的优势**

- **高效的 I/O 操作**：协程特别适合 I/O 密集型任务（如网络请求、数据库查询等），因为在等待 I/O 操作时，协程可以挂起并让其他任务继续执行。
- **减少上下文切换**：与线程相比，协程不需要操作系统的干预，不涉及线程的上下文切换，因此能够减少开销。
- **简单的并发**：通过 `async` 和 `await`，协程使得并发编程变得更加简单和易于理解，避免了回调地狱和复杂的多线程同步问题。

6. **协程的缺点**

- **仅限于单线程**：协程通常在单线程中运行，所以它们适合 I/O 密集型任务，但对于计算密集型任务（如复杂的数学运算），协程并不能发挥很大的作用，因为 Python 的 GIL（全局解释器锁）会限制多核 CPU 的利用。
- **难以调试**：协程的调试相对复杂，因为程序的执行路径并不是线性的，而且可能在不同的时刻暂停和恢复。

7. **常见的应用场景**

- **Web 开发**：使用异步框架（如 `aiohttp`、`FastAPI`）来处理 Web 请求，能够有效地提高吞吐量，尤其是在高并发的场景下。
- **网络爬虫**：使用协程来并发抓取多个网页，能够大幅提高爬取速度。
- **实时数据处理**：例如处理来自多个传感器的数据流，协程可以并发地处理这些实时数据流。



### 16.4 解构赋值

更详细的python的解构赋值(解包)文档: [Python进阶（二）星号用法总结](https://zhuanlan.zhihu.com/p/677770662) , [Python中星号的五种用法](https://blog.csdn.net/sgzqc/article/details/128261430)

**列表/元组/字典解构**

```python
# 元组解构
a, b, c = (1, 2, 3)

# 列表解构
x, y, z = [10, 20, 30]

#字典解构
person = {"name": "Alice", "age": 25, "city": "New York"}
name, age, city = person.values()
```

**带有星号的解构**

Python 还允许使用 `*` 操作符来解构不确定数量的元素，类似于 JS 的剩余参数。

```python
# 通过 * 来解包不固定长度的列表或元组
a, *b, c = [1, 2, 3, 4, 5]
print(a)  # 输出: 1
print(b)  # 输出: [2, 3, 4]
print(c)  # 输出: 5

```

**函数传参中的解构**

在函数参数中，也可以使用解构赋值来简化代码：

```python
def greet_person(name, age):
    print(f"Hello, {name}! You are {age} years old.")

person_info = ("Alice", 25)
greet_person(*person_info)  # 将元祖结构成单独参数
```

## 十七、包管理工具与环境管理

`conda和pip`,  `npm` 

## 十八、Node.js

| Node.js API              | Python API / 方法                          | 说明                                       |
| ------------------------ | ---------------------------------------- | ---------------------------------------- |
| **路径操作**                 |                                          |                                          |
| `path.join(...paths)`    | `os.path.join(...paths)`                 | 拼接路径，根据平台自动使用正确的分隔符。(windows用`\`, `macos`用`/`) |
| `path.dirname(path)`     | `os.path.dirname(path)`                  | 获取路径的目录部分。                               |
| `path.resolve(...paths)` | `os.path.abspath(os.path.join(*paths))` 或 `os.path.realpath(...)` | 生成绝对路径，处理符号链接。                           |
| `path.extname(path)`     | `os.path.splitext(path)[1]`              | 获取文件扩展名。                                 |
| **内置变量**                 |                                          |                                          |
| `__filename`             | `__file__` 或 `os.path.abspath(__file__)` | 1. `nodejs`中 `__filename`返回的是决定路径, `python`中`__file__`不一定返回的是相对路径或者绝对路径. <br />2. 若一定要绝对路径, 请用`os.path.abspath(__file__)` |
| `__dirname`              | ` os.path.abspath(os.path.dirname(__file__))` | 当前模块所在的目录路径。                             |



















