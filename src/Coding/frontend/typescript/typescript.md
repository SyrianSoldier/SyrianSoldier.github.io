

# 1. typescript是什么

- Typescript是由微软开发的一款开源的编程语言，通过在Javascript的基础上添加静态类型定义构建而成。
- Typescript是Javascript的超集，遵循最新的ES5/ES6规范，Typescript扩展了Javascript语法。
- Typescript通过Typescript编译器或Babal转译为Javascript代码，可运行在任何浏览器，任何操作系统。
- TS提供的类型系统可以帮助我们在写代码的时候提供更丰富的语法提示。
- 在创建前的编译阶段经过类型系统的检查，就可以避免很多线上的错误。





# 2. TypeScript安装和编译

## 2.1  安装和编译

```typescript
cnpm i typescript -g
cnpm init -y (生成package.json配置文件)
tsc --init(生产tsconfig.json配置文件)
tsc helloworld.ts(编译成js再运行js代码)
```

> 可以安装ts-node包，执行 ts-node helloworld.ts可以直接运行ts代码

> tsc --watch 实时监听ts并编译js



> tsconfig.json

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. 指定ECMAScript的目标版本*/
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. 指定模块代码的生成方式*/
    // "lib": [],                             /* Specify library files to be included in the compilation. 指定编译的时候用来包含的编译文件*/
    // "allowJs": true,                       /* Allow javascript files to be compiled. 允许编译JS文件*/
    // "checkJs": true,                       /* Report errors in .js files. 在JS中包括错误*/
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. 指定JSX代码的生成方式 是保留还是react-native或者react*/
    // "declaration": true,                   /* Generates corresponding '.d.ts' file.生成相应的类型声明文件 */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. 为每个类型声明文件生成相应的sourcemap*/
    // "sourceMap": true,                     /* Generates corresponding '.map' file. 生成对应的map文件 */
    // "outFile": "./",                       /* Concatenate and emit output to single file. 合并并且把编译后的内容输出 到一个文件里*/
    // "outDir": "./",                        /* Redirect output structure to the directory.按原始结构输出到目标目录 */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. 指定输入文件的根目录，用--outDir来控制输出的目录结构*/
    // "composite": true,                     /* Enable project compilation 启用项目编译*/
    // "removeComments": true,                /* Do not emit comments to output. 移除注释*/
    // "noEmit": true,                        /* Do not emit outputs. 不要输出*/
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. 当目标是ES5或ES3的时候提供对for-of、扩展运算符和解构赋值中对于迭代器的完整支持*/
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule').r把每一个文件转译成一个单独的模块 */

    /* Strict Type-Checking Options */
    //"strict": true,                           /* Enable all strict type-checking options. 启用完全的严格类型检查 */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. 不能使用隐式的any类型*/
    // "strictNullChecks": true,              /* Enable strict null checks. 启用严格的NULL检查*/
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. 启用严格的函数类型检查*/
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions.启用函数上严格的bind call 和apply方法 */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. 启用类上初始化属性检查*/
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type.在默认的any中调用 this表达式报错 */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. 在严格模式下解析并且向每个源文件中发射use strict*/

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. 有未使用到的本地变量时报错 */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. 有未使用到的参数时报错*/
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. 当不是所有的代码路径都有返回值的时候报错*/
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. 在switch表达式中没有替代的case会报错 */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). 指定模块的解析策略 node classic*/
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. 在解析非绝对路径模块名的时候的基准路径*/
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. 一些路径的集合*/
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. 根目录的列表，在运行时用来合并内容*/
    // "typeRoots": [],                       /* List of folders to include type definitions from. 用来包含类型声明的文件夹列表*/
    // "types": [],                           /* Type declaration files to be included in compilation.在编译的时候被包含的类型声明 */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking.当没有默认导出的时候允许默认导入，这个在代码执行的时候没有作用，只是在类型检查的时候生效 */
    //"esModuleInterop": true                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'.*/
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks.不要symlinks解析的真正路径 */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. 指定ts文件位置*/
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. 指定 map文件存放的位置 */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. 源文件和sourcemap 文件在同一文件中，而不是把map文件放在一个单独的文件里*/
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. 源文件和sourcemap 文件在同一文件中*/

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. 启动装饰器*/
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
}
```



# 3. 数据类型

## 3.1 布尔类型(boolean)

```typescript
let married: boolean = false
```

## 3.2 数字类型(number)

```typescript
let age: number = 10;
```

## 3.3 字符串类型(string)

```typescript
let first_name: string = "reve"
```

## 3.4 数组类型(array)

```typescript
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [4, 5, 6]
```

## 3.5 元组类型(tuple)

- 在TS的基础类型中，元组(Tuple)表示一个已知**数量**和**类型**的数组

```typescript
let reve: [string, number] = ['lmh', 18]
```

|   **元组**    |   **数组**   |
| :---------: | :--------: |
| 每一项可以是不同的类型 | 每一项都是同一种类型 |
|   有预定义的长度   |   没有长度限制   |
|  用于表示一个结构   |  用于表示一个列表  |

## 3.6 枚举类型(enum)

- 事先考虑某一个变量的所以的可能的值，尽量用自然语言中的单词表示它的每一个值
- 比如性别、月份、星期、颜色、单位、学历

### 3.6.1 普通枚举

```typescript
enum Gender {
    GIRL,
    BOY
}
console.log(Gender['BOY'], Gender[1])
console.log(Gender['GIRL'], Gender[0])
```

> ts编译成js代码

```javascript
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender['BOY'], Gender[1]);
console.log(Gender['GIRL'], Gender[0]);

// var Gender = {
//     0: 'GIRL',
//     1: "BOY",
//     GIRL: 0,
//     BOY: 1,
// }
```

### 3.6.2 常量枚举

- 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
- 假如包含了计算成员，则会在编译阶段报错

```typescript
const enum Colors {
    RED, YELLOW, BLUE
}
let myColor = [Colors.RED, Colors.YELLOW, Colors.BLUE]
```

> ts编译成js代码

```javascript
let myColor = [0 /* Colors.RED */, 1 /* Colors.YELLOW */, 2 /* Colors.BLUE */];
```

## 3.7 任意类型(any)

- **any**就是可以赋值给任意类型
- 第三方库没有提供类型文件时可以使用any
- 类型转换遇到困难时
- 数据结构太复杂难以定义

```typescript
let root:any = document.getElementById('root')
root.style.color = 'red'
```

## 3.8 null和undefined

- null和undefined是其他类型的子类型，可以赋值给其他类型，如数组类型，此时，赋值后的类型会变成null或undefined
- strictNullChecks  如果在tsconfig.json文件中的strictNullChecks设置为true则会报错，其他类型不能定义为null或undefined类型

```typescript
let x: number;
x = 1;
x = undefined;    
x = null;   

let y: number | null | undefined;
y = 1;
y = undefined;   
y = null; 
```

## 3.9 void类型

- void表示没有任何类型
- 当一个函数没有返回值时，TS会认为它的返回值是void类型
- 当我们声明一个变量类型是void的时候，它的非严格模式下仅可以被赋值为null和undefined

```typescript
// 函数没有返回值，那么就是void类型
// strictNullChecks为false时，null可以赋值给void，为true时不行
function greeting():void{
    // return null
}
```

## 3.10 never类型

never是其他类型(null undefined)的子类型，代表不会出现的值

### 3.10.1 never

- 作为不会返回(return)的函数的返回值类型

```typescript
// never 代表不会出现的值
//  作为不会返回的函数的返回值类型
function error(message: string): never {
    throw new Error('报错了') // 直接异常结束了
    console.log('ok')
}
function loop(): never {
    while (true) {
    }
    console.log('ok')
}
```

### 3.10.2 strictNullChecks

- 在TS中，null和undefined是任何类型的有效值，所以无法正确的检测他们是否被错误的使用。于是TS引入了--strictNullChecks这一种检查模式
- 由于引入了--strictNullChecks，在这一模式下，null和undefined能被检测到。所以TS需要已知新的底部类型(bottom type)。所以就引入了never

```typescript
function fn(x: number | string) {
    if (typeof x === 'number') {
        console.log(x)
    } else if (typeof x === 'string') {
        console.log(x)
    } else {
        console.log(x)  // never
    }
}
```

### 3.10.3 never 和 void 的区别

- `void`可以被赋值为null和undefined的类型，never则是一个不包含值的类型。
- 拥有void返回值类型的函数能正常运行。拥有never返回值类型的函数无法正常返回，无法终止，或会抛出异常

## 3.11 bigint类型

`BigInt`数据类型的目的是比`Number`数据类型支持的范围更大的整数值,以任意精度表示整数的能力尤为重要

`number`表示的最大数字范围为2**53-1

```typescript
// bigint
const max1 = Number.MAX_SAFE_INTEGER // 2^53 - 1
console.log(max1 + 1 === max1 + 2) // true
const max2 = BigInt(Number.MAX_SAFE_INTEGER)
console.log(max2 + BigInt(1) === max2 + BigInt(2))  // false
// console.log(max2 + 1n === max + 2n) // 当tsconfig.json 中的target为ESNext(ES最新的语法比如2022)时可以使用 n代表大整型的意思
// JS里的类型Number BigInt  TS里的类型 number bigint
let foo: number
let bar: bigint
foo = 1
bar = BigInt(1)
```

## 3.12 类型推导

- 是指编程语言中能够自动推导出值的类型的能力，它是一些抢静态类型语言中出现的特性
- 定义时为赋值就会推论成any类型
- 如果定义的时候就赋值就能利用到类型推论

```typescript
let uname; //any 
let uname2 = 'reve' //string
```

## 3.13 包装对象(Wrapper Object)

- Javascript的类型分为两种：原始数据类型(Primitive data types)和对象类型(Obejct types).
- 所以的原始数据类型都没有属性(property)
- 原始数据类型(布尔值，数值，字符串，null，undefined，Symbol)

```typescript
let name2 = 'reve'
console.log(name2.toUpperCase())

