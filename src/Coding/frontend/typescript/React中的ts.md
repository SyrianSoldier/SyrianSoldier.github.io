# React中的TS

更多React相关类型请参照

## 一: Props中常见的TS类型

```ts
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  // 字符串数组如: hobbies: ['吃饭', '睡觉'..]
  names: string[];
  // 指定精确的字符串值，并使用联合类型将其连接在一起
  status: "waiting" | "success";
  // 已知属性的对象(运行时可能增加属性)
  obj: {
    id: string;
    title: string;
  };
  // 常用: 对象数组
  objArr: {
    id: string;
    title: string;
  }[];
  // 非原始类型, 一般作为占位符(详细见重点摘要)
  obj2: object;
  // {}不意味着一个对象, 等价于interface {}, 意思为一个没有任何属性的接口(不常用)
  obj3: {};
  /** 一个对象, 并且对象的key类型相同, 对象的属性数量不限制 */
  dict1: {
    [key: string]: MyTypeHere;
  };
  dict2: Record<string, MyTypeHere>; // 等价于上面的dic1
  
  // 不返回任何东西的函数
  onClick: () => void;
  
  onChange: (id: number) => void;
  
  // 接受事件的函数类型语法, e的类型为 事件类型<触发事件的元素类型>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** 函数语法的另一种写法 */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  
  /** 任何函数类型(不常用) */
  onSomething: Function;
  
  /** 可选参数 */
  optional?: OptionalType;
  
  /** 传递setState给子组件时的类型 */
  setState: React.Dispatch<React.SetStateAction<number>>;
};
```

#### object, Object, {}, 和interface A{}的区别

#### object

> 除非知道明确用法, 一般不使用

1. `object` 是一种类型，表示所有非原始类型的集合。原始类型包括 `string`、`number`、`boolean`、`symbol`、`null` 和 `undefined`。换句话说，`object` 类型用于表示除原始类型以外的所有内容，例如数组、函数、对象等。
2. 在 React 中键入“任何非原始值(object)”很可能不应该做太多事情，这意味着您可能不会太多使用`object`

```ts
type MyComponentProps = {
  data: object; // 可以是任意非原始类型, 可能是数组, 对象, 函数
};

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  // 无法直接访问 data 的属性，除非使用类型断言
  return <div>{/* 使用 data 之前需要断言 */}</div>;
};
```

#### Object, {}, 和interface A{}

interface A{}、 `{}`和`Object`都代表“任何非空值”，而不是“空对象”

```ts
interface A {} // 等价于 type A = {}, type A = Object

let value: A;

// value为非空值, 可以允许字符串, 数字,函数等等, 但不允许空值如undifined, null
value = 1;
value = "foo";
value = () => alert("foo");
value = {};
value = { foo: "bar" };

value = undefined;
value = null;
```



React.FC<>中的{}

```jsx
// 你可能见过如下代码
// 这里的{}表示一个没有key的对象, 这看起来和上面的有所差异,不是很能理解, 我提了问题在stackoverflow上暂时还没有好的解答
// 
const App:React.FC<{}> = () => {
  return (
  	<div>我是App</div>
  )
}
```

泛型约束中的{}

```jsx
// 这里表示P被{}约束了, 和{}拥有一样的特性. 即P是非空值
function test<P extends {}>(arg: P) {
  return arg
}

test<number>(1)
test<string>('abc')
test<{ name: string }>({name: 'zhangSan'})
//Error Type
test<null>(null)
```



### 与组件相关的props类型

```ts
export declare interface AppProps {
  children?: React.ReactNode; // 推荐, 任何react可以渲染的东西(除了对象外)
  childrenElement: React.JSX.Element; // JSX.Element和ReactNode都可以作为组件的返回值类型, 后者更推荐. 到底用哪个有一些深层次讨论(不在这里详细阐述了)
  style?: React.CSSProperties; // 内联样式的类型, 见下面的例子
 // 提取button的所有props(不包括ref)再和组件Props合并	(详细见下方)
  props: Props & React.ComponentPropsWithoutRef<"button">;
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;
}
```



在 React 中，`React.CSSProperties` 是 TypeScript 提供的一种类型，用于表示 React 组件的内联样式属性（`style`）。该类型基于标准的 CSS 属性，并添加了 TypeScript 的类型检查和补全功能。

```ts
import React from 'react';

const MyComponent: React.FC = () => {
  const style: React.CSSProperties = {
    backgroundColor: 'blue',
    marginTop: '20px',
    display: 'flex',
  };

  return <div style={style}>Hello, World!</div>;
};
```



`React.ComponentPropsWithoutRef<T>`可以提取HTML元素或者组件的Props属性, 不包括ref

`React.ComponentPropsWithRef<T>`可以提取HTML元素或者组件的Props属性, 包括ref

```jsx
import {ComponentProps, ComponentPropsWithoutRef, FC} from "react";

interface MainProps {
  label:string
  name: string
}
const Main:FC<MainProps> = () => {
  return (
    <div></div>
  )
}

type B = ComponentPropsWithoutRef<typeof Main>

// B类型和MainProps类型是一致的, 
// 另外可以提取HTML元素的类型React.ComponentPropsWithoutRef<"button"> 等价于 { onClick:()=>void 等等 }
const obj:B = {
  label: 'label',
  name: 'name',
}


export default Main

```

### 使用Type还是Interface

⚠️在某些情况下

1. 建议使用interface, 除非到了必要使用type的时候
2. 在创作库或第 3 方环境类型定义时，始终使用公共 API 定义的`interface` ，因为如果缺少某些定义，这允许使用者通过*声明合并*来扩展它们

| Aspect 方面                                | Type 类型 | Interface 界面 |
| ---------------------------------------- | ------- | ------------ |
| Can describe functions 可以描述功能            | ✅       | ✅            |
| Can describe constructors可以描述构造函数        | ✅       | ✅            |
| Can describe tuples 可以描述元组               | ✅       | ✅            |
| Interfaces can extend it 接口可以扩展它         | ⚠️      | ✅            |
| Classes can extend it 类可以扩展它             | 🚫      | ✅            |
| Classes can implement it (`implements`)类可以实现它（ `implements` ） | ⚠️      | ✅            |
| Can intersect another one of its kind可以与另一同类相交 | ✅       | ⚠️           |
| Can create a union with another one of its kind可以与另一个同类建立联盟 | ✅       | 🚫           |
| Can be used to create mapped types可用于创建映射类型 | ✅       | 🚫           |
| Can be mapped over with mapped types可以使用映射类型进行映射 | ✅       | ✅            |
| Expands in error messages and logs在错误消息和日志中扩展 | ✅       | 🚫           |
| Can be augmented 可以增强                    | 🚫      | ✅            |
| Can be recursive 可以递归                    | ⚠️      | ✅            |

## 二: 函数组件

```jsx
// 函数组件props的类型, 如果想要留下扩展的空间, 使用interface (同名的interface自动合并, 并且interface能implement,extend )
type AppProps = {
  message: string;
};

// 声明函数组件最简单的方式, 返回类型是自动推导的
const App = ({ message }: AppProps) => <div>{message}</div>;

// 使用FC或者FunctionComponent
const App: React.FunctionComponent<{ message: string }> = ({ message }) => (
  <div>{message}</div>
);
// or
const App: React.FC<AppProps> = ({ message }) => <div>{message}</div>;
```

## 三: Hooks

### useState

```jsx
// 自动推断类型为boolean, 适合简单的state
const [state, setState] = useState(false);

// 使用和null的联合类型, 适用于初始值为null的时候
const [user, setUser] = useState<User | null>(null);

// 假如user数据是从后端拉取的, 我们知道接下来很快就会有数据, 此时可以暂时向 TypeScript 编译器“撒谎”，表明{}属于User类型
// 但应该通过及时设置user状态来跟进 - 如果不这样做，代码的其余部分可能依赖于user是User类型的事实，这可能会导致运行时错误。
const [user, setUser] = useState<User>({} as User);

```

### useCallback

```jsx
/**
   useCallBack不需要额外设置类型
   
 * VSCODE将显示以下类型(自动类型推导为)
 * const memoizedCallback:
 *  (param1: string, param2: number) => { ok: boolean }
 */
const memoizedCallback = useCallback(
  (param1: string, param2: number) => {
    console.log(param1, param2)
    return { ok: true }
  },
  [...],
);

```

### useReducer

```jsx
const initialState = {
  count: 0
}
type ACTION_TYPE =
  { type: 'increment', payload: number } |
  { type: 'decrement', payload: number }

// reducer的state用typeof取, action是联合类型
const reducer = (state: typeof initialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    default:
      return state
  }
}

// 报销流程
const Main: FC<{}> = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'increment', payload: 1})}>+</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 1})}>-</button>
    </div>
  )
}
```

上面的例子中, reducer的类型也可以使用Redux提供的Reducer类型

```jsx
import {FC, useReducer} from "react";
import {Reducer} from "redux";


const initialState = {
  count: 0
}
type ACTION_TYPE =
  { type: 'increment', payload: number } |
  { type: 'decrement', payload: number }

const reducer: Reducer<typeof initialState, ACTION_TYPE> = (state = initialState, action) => {
 // 省略
}
```

### useEffect & useLayoutEffect

一般这两个钩子不需要任何类型, 但要注意回调函数的返回值类型是void, 有的时候会不小心返回非void

```jsx
// 正确的写法, 隐式的返回undifined, 返回值为void类型
useEffect(() => {
    setTimeout(() => {},1000)
}, []);

// 错误的写法, setTimeout隐式返回了数字, 编译器会报错
useEffect(() => 
    setTimeout(() => {},1000)
, []);
```

 ### useRef

#### 使用ref访问DOM

```jsx
function Foo() {
  // 如果可能的话，尽可能具体。例如，HTMLDivElement 它比HTMLElement更好，也比Element更好。
  // divRef的类型为RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
   // 注意，ref.current可能为null，需要对null的情况做处理
    if (!divRef.current) throw Error("divRef is not assigned");

    // 现在divRef一定是HTMLDivElement类型
    doSomethingWith(divRef.current);
  });

  // 将引用ref给一个元素，这样React就可以为你管理它了
  return <div ref={divRef}>etc</div>;
}
```

```jsx
// 也可以这么写, 如果您确定divRef.current永远不会为 null，也可以使用非空断言运算符!
// 但这是主动退出了类型保护, 如果您**忘记**将 ref 分配给渲染中的元素，或者如果 ref绑定的元素是**有条件渲染**的，则会出现运行时错误。
const divRef = useRef<HTMLDivElement>(null!);
```

非空断言运算符的使用语法

```jsx
// 1. 固定语法: 用在null!, 表示虽然赋值为null但是一定不为null(欺骗ts编译器)
const divRef = useRef<HTMLDivElement>(null!);
// 2. 用在变量之后 
let value: string | undefined;
let length: number = value!.length;
```

#### 可变ref

```jsx
function Foo() {
  // intervalRef的类型为 MutableRefObject<number | null>
  const intervalRef = useRef<number | null>(null);

  // 你自己手动给ref赋值,而不是react赋值（这就是为什么它被称为MutableRefObject！）
  useEffect(() => {
    intervalRef.current = setInterval(...);
    return () => clearInterval(intervalRef.current);
  }, []);

  // 这个ref不能传给任何DOM元素的ref属性
  return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;
}
```

### useImperativeHandle

```JSX
// A组件内容

// 定义将传递给forwardRef的类型
export type AHandle = {
  start: () => void;
};
// A组件的props类型
type AProps = {};

const A = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    // start（）在这里有类型推断
    start() {
      alert("Start");
    },
  }));

  return <div>Countdown</div>;
});


==================================================================================================
// 使用A组件
import A, { AHandle } from "./Countdown.tsx";

function App() {
  // ref的泛型传递为AHandle
  const AEl = useRef<AHandle>(null);

  useEffect(() => {
    if (AEl.current) {
      // 这里有类型推断
      AEl.current.start();
    }
  }, []);

  return <Countdown ref={AEl} />;
}
```

### 自定义hooks

#### const断言 

```jsx
// str会被推断为string类型而不是字面量'hello'类型, 这是因为当声明变量或属性时，TypeScript 通常会扩大类型
let str = "hello" 

// str被推断为字面量类型 "hello", as const用于显式的告诉编译器, 不要扩大类型
let str = "hello" as const
```

```jsx
type Shape =
  | { kind: "circle", radius: number }
  | { kind: "square", sideLength: number }

function getShapes(): readonly Shape[] {
  // 如果不加 as const, 编译器会报错, 因为返回值中kind的类型为string, 和type Shape中的字面量类型是不符合的
  let result = [
    { kind: "circle", radius: 100, },
    { kind: "square", sideLength: 50, },
  ] as const

 
  return result;
}
```

as const的作用总结

- 该表达式中的字面量类型不应扩大（例如，不要从`"hello"`到`string` ）
- 对象属性获取`readonly`属性
- 数组变成元组

```jsx
// 变成 '10'而不是string
let x = 10 as const;

// 变成'readonly [10, 20]' 而不是number[]
let y = [10, 20] as const;

// 变成 '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```



#### 自定义hooks中的返回值

如果在 组定义Hook 中返回一个数组，需要避免类型推断，因为 TypeScript 将推断联合类型。需要使用[TS 3.4 const 断言](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions)：

```jsx
import { useState } from "react";

export function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (/*省略*/) => {
   // 省略
  };
  
  //加上const返回值类型推断为 [boolean, typeof load] 不加const推断为 (boolean | typeof load)[],这样，当解构时，会根据解构位置获得正确的类型。 
  return [isLoading, load] as const; []
}
```

## 四: 类组件