console.log(new String('reve').toUpperCase())
```

- 当调用基本数据类型方法的时候，Javascript会在原始数据类型和对象类型之间做一个迅速的强制性切换

```typescript
let isOK1: boolean = true // 编译通过
let isOK2: boolean = Boolean(1) // 编译通过
let isOK3: boolean = new Boolean(1) // 编译失败,new Boolean返回的不是原始数据类型
```

## 3.14 联合类型

```typescript
// 联合类型
let name3 :string | number
console.log(name3!.toString())  // 只能调用string和number共有的属性和方法
name3 = 3
console.log(name3.toFixed(2)) // 可以调用number的方法
name3 = 'reve'
console.log(name3.length) // 可以调用string的方法
```

## 3.15 类型断言

- 类型断言可以将一个联合类型的变量，指定为一个更加具体的类型
- 不能将联合类型断言为不存在的类型

```typescript
// 类型断言
let name4: string | number
console.log((name4! as number).toFixed(2)) // 强行断言成number类型
console.log((name4! as string).length) // 强行断言成string类型
// console.log(name4! as boolean) // 报错，不能强行断言成boolean类型
// 双重断言
console.log(name4! as any as boolean) // 这样可以
```

## 3.16 字面量类型

- 字面量类型可以为字符串、数组、布尔值为字面量

```typescript
// 字面量类型和类型字面量
// 字面量类型
type Lucky = 1 | 'One' | true
const up: 'Up' = 'Up'
const down: 'Down' = 'Down'
const left: 'Left' = 'Left'
const right: 'Right' = 'Right'
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
// 可实现枚举类型
function move(direction: Direction) {
}
move('Down')
// 类型字面量
type Person = {
    name: string,
    age: number
}
let p: Person = {
    name: 'reve',
    age: 18
}
```

### 3.15.1 字符串字面量vs联合类型

- 字符串字面量类型用来约束取值只能是某`几个字符串`中的一个，联合类型(Union Types)表示取值可以为`多种类型`中的一种
- 字符串字面量限定了使用该字面量的地方仅接受特定的值，联合类型对于值并没有限定，仅仅限定值的类型需要保持一致。

```typescript
type T1 = '1' | '2' | '3'
type T2 = string | number | boolean
let t1: T1 = '1' // 只能为1，2，3
let t2: T2 = 1 
```





# 4. 函数

### 4.1 函数的重载

- 表现为给同一个函数提供多个函数类型定义
- 一般是按照不同的参数类型约定不同的返回值类型

```typescript
// 函数的重载
let obj: any = {}
function attr(val: string): void
function attr(val: number): void
function attr(val: any): void {
    if (typeof val === 'string') {
        obj.name = val
    } else {
        obj.age = val
    }
}
attr('reve')
attr(18)
// attr(true)  报错
console.log(obj)

function add(x: string, y: string): string
function add(x: number, y: number): number
function add(x: any, y: any): any {
    return x + y
}
add('1', '2')
add(1, 2)
// add('3', 4)  报错
```

# 5. 类

## 5.1 定义类

```typescript
// 加入export或者import 让该文件模块化私有化，如果不加就是全局的，有可能会造成变量名冲突
export { }

class Person {
    name: string = 'reve'
    getName(): void {
        console.log(this.name)
    }
}
```

## 5.2 存取器

- 在TS中，我们可以通过存取器(`get,set`)来改变一个类中属性的读取和赋值行为

```typescript
// 定义存取器
class User {
    myName: string
    constructor(myName: string) {
        this.myName = myName
    }
    get name() {
        return this.myName
    }
    set name(val) {
        this.myName = val
    }
}
let user = new User('li')
user.name = 'mh'
console.log(user.name)
```



## 5.3 参数属性(public)

在构造器中的参数属性前面加上public 相当于在构造器中执行了`this.属性=属性`和把属性定义在了类中(注释掉的两行)

```typescript
class User {
    // myName: string
    constructor(public myName: string) {
      // this.myName = myName
    }
    get name() {
        return this.myName
    }
    set name(val) {
        this.myName = val
    }
}
```

## 5.2 readonly

- readonly修饰的变量只能在构造器中初始化或者定义的时候给值，之后就不能再改变了

```typescript
class Animal {
    public readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
```

## 5.3 类里面的修饰符(public protected private)

```typescript
class Father {
    public name: string    // public 自己 子类 和其它类都可以访问
    protected age: number  // protected 自己 子类可能访问 其它类不可以访问
    private money: number  // private 自己可以访问 子类和其它类不能访问
    constructor(name: string, age: number, money: number) {
        this.name = name
        this.age = age
        this.money = money
    }
    getName(): string {
        return this.name
    }
}
class Child extends Father {
    stuNo: number
    constructor(name: string, age: number, strNo: number, money: number) {
        super(name, age, money)
        this.stuNo = strNo
    }
    desc() {
        console.log(this.name, this.age)
    }
}
let child = new Child('reve', 11, 1, 100)
console.log(child.name)
```

## 5.4 静态属性和方法

- 静态属性和方法也可以继承

```typescript
class Father {
    static fatherName: string = 'fatherName'
    toString(){
        console.log('Father')
    }
}
class Child extends Father {
    static childName:string = 'childName'
    toString() {
       // 同方法父类会被子类覆盖
        super.toString() // 可以这样直接调用父类的方法
        console.log('Child')
    }
}
let child = new Child()
Child.fatherName
Child.childName
```



## 5.5 继承

```typescript
class Father {
}
class Child extends Father {
}
```

ts 继承编译成js简化版代码

```javascript
var extendStatics =function (Child, Father) { 
    for (var p in Father) if (Object.prototype.hasOwnProperty.call(Father, p)) Child[p] = Father[p]; 
};
var __extends = function (Child, Father) {
    extendStatics(Child,Father) // 把Father身上的静态属性和方法都复制到Child上
    function Temp(){
        this.constructor = Child
    }
    let temp = new Temp()
    // temp.prototype = Father.prototype
    // Child.prototype = temp
    Child.prototype = Object.create(Father.prototype)
}
function Father() { }
__extends(Child, Father);
function Child(...args) {
    return Father(...args);
}

```

## 5.6 装饰器

- [ ] 装饰器是一种特殊类型的声明，它能被附加到类声明、方法、属性或参数上，可以修改类的行为
- [ ] 本质上就是一个方法，可以注入到类、方法、属性、参数上来拓展类、属性、方法、参数的功能
- [ ] 常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
- [ ] 装饰器的写法：普通装饰器(无法传参)、装饰器工厂(可传参)

### 5.6.1 类装饰器

- 类装饰器在类声明之前被声明(紧靠着类声明)。
- 类装饰器应用于类构造函数，可以用来加监听、修改或替换类定义。
- 类装饰器不能用在声明文件中(.d.ts)，也不能用在任何外部上下文中(比如declare的类)
- 类装饰器表达式会在运行时当作函数被调用，类的构造器作为其唯一的参数。

**简单理解**

1. ==紧靠着声明==
2. ==参数：类的构造函数==

```typescript
function addNameEat(constructor: Function) {
    constructor.prototype.name = 'reve'
    constructor.prototype.eat = function () { }
}
// @addNameEat调用addNameEat函数并且接受类的构造函数作为参数
@addNameEat
class Person {
    name: string
    eat: Function
    constructor() { }
}
let p:Person = new Person()
console.log(p.name)
p.eat()
```

==**替换类**==

- 在装饰器函数中返回一个class
- 返回的class中的属性不能比原先的少

```typescript
// 可以多，但不能少
namespace c {
    function replaceClass(constructor: Function) {
        return class {
            name: string
            eat: Function
            age: number
            constructor() { }
        }
    }