```jsx
type MyProps = {
  //使用interface也可以
  message: string;
};
type MyState = {
  count: number; 
};
class App extends React.Component<MyProps, MyState> {
  // 这里需要再次给state标注类型MyState, 以获得更好的类型提示
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
```

**类的成员方法**：不需要为类的成员方法标注额外的类型, 把他们的形参的类型写好就行

## 五: 表单与事件

### 内联函数写法

```jsx
const el = (
  <button
    onClick={(event) => {
      /* 最简单的写法, 内联函数, event会自动推断类型! */
    }}
  />
);
```

### 单独定义事件处理函数

```jsx
class App extends React.Component<Props, State> {
  // 语法为 事件名<触发元素>
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.onChange} />
      </div>
    );
  }
}
```

```ts
 // 也可以将类型定义在左边
 onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({text: e.currentTarget.value})
  }
```

### 

### 常用的 React 事件类型

#### 1. **MouseEvent**

用于处理鼠标相关的事件，例如 `onClick`, `onMouseEnter`, `onMouseLeave` 等。

```jsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event.currentTarget); // 获取触发事件的元素
};

<button onClick={handleClick}>Click me</button>;

```

#### 2. **ChangeEvent**

用于处理输入控件（如 `<input>`, `<textarea>`, `<select>`）的值变化事件，例如 `onChange`。

```jsx
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value); // 获取输入框的值
};

<input type="text" onChange={handleInputChange} />;

```

#### 3. **FormEvent**

用于处理表单的提交事件，通常用于 `onSubmit`。

```jsx
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // 阻止表单默认提交行为
  console.log("Form submitted");
};

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>;

```

#### 4. **KeyboardEvent**

用于处理键盘事件，例如 `onKeyDown`, `onKeyUp`, `onKeyPress`。

```jsx
const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(event.key); // 获取按下的键
};

<input type="text" onKeyDown={handleKeyDown} />;

```

#### 5. **FocusEvent**

用于处理元素获得或失去焦点的事件，例如 `onFocus`, `onBlur`。

```jsx
const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  console.log("Input focused");
};

<input type="text" onFocus={handleFocus} />;

```

#### 6. **DragEvent**

用于处理拖拽事件，例如 `onDragStart`, `onDragOver`, `onDrop`。

```jsx
const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  console.log("Dragging started");
};

<div draggable onDragStart={handleDragStart}>
  Drag me
</div>;

```

#### 7. **WheelEvent**

用于处理鼠标滚轮事件，例如 `onWheel`。

```jsx
const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
  console.log(event.deltaY); // 获取滚动的方向和速度
};

<div onWheel={handleWheel}>Scroll me</div>;

```

#### 8. **TouchEvent**

用于处理触摸事件，主要在移动设备上使用，例如 `onTouchStart`, `onTouchMove`, `onTouchEnd`。

```jsx
const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
  console.log("Touch start");
};

<div onTouchStart={handleTouchStart}>Touch me</div>;

```

#### 9. **ClipboardEvent**

用于处理剪贴板事件，例如 `onCopy`, `onPaste`。

```jsx
const handleCopy = (event: React.ClipboardEvent<HTMLInputElement>) => {
  console.log("Text copied");
};

<input type="text" onCopy={handleCopy} />;


```

#### 泛型事件类型

有时，你可能需要创建可以处理多种类型元素的事件处理函数。这时可以使用泛型事件类型，例如：

```jsx
const handleClick = <T extends HTMLElement>(event: React.MouseEvent<T>) => {
  console.log(event.currentTarget.tagName); // 获取触发事件的元素的标签名
};

<button onClick={(e) => handleClick(e)}>Click me</button>;
<div onClick={(e) => handleClick(e)}>Click div</div>;
```

| Event Type 事件类型       | Description 描述                           |
| --------------------- | ---------------------------------------- |
| AnimationEvent 动画事件   | CSS Animations. CSS 动画。                  |
| ChangeEvent 变更事件      | Changing the value of `<input>`, `<select>` and `<textarea>` element.更改`<input>` 、 `<select>`和`<textarea>`元素的值。 |
| ClipboardEvent 剪贴板事件  | Using copy, paste and cut events.使用复制、粘贴和剪切事件。 |
| CompositionEvent 合成事件 | Events that occur due to the user indirectly entering text (e.g. depending on Browser and PC setup, a popup window may appear with additional characters if you e.g. want to type Japanese on a US Keyboard)由于用户间接输入文本而发生的事件（例如，根据浏览器和 PC 设置，如果您想在美式键盘上输入日语，可能会出现一个带有附加字符的弹出窗口） |
| DragEvent 拖动事件        | Drag and drop interaction with a pointer device (e.g. mouse).与指针设备（例如鼠标）的拖放交互。 |
| FocusEvent 焦点事件       | Event that occurs when elements gets or loses focus.当元素获得或失去焦点时发生的事件。 |
| FormEvent 表单事件        | Event that occurs whenever a form or form element gets/loses focus, a form element value is changed or the form is submitted.每当表单或表单元素获得/失去焦点、表单元素值更改或提交表单时发生的事件。 |
| InvalidEvent 无效事件     | Fired when validity restrictions of an input fails (e.g `<input type="number" max="10">` and someone would insert number 20).当输入的有效性限制失败时触发（例如 `<input type="number" max="10">` 有人会插入数字 20)。 |
| KeyboardEvent 键盘事件    | User interaction with the keyboard. Each event describes a single key interaction.用户与键盘的交互。每个事件都描述一个关键交互。 |
| MouseEvent 鼠标事件       | Events that occur due to the user interacting with a pointing device (e.g. mouse)由于用户与指点设备（例如鼠标）交互而发生的事件 |
| PointerEvent 指针事件     | Events that occur due to user interaction with a variety pointing of devices such as mouse, pen/stylus, a touchscreen and which also supports multi-touch. Unless you develop for older browsers (IE10 or Safari 12), pointer events are recommended. Extends UIEvent.由于用户与各种定点设备（例如鼠标、笔/手写笔、触摸屏）交互而发生的事件，并且还支持多点触摸。除非您针对较旧的浏览器（IE10 或 Safari 12）进行开发，否则建议使用指针事件。扩展 UIEvent。 |
| TouchEvent 触摸事件       | Events that occur due to the user interacting with a touch device. Extends UIEvent.由于用户与触摸设备交互而发生的事件。扩展 UIEvent。 |
| TransitionEvent 转换事件  | CSS Transition. Not fully browser supported. Extends UIEventCSS 过渡。不完全支持浏览器。扩展 UIEvent |
| UIEvent 用户界面事件        | Base Event for Mouse, Touch and Pointer events.鼠标、触摸和指针事件的基本事件。 |
| WheelEvent 轮盘事件       | Scrolling on a mouse wheel or similar input device. (Note: `wheel` event should not be confused with the `scroll` event)在鼠标滚轮或类似输入设备上滚动。 （注意： `wheel`事件不应与`scroll`事件混淆） |
| SyntheticEvent 综合事件   | The base event for all above events. Should be used when unsure about event type上述所有事件的基本事件。当不确定事件类型时应使用 |

### 六: Context

#### Context的基本写法

声明的类型

```jsx
import { createContext } from "react";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("light");
```

Provider有关的类型

```jsx
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
};
```

useContext有关的类型

```jsx
import { useContext } from "react";

const MyComponent = () => {
  // 不需要传入额外的类型, 会自动推导
  const theme = useContext(ThemeContext);

  return <p>The current theme is {theme}.</p>;
};
```

#### Context不写默认值的几种写法

1. Context的默认值直接指定为null, 用可选链操作符访问属性

```jsx
// Context定义
import { createContext } from "react";

interface CurrentUserContextType {
  username: string;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);
// APP组件
const App = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUserContextType>({
    username: "filiptammergard",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MyComponent />
    </CurrentUserContext.Provider>
  );
};
// MyComponent组件
import { useContext } from "react";

const MyComponent = () => {
  const currentUser = useContext(CurrentUserContext);
  // 这里使用可选链操作符访问属性	
  return <p>Name: {currentUser?.username}.</p>;
};
```

2. Context的默认值直接指定为null, 使用非空断言访问属性

```jsx
import { useContext } from "react";

const MyComponent = () => {
  const currentUser = useContext(CurrentUserContext);

  return <p>Name: {currentUser!.username}.</p>;
};
```

3. Context的默认值指定为{} 空对象, 并转为初始类型. 使用时候正常访问属性

```jsx
const CurrentUserContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);
```

4. Context的默认值直接指定为null, 但使用非空断言去除null类型, 使用时候正常访问属性

```jsx
const CurrentUserContext = createContext<CurrentUserContextType>(null!);
```

### 七: HOC

#### 泛型函数vs类型别名泛型定义函数

```ts
type Func = <P>(value: P) => P;

const func:Func = (value) => value
func<number>(1) // 泛型函数类型是在调用时候传入泛型, 也可以省略传入泛型, ts会自动推导
```



```ts
// 注意此时泛型在类型后
type Func<P> = (value: P) => P;

const func:Func<number> = (value) => value // 类型别名泛型定义的函数, 是在使用类型别名时候, 必须显式的传递泛型
func(1) 
```



#### ts中定义函数类型的方式

```jsx
// 最常见的方式
type func = (value: string) => void
```



```ts
// 使用接口定义函数
interface FuncType {
  (value: string): boolean
}

// 上面的代码等价于
type FuncType = {
  (value: string): boolean
}
// 测试成功
const func:FuncType = (value) => value === 'a'


// 也可以写成一行, 采用匿名的方式
// 这种方式常被用于一个函数的参数为函数, 如 const func = (callback: { (value:string):void }) => { //... }
const func: { (value: string): boolean } = (value) => value === 'a'

// 如果定义时, 增加额外的属性, 则是限制函数的静态属性
interface FuncType {
  (value: string): boolean

  name: string // 要求该函数必须还要有name属性
}

const func2: FuncType = (value) => value === 'a'

func2.name = '我是func2'
```

函数重载

```jsx
// 最常见的函数重载方式
function add(a: number, b: number): number;
function add(a: string, b: string): string;
// const a = 1 不允许中间插代码
function add(a: any, b: any): any { // 重载的的声明和实现必须紧贴在一起
  return a + b;
}


// 使用type实现重载, 好处是不用立刻实现
// 使用interface也行
type Add = {
  (a: number, b: number): number;
  (a: string, b: string): string;
}


export default {}

```



#### JSX.Element,ReactElement和ReactNode,ComponentType类型的区别

[JSX.Element,ReactElement和ReactNode类型的区别](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement)