    @replaceClass
    class Person {
        name: string
        eat: Function
        constructor() { }
    }
    let p: Person = new Person()
}
```





### 5.6.2 类的工厂装饰器

- 需要装饰器传参时必须在装饰器函数中return一个函数此时返回的函数才是装饰器函数

```typescript
function addNameEatFactory(name: string) {
  return function addNameEat(constructor: Function) {
    constructor.prototype.name = name
    constructor.prototype.eat = function () { }
  }
}

@addNameEatFactory('lmh')
class Person {
  name: string
  eat: Function
  constructor() { }
}
let p: Person = new Person()
console.log(p.name)
p.eat()
```



### 5.6.3 类属性装饰器

类属性装饰器会传入两个参数

- 对于实例属性来说第一个参数是构造函数的原型，对于静态属性来说第一个参数是构造函数本身
- 第二个参数是属性的名称

```typescript
/**
     * 
     * @param target 如果装饰的是实例属性的话，target是构造函数的原型
     * @param propertyKey 
     */
function upperCase(target: any, propertyKey: string) {
  // 阻止往实例上面添加属性，变为往原型上添加
  let value = target[propertyKey]
  const getter = () => value
  const setter = (newVal: string) => {
    value = newVal.toUpperCase()
  }
  if (delete target[propertyKey]) {
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}
/**
     * 
     * @param target 如果装饰的是实例属性的话，target是构造函数本身
     * @param propertyKey 
     */
function staticPropertyDecorator(target: any, propertyKey: string) { }
class Person {
  @upperCase
  name: string = 'reve'  // 实例属性
  @staticPropertyDecorator
  static age: number = 10 // 静态属性
  }
let p: any = new Person
console.log(p.name)
    // console.log(p.__proto__.name)
```



### 5.6.4 类方法装饰器

类方法装饰器会传入三个参数

- 对于实例方法来说第一个参数是构造函数的原型，对于静态方法来说第一个参数是构造函数本身
- 第二个参数是属性的名称
- 第三个参数是方法描述符

```typescript

/**
     * 
     * @param target 
     * @param propertyKey 
     * @param descriptor 属性描述符，可以得到该方法的value、enumerable、configurable、writable等一些属性
     */
function noEnumerabal(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  // 把可枚举变成不可枚举
  descriptor.enumerable = false
}
function toNumber(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let oldMethod = descriptor.value
  // 重写方法
  descriptor.value = function (...args) {
    args = args.map(item => parseInt(item))
    return oldMethod.apply(this, args)
  }
}
class Person {
  name: string = 'reve'  // 实例属性
  static age: number = 10 // 静态属性
  @noEnumerabal
  getName() { console.log(this.name) } // 实例方法
   @toNumber
   sum(...args: any[]) { // 实例方法
     return args.reduce((accu: number, item: number) => accu + item, 0)
   }
  }
let p: any = new Person
console.log(p.name) 
console.log(p.sum('1', '2', '3'))
```



### 5.6.5 参数装饰器

参数装饰器会传入三个参数

- 对于实例成员来说第一个参数是构造函数的原型，对于静态成员来说第一个参数是构造函数本身
- 第二个参数是成员的名称
- 第三个参数是函数参数的索引

```typescript
/**
     * 
     * @param target 静态成员就是构造函数，非静态成员就是构造函数的原型
     * @param methodName 方法名称
     * @param paramIndex 参数的索引
     */
function addAge(target: any, methodName: string, paramIndex: number) {
  console.log(target, methodName, paramIndex)
  target.age = 10
}
class Person {
  age: number
  login(username: string, @addAge password: string) {
    console.log(this.age, username, password)
  }
}
let p = new Person()
p.login('lmh', '000000')
```



### 5.6.6 装饰器的执行顺序

**装饰器的执行顺序是**

1. 类装饰器最后执行，后写的先执行
2. 有多个参数装饰器时：从最后一个参数依次向前执行
3. 方法和方法参数装饰器先执行参数，后执行方法装饰器
4. 属性和方法装饰器谁在前面谁先执行，因为参数属于方法的一部分，所以参数会一直紧紧挨着方法执行
5. 类比React组件的生命周期componentDidMount 先上后下，先内后外

```typescript
function ClassDecorator1() {
  return function (target) {
    console.log('ClassDecorator1')
  }
}
function ClassDecorator2() {
  return function (target) {
    console.log('ClassDecorator2')
  }
}
function PropertyDecoratoe(name) {
  return function (target, propertyKey) {
    console.log('PropertyDecoratoe', propertyKey, name)
  }
}
function MethodDecorator() {
  return function (target, propertyKey, descriptor) {
    console.log('MethodDecorator' + propertyKey)
  }
}
function ParameterDecorator(index) {
  return function (target, methodName, index) {
    console.log('ParameterDecorator', methodName, index)
  }
}
@ClassDecorator1()
@ClassDecorator2()
class Person {
  @PropertyDecoratoe('name')
  name: string = ''
  @PropertyDecoratoe('age')
  age: number = 0
  @MethodDecorator()
  hello(@ParameterDecorator('1') p1: string, @ParameterDecorator('2') p2: string) { }
  }

// PropertyDecoratoe name name
// PropertyDecoratoe age age
// ParameterDecorator hello 1
// ParameterDecorator hello 0
// MethodDecoratorhello
// ClassDecorator2
// ClassDecorator1
```



## 5.7 抽象类

- 抽象描述一种抽象的概念，无法被实例化，只能被继承
- 无法创建抽象类的实例
- 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现

```typescript
abstract class Animal {
    name!: string
    abstract speak()
}
class Cat extends Animal {
    speak() {
        console.log('喵喵喵')
    }
}
let cat = new Cat()
cat.speak()
```



## 5.8 抽象方法

- 抽象类和抽象方法不包含具体实现，必须在子类中实现
- 抽象方法只能出现在抽象类中
- 子类可以对抽象类进行不同的实现

```typescript
abstract class Animal {
    abstract speak()
}
class Cat extends Animal {
    speak() {
        console.log('喵喵喵')
    }
}
class Dog extends Animal {
    speak() {
        console.log('汪汪汪')
    }
}
let cat = new Cat()
cat.speak()
let dog = new Dog()
dog.speak()
```



## 5.9 重写(override) vs 重载(overload)

- 重写是指子类重写继承于父类中的方法
- 重载是指为同一个函数提供多个的类型定义

```typescript
// 重写
class Animal {
  speak(word: string):string { 
  	return 'Animal' + word
  }
}
class Cat extends Animal {
  speak(word: string): string {
    return 'Cat' + word
  }
}
let cat = new Cat()
cat.speak('hello')

// 重载
function double(val: number): number
function double(val: string): string
function double(val: any): any {
  if (typeof val === 'number') {
    return val * 2
  }
  return val + val
}
let r = double(1)
```

## 5.10 继承 vs 多态

- 继承(Inheritance) 子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体(子类自己)的特性
- 多态(Polymorphism) 由继承而产生了相关的不同的类，对用一个方法可以有不同的响应

```typescript
class Animal{
    speak(word:string):string{
        return 'Animal: '+word;
    }
}
class Cat extends Animal{
    speak(word:string):string{
        return 'Cat:'+word;
    }
}
class Dog extends Animal{
    speak(word:string):string{
        return 'Dog:'+word;
    }
}
let cat = new Cat();
console.log(cat.speak('hello'));
let dog = new Dog();
console.log(dog.speak('hello'));
```





# 6.接口

- 接口一方面可以在面向对象编程中表示为`行为的抽象`，另外可以用来描述`对象的形状`
- 接口就是把一些类中共有的属性和方法抽象出来，可以用来约束实现此接口的类
- 一个类可以继承另一个类并实现多个接口
- 接口像插件一样用来增强类的，而抽象类是具体类的抽象概念
- 一个类可以实现多个接口，一个接口也可以被多个类实现，但一个类可以有多个子类，一个子类只能继承一个父类

## 6.1 接口

- interface中可以用分号或者逗号分割每一项，也可以什么都不加

### 6.1.1 对象的形状

- 接口可以用来描述“对象的形状”，少属性或者多属性都会报错

```typescript
interface Speakable {
    speak(): void
    name?: string
}
let speakman: Speakable = {
    speak() { }, // 少属性会报错
    name:'',
    // age 多属性也会报错
} 
```

### 6.1.2 行为的抽象

```typescript
// 接口可以在面向对象编程中表示为行为的抽象
interface Speakable {
  speak(): void
}
interface Eatable {
  eat(): void
}
// 一个类可以实现多个接口
class Person implements Speakable, Eatable {
  speak(): void {
    console.log('Person说话')
  }
  eat(): void {
    console.log('person吃饭')
  }
}
class TangDuck implements Speakable {
  speak(): void {
    console.log('TangDuck说话')
  }
}
```

### 6.1.3 任意属性

- 无法预先知道有哪些新的属性的时候，可以使用`[propName:string]:any`,propName名字是任意的，可以是字符串或者是数值，数值类型会隐式转换成字符串类型

```typescript
 interface Person {
   readonly id: number
   name: string
   [propName: string]: any
}
let p1: Person = {
  id: 1,
  name: 'reve',
  age: 18,
  gender:'女'
}
```



## 6.2 接口的继承

- 一个接口可以继承自另一个接口

```typescript
interface Speakable {
    speak(): void
}
interface SpeakChinese extends Speakable {
    speakChinese(): void
}
class Person implements SpeakChinese {
    speak() {
        console.log('Person')
    }
    speakChinese() {
        console.log('speakChinese')
    }
}
```

## 6.3 readonly

- 用readonly定义只读属性可以避免由于多人写作或者项目较为复杂等因素造成对象的值被重写

```typescript
interface Person{
  readonly id:number;
  name:string
}
let tom:Person = {
  id :1,
  name:'zhufeng'
}
tom.id = 1;
```

## 6.4 函数类型接口

- 对方法传入的参数和返回值进行约束
- interface接口对象中没有名字说明约束的是普通函数，名字为new说明约束的是类的构造函数类型

```typescript
interface Discount {
  (price:number):number
}
let cost:Discount = function(price) {
  return price * 0.8
}
```

**如果interface中除了有约束函数的类型还有别的属性类型，则该属性约束的是函数上的静态属性类型**

```typescript
interface Discount {
  (price:number):number,
  goodName:string
}
let cost:any = function(price) {
  return price * 0.8
}
cost.goodName = '苹果'
let cost1:Discount = cost
```

## 6.5 类的类型

```typescript
// React也非常重要的一个知识点

/**
 * 当我们写一个类的时候，会得到2个类型
 * 1. 构造函数类型的函数类型
 * 2. 类的实例类型
 */

namespace a {
    class Component {
        static myName: string = "静态名称属性"
        myName: string = '实例名称属性'
    }
    let com = Component
    // Component类名本身表示的是实例的类型
    // typeof Component得到的是构造函数的函数类型
    // 在ts中，定义出来的类，可以表示两个意思，一个是类型，一个是值
    // 在冒号后面的是类型，在=后面的是值
    let c: Component = new Component()
    let f: typeof Component = com
}

namespace b {
    function Component() {
        this.myName = '实例名称属性'
    }
    Component.myName = '静态名称属性'
    let com = Component
    let f:typeof Component = com
}
```





# 7. 泛型

- 泛型(Generics)是指定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
- 泛型`T`作用域只限于函数内部使用

## 7.1 泛型函数

- 首先，我们来实现一个函数createArray，它可以创建一个指定长度的数组，并且将每一项都填充一个默认值

```typescript
function createArray(length: number, value: any): Array<any> {
    let result: any[] = []
    for (let i = 0; i < length; i++) {
        result.push(value)
    }
    return result
}
let result = createArray(3, 'x')
console.log(result)
```

**使用了泛型**

```typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result.push(value)
    }
    return result
}
let result = createArray<string>(3, 'x')
console.log(result)
```

## 7.2 泛型类

### 7.2.1 泛型类

```typescript
class MyArray<T>{
    list: T[] = []

    add(value: T) {
        this.list.push(value)
    }

    getMax(): T {
        let result = this.list[0]
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > result) {
                result = this.list[i]
            }
        }
        return result
    }
}
let arr = new MyArray<number>()
arr.add(1)
arr.add(2)
arr.add(3)
console.log(arr.getMax())
```

### 7.2.2 泛型与new

```typescript
class Person { }
function factory<T>(type: { new(): T }): T {
   // 表示传入的参数是构造函数，T表示是构造函数的实例类型 
    return new type()
}
const f = factory<Person>(Person)
console.log(f)
```

## 7.3 泛型接口

- 泛型接口可以用来约束函数

```typescript
interface Calculate {
    <T>(a: T, b: T): T
}
let add: Calculate = function <T>(a: T, b: T): T {
    return a
}
add<number>(1, 2)
```

## 7.4 多个类型参数

- 泛型可以有多个

```typescript
function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]]
}
let swaped = swap<string, number>(['a', 1])
console.log(swaped)
```

## 7.5 默认泛型类型

```typescript
function createArray3<T = number>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result.push(value)
    }
    return result
}
let result2 = createArray3(3, 'x')
```

## 7.6 约束泛型

- 在函数中使用泛型的时候，由于预先并不知道泛型的类型，所以不能随意访问相应类型的属性或方法。

```typescript
// function logger<T>(val: T) {
//     console.log(val.length) // 直接访问会报错
// }
// 可以让泛型继承一个接口
interface LengthWise {
    length: number
}

function logger2<T extends LengthWise>(val: T) {
    console.log(val.length)
}
logger2<string>('reve')
let obj = {
    length: 10
}
type Obj = typeof obj
logger2<Obj>(obj)
// logger2<number>(1) // number没有length属性
```

## 7.7 泛型类型别名 

- 泛型类型别名可以表达更复杂的类型

```typescript
type Cart<T> = { list: T[] } | T[]
let c1: Cart<string> = { list: ['1'] }
let c2: Cart<number> = [1]
```

## 7.8 泛型接口vs泛型类型别名

- 接口创建了一个新的名字，它可以在其他任意地方使用。而类型别名并不创建新的名字，例如报错西南西就不会使用别名
- 类型别名不能被extends和implements，这时我们应该尽量使用接口代替类型别名
- 当我们需要使用联合类型或者元组类型的时候，类型别名会更合适
- **==就是能使用interface就使用，不能用就用类型别名==**



## 7.9 compose

```typescript
type Func<T extends any[], R> = (...a: T) => R

/**
 * 从右到左组成单参数函数. 
 * 最右边的函数可以接受多个参数，因为它为生成的复合函数提供签名。
 *
 * @param funcs The functions to compose.
 * @returns A function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */

function add1(str) { return str + '1' }
function add2(str) { return str + '2' }
// 0个参数
console.log(compose()('zhufeng'))   // zhufeng
// 1个参数
console.log(compose(add1)('zhufeng'))  // zhufeng1
// 2个参数
console.log(compose(add1, add2)('zhufeng')) // zhufeng21

/* zero functions */
// compose()函数的参数就是返回值
export default function compose(): <R>(a: R) => R

/* one functions */
// compose函数的参数就是compose()函数
export default function compose<F extends Function>(f: F): F

/* two functions */
// 先通过compose()函数的参数确定T  T=['zhufeng']
// 然后通过T确定f2的返回值 A  A='zhufeng2'
// 通过A确定f1的返回值 R='zhufeng21'
// 最后通过R确定compose()函数的返回值就是R
export default function compose<A, T extends any[], R>(
    f1: (a: A) => R,
    f2: Func<T, A>
): Func<T, R>

/* three functions */
export default function compose<A, B, T extends any[], R>(
    f1: (b: B) => R,
    f2: (a: A) => B,
    f3: Func<T, A>
): Func<T, R>

/* four functions */
export default function compose<A, B, C, T extends any[], R>(
    f1: (c: C) => R,
    f2: (b: B) => C,
    f3: (a: A) => B,
    f4: Func<T, A>
): Func<T, R>

/* rest */
export default function compose<R>(
    f1: (a: any) => R,
    ...funcs: Function[]
): (...args: any[]) => R

export default function compose<R>(...funcs: Function[]): (...args: any[]) => R

export default function compose(...funcs: Function[]) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return <T>(arg: T) => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
```









# 8. 结构类型系统

## 8.1 接口的兼容性

- 如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
- 原理是`Duck-Check`，就是说只要目标类型中声明的属性变量在源类型中都存在就是兼容的.

```typescript
interface Animal {
  name: string
  age: number
}
interface Person {
  name: string
  age: number
  gender: number
}
// 目标类型
function getName(a: Animal): string {
  return a.name
}
let a: Animal = {
  name: '',
  age: 10
}
getName(a)
let p: Person = {
  name: '',
  age: 10,
  gender: 0
}
// a，b 源类型
// getName参数类型Animal需要的Person都有
getName(p)
```



## 8.2 基本类型的兼容性

```typescript
// 基本数据类型的兼容性
// num需要的str有 兼容
let num: string | number
let str: string = 'zhufeng'
num = str

let num2: {
  toString(): string
}
let str2: string = 'jiagou'
num2 = str2
// 意思就是你需要的我有，兼容，没有，不兼容
```



## 8.3 类的兼容性

- 在TS中是结构类型系统，只会对比结构而不在意类型

```typescript
class Animal { 
	name: string
}
class Bird extends Animal { }
let a: Animal = new Animal();
let b: Bird = new Bird();
a = b
b = a
// 子类父类结构一样，可以兼容
```

```typescript
class Animal { 
	name: string
}
class Bird extends Animal { 
	swing: number
}
let a: Animal = new Animal();
let b: Bird = new Bird();
a = b
// b 需要的结构 a没有，少swing 不兼容
// b = a
```

```typescript
class Animal { }
class Bird { }
let a: Animal = new Animal();
let b: Bird = new Bird();
a = b
b = a
// 两个没有关系的两个类的实例也是可以的
```

## 8.4 函数的兼容性

- 比较函数的时候是先比较函数的参数，再比较返回值

### 8.4.1 比较参数

```typescript
type Func = (a: number, b: number) => void
let sum: Func
function f1(a: number, b: number): void { }
sum = f1
// 参数少一个可以兼容
function f2(a: number): void { }
sum = f2
// 参数少两个也可以
function f3(): void { }
sum = f3
// 多个不行
function f4(a: number, b: number, c: number): void { }
// sum = f4
```

### 8.4.2 比较返回值

```typescript
// 比较返回值
type GetPerson = () => { name: string, age: number }
let getPerson: GetPerson

function g1() { return { name: 'zhufeng', age: 10 } }
getPerson = g1

function g2() { return { name: 'zhufeng', age: 10, gender: 0 } }
getPerson = g2

function g3() { return { name: 'zhufeng' } }
// getPerson = g3
// 可以多不能少
// 因为有可能需要调用返回值上的方法，如果少了可能会报错
// getPerson().age.toFixed(2)
```

## 8.5 函数的协变与逆变

- 协变(Covariant)：只在同一个方向
- 逆变(Contravariant)：只在相反的方向
- 双向协变(Bivariant)：包括同一个方向和不同方向
- 不变(Invariant)：如果类型不完全相同，则它们是不兼容的



- A ≼ B 意味着A是B的子类型
- A → B 指的是以A为参数类型，以B为返回值类的函数类型
- x: A意味着x的类型为A



- 返回值类型可以传子类，参数可以传父类
- 参数逆变父类，返回值协变子类



==**注意：在TS中，参数类型是双向协变的，也就是说即是协变又是逆变的而这不安全，但是现在可以在ts.config.json中通过`strictFunctionTypes`设置为`true`来修复这个问题**==

```typescript
// 返回值类型是协变的，而参数类型是逆变的
// 返回值类型可以传子类, 参数可以传父类
// 参数逆变父类 返回值协变子类 搀你父, 返鞋子

class Animal { }
class Dog extends Animal {
    name: string = 'dog'
}
class BlackDog extends Dog {
    age: number = 10
}
class WhiteDog extends Dog {
    home: string = '北京'
}
let animal: Animal
let dog: Dog
let blackDog: BlackDog
let whiteDog: WhiteDog
type Callback = (dog: Dog) => Dog
function exec(callback: Callback): void {
    callback(whiteDog)
}

/**
 * 参数可以传自己和自己的父类
 * 返回值可以传自己和自己的子类
 * 四种情况
 * 1. 参数传子类返回值是子类 n
 * 2. 参数是子类返回值是父类 n
 * 3. 参数是父类返回值是父类 n
 * 4. 参数是父类返回值是子类 y
 */
type ChildToChild = (blackDog: BlackDog) => BlackDog
const childToChild: ChildToChild = (blackDog: BlackDog): BlackDog => blackDog
// exec(childToChild)
type ChildToParent = (blockDog: BlackDog) => Animal
const childToParent: ChildToParent = (blackDog: BlackDog): Animal => animal
// exec(childToParent)
type ParentToParent = (animal: Animal) => Animal
const parentToParent: ParentToParent = (animal:Animal): Animal => animal
// exec(parentToParent)
type ParentToChild = (animal: Animal) => BlackDog
const parentToChild: ParentToChild = (animal: Animal): BlackDog => blackDog
exec(parentToChild)
```

```typescript
// string | number | boolean 是 string | number 父类
// string 是 string | number 的子类
type Callback = (a: string | number) => string | number
function exec(callback: Callback) {

}
type ChildToChild = (a: string) => string
let childToChild: ChildToChild = (a: string): string => ''
// exec(childToChild)
type ChildToParent = (a: string) => string | number | boolean
let childToParent: ChildToParent = (a: string): string | number | boolean => ''
// exec(childToParent)
type ParentToParent = (a: string | number | boolean) => string | number | boolean
let parentToParent: ParentToParent = (a: string | number | boolean): string | number | boolean => ''
// exec(parentToParent)
type ParentToChild = (a: string | number | boolean) => string
let parentToChild: ParentToChild = (a: string | number | boolean): string => ''
exec(parentToChild)
```



## 8.6 泛型的兼容性

- 泛型在判断兼容性的时候会先判断具体的类型，然后再进行兼容性的判断

```typescript
//1.接口内容为空没用到泛型的时候是可以的
interface Empty<T>{}
let x!:Empty<string>;
let y!:Empty<number>;
x = y;

//2.接口内容不为空的时候不可以
interface NotEmpty<T>{
  data:T
}
let x1!:NotEmpty<string>;
let y1!:NotEmpty<number>;
// x1 = y1;

//实现原理如下,称判断具体的类型再判断兼容性
interface NotEmptyString{
    data:string
}

interface NotEmptyNumber{
    data:number
}
let xx2!:NotEmptyString;
let yy2!:NotEmptyNumber;
// xx2 = yy2;
```



## 8.7 枚举的兼容性

- 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
- 不同枚举类型之间是不兼容的

```typescript
// 数字可以赋值给枚举
enum Colors { Red, Yellow }
let c: Colors
c = Colors.Red
c = 1

// 枚举可以赋值给数字
let n: number = 1
n = Colors.Yellow
```





# 9. 类型保护

- 类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
- 类型保护就是能够通过关键字判断出分支中的类型

## 9.1 typeof类型保护

```typescript
function double(input: string | number | boolean) {
    if (typeof input === 'string') {
        return input + input
    } else {
        if (typeof input === 'number') {
            return input * 2
        } else {
            return !input
        }
    }
}
```

## 9.2 instanceof类型保护

```typescript
class Animal {
    name: string
}
class Bird extends Animal {
    swing: number
}
function getName(animal: Animal) {
    if (animal instanceof Bird) {
        console.log(animal.swing)
    } else {
        console.log(animal.name)
    }
}
```

## 9.3 null保护

- 如果开启了strictNullChecks选项，那么对于可能为null的变量不能调用它上面的方法和属性

```typescript
function getFirstLetter(s: string | null) {
    //第一种方式是加上null判断
    if (s == null) {
        return '';
    }
    //第二种处理是增加一个或的处理
    s = s || '';
    return s.charAt(0);
}
//它并不能处理一些复杂的判断，需要加非空断言操作符
function getFirstLetter2(s: string | null) {
    function log() {
        console.log(s!.trim());
    }
    s = s || '';
    log();
    return s.charAt(0);
}
```

## 9.4 可选链运算符

- 可选链运算符是已知先检查属性是否存在，再尝试放二年该属性的运算符，其符号为?.
- 如果运算符左侧的操作数?.计算为undefined或null，则表达式值为undefined。否则，正常触发目标属性访问，方法或函数调用

```typescript
a?.b; //如果a是null/undefined,那么返回undefined，否则返回a.b的值.
a == null ? undefined : a.b;