1. [`ReactElement`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9f855c408dac3c7b3bf0ed9d78242ce073c7aaf1/types/react/index.d.ts#L327)是一个具有`type` 、 `props`和`key`属性的**对象**, 即React中的虚拟DOM

   - ```ts
     interface ReactElement< P,T > {
       type: T;
       props: P;
       key: string | null;
     }
     ```

2. [`JSX.Element`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9f855c408dac3c7b3bf0ed9d78242ce073c7aaf1/types/react/index.d.ts#L4260)是`ReactElement<any, any>` , 即一个类型不固定, props不固定的虚拟DOM

   - ```ts
     declare global {
       // …
       namespace JSX {
         // …
         interface Element extends React.ReactElement<any, any> {}
         // …
       }
       // …
     }
     ```

3. ReactNode包含一切React可以渲染的元素, 包括虚拟DOM, string, num, boolean等等

   ```jsx
   type ReactNode =
     | ReactElement
     | string
     | number
     | Iterable<ReactNode>
     | ReactPortal
     | boolean
     | null
     | undefined;
   ```

4. ComponentType是React中组件的类型, 包括函数式组件和类组件

   ```jsx
     type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>
   ```

   ​

例子

```jsx
<div> // <- 这是ReactElement
  <Component> // <- ReactElement
    {condition && 'text'} // <- ReactNode
  </Component>
</div>
```

#### HOC示例

```jsx

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
) => boolean;

const withSampleHoC = <P extends {}>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>;
    displayName?: string;
  },
  propsAreEqual?: PropsAreEqual<P> | false,

  componentName = component.displayName ?? component.name
): {
  (props: P): React.JSX.Element;
  displayName: string;
} => {

  function WithSampleHoc(props: P) {
    //Do something special to justify the HoC.
    return component(props) as React.JSX.Element;
  }

  WithSampleHoc.displayName = `withSampleHoC(${componentName})`;

  let wrappedComponent = propsAreEqual === false ? WithSampleHoc : React.memo(WithSampleHoc, propsAreEqual);

  //copyStaticProperties(component, wrappedComponent);

  return wrappedComponent as typeof WithSampleHoc
};
```



#### HOC与注入props

假如我们有一个themeContext如下

```jsx
import { createContext} from "react";

export interface ThemeContextProps {
  theme: "light" | 'dark',
}

const initialTheme: ThemeContextProps = {
  theme: "light",
}

const themeContext = createContext<ThemeContextProps>(initialTheme)


export default themeContext
```

此时想封装一个高阶组件, 为使用这个高阶组件的组件注入这个context

```jsx
import {ComponentType, createContext, useContext} from "react";

export interface ThemeContextProps {
  theme: "light" | 'dark',
}

const initialTheme: ThemeContextProps = {
  theme: "light",
}

const themeContext = createContext<ThemeContextProps>(initialTheme)

// 新增以下代码
const withThemeContext = <P extends ThemeContextProps>(
  Component: ComponentType<P>
) => {
  // withThemeContext在使用的时候应该是 export default withThemeContext(被包裹的组件)
  // 那么withThemeContext()返回的组件的props是不需要的注入的这些属性, 注入的属性只能被包裹的组件使用
  // 不允许调用包裹后的组件的消费者还能传递这些prop, 所以在这里手动删除了props中注入的属性
  const WithThemeComponent = (props: Omit<P, keyof ThemeContextProps>) => {
    const themeProps = useContext(themeContext)
    return <Component {...themeProps} {...(props as P)}  />//请注意，由于 TS 3.2 中的当前错误，需要{...(props as P)}断言
  }

  return WithThemeComponent
}

export default themeContext
```

使用

```jsx
import React, {FC} from 'react';
import {ThemeContextProps, withThemeContext} from "./themeContext";

interface AppProps extends ThemeContextProps{ // 这里需要继承themeContext的props,因为高阶组件会扩展App的props
  // ... APP自己的props
}
const App:FC<AppProps> = ({theme}) => {
  console.log(theme)
  return (
    <div>业务逻辑</div>
  );
}

// 1. withThemeContext(App)的类型: React.ComponentType<AppProps>): (props:Omit<AppProps, "theme">) => JSX.Element
// 2. 这里删除了theme属性, 是为了外面使用APP组件的时候, 不允许传入theme属性, 因为theme属性是高阶组件通过context传递的
// 3. 不用显式的给withThemeContext传递泛型(尽管定义的时候使用了泛型), 会自动类型推导
export default withThemeContext(App);

```

改造一下withThemeContext, 养成良好的习惯, 你的HOC应该在react dev tools里有一个好的名字

```jsx
const withThemeContext = <P extends ThemeContextProps>(
  Component: ComponentType<P>
) => {
  
  const WithThemeComponent = (props: Omit<P, keyof ThemeContextProps>) => {
    const themeProps = useContext(themeContext)
    return <Component {...themeProps} {...(props as P)}  />//请注意，由于 TS 3.2 中的当前错误，需要{...(props as P)}断言
  }
  // 新增
  const ComponentName = Component.displayName || Component.name || "Component"
  WithThemeComponent.displayName = `withTheme(${ComponentName})`

  return WithThemeComponent
}
```





### 工具类型

##### Omit

从对象类型中删除key(key可以是联合类型)

```ts
interface Person {
  name: string
  age: number
  work: () => void
}

type OmitPerson = Omit<Person, "age" | "work"> // 从Person接口中删除了age和work属性
const person:OmitPerson = {
  name: "John",
}

```

##### keyof

```ts
interface Person {
  name: string
  age: number
  work: () => void
}

type Keys = keyof Person // key的类型为联合类型 "name" |"age" | "work"

let key:Keys
key = "name"
key="age"
key ="work"
```



### 八: 其他

#### declare的用法

**0. 基本用法**

1. declare 用于.d.ts文件
2. .d.ts文件中**根级别**的声明(除了type 和 interface)外必须使用declare声明(如function, namespace, moudle等)

##### 1.declare global

declare global 用于扩展全局作用域, 意思是使用declare global包裹的类型, 可以在项目任意位置使用, 而不必显式的import, export

```jsx
declare global {
  // 可以在项目中任意位置使用User
  type User = { name:string }
  
  type voidFunction = () => void
  
  // 扩展window上的属性, 当引入第三方js编写的库时候, 可以用到这个功能
  interface Winodw {
    Vue: Object // 现在可以在项目中任何位置使用window.Vue而不报错了
  }
}
export {}// 确保ts文件将该文件视为一个模块
```

注:  一般用global.d.ts文件保存这些扩展的全局类型



##### 2. declare module

1. 通配符moudle

示例一: 引入图片

```jsx
// 这意味着引入任何路径下jpg图片, 都会被视为一个src字符串
// 导入jpg图片就是在导入字符串(该字符串记录了一个src)
declare module '*.jpg' {
  const src: string;
  export default src;
}
```

```jsx
import PNG from '../public/logo192.png'
let a: typeof PNG = 111 // 这里会报错:  Type 'number' is not assignable to type 'string', 因为PNG是一个string类型
```

示例二: vue中的通配符

```jsx
//  vue-shims.d.ts中有以下代码
// 这个代码意味着任何导入的.vue文件都是一个DefineComponent<{}, {}, any>类型, 即组件类型
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```



2. 增强模块

见八-声明合并-增强模块(扩展第三方库)



#### React中的类型保护

```jsx
interface Admin {
  role: string;
}
interface User {
  email: string;
}

// 这里user是联合类型
function redirect(user: Admin | User) {
  // 使用in关键字缩窄user的类型, 进行类型保护
  // 除了in外还有typeof, instanceof都可以在if判断中缩窄user类型
  if ("role" in user) {
    routeToAdminPage(user.role);
  } else {
    routeToHomePage(user.email);
  }
}
```

除了in, instanceof, typeof以外还可以使用ts语法自定义类型保护

```jsx
// 语法如下, 自定义类型保护就是一个名为isXXX的函数
function isXXX(variable: any): variable is SpecificType {
  // 当return ture时, ts编译器会将
  return /* true or false */; 
}
```

一个自定义类型保护的例子

```jsx
interface Fish {
  swim: () => void
}
interface Bird {
  fly: () => void
}

// 自定义类型保护最重要的一点就是声明一个 isXXX的函数
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
```

使用时

```jsx
function test(animal: Fish| Bird){
  if(isFish(animal)){
    // 此时缩窄了类型, ts不会报错
    animal.swim()
  }else {
    animal.fly()
  }
}
```

#### 枚举

枚举有一些[记录在案的问题](https://fettblog.eu/tidy-typescript-avoid-enums/)（TS 团队[同意](https://twitter.com/orta/status/1348966323271987201?s=20)）, 所以不建议使用 。枚举的一个更简单的替代方法是声明字符串文字的联合类型

```jsx
export declare type Position = "left" | "right" | "top" | "bottom";
```

#### type branding

type branding是为了区分相同的类型的

比如我用string类型表示ID, 但无法用string类型分别表示OrderID和UserID, 此时就可以用type branding区分string

```ts
type OrderID = string & { readonly brand: unique symbol };
type UserID = string & { readonly brand: unique symbol };
type ID = OrderID | UserID;
```

当区分ID后, 要创建类型的辅助函数, 帮助将id:string 转为具体的区分类型

```ts
function OrderID(id: string) {
  return id as OrderID;
}
function UserID(id: string) {
  return id as UserID;
}

```

下面是使用辅助函数, 便可以区分id的类型了

```ts
function queryForUser(id: UserID) {
  // ...
}
queryForUser(OrderID("foobar")); // 传入OrderID("foobar")会导致类型不匹配, 应该传入UserID("foobar")
```

#### 交叉类型

可以使用交叉类型扩展DOM元素的属性, 下面是一个扩展Button组件的例子

```jsx
// 扩展的button的属性
export interface PrimaryButtonProps {
  label: string;
}
export const PrimaryButton = (
  // 扩展类型与原类型交叉
  props: PrimaryButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  // 由于props的类型是大于原button的属性的, 所以解构赋值,全部传入进去
  return <button {...props}> {props.label} </button>;
};
```

#### 第三方组件库的类型未导出

组件props类型未导出

```jsx
// 假如第三方库只导出了Button组件, 但没有导出它的类型
import { Button } from "library";
// 可以通过ComponentProps + typeof取组件的props类型
type ButtonProps = React.ComponentProps<typeof Button>; 
// 再删除Button组件的onClick类型, 我们准备实现自己的click
type AlertButtonProps = Omit<ButtonProps, "onClick">;
const AlertButton = (props: AlertButtonProps) => (
  <Button onClick={() => alert("hello")} {...props} />
);


```

除了ComponentProps可以取组件的props类型外, 您还可以使用[`ComponentPropsWithoutRef`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a05cc538a42243c632f054e42eab483ebf1560ab/types/react/index.d.ts#L774) （而不是 ComponentProps）和[`ComponentPropsWithRef`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a05cc538a42243c632f054e42eab483ebf1560ab/types/react/index.d.ts#L770) （如果您的组件专门转发引用）取组件类型



函数返回值类型未导出

```jsx
// 假如某些库的函数返回值类型未导出
function foo(bar: string) {
  return { baz: 1 };
}

// 可以使用ReturnType取出该函数返回值类型
type FooReturn = ReturnType<typeof foo>; 
```

#### 常见的取类型的手段

```jsx
function foo() {
  return {
    a: 1,
    b: 2,
    subInstArr: [
      {
        c: 3,
        d: 4,
      },
    ],
  };
}
// 取出函数返回值对象的类型
type InstType = ReturnType<typeof foo>;
// 取出对象某个属性的类型
type SubInstArr = InstType["subInstArr"];
// 取出组成数组的元素的类型. 另外一个例子是:  type A = string[], type B = A[0], 则B的类型是string
type SubInstType = SubInstArr[0];

// 测试一下, 组成数组的元素类型是正确的
let baz: SubInstType = {
  c: 5,
  d: 6, // type checks ok!
};

// 上面的代码也可以写出一行
type SubInstType2 = ReturnType<typeof foo>["subInstArr"][0];
let baz2: SubInstType2 = {
  c: 5,
  d: 6, // type checks ok!
};
```

另外TS 还附带了一个`Parameters`实用程序类型，用于提取函数的参数

#### 使用的JS模块没有TS类型

##### DefinitelyTyped

DefinitelyTyped 是一个为 TypeScript 社区维护的github开源仓库, 

这个仓库的types目录里有数千个第三方js库的ts声明, 全是社区编写的.



任何发布到types目录里的第三方ts声明, 都会在一个半小时之内发布到npm上, 发布后就可以通过

`npm i @types/xxx -D` 下载使用



例子: 如 你正在使用`axios-cancel` 这个纯js的第三方库, 但项目是ts的, 你需要为他编写ts类型定义, 不妨先去DefinitelyTyped库中搜索下社区是否为其编写过ts定义

于是你在types中可以找到 axios-cancel的声明文件, 你便可以使用`npm i @types/axios-cancel -D`下载并直接使用, 而无需手动编写ts声明文件

##### 在tsconfig.json中配置

`llowJs` 是 `tsconfig.json` 中的一个配置选项。启用该选项时，TypeScript 编译器允许对 JavaScript 文件（`.js` 和 `.jsx` 文件）进行编译。具体来说，设置 `allowJs: true` 后，TypeScript 项目可以同时包含 TypeScript 文件（`.ts` 和 `.tsx`）以及 JavaScript 文件。

**示例配置**

```ts

{
  "compilerOptions": {
    "allowJs": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}

```

`allowJs` 选项的主要作用：

1. **支持 JavaScript 文件编译**：在项目中包含并编译 JavaScript 文件。这对于从 JavaScript 项目逐步迁移到 TypeScript 项目特别有用，因为它允许你逐步将 JavaScript 文件转化为 TypeScript 文件，而不需要一次性完成转换。
2. **编译输出**：当 `allowJs` 选项启用时，TypeScript 编译器会像处理 TypeScript 文件一样处理 JavaScript 文件，生成对应的 `.js` 文件（如果设置了 `outDir`，生成的文件会输出到指定目录）。
3. **与 checkJs 搭配使用**：如果还启用了 `checkJs: true`，TypeScript 编译器会对 JavaScript 文件进行类型检查。这对改进现有 JavaScript 代码的类型安全性很有帮助。

**注意事项：**

- **项目过渡**：`allowJs` 通常用于项目过渡期，即将项目从纯 JavaScript 逐步迁移到 TypeScript。它允许你在 TypeScript 项目中继续使用现有的 JavaScript 代码。
- **性能影响**：启用 `allowJs` 后，编译器需要处理更多文件，这可能会影响编译性能，尤其是在大型项目中。

**`allowJs` 与 `checkJs` 的区别：**

- **allowJs**: 允许 TypeScript 编译器编译 JavaScript 文件，但不进行类型检查。
- **checkJs**: 启用后，TypeScript 编译器不仅会编译 JavaScript 文件，还会对 JavaScript 文件进行类型检查。

**`allowJs` 与 `declaration` 的冲突：**

如果你启用了 `allowJs`，但同时启用了 `declaration` 生成类型声明文件，TypeScript 会抛出一个错误。这是因为 TypeScript 不能为 JavaScript 文件生成 `.d.ts` 类型声明文件。要解决此问题，通常需要将 `declaration` 设置为 `false`，或者将 `.js` 文件逐步转换为 `.ts` 文件。



##### 使用工具自动为js文件生成类型

使用[`dts-gen`](https://github.com/Microsoft/dts-gen) 可以自动为js生成ts类型, 但有时不太准确, 需要手动修改下. 使用chatGPT也可以完成此功能

```shell
npm install -g dts-gen
dts-gen -m <your-module>
```



##### 为js编写的hook编写类型

假设在 use-untyped-hook.js文件有如下文件

```jsx
const useUntypedHook = (prop) => {
  // some processing happens here
  return {
    /* ReturnProps */
  };
};
export default useUntypedHook;
```

在自己的.d.ts文件中为这个hook编写类型, 应该遵循以下规范

```jsx
declare module 'use-untyped-hook' { // 1 需要声明模块
  export interface InputProps { ... }   // 2. 声明hook接收的prop属性的类型并导出
  export interface ReturnProps { ... } // 3. 声明hook返回的prop属性的类型并导出
  export default function useUntypedHook( //4. 默认导出该hook函数的类型
    prop: InputProps
    // ...
  ): ReturnProps;
}
```

#### tsconfig.json

```ts
{
  "compilerOptions": {
    "incremental": true, // 启用增量编译，编译器会缓存上一次编译的结果，以便下次编译时更快。
    "outDir": "build/lib", // 指定编译输出目录。
    "target": "es5", // 编译输出的 JavaScript 版本为 ES5。
    "module": "esnext", // 指定模块系统为 ESNext。ESNext 是 ECMAScript 的一个目标版本，表示最新的 ECMAScript 标准（即 JavaScript）规范中的功能，通常包含尚未正式发布的未来特性。
    "lib": ["DOM", "ESNext"], // 编译时包含的库文件，提供 DOM 和 ESNext 的类型定义。
    "sourceMap": true, // 生成对应的 source map 文件，帮助调试。
    "importHelpers": true, // 启用将辅助代码（如 __extends）从 tslib 模块导入，以减少生成代码的大小。
    "declaration": true, // 生成 .d.ts 类型声明文件。
    "rootDir": "src", // 指定项目的根目录，TypeScript 会在该目录下查找文件。
    "strict": true, // 启用所有严格类型检查选项。
    "noUnusedLocals": true, // 报告未使用的局部变量。
    "noUnusedParameters": true, // 报告未使用的函数参数。
    "noImplicitReturns": true, // 报告没有显式返回值的函数。
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句中的 fall-through 情况。
    "allowJs": false, // 禁止编译 JavaScript 文件，只编译 TypeScript 文件。
    "jsx": "react", // 处理 JSX 语法时使用 React 模式。
    "moduleResolution": "node", // 使用 Node.js 风格的模块解析规则。
    "baseUrl": "src", // 设置模块导入的基础目录，通常与根目录设置一致。
    "forceConsistentCasingInFileNames": true, // 强制在文件名中使用一致的大小写。
    "esModuleInterop": true, // 允许默认导入非 ES 模块的模块。
    "suppressImplicitAnyIndexErrors": true, // 隐藏对隐式 `any` 的索引访问错误。
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块中导入默认值。
    "experimentalDecorators": true // 启用实验性的装饰器。
  },
  "include": ["src/**/*"], // 包含的文件或文件夹，指示编译器应编译这些文件。
  "exclude": ["node_modules", "build", "scripts"] // 排除的文件或文件夹，编译器不会编译这些文件。
}

```

#### 声明合并

1. “声明合并”意味着编译器将**使用相同名称**声明的两个单独的声明**合并到一个定义**中。
2. 这个合并的定义具有两个原始声明的特征。
3. 可以合并任意数量的声明；不仅限于两个声明。



##### 接口合并

1. 同名的接口会自动合并
2. 靠后的接口优先级更高
3. 不同接口内相同属性不允许类型不同



```ts
interface A {
  name: string
}

interface A {
  age: number
}

// 上面的代码等价于
// interface A {
//   age: number // 下面的接口优先级更高, age排在签名
//   name:string
// }
const obj: A = {
  name: '1',
  age: 1
}
```



##### 命名空间合并

和interface合并规则类似

```ts
namespace A {
  export const a = 1
}
namespace A {
  export const b = 2
}

console.log(A.a)
console.log(A.b)

```



##### 命名空间与class合并

```jsx
class Album {
  label:Album.AlbumLabel
  constructor() {
    this.label = Album.AlbumLabel
  }
}
// 拥有一个和class同名的namespace, 相当于扩展了class的静态属性, 所以在上面的class中, 可以使用扩展的静态属性
// 注意, 使用namespace 扩展class, NameSpace要写在靠后的位置
namespace Album {
  export class AlbumLabel {}
}
```



##### 命名空间与函数合并

```ts
function test (str: string): string{
  return test.PREFIX + str 
}

// 拥有一个和函数同名的namespace, 相当于扩展了函数的静态属性, 所以在上面的函数中, 可以使用扩展的静态属性
// 注意, 使用namespace 扩展函数, NameSpace要写在靠后的位置
namespace test {
  export const PREFIX = 'prefix'
}
```

##### 接口与class 合并

在 TypeScript 中，接口可以用来描述类的形状（shape）。当你定义一个` A接口`并将其与已经存在的 `A类` 一起使用时，这个接口并不会重新定义类，而是为这个类增加类型信息。

```jsx
class A {}
interface A { // 此时同名的接口为class身上添加了一个id属性
  id: string
}

new A().id = "111"
```



##### 增强模块(扩展第三方库)

```jsx
// 假如有一个第三方库暴露了一个class A
// a.ts中
export class A {}

// 在自己的文件中想扩展A
// b.ts中
import {A} from './a'; 

declare module './a' { // 扩展class的实力方法
  interface A {
    map1: () => void;
  }

  namespace A { // 扩展class的静态方法
    export let map2: () => void;
  }
}


A.prototype.map1 = () => {
  // ...
}

A.map2 = () => {
  //...
}
```

增强模块的流程

1. 被增强的模块需要导出被扩展的东西(可能是class, 函数等等), 但要记住: **默认导出无法增强，只能命名导出的东西能增强**(因为您需要通过导出名称来增强导出
2. 无法在扩展中声明新的顶级声明 - 只能对现有声明进行修补。



第二个例子

这是第三方库axios-cancel扩展了axios的实例方法

```jsx
import { AxiosStatic } from "axios";

declare module "axios" {
  // axios里也有一个AxiosRequestConfig接口, 用于定制请求配置, 此扩展了axios请求配置对象
    interface AxiosRequestConfig { 
        requestId?: string | undefined;
    }
  //   AxiosStatic是axios模块暴露的实例类型, 下面扩展了axios的两个实例方法
    interface AxiosStatic {
        cancel: (requestId: string) => void;
        cancelAll: () => void;
    }
}
// 下面的代码不重要...
interface AxiosCancelOptions {
    /**
     * Enables logging
     * default: false
     */
    debug: boolean;
}

declare function axiosCancel(axiosStatic: AxiosStatic, options?: AxiosCancelOptions): void;

export default axiosCancel;
```

#### 索引签名

索引签名用于描述

1. 描述对象
2. 不知道对象的属性名, 知道对象属性的类型(对象的属性只能是string, number, symbol)
3. 知道对象的属性值的形状
4. 不知道对象属性的数量

```ts
// 该例子描述一个对象, 不知道属性名(key)是什么, 只知道是string类型
// 该对象可以有任意个属性, 但每个属性的形状为 {name: string, age: number}
interface IndexType {
  [key: string]: {
    name: string;
    age: number
  }
}

const person: IndexType = {
  "John": {
    name: "John",
    age: 30
  },
  "Jane": {
    name: "Jane",
    age: 25
  }
}
```

注意: ts中的`Record<key,value>`是索引签名的类型别名, 是等价的

```ts
// 完全等价与索引签名
type IndexType = Record<string, {
  name: string;
  age: number
}>

const person: IndexType = {
  "John": {
    name: "John",
    age: 30
  },
  "Jane": {
    name: "Jane",
    age: 25
  }
}
```

#### 三斜线指令

[三斜线指令](https://www.cnblogs.com/kunmomo/p/15272695.html)



#### 模块导出语法

ts中现在有三种导出语法



一: ES6的导出语法

```jsx
// 模块a.ts
export const AA = {}

const BB = {}
export default BB
// 模块b.ts
import {AA} from './a';
import BB from './a'

```

二: Commonjs的导出语法

> 注意要修改tsconfig.json中的"module": "commonJs",



### 九: 按照demo划分的有用的知识

#### 包装HTML

假如想要基础html的button封装一个Button

```jsx
import {ComponentPropsWithoutRef, FC} from "react";

// ComponentPropsWithoutRef 是一个类型，用于获取组件或者HTML的所有属性，除了 ref 属性
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  specialPrs?: string //等等额外的屬性
}

const Button: FC<ButtonProps> = ({specialPrs,...args}) => {
  // 根據specialPrs做額外的邏輯
  // 将button原有的属性给他
  return <button  {...args} />
}

export default Button

```



#### 动态展示组件(动态根节点)

**前置知识**

 使用jsx渲染元素时, 即`<Component/>`, Component可以是以下几种之一

1. 是原生DOM字符串

2. 函数组件的函数名, 类组件的组件名

   ​

```jsx
export default function App() {
  const Component: React.FC<{}> = () => <div>我是一个组件</div>;
  const ButtonStr = "button";

  return (
    <div className="App">
      <Component /> {/*渲染了一个组件*/}
      <ButtonStr /> {/*渲染了一个Button*/}
      <div />
    </div>
  );
```

​	

实现以下效果

1. 动态根组件可以渲染HTML元素, 或者自定义组件
2. 动态组件的props由两部分组成 1. 动态组件必须得props(如as属性决定根元素是谁) 2. 动态组件渲染的元素的props(如渲染div,就需要接受div的属性等)

```jsx
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import "./styles.css";

// 动态组件
const MyComponent = (props) => {
  const { as: Component, children, ...rest } = props;
  return <Component {...rest}>{children}</Component>;
};

export default function App() {
  const MyButton = (props) => (
    <button style={{ color: props.color }}>{props.children}</button>
  );

  return (
    <div className="App">
      <MyComponent as="div">我是DIV</MyComponent>
      <MyComponent as={MyButton} color="red">
        我是Button
      </MyComponent>
    </div>
  );
}
```

ts实现

```jsx
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import "./styles.css";

// T被约束为只能是html元素字符串或者组件(ElementType<any>代表该类型)
// as是T类型
type MyComponentProps<T extends ElementType<any>> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>; // ComponentPropsWithoutRef<T>用于提取HTML元素或者组件的props

// 可以看见这是一个函数组件, 但也是一个函数泛型
// 当使用<MyComponent/> 时, 无需显式传递T, 会根据传入as自动推断该组件的props
const MyComponent = <T extends ElementType<any>>({
  as: Component,
  children,
  ...rest
}: MyComponentProps<T>) => {
  // 由于ts的bug, 这里必须as any做下处理
  return <Component {...(rest as any)}>{children}</Component>;
};

export default function App() {
  const MyButton = (props: { color: string; children: ReactNode }) => (
    <button style={{ color: props.color }}>{props.children}</button>
  );

  return (
    <div className="App">
      <MyComponent
        as="div"
        onClick={() => {
          console.log(1);
        }}
      >
        我是DIV
      </MyComponent>

      <MyComponent as={MyButton} color="string">
        我是Button
      </MyComponent>
    </div>
  );
}

```

#### 泛型Props与泛型组件

泛型Props与泛型组件一般联合使用.  泛型函数中的泛型传给泛型Props, 然后调用组件时候, 再将泛型传给泛型函数(或不传, 进行自动类型推导)

```jsx
import { ReactNode } from "react";
import "./styles.css";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};


// List的组件知识将items,map了一下, 由于不知道Item的类型, 必须使用泛型
const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return <div>{items.map(renderItem)}</div>;
};

// -----------------------------------------

type Item = { name: string; age: string };

const items: Item[] = [
  {
    name: "张三",
    age: "18",
  },
  {
    name: "李四",
    age: "19",
  },
  {
    name: "王五",
    age: "20",
  },
];
export default function App() {
  return (
    <div className="App">
      { /* 这里可以省略<Item>, 省略时候就是自动类型推导 */ }
      <List<Item>
        items={items}
        renderItem={(item, index) => (
          <ul>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.age}</li>
          </ul>
        )}
      />
    </div>
  );
}

```

#### 根据组件的props做类型缩小

```jsx
import { ComponentPropsWithoutRef, JSX } from "react";
import "./styles.css";

type AncerProps = ComponentPropsWithoutRef<"a">;
type ButtonProps = ComponentPropsWithoutRef<"button">;

// 自定义类型保护
const isAncer = (props: AncerProps | ButtonProps): props is AncerProps => {
  return "href" in props;
};

type ButtonOverload = {
  (props: AncerProps): JSX.Element;
  (props: ButtonProps): JSX.Element;
};
const Button: ButtonOverload = (props) => {
  // 触发类型保护, 如果是ancer的属性赋值给a标签, 如果不是ancer的属性赋值给了A标签就会导致类型不匹配
  if (isAncer(props)) {
    return <a {...props} />;
  }
  return <button {...props} />;
};

export default function App() {
  return (
    <div className="App">
      {/* 正常的渲染 */}
      <Button href="www.baidu.com">百度</Button>
      {/* 正常的渲染 */}
      <Button disabled>前进</Button>

      {/* TS报错, 因为disabled是button的属性, href是a的属性, 混用会触发类型缩小,类型不匹配 */}
      <Button disabled href="www.baidu.com">
        百度
      </Button>
    </div>
  );
}

```

例子二

```jsx

type LinkProps = Omit<React.JSX.IntrinsicElements["a"], "href"> & {
  to?: string;
};

function RouterLink(props: LinkProps | AnchorProps) {
  if ("href" in props) {
    return <a {...props} />;
  } else {
    return <Link {...props} />;
  }
}
```

#### 组件的某些props有依赖关系

```jsx
import React from "react";

//实现一个组件
// 1. 可以单独传A属性(也可以不传A)
// 2. 可以同时传A,B属性
// 3. 不允许只传B属性, 但不传A属性
// 4. 除了A,B属性以外, 允许传其他属性

interface CommonProps {
  name: string;
  age: number;
}

type Overload = {
  /**
   *  该重载实现了以下调用, 可传A, 也可不传A
   *  <Comopnent name="张三" age={18} A="A" />
      <Comopnent name="张三" age={18} />
   */
  (props: CommonProps & { A?: string }): React.JSX.Element;

  /**
   *  该重载实现了, A,B 必须同时传
   *  <Comopnent name="张三" age={18} A="A" B="B" />
      <Comopnent name="张三" age={18} B="B" /> Error不允许
   */
  (props: CommonProps & { A: string; B: string }): React.JSX.Element;
};

// 这里必须给props显式的类型, 否则不能解构赋值
const Comopnent: Overload = (
  props: CommonProps & { A?: string; B?: string }
) => {
  const { name, age, A, B } = props;
  return <div> ...</div>;
};

export const App = () => {
  return (
    <>
      <Comopnent name="张三" age={18} A="A" />
      <Comopnent name="张三" age={18} />

      <Comopnent name="张三" age={18} A="A" B="B" />

      {/** Error */}
      {/**<Comopnent name="张三" age={18} B="B" /> */}
    </>
  );
};
export default App;

```