a?.[x]; //如果a是null/undefined,那么返回undefined，否则返回a[x]的值
a == null ? undefined : a[x];

a?.b(); // 如果a是null/undefined,那么返回undefined
a == null ? undefined : a.b(); //如果a.b不函数的话抛类型错误异常,否则计算a.b()的结果

a?.(); //如果a是null/undefined,那么返回undefined
a == null ? undefined : a(); //如果A不是函数会抛出类型错误
//否则 调用a这个函数
```

> ==可选链运算符目前TS暂时不支持==



## 9.5 可辨识的联合类型

- 就是利用联合类型中的共有的字段进行类型保护的一种技巧
- 相同字段的不同取值就是可辨识

```typescript
interface WarningButton {
    class: 'waning'
    text1: '修改'
}
interface DangerButton {
    class: 'danger'
    text2: '删除'
}
function getButton(button: WarningButton | DangerButton) {
    if (button.class === 'waning') {
        console.log(button.text1)
    }
    if (button.class === 'danger') {
        console.log(button.text2)
    }
}
```

类型字面量+可辨识联合类型 (redux中的reducer)

```typescript
interface User {
    username: string
}
type Action = {
    type: 'add'
    payload: User
} | {
    type: 'delete',
    payload: number
}
const reducer = (action: Action) => {
    switch (action.type) {
        case 'add':
            console.log(action.payload.username)
            break;
        case 'delete':
            let n: number
            n = action.payload
            break
        default:
            break;
    }
}

```

## 9.6 in 操作符

- in操作符可以被用于参数类型的判断
- x in y   x这个属性是否在y中存在

```typescript
interface Bird {
    swing:number
}
interface Dog {
    leg:number
}
function getNumber(x:Bird|Dog){
    if('swing' in x){
        console.log(x.swing)
    }else {
        console.log(x.leg)
    }
}
```

## 9.7 自定义的类型保护

- TypeScript里的类型保护本质上就是一些表达式，他们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
- `type is Type1`就是类型谓词，type参数是Type1类型
- 谓词为`parameterName is Type`这种形式，`parameterName`必须是来自当前函数前面里的一个参数名
- 每当使用一些变量调用`isType`是，如果原始类型兼容，TS会将该变量缩小到该特定类型

```typescript
function isType(type: Type1 | Typ2): type is Type1 { }
```

```typescript
interface Bird {
    swing: number // 2
}
interface Dog {
    leg: number // 4
}
// 自定义的类型保护

// function isType(type: Type1 | Typ2): type is Type1 { }
// 类型谓词 parameterName is Type  哪个参数是什么类型
function isBird(x: Bird | Dog): x is Bird {
    return (x as Bird).swing === 2
}
function getAnimal(x: Bird | Dog) {
    if (isBird(x)) {
        console.log(x.swing)
    } else {
        console.log(x.leg)
    }
}
```

## 9.8 unknown

- TS3.0引入了新的unknown类型，它是any类型对应的安全类型
- unknown和any的主要区别是unknown类型会更加严格：在对unknow类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对any类型的值执行操作之前，不进行任何检查。

### 9.8.1 any类型

- 在TS中，任何类型都可以被归为any类型，这让any类型成为了类型系统的顶级类型(也被称为 全局超级类型)
- TS允许我们对any类型的值执行任何操作，而无需事先执行任何形式的检查

```typescript
let value: any;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK


let value: any;
value.foo.bar;  // OK
value.trim();   // OK
value();        // OK
new value();    // OK
```

### 9.8.2 unknown类型

- 就像所有类型都可以被归为any，所有类型也都可以被归为unknown类型，这使得unknown成为TS类型系统的另一种顶级类型
- 任何类型都可以赋值给`unknown`类型

```typescript
let value: unknown;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK

```

- `unknown`类型只能被赋值给`any`类型和`unknown`类型本身

```typescript
let value: unknown;
let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error
```

- 不能进行任何的操作

```typescript
let value: unknown
// 不能访问属性
value.name
// 不能作为函数调用
value.foo()
// 不能当作类的构造函数不能创建实例
new un()
```



### 9.8.3 缩小unknown类型范围

- 如果没有类型断言或类型细化是，不能在`unknwon`上面进行任何操作
- typeof
- instanceof
- 自定义类型保护类型
- 可以对unknown类型使用类型断言

```typescript
// 如果想调用unknown上的方法和属性
let value: unknown
value = 'hello'
// 断言
console.log((value as string).length)
// typeof
if (typeof value === 'string') {
    console.log(value.length)
}
```

### 9.8.4 联合类型中的unknwon类型

- 在联合类型中，unknown类型会吸收任何类型，这就意味着如果任一组成类型是unknown，联合类型也会相当于unknown

```typescript
// 联合类型中的unknown ，不管跟谁联合，最后都是unknown
type U1 = unknown | null
type U2 = unknown | undefined
type U3 = unknown | string
type U4 = unknown | number[]
```

### 9.8.5 交叉类型中的unknown类型

- 在交叉类型中，任何类型都可以吸收unknown类型，这意味着将任何类型与unknown相交不会改变结构类型

```typescript
type IntersectionType1 = unknown & null;       // null
type IntersectionType2 = unknown & undefined;  // undefined
type IntersectionType3 = unknown & string;     // string
type IntersectionType4 = unknown & number[];   // number[]
type IntersectionType5 = unknown & any;        // any
```

- 交叉类型得到的是他们的子类型，从范围上看，缩小了范围
- 得到的子类型可以赋值给他们本身

```typescript
// 交叉类型
interface A { name: string, c: number }
interface B { age: number, c: number }
let a: A
let b: B
type C = A & B
let c: C = { name: 'reve', age: 10, c: 10 }
a = c
b = c


type AA = string | number
type BB = string | boolean
type CC = AA & BB // string

let aa: AA
let bb: BB
let cc: CC

// 子类型
// CC既能赋值给AA也能赋值给BB
```

### 9.8.6 never是unknown的子类型

```typescript
// never 是 unknown 的子类型
type isNever = never extends unknown ? true : false
```

### 9.8.7 keyof unknown等于never

```typescript
type keys = keyof unknown
```

### 9.8.8 只能对unknown进行等或不等操作，不能进行其他操作

```typescript
let aaa: unknown
let bbb: unknown
console.log(aaa === bbb)
console.log(aaa !== bbb)
```

### 9.8.9 映射属性

- 如果映射类型遍历的时候是unknwon，不会映射属性

```typescript
// 映射属性的时候
type GetType<T> = {
    // [p in keyof T] 的意思是取T的属性值进行遍历
    [p in keyof T]: number
}
type T = GetType<unknown>
```







# 10. 类型变换

## 10.1 类型推断

- TypeScript能根据一些简单的规则推断变量的类型

### 10.1.1 从右往左

- 变量的类型可以在定义的时候推断
- 这是一个从右往左流动类型的示例

```typescript
// 从赋的值中推断出来，类型从右向左流动
let foo = 1 // number
let bar = 're'  // string
```

### 10.1.2 底部流出

- 返回类型能被`return`语句推断

```typescript
// 通过return关键字推断返回值类型
// 底部流出
function add(a: number, b: number) {
    return a + b
}
let c = add(1, 2) // number
```

### 10.1.3 从左往右

- 函数参数类型/返回值类型也能通过赋值来推断

```typescript
// 从左向右流动
type Sum = (a: number, b: number) => number
let sum: Sum = (a, b) => {
    return a + b
}
```

### 10.1.4 结构化

- 推断规则也适用于结构化的存在(对象字面量)

```typescript
let person = {
    name: 'aaa',
    age: 13
}
let name = person.name // string
let age = person.age // number
```

### 10.1.5 解构

- 推断规则也适用于解构

```typescript
let person = {
    name: 'aaa',
    age: 13
}
let { name, age } = person
// 数组也可以
let numbers = [1, 2, 3]
let num = numbers[0]
```

### 10.1.6 DefaultProps

```typescript
interface DefaultProps {
    name?: string
    age?: number
}
let defaultProps: DefaultProps = {
    name: 'sss',
    age: 10
}
let props = {
    ...defaultProps,
    home: 'jiangxi'
}
type Props = typeof props
/* type Props = {
    home: string;
    name?: string | undefined;
    age?: number | undefined;
} */
```

### 10.1.7 小心使用返回值

- 尽管TypeScript一般情况下能推断函数的返回值，但是他可能并不是你想要的

```typescript
function addOne(a: any) {
    return a + 1
}
function sum2(a: number, b: number) {
    return a + addOne(b)
}
let k = sum2(1, 2)
// let k: any
```



## 10.2 交叉类型

### 10.2.1 交叉类型

- 交叉类型(Intersection Types)是将多个类型合并为一个类型
- 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

```typescript
// & 交叉类型 （交集）
interface Bird {
    name: string
    fly(): void
}
interface Person {
    talk(): void
}
type BirdPerson = Bird & Person
let p1: BirdPerson = {
    name: 'sss',
    fly() {

    },
    talk() {

    },
}
p1.fly()
p1.talk()
p1.name
```

```typescript
interface X {
    a: string 
    b: string
}
interface Y {
    a: string 
    c: number
}
type XY = X & Y
type YX = Y & X
let xy: XY = { a: '', b: '', c: 0 }
// 如果交叉的类型同属性但是类型没有交叉，为never
```

### 10.2.2 联合类型的交叉类型

```typescript
type Ta = string | number;
type Tb = number | boolean;
type Tc = Ta & Tb; // number
```

### 10.2.3 mixin混入

- `mixin`混入模式可以让你从两个对象中创建一个新的对象，新对象会拥有着两个对象所有的功能

```typescript
// mixin
interface AnyObject {
    [prop: string]: any
}
// function mixin<T, U>(one: T, two: U) {
//     const result: AnyObject = {}
//     for (let key in one) {
//         result[key] = one[key]
//     }
//     for (let key in two) result[key] = two[key]
//     return result
// }

// as
// function mixin<T, U>(one: T, two: U) {
//     // as  强转
//     const result = {} as (T & U)
//     for (let key in one) {
//         (result as T)[key] = one[key]
//     }
//     for (let key in two) {
//         (result as U)[key] = two[key]
//     }
//     return result
// }

function mixin<T, U>(one: T, two: U) {
    const result = <T & U>{}
    // <T&U>{} 就相当于 {} as <T&U>
    for (let key in one) {
        (<T>result)[key] = one[key]
    }
    for (let key in two) {
        (<U>result)[key] = two[key]
    }
    return result
}

const x = mixin({ name: 'rrr' }, { age: 11 })
console.log(x.name, x.age)
```



## 10.3 typeof

- 可以获取一个变量的类型

```typescript
// 先定义类型，再定义变量
type Person2 = {
    name: string
}
let p2: Person2 = {
    name: 'pppp'
}
```

```typescript
// 先定义变量，再定义类型
let p3 = {
    name: 'eeee'
}
type P3 = typeof p3
```

## 10.4 索引访问操作符

- 可以通过[]获取一个类型的子类型

```typescript
// 索引访问操作符
interface Person4 {
    name: string
    age: number
    job: {
        name: string
    }
}
let frontEndJob: Person4['job'] = {
    name: '前端'
}
```

## 10.5 keyof 

- 索引类型查询操作符

```typescript
interface Person{
  name:string;
  age:number;
  gender:'male'|'female';
}
// 得到的是所有的属性
//type PersonKey = 'name'|'age'|'gender';
type PersonKey = keyof Person;
```

## 10.6 映射类型

- 在定义的时候用in操作符去批量定义类型中的属性

```typescript
// 映射类型
interface Person6 {
    name: string
    age: number
    gender: 'male' | 'female'
}
// 批量把一个接口中的属性全部变成可选
// type PartialPerson = {
//     [key in keyof Person6]?: Person6[key]
// }
// Partial 的原理
type Partial<T> = {
    [key in keyof T]?: T[key]
}
type PPerson = Partial<Person6>
```



## 10.7 条件类型

- 在定义泛型的时候能够添加进逻辑分支，以后比泛型更加灵活

### 10.7.1 定义条件类型

```typescript
interface Fish {
    name: string
}
interface Water {
    name: string
}
interface Bird {
    name: string
}
interface Sky {
    name: string
}
type Condition<T> = T extends Fish ? Water : Sky
let con: Condition<Fish> = { name2: '水' }
```

### 10.7.2 条件类型的分发

- 条件类型有一个特性，就是「分布式有条件类型」，但是分布式有条件类型是有前提的，条件类型里待检查的类型必须是naked type parameter(裸类型)

```typescript
interface Fish {
    name1: string
}
interface Water {
    name2: string
}
interface Bird {
    name3: string
}
interface Sky {
    name4: string
}
type Condition<T> = T extends Fish ? Water : Sky
// T 裸类型
// T只能是单独的T，不能和别的使用，不能被包裹, 否则只有一种情况
// type Condition<T> = T[] extends Fish[] ? Water : Sky
// type Condition<T> = {t:T} extends {t:Fish} ?Water : Sky

// let con: Condition<Fish> = { name2: '水' }

// 条件类型的分发
let con1: Condition<Fish | Bird> = { name2: '水' }
let con2: Condition<Fish | Bird> = { name4: '天空' }
```

### 10.7.3 内置条件类型

- TS内置了一些常用的条件类型

#### 10.7.3.1 Exclude

- 从T可分配给的类型中排除U，就是找出T类型中U不包含的部分

```typescript
// Exclude 找不同
// 如果T是联合类型，会一个一个的和U进行判断
type Exclude<T, U> = T extends U ? never : T
type R = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'>
type R2 = never | never | never | 'd'
```

#### 10.7.3.2 Extract

- 从T可分配的类型中提取U，就是找出T类型中U包含的部分

```typescript
// Extract 找相同
type Extract<T, U> = T extends U ? T : never
type E = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'b' | 'c'> // 'a'|'b'|'c'
```

#### 10.7.3.3 NonNullable

- 从T中排除null和undefined

```typescript
// NonNullable 找出非空的
type NonNullable<T> = T extends null | undefined ? never : T
type nonNullable = NonNullable<'a' | null | undefined> // 'a'
```

#### 10.7.3.4 ReturnType

- 获取函数类型的返回类型
- Infer，表示在`extends`条件语句中待推断的类型变量

```typescript
// ReturnType 返回值类型
// infer 推断的意思 相当于先定义了一个变量用于接受T中对应位置的类型 相当于一个赋值符
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : T
function getUser(a: string, b: number) {
    return {
        name: 'zf',
        age: 10
    }
}
// typeof 用于获取某个东西的类型
type ReturnUser = ReturnType<typeof getUser>
let u: ReturnUser = {
    name: 'zf',
    age: 10
}
```

#### 10.7.3.5 Parameters

- 构造函数类型T的参数类型的元组类型

```typescript
// Parameters 得到函数参数类型
// p得到的是一个元组类型 [string,number]
type Parameters<T> = T extends (...args: infer P) => any ? P : never
type ParamesType = Parameters<typeof getUser> // [a: string, b: number]
```

#### 10.7.3.6 ConstructorParameters

- 构造函数的参数类型的元组类型

```typescript
// ConstructorParameters 构造函数的参数类型
/**
 * Obtain the parameters of a constructor function type in a tuple
 * 获取类的构造函数的参数类型
 * abstract 抽象 抽象方法只能在抽象类中，只能在子类中实现
 */
class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getName() { console.log(this.name) }
}
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
type Params = ConstructorParameters<typeof Person> // [name: string]
```

#### 10.7.3.7 InstanceType

- 构造函数的实例类型
- 和构造函数本身的类型一样

```typescript
class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getName() { console.log(this.name) }
}
// InstanceType  实例的类型
/**
 * Obtain the return type of a constructor function type
 * 获取构造函数类型的返回类型 就是实例类型
 */
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
type PersonInstance = InstanceType<typeof Person>
// PersonInstance 和 Person 一样，Person得到的也是实例类型
let instance: PersonInstance = {
    name: 'zf',
    getName() { }
}
let instance2: Person = {
    name: 'zf',
    getName() { }
}
```

#### 10.7.3.8 infer+分布式条件类型

- 元组 转 联合类型

```typescript
// tuple 转 union 元组转联合
type ElementOf<T> = T extends Array<infer E> ? E : never
type Ttuple = [string, number]
type TupleToUnion = ElementOf<Ttuple> // string | number
```

- 联合类型 转 交叉类型
- 利用了函数参数是逆变的

```typescript
// 联合类型转交叉类型
// string|number => string&number
type T1 = { name: string }
type T2 = { age: number }
type ToIntersection<T> = T extends { a: (x: infer U) => void, b: (X: infer U) => void } ? U : never
type T3 = ToIntersection<{ a: (x: T1) => void, b: (X: T2) => void }>
// type T3 = T1 & T2 交叉类型 交集
// U的类型既要满足T1的x类型又要满足T2的x类型
let t3: T3 = { name: 'zf', age: 10 }
```



## 10.8 内置工具类型

- TS中内置了一些工具类型来帮助我们更好的使用类型系统
- TS中增加了对映射类型修饰符的控制
- 具体而言，一个`readonly`或`?`修饰符在一个映射类型中可以用前缀`+`或`-`来表示这个修饰符应该被添加或移除

| 符号   | 含义   |
| ---- | ---- |
| +?   | 变为可选 |
| -?   | 变为必选 |

### 10.8.1 Partial

- Partial 可以将传入的属性由必选变成可选

```typescript
interface A {
  a: string
  b: number
  c: boolean
}
type Particle<T> = {
  [P in keyof T]?: T[P]
}
type ParticleA = Particle<A>
let a: ParticleA = {
  a: '',
  b: 1
}
```

### 10.8.2 类型递归

- 递归变成可选项

```typescript
interface Company {
  id: number
  name: string
}
interface Person {
  id: number
  name: string
  company: Company
}
// 递归变成可选项
type DeepParticle<T> = {
  [U in keyof T]+?: T[U] extends object ? DeepParticle<T[U]> : T[U]
}
type ParticleCompany = DeepParticle<Person>
let p: ParticleCompany = {
  id: 1,
  name: 'zf',
  company: {
    name: ''
  }
}
```

### 10.8.3 Required

- Required可以将传入的属性从可选变成必选，通过-?修饰符来实现

```typescript
interface Person {
  name?: string
  age?: number
}
  type Required<T> = {
  [P in keyof T]-?: T[P]
}
type RequiredPerson = Required<Person>
let p: RequiredPerson = {
  name: '',
  age: 10
}
```

### 10.8.4 ReadOnly

- ReadOnly 通过为传入的属性每一项都添加上readonly修饰符来实现

```typescript
interface Person {
  name: string
  age: number
}
type Readonly<T> = {
  // 批量定义
  readonly [P in keyof T]: T[P]
}
type ReadOnlyPerson = Readonly<Person>
  let p: ReadOnlyPerson = {
    name: 'zf',
    age: 11
  }
  // p.name = 'jiagou'
  // p.age = 11
```

### 10.8.5 Pick

- Pick 从传入的属性中摘取某一部分返回

```typescript
interface Person {
  name: string
  age: number
  gender: number
}
type Pick<T, K extends keyof T> = { // keyof T  = 'name'|'age'|'gender'
  [P in K]: T[P]
}
type PickPerson = Pick<Person, 'name' | 'age'>
  let person: PickPerson = { name: 'zf', age: 18 }
```

### 10.8.6 Record

- Record 是TS的一个高级类型
- 它会将一个类型的所有属性都映射到另一个类型上并创造出一个新的类型

```typescript
/**
  * Record<K,T> K 属性类型,T属性值类型
*/
type KeyOfAny = keyof any // string | number | symbol
// keyof any 表示可作用对象的索引任何值的类型
// 对象的属性名只能为string | number | symbol
type Record<K extends keyof any, T> = {
  // [] 表示任意属性
  // [key: string]: string
  // [key: number]: string
  [P in K]: T
}
let k: Record<string | number, string> = { name: 'zhufeng', age: '10' }
/**
 * K 对象的属性类型
 * T 老的类型 传入的属性值的类型
 * U 新的类型 返回的属性值的类型
*/
function map<K extends string | number, T, U>(obj: Record<K, T>, map: (x: T) => U) {
  const result: Record<K, U> = <Record<K, U>>{}
  for (const key in obj) {
      result[key] = map(obj[key])
  }
  return result
}
let obj = { count1: 1, count2: 2 }
let newObj = map<string | number, number, string>(obj, (x: number) => x * 2 + '') 
// { count1: '2', count2: '4' }
```

## 10.9 自定义高级类型 

### 10.9.1 Proxy  

- 利用Object.defineProperty给对象属性的值设置get、set方法

```typescript
// Proxy 代理
type Proxy<T> = {
    get(): T
    set(value: T): void,
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
    const result = <Proxify<T>>{}
    for (const key in obj) {
        Object.defineProperty(result, key, {
            get: () => {
                return obj[key]
            },
            set: (value: T[typeof key]) => {
                obj[key] = value
            },
        })
    }
    return result
}
interface Props {
    name: string
    age: number
}
let props: Props = {
    name: 'zf',
    age: 10
}
let proxyProps: any = proxify<Props>(props)
console.log(proxyProps)
console.log(proxyProps.name)
proxyProps.name = 'jiagou'
console.log(proxyProps.name)


// 取消代理
function unProxy<T>(t: Proxify<T>): T {
    let result: any = <T>{}
    for (const key in t) {
        result[key] = t[key]
    }
    return result
}
console.log(unProxy<Props>(proxyProps))
```

### 10.9.2 SetDifference

- 相当于Exclude，找出T类型中U不包含的部分

```typescript
/**
 * SetDifference  差集 A-B = Exclude
 */
export type SetDifference<A, B> = A extends B ? never : A

type A = string | number
type B = number | boolean
type AB = SetDifference<A, B>  // string
```

### 10.9.3 Omit

- Omit<T,K>的作用是忽略T中的某些属性
- Omit = Exclude + Pick

```typescript
/**
 * Omit  忽略某个属性
 * Pick 提取某个属性
 */
type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>
type Props = {
    name: string
    age: number
    visible: boolean
}
type OmitAgeProp = Omit<Props, 'age'>
// type OmitAgeProp = {
//     name: string;
//     visible: boolean;
// }

```

### 10.9.4 Diff

- 和Omit作用类似，只是Diff传入的是类型对象，Omit传入的是类型对象的属性

```typescript
type Props = { name: string, age: number, visible: boolean }
type DefaultProps = { name: number }
type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>
  type DiffProps = Diff<Props, DefaultProps>
    // type DiffProps = {
    //     age: number;
    //     visible: boolean;
    // }
```

### 10.9.5 InterSection

- InterSection 交叉属性 对象的属性的交叉，不是对象的交叉
- string | age | visible & name

```typescript
type InterSection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>
type Props = { name: string, age: number, visible: boolean }
type DefaultProps = { name: number }
// type InterProps = Props & DefaultProps
type DuplicateProps = InterSection<Props, DefaultProps>
// { name: string }
```

### 10.9.6 Overwrite

- Overwrite<T,U>就是用U的属性覆盖T的相同的属性

```typescript
type Diff<T extends object, U extends object> = Pick<T, SetDifference<keyof T, keyof U>>;
type InterSection<T extends object, U extends object> = Pick<T, Extract<keyof T, keyof U> & Extract<keyof U, keyof T>>;
type Overwrite<T extends object, U extends object, I = Diff<T, U> & InterSection<U, T>> = Pick<I, keyof I>;
// type Overwrite<T extends object, U extends object> = Diff<T, U> & InterSection<U, T>;
type OldProps = { name: string, age: number, visible: boolean };
type NewProps = { age: string, other: string };
type ReplacedProps = Overwrite<OldProps, NewProps>;
// type ReplacedProps = {
//     age: string;
//     name: string;
//     visible: boolean;
// }

// 如果想让 ReplacedProps = {
//     age: string;
//     name: string;
//     visible: boolean;
//     other:string
// }
type Overwrite1<T extends object, U extends object, I = Diff<T, U> & U> = Pick<I, keyof I>;
type ReplacedProps1 = Overwrite1<OldProps, NewProps>;
```

### 10.9.7 Merge

- 将两个对象的属性合并
- Merge<O1,O2> = Compute + Omit<U,T>
- Compute的作用就是把交叉类型合并，写法类似于浅拷贝，给什么返回什么

```typescript
// Merge = Compute+Omit<U,T>;
// Compute的作用是把交叉类型合并   类似于浅拷贝  给什么返回什么
type Compute<A extends any> = A extends Function ? A : { [K in keyof A]: A[K] };
type R1 = Compute<{ x: 'x' } & { y: 'y' }> // {x:'x',y:'y'};
// Omit 忽略某个属性
type Omit<T, K extends keyof any> = Pick<T, SetDifference<keyof T, K>>;

type Merge<O1 extends object, O2 extends object> = Compute<O1 & Omit<O2, keyof O1>>;

type O1 = { id: number, name: string };
type O2 = { id: number, age: number };
type R2 = Merge<O1, O2>  // {id:number,name:string,age:number};
```

### 10.9.8 Mutable

- 将T中所有属性的readonly移除

```typescript
// Mutable 将属性中的readonly移除
type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}
```





# 11. 模块VS命名空间

## 11.1 模块

### 11.1.1 全局模块

- 在默认情况下，当你开始在一个新的TypeScript文件中写代码时，它处于全局命名中间中 。
- 使用全局变量空间是很危险的额，因为他会与文件内的代码命名冲突。

> foo.ts
>
> ```typescript
> const foo = 123
> ```
>
> bar.ts
>
> ```typescript
> const bar = foo
> ```

### 11.1 2 文件模块

- 文件模块也被称为外部模块，如果在TS文件的跟级别位置含有`import`或者`export`，那么它会在这个文件中创建一个本地的作用域
- 模块是TS中外部模块的简称，侧重于代码和复用
- 模块在其自身的作用域里执行，而不是在全局作用域里
- 一个模块里的变量、函数、类等外部是不可见的，除非把他导出去
- 如果想要使用一个模块里导出的变量，则需要引入。

> 导出
>
> ```typescript
> export const a = 1
> export const b = 2
> export default 'zhufeng'
> ```
>
> 导入
>
> ```typescript
> import name, {a, b} from './1'
> console.log(name, a, b)
> ```



### 11.1.3 模块规范

- 使用module: commonjs



## 11.2 命名空间(namespace)

- 在代码量较大的情况下，为了避免命名空间冲突，可以将相似的函数、类、接口放置到命名空间内
- 命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内可以通过`export`向外导出
- 命名空间是内部模块，主要用于组织代码，避免命名冲突



### 11.2.1 内部划分

```typescript
export namespace zoo {
    export class Dog { eat() { console.log('zoo dog') } }
}

export namespace home {
    export class Dog { eat() { console.log('home dog') } }
}

let dogOfZoo = new zoo.Dog()
dogOfZoo.eat()

let dogOfHome = new home.Dog()
dogOfHome.eat()
```

```typescript
import { zoo } from './3'
let dogOfZoo = new zoo.Dog()
dogOfZoo.eat()
```

### 11.2.2 原理

- 其实一个命名空间本质上是一个对象，它的作用是将一系列相关的全局变量阻止到一个对象的属性中

```typescript
namespace Numbers {
  export let a = 1
  export let b = 2
  export let c = 3
}
```

```typescript
var Numbers;
(function(Numbers){
  Numbers.a = 1;
  Numbers.b = 2;
  Numbers.c = 3;
})(Numbers || (Numbers = {}) )
```

## 11.3 文件、模块与命名空间

### 11.3.1 模块(module)

- 每个`module`都不一样，一个`module`就会编译成一个只属于自己的作用域

> table1.ts
>
> ```typescript
> export module Box {
>     export class Book1 { }
> }
> ```
>
> table2.ts
>
> ```typescript
> export module Box {
>     export class Book1 { }
> }
> ```
>
> tabel3.ts
>
> ```typescript
> export module Box {
>     export class Book1 { }
> }
> ```

### 11.3.2 命名空间(namespace)

- `namespace`和`module`不一样，`namespace`在全局空间中具有唯一性，`namespace`名字相同的时候变量会合并，`module`或者`export`模块会有自己的作用域。不同模块下的名字相同的`namespace`不会合并

**namespace**

test.ts

```typescript
namespace a {
    export let a = '12'
}

namespace a {
    export let b = '34'
}
```

test.js

```javascript
var a;
(function (a_1) {
    a_1.a = '12';
})(a || (a = {}));
(function (a) {
    a.b = '34';
})(a || (a = {}));

```



**module或者export**

test.ts

```typescript
module Tabel1 {
    namespace b {
        export let a = '12'
    }
}

module Tabel2 {
    namespace b {
        export let a = '12'
    }
}
```

test.js

```javascript
var Tabel1;
(function (Tabel1) {
    var b;
    (function (b) {
        b.a = '12';
    })(b || (b = {}));
})(Tabel1 || (Tabel1 = {}));
var Tabel2;
(function (Tabel2) {
    var b;
    (function (b) {
        b.a = '12';
    })(b || (b = {}));
})(Tabel2 || (Tabel2 = {}));
```

### 11.3.3 文件

- 每个文件都是独立的，但是如果不加`namespace`、`module`、`export`关键词，那么在文件中声明的全局变量和别的文件容易造成命名冲突。




# 12. 类型声明

- 声明文件可以让我们不需要将JS重构为TS，只需要加上声明文件就可以使用系统
- 类型声明在编译的时候都会被删除，不会影响真正的代码
- 关键字declare表示声明的意思，我们可以用它来做出各种声明

```typescript
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明(含有子属性的)全局对象
interface 和 type 声明全局类型
```



## 12.1 普通类型声明

```typescript
export { }
declare let age: number;
declare function getName(): string;
declare class Animal { };
console.log(age)
getName()
new Animal()
```

声明jQuery对象

```typescript
declare const $:(selector: string) => {
  click():void
  width(length: number): void
}
$('#root').click()
console.log($('#root').width)
```

## 12.2 外部枚举

- 外部枚举使使用`declare enum`定义的枚举类型
- 外部枚举用来描述已经存在的枚举类型的形状

```typescript
// 外部枚举
declare enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}
let seasons = [
    Seasons.Spring, 
    Seasons.Summer, 
    Seasons.Autumn, 
    Seasons.Winter
]
```

`declare`定义的类型只会用于编译时的检查，编译结果中会被删除。上例的编译结果如下

```typescript
var seasons = [
    Seasons.Spring, 
    Seasons.Summer, 
    Seasons.Autumn, 
    Seasons.Winter
]
```

也可以同时使用`delcare`和`const`，加上`const`变成常量枚举

```typescript
declare const enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}
let seasons = [
    Seasons.Spring, 
    Seasons.Summer, 
    Seasons.Autumn, 
    Seasons.Winter
]
```

编译结果

```typescript
var seasons = [
  0 /*Spring*/,  
  1 /*Summer*/,
  2 /*Autumn*/,
  3 /*Winter*/
]
```



## 12.3 namespace

- 如果一个全局变量包含了很多子属性，可能使用namepsace
- 在声明文件中的`namespace`表示一个全局变量包含很多子属性
- 在命名空间内部不需要使用`declare`声明属性或方法

```typescript
// 声明命名空间
declare namespace $ {
    function ajax(url: string, settings: any): void
    let name: string
    // 子命名空间对象
    namespace fn {
        function extend(object: any): void
    }
}
$.ajax('/get', {})
$.name
$.fn.extend({})
```



## 12.4 类型声明文件

- 可以把类型声明放在一个单独的类型声明文件中
- 可以在类型声明文件中使用类型声明
- 文件命名规范为`*.d.ts`
- 观看类型声明文件有助于了解库的使用方式

### 12.4.1 jquery.d.ts

typings\jquery.d.ts

```typescript
declare const $: (selector: string) => {
    click(): void,
    width(length: number): void
}
```

### 12.4.2 tsconfig.json

tsconfig.json

- 类型声明文件在typings文件夹下面，定义变量使用在src文件夹下面
- `include`的作用是指定需要编译处理的文件列表，支持`glob`全局模式匹配，文件的解析路径相对于当前项目的`tsconfig.json`文件位置

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",  
    "outDir":"lib"
  },
  "include": [
    "src/**/*",
    "typings/**/*"
  ]
}
```

### 12.4.3 test.ts

src\test.ts

```typescript
$('#button').click();
$('#button').width(100);
export {};
```

## 12.5 第三方声明文件

- 可以安装使用第三方的声明文件
- @types是一个约定的前缀，所有的第三方声明的类型库都会带有这样的前缀
- JavaScript中有很多内置的对象，他们可以在TypeScript中被当作声明好了的类型
- 内置对象是指根据标准(标准指的是ECMAScript和其他环境比如DOM的标准)在全局作用域(Global)上存在的对象
- 这些内置对象的类型声明文件就包含在TypeScript核心库的类型声明文件中

### 12.5.1 使用jquery

```react
cnpm i jquery -S
```

```typescript
// import * as jQuery from 'jquery'
import jQuery from 'jquery'
// 为什么会报错？
// 导出的时候是export = 是common.js，但是在这里是通过es默认导入的
// "esModuleInterop": true 添加这个配置就可以了

// export = jQuery 这是一种TS的语法，表示要导出jQuery
// es6导出 也支持 common.js导出

jQuery.ajax()
```

### 12.5.2 安装声明文件

```react
cnpm i @types/jquery -S
```

### 12.5.3 自己编写声明文件

可以自己编写声明文件并配置`tsconfig.json`

#### 12.5.3.1 index.d.ts

`types\jquery\index.d.ts`

```typescript
declare function jQuery(selector:string):HTMLElement;
declare namespace jQuery{
  function ajax(url:string):void
}
export default jQuery;
```

#### 12.5.3.2 tsconfig.json

- 如果配置了`paths`，那么在引入包的时候会自动去`paths`目录里找类型声明文件
- 在`tsconfig.json`中，我们通过`compilerOptions`里的`paths`属性来配置路径映射
- `paths`是模块名到基于`baseUrl`的路径映射的列表

```json
{
  "compilerOptions": {
    "baseUrl": "./",// 使用 paths 属性的话必须要指定 baseUrl 的值
    "paths": {
      "*":["types/*"]
    }
}
```

```typescript
import $ from "jquery";
$.ajax('get');
```

### 12.5.4 npm声明文件可能的位置

- node_modules/jquery/package.json
  - "types":"types/xxx.d.ts"
- node_modules/jquery/index.d.ts
- node_modules/@types/jquery/index.d.ts
- typings\jquery\index.d.ts

### 12.5.5 查找声明文件

- 如果是手动写的声明文件，那么需要满足一下条件之一，才能被正确识别
- 给`package.json`中的`types`或`typings`字段指定一个类型声明文件地址
- 在项目根目录下，编写一个`index.d.ts`文件
- 针对入口文件(package.json中的main字段指定入口文件)，边下一个同名不同后缀的`.d.ts`文件

```json
{
    "name": "myLib",
    "version": "1.0.0",
    "main": "lib/index.js",
    "types": "myLib.d.ts",
}
```

- 先找myLib.d.ts
- 没有就再找index.d.ts
- 还没有再找lib/index.d.js
- 还找不到就认为没有类型声明了



## 12.6 扩展全局变量的类型

### 12.6.1 扩展局部变量的类型

```typescript
declare var String: StringConstructor;
interface StringConstructor {
    new(value?: any): String;
    (value?: any): string;
    readonly prototype: String;
}
interface String {
    toString(): string;
}
```

```typescript
//扩展类的原型
interface String {
    double():string;
}

String.prototype.double = function(){
    return this+'+'+this;
}
console.log('hello'.double());

//扩展类的实例
interface Window{
    myname:string
}
console.log(window.myname);
//export {} 没有导出就是全局扩展
```

### 12.6.2 模块内全局扩展

types\global\index.d.ts

```typescript
declare global{
    interface String {
        double():string;
    }
    interface Window{
        myname:string
    }
}

export  {}
```

## 12.7 合并声明

- 同一名称的两个独立声明会被合并成一个单一声明
- 合并后的声明拥有原先两个声明的特性

| 关键字           | 作为类型使用 | 作为值使用 |
| ------------- | ------ | ----- |
| class         | yes    | yes   |
| enum          | yes    | yes   |
| interface     | yes    | no    |
| type          | yes    | no    |
| function      | no     | yes   |
| var,let,const | no     | yes   |

- 类既可以作为类型使用，也可以作为值使用，接口只能作为类型使用

```typescript
class Person{
    name:string=''
}
let p1:Person;//作为类型使用，表示类的实例的类型
let p2 = new Person();//作为值使用

interface Animal{
    name:string
}
let a1:Animal;
let a2 = Animal;//接口类型不能用作值
```

### 12.7.1 合并类型声明

- 可以通过接口合并的特性给一个第三方为扩展类型声明

use.js

```typescript
interface Animal{
    name:string
}
let a1:Animal={name:'zhufeng',age:10};
console.log(a1.name);
console.log(a1.age);
//注意不要加export {} ,这是全局的
```

types\animal\index.d.ts

```typescript
interface Animal{
    age:number
}
```

### 12.7.2 使用命名空间扩展类

- 我们可以使用namespace来扩展类，用于表示内部类

```typescript
class Form {
  username: Form.Item='';
  password: Form.Item='';
}
//Item为Form的内部类
namespace Form {
  export class Item {}
}
let item:Form.Item = new Form.Item();
console.log(item);
```

### 12.7.3 使用命名空间扩展函数

- 我们也可以使用`namespace`来扩展函数

```typescript
function greeting(name: string): string {
    return greeting.words+name;
}

namespace greeting {
    export let words = "Hello,";
}

console.log(greeting('zhufeng'))
```

### 12.7.4 使用命名空间扩展枚举类型

```typescript
enum Color {
    red = 1,
    yellow = 2,
    blue = 3
}

namespace Color {
    export const green=4;
    export const purple=5;
}
console.log(Color.green)
```

### 12.7.5 扩展Store

```typescript
import { createStore, Store } from 'redux';
type StoreExt = Store & {
    ext: string
}
let store: StoreExt = createStore(state => state);
store.ext = 'hello';
```

## 12.8 生成声明文件

- 把TS编译成JS后丢失类型声明，我们可以在编译的时候自动生成一份JS文件

```json
{
  "compilerOptions": {
     "declaration": true, /* Generates corresponding '.d.ts' file.*/
  }
}
```

## 12.9 类型声明实战

### 12.9.1 下载包

events 类似与发布订阅模式

> npm i events

### 12.9.2 index.ts

使用events

```typescript
import { EventEmitter } from 'events'
let e = new EventEmitter()
e.on('message', (text: string) => {
    console.log(text)
})
e.emit('message', 'hello')
```



### 12.9.3 event/index.d.ts

类型扩展

```typescript
export type Listener = (...args: any[]) => void
export type Type = string | symbol
export class EventEmitter {
    static defaultMaxListeners: number
    emit(type: Type, ...args: any[]): void
    on(type: Type, listener: Listener): this
    addListener(type: Type, listener: Listener): this
    once(type: Type, listener: Listener): this
}
```





# 13. Leecode面试题综合实战

<a href="https://github.com/LeetCode-OpenSource/hire/blob/master/typescript_zh.md">题目描述</a>

<a href="https://codesandbox.io/s/4tmtp?file=/src/index.tsx">测试</a>

```typescript
interface Action<T> {
    payload?: T;
    type: string;
}

class EffectModule {
    count = 1;
    message = "hello!";

    delay(input: Promise<number>) {
        return input.then(i => ({
            payload: `hello ${i}!`,
            type: 'delay'
        }));
    }

    setMessage(action: Action<Date>) {
        return {
            payload: action.payload!.getMilliseconds(),
            type: "set-message"
        };
    }
}

type EffectModuleType = {
    count: number
    message: string
    delay(input: Promise<number>): Promise<Action<string>>
    setMessage(action: Action<Date>): Action<number>
}

// 把类型EffectModuleType中的函数名取出来  delay | setMessage
type methodsPick<T> = {
    [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]
type EffectModuleMethods = methodsPick<EffectModuleType>

// 题目就是需要把Connect的返回值any推断成Connected
// 但实际我们只需要关注Connected里面的两个函数
// 可以直接写出EffectModule和Connected里函数泛型函数签名

// delay
type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>> // EffectModule中的delay类型
type asyncMethodConnect<T, U> = (input: T) => Action<U> // Connected中预期得到的delay类型
// setMessage
type syncMethod<T, U> = (action: Action<T>) => Action<U>  // EffectModule中的setMessage类型
type syncMethodConnect<T, U> = (action: T) => Action<U>  // Connected中预期得到的setMessage类型

// 修改 Connect 的类型，让 connected 的类型变成预期的类型
// 利用 infer 类型推导
type EffectModuleMethodConnect<T> = 
    T extends asyncMethod<infer U, infer V> ? 
    asyncMethodConnect<U,V> : 
    T extends syncMethod<infer U,infer V> ?
    syncMethodConnect<U,V> :never
type Connect = (module: EffectModule) => {
    [M in EffectModuleMethods] : EffectModuleMethodConnect<EffectModule[M]>
};

const connect: Connect = m => ({
    delay: (input: number) => ({
        type: 'delay',
        payload: `hello 2`
    }),
    setMessage: (input: Date) => ({
        type: "set-message",
        payload: input.getMilliseconds()
    })
});

type Connected = {
    delay(input: number): Action<string>;
    setMessage(action: Date): Action<number>;
};

let effectModule: EffectModule = new EffectModule()
export const connected: Connected = connect(effectModule);

```

