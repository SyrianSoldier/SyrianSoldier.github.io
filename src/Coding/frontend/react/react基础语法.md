# React

## React依赖的三个包

> Babel --> 转译JSX
>
> ReactDom --> React渲染包.ReactDOM.createRoot ReactDOM.render等
>
> React --> React核心包, 创建虚拟DOM, 定义核心类.React.createElement React.Component

- [ ] 注意: 使用babel的sript标签, 必须声明 text/babel属性

```js
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## 初渲染

1. ReactDom.createRoot(原生dom)  创建一个根节点
2. ReactDom.render(JSX元素)   向根节点内渲染DOM元素
3. 注意: 虽然看起来没有用到React的包 但是必须引入. 因为Babel会将JSX转移成React.createElement



```js
const rootRender = ()=>{
        const message = 'Hello,Word' + Math.random()

        root.render(
            <div>
                <h1>{message}</h1>
                <button onClick={rootRender}>修改message</button>
            </div>
        )
    }
    // 注意ReactDOM  后面的 DOM全是大写
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    rootRender()
```

## 组件化渲染
> 继承的class必须实现父类的构造函数


```js
 class App extends React.Component {
        constructor() {
            super(); //继承必须调用父类的super

            // state是个对象
            this.state = {
                message:'Hello, world'
            }
        }
        render(){
            const {message} = this.state
            return (
                <div>
                    <h1>{message}</h1>
                    <button>编辑</button>
                </div>
            )
        }
    }

    const root = ReactDOM.createRoot(document.querySelector('#root'));
    root.render(<App/>)
```

## setState与this问题
> setState用于修改组件的状态
>
> 事件回调中的this由于被赋值和开启严格模式, this指向undefined

事件回调中的this解决方法
1. 通过bind绑定this
2. 通过箭头函数绑定this


## JSX
### jsx01 - 绑定元素
1. 对于string | number | array(渲染时候无分隔符) 直接渲染
2. 对于null | undefined | boolean 不渲染
3. 对于对象报错: 不能在DOM直接渲染对象

### jsx02 - 绑定属性
1. 基本属性绑定
2. 绑定class时候需要用className. 因为js中class是关键词, 在DOM中使用有语义不明的风险
3. 动态class
 - 三目运算符
 - classnames库
 - 数组(在属性中渲染数组是有,分隔符 需要手动替换成空格)
4. 动态style
- style绑定使用用对象, key采用camel-case风格

### jsx03 - 绑定表达式
jsx可以用 {} 读取表达式的结果


## 创建脚手架

1. npx create-react-app <-- project-name--!>
2. npm i -g create-react-app   create-react-app <-- project-name--!> //使用webpack创建react脚手架
3. create-react-app <-- project-name--!> --template typescript // 使用webpack创建react-ts脚手架
4. npm create vite@latest <-- project-name--!> -- --template react //使用vite创建react脚手架
5. npm create vite@latest <-- project-name--!> -- --template react-ts // 使用vite创建react-ts脚手架



### 脚手架文件记录

1. manifest.json  (manifest:表明)  配置PWA在桌面快捷方式的app名字, 图标等
2. service worker 配置PWA离线缓存的文件




## 函数式组件和类组件

1. 函数式组件又被称为无状态组件, 在没有hooks之前是没有状态(state)的, 也没有this
2. 类组件可以有this, 也有状态state, 被称为有状态组件




## 生命周期

React类组件的生命周期分为三个阶段, 函数组件没有生命周期只有hooks

挂载阶段: constructor(初始化实例) --> render(获取虚拟dom) --> cpmponentDidMount 挂载

更新阶段: shoudComponentUpdate()是否更新 --> render(获取最新虚拟dom) -->componentDidUpdate()

卸载阶段: componentWillUnmount 



**类组件什么会导致更新阶段**: ==new Props or setState or forceUpdate==

## 父传子

**ReactElement和ReactNode的区别**

React.ReactNode: 它是 React 中最常用来表示 children 属性类型的类型别名。它包含以下几种类型：
- string（例如文本节点）
- number
- JSX.Element
- ReactElement
- ``Array<ReactNode>``
- null
- undefined
- boolean
  所以，使用 React.ReactNode 可以涵盖几乎所有你可以传递给 children 的内容类型。

React.ReactElement vs React.ReactNode

- React.ReactNode: 是一个更宽泛的类型，表示任何可以作为 React 子元素的东西。
- React.ReactElement: 更具体，表示一个 React 元素实例，通常是 JSX 表达式的返回值。
  对于 children 属性，推荐使用 React.ReactNode，因为它能够接受更多的类型，适用于各种 React 子元素的场景。


## PropTypes

> 给类组件的props提供类型保护
>
> 1. 通过static propTypes 添加类型
> 2. 通过static defaultProps 添加类型默认值
> 3. bool和func这两个类型是简写
> 4. 有一些工具类型函数比如 oneOf(['类型1','类型2']) 值之一 , oneOfType([]), 类型之一
> 5. 详情见文档  [props-type文档](https://www.npmjs.com/package/prop-types)

```jsx
import React, {Component} from 'react';
import {array, object, func, bool, element, oneOfType, node} from 'prop-types'
// https://www.npmjs.com/package/prop-types 详情查看文档
class SubComponent extends Component {
  // 通过propTypes声明类组件的类型
  static propTypes = {
    // optArr: array.isRequired, 某个属性是必须的
    optObj: object,
    optFunc: func, // 函数和布尔值是简写
    optBool: bool,
    optEle: oneOfType([element, node]) //多个类型之一, 是一个数组
  }

  static defaultProps = { // 参数默认值
    optEle: <div></div>
  }

  render() {
    console.log(this.props)
    return (
      <div>
        子组件1
      </div>
    );
  }
}

export default SubComponent;

```



## 子传父

> 子传父: 1. 父组件给子组件传递一个修改自身状态的函数  2. 子组件接收并调用函数

```jsx
// 父组件
import React, {Component} from 'react';
import SubComponent from "./components/SubComponent";

class App extends Component {
  state = {
    message: 'hello,world'
  }

  changeMessage = (message) => {
    this.setState({message})
  }

  render() {
    const {message} = this.state
    return (
      <div>
        <SubComponent message={message} changeMessage={this.changeMessage}/>
      </div>
    );
  }
}

export default App;


// 子组件
import React, {Component} from 'react';
import PropTypes from 'prop-types'

class SubComponent extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    changeMessage: PropTypes.func.isRequired
  }
  static defaultProps = {}

  render() {
    const {message, changeMessage} = this.props

    return (
      <div>
        <h1>消息是: {message} </h1>
        <button onClick={() => changeMessage('你好,李银河')}>改变消息</button>
      </div>
    );
  }
}

export default SubComponent;

```





## 插槽

> 1. 可以将组件标签展开为双标签, 传递参数(传递一个, 则这个元素作为children的值, 传递多个则多个元素组成的数组作为children的值)
> 2. 利用组件的children属性传参, 等价于方式1
> 3. 利用其他属性传参



```jsx
// 父组件
import React, {Component} from 'react';
import SubComponent from "./components/SubComponent";

class App extends Component {

  render() {
    const ReactElement1 = <button disabled key={1}>按钮</button>
    const ReactElement2 = <i key={2}>你好</i>

    return (
      <div>
        {/* 1. 通过children属性传递 */}
        <SubComponent children={[ReactElement1, ReactElement2]}/>

        {/* 2. 通过展开式, 等价于1写法 */}
        {/* 如果传递一个元素, 则children保存的就是那一个元素 */}
        {/* 如果传递多个元素, 则children保存是所有元素的数组 */}
        <SubComponent>
          {ReactElement1}
          {ReactElement2}
        </SubComponent>
      </div>
    );
  }
}

export default App;

// 子组件
import React, {Component} from 'react';
import PropTypes from "prop-types";

class SubComponent extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired //由React元素组成的数组
  }

  render() {
    const {children} = this.props

    return (
      <div>
        <h1>我是子组件, 下边的结构我不想写死</h1>
        <h3>第一个子元素: { children[0] } </h3>
        <h3>第二个子元素: { children[1] } </h3>
      </div>
    );
  }
}

export default SubComponent;

```

## render-props

> 什么是render-props? 
>
> - 编写子组件时, 结构由父组件定, 子组件也可以给父组件传参. 即vue中的作用域插槽
>
> React中如何实现作用域插槽 ?
>
> 1. 父组件传递一个可以接受参数的, 渲染JSX.Element的方法给子组件
> 2. 子组件调用该方法, 并且传参 



```jsx
// 父组件
import React, {Component} from 'react';
import SubComponent from "./components/SubComponent";

class App extends Component {

  renderButton(message) {
    return <button disabled>{message}</button>
  }

  render() {
    return (
      <div>
        <SubComponent renderButton={this.renderButton}/>
      </div>
    );
  }
}

export default App;

// 子组件
import React, {Component} from 'react';
import PropTypes from "prop-types";

class SubComponent extends Component {
  static propTypes = {
    renderButton: PropTypes.func.isRequired
  }

  render() {
    const {renderButton} = this.props

    return (
      <div>
        <h1>我是子组件, 下边的结构内容我决定,但是结构父组件定</h1>
        { renderButton('你好啊, 李银河') }
      </div>
    );
  }
}

export default SubComponent;
```







## Context

### 1. 类组件中的Context

> 1. 通过React.createContext(默认值) 创建context
> 2. 根组件使用context.Provider和他的value属性提供值
> 3. 子孙类组件通过, static contextType = context 接收context . 此时context provider的值被注入当前子孙组件的this.context属性中
> 4. 这种方式的缺点: 一个类组件只能使用一个context

```jsx
// context
import React from "react";

export const ThemeContext = React.createContext({
  color:'red'
})


// 根组件
import React, {Component} from 'react';
import SubComponent from "./components/SubComponent";
import {ThemeContext} from "./context/ThemeContext";

class App extends Component {

  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: 'gold'}}>
          <SubComponent/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
// 孙组件
import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class SonComponent extends Component {
  // contextType只能为createContext的返回值
  static contextType = ThemeContext

  render() {
    return (
      <div>
        <h3 style={{background: this.context.color}}>孙组件</h3>
      </div>
    );
  }
}

export default SonComponent;

```

### 2. Consumer:  类组件和函数组件通用

> 1. 通过React.createContext(默认值) 创建context
> 2. 根组件使用context.Provider和他的value属性提供值
> 3. 子孙组件通过 context.Consumer渲染结构. Consumer的children是一个函数, 函数会接受到provider的value属性, Consumer渲染这个函数的返回值

```jsx
// context
import React from "react";

export const ThemeContext = React.createContext({
  color:'red'
})


// 根组件
import React, {Component} from 'react';
import SubComponent from "./components/SubComponent";
import {ThemeContext} from "./context/ThemeContext";

class App extends Component {

  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: 'gold'}}>
          <SubComponent/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

// 孙组件
import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class SonComponent extends Component {

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {/* 其实就是给Consumer的children属性中传递一个函数 */}
          {
            value => <h3 style={{background: value.color}}>孙组件</h3>
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default SonComponent;

```

## setState详解

> 1. setState更新是异步的
> 2. 为什么setState更新是异步的? 
>    1. 方便批处理setState, 更新视图, 提高性能
>    2. setState后, 组件的render方法被调用. 当state作为props传入子组件时候, 如果setState是同步的, 就会导致父组件的state是新的, 子组件由于父组件还没render, 拿到的是旧的state. 导致数据的不一致性
> 3. 怎么解决异步更新的问题? 
>    1. 18 之前可以用setTimeout 
>    2. 18之后有三种方法可以在更新后拿到最新的state
>       - 上一次setState后, 下一次setState用函数式, 可以拿到更新后的state
>       - setState后用第二次参数, 回调函数. 可以拿到最新state
>       - 利用react-dom包的flushSync包裹setState可以拿到最新的setState



```jsx
import React, {Component} from 'react';
import {flushSync} from "react-dom";

class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 想在下一次的setState中拿到最新的state 用函数式
    // this.setState((state)=>{
    //   console.log(state)
    // })

    // 想在函数外边拿到最新的state用
    // flushSync(()=>{
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // })
    //
    // console.log(this.state)

    // 回调拿到最新的state
    this.setState(
      (state)=>({count:state.count + 1}),
      ()=>console.log(this.state)
    )
  }



  render() {
    return (
      <div>
        <h1>当前数量是: {this.state.count}</h1>
        <button onClick={this.increment}>数字加1</button>
      </div>
    );
  }
}

export default App;

```

## react的更新机制 与 shouldComponentUpdate(SCU)

> react的组件更新机制
>
> - 1. setState时候, 当前组件会重新render, 所有子组件也会重新render
>
> - 2. 当前组件props更新时候, 当前组件会重新render, 所有子组件也会重新render
>
> - 3. 当前组件forceUpdate时候, 当前组件重新render, 所有子组件也会重新render,forceUpdate无视当前组件的shouldComponentUpdate(但是不无视子组件的SCU)
>
> 重新渲染机制: 
>
> 1. setState 后 会导致所有子组件重新渲染
> 2. 组件的props更新时候, 会导致该组件重新渲染
> 3. shouldComponentUpdate 可以定义更新逻辑

```jsx
// App组件
import React, {Component} from 'react';
import Home from "./components/Home";
import Banner from "./components/Banner";

class App extends Component {
  state = {
    message: 'hello,world'
  }
  changeMessage = () => {
    this.forceUpdate()
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {

    return false
  }

  render() {
    console.log('App组件重新渲染')
    return (
      <div>
        <h1>子组件一: </h1>
        <Home message={this.state.message}/>
        <h1>子组件二</h1>
        <Banner message={this.state.message}/>
        <button onClick={this.changeMessage}>更改message</button>
      </div>
    );
  }
}

export default App;

// Banner
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Banner extends Component {
  static propTypes = {
    message:PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.props.message !== nextProps.message){
      return true
    }
    return false
  }

  render() {
    console.log('Banner组件重新渲染')
    return (
      <div>
        { this.props.message }
      </div>
    );
  }
}

export default Banner;

// Home
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.props.message !== nextProps.message){
      return true
    }
    return false
  }

  render() {
    console.log('Home组件重新渲染')
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}

export default Home;


```

## React.PureComponent和React.memo

> PureComponent用于类组件, memo用于函数式组件两者的作用为 :
>
>    0 . 相当于手动实现了SCU, 对props和state做了一层浅对比, 当不相同的时候才渲染, 否则不渲染
>
> 1. 当setState一个相同的变量时候, 不重新render
> 2. 当新的props没有改变时候, 不重新render
> 3. 浅比较, 只比较第一层. 当第二层以上的数据变化的时候, Pure和memo不生效
> 4. forceUpdate无视shouldComponentUpdate 同样也无视PureComponent和memo

```js
// App.jsx
import React, {Component} from 'react';
import Home from "./components/Home";
import Banner from "./components/Banner";

// PureComponent用于类组件, memo用于函数式组件两者的作用为 :
// 1. 当setState一个相同的变量时候, 不重新render
// 2. 当新的props没有改变时候, 不重新render
// 3. 浅比较, 只比较第一层. 当第二层以上的数据变化的时候, Pure和memo不生效
// 3. forceUpdate无视shouldComponentUpdate 同样也无视PureComponent


class App extends Component {
  state = {
    message: {
      a: 'hello,world'
    }
  }
  changeMessage = () => {
    // this.setState({message: '你好, 李银河'})

    // 不能检测到第二层
    this.setState({message: {a: '你好啊, 李银河'}})

    // 强制刷新, 无视PureComponent
    // this.forceUpdate()
  }

  render() {
    console.log('App组件重新渲染')
    return (
      <div>
        <Home message={this.state.message}/>
        <Banner message={this.state.message}/>
        <button onClick={this.changeMessage}>更改message</button>
      </div>
    );
  }
}

export default App;

// Home.jsx
import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class Home extends PureComponent {
  static propTypes = {
    message: PropTypes.object.isRequired
  }

  render() {
    console.log('Home组件重新渲染')
    return (
      <div>
        {this.props.message.a}
      </div>
    );
  }
}

export default Home;
// Banner
import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Banner = memo(props => {
  console.log('banner组件渲染')
  return (
    <div>
      {props.message.a}
    </div>
  );
})

Banner.propTypes = {
  message: PropTypes.object.isRequired
};

export default Banner;

```

## 数据不可变的力量

总而言之: 修改state的时候, 不要用老的state对象, 否则可能不发生更新(继承PureComponent和memo的时候)

## Ref

### ref与DOM对象

```jsx
import React, {PureComponent,createRef} from 'react';

class App extends PureComponent {
  title1Ref = createRef()

  getDom = (e) => {
    // 1. 通过字符串获取
    // console.log(this.refs.title1)

    // 2. 通过React.createRef() 绑定, 通过ref.current的操作
    // console.log(this.title1Ref.current)

    // 3. 通过函数回调获取, react会在初渲染时自动回调函数, 并传入dom
    // console.log(e)
  }

  render() {
    return (
      <div>
        <h2 ref='title1'>你好, 李银河</h2>
        <h2 ref={this.title1Ref}>hello, world</h2>
        <h2 ref={this.getDom}>你好, world</h2>
        <button onClick={this.getDom}>获取DOM</button>
      </div>
    );
  }
}

export default App;

```



### ref与组件

> 1. 类组件: 通过createRef绑定, 可以直接调用组件实例属性和方法
>
>  2. 函数式组件
> - 1. 获取函数子组件的DOM
>   - 父组件传递ref给函数组件
>   - 函数子组件通过forwardRef第二个参数接收ref 并绑定dom
>
> - 2. 获取函数子组件的属性和方法
>   - 父组件绑定ref给函数子组件
>   - 子组件绑定forwardRef
>   - 子组件使用useImperativeHandle, 保留一个包含对象或函数的对象给父组件使用
>   - 函数组件不能同时获取DOM和操作属性方法





```jsx
// 父组件

import React, {PureComponent,createRef} from 'react';
import SubComp1 from "./components/SubComp1";
import SubComp2 from "./components/SubComp2";
class App extends PureComponent {
  ref1 = createRef()
  ref2 = createRef()

  componentDidMount() {
    this.getComponent()
  }

  getComponent = (e) => {
    // 1. 类组件: 通过createRef绑定, 可以直接调用组件实例属性和方法
    // console.log(this.ref1.current)

    // 2. 函数式组件
    // - 1. 获取函数子组件的DOM
    //   - 父组件传递ref给函数组件
    //   - 函数子组件通过forwardRef第二个参数接收ref 并绑定dom

    // - 2. 获取函数子组件的属性和方法
    //   - 父组件绑定ref给函数子组件
    //   - 子组件绑定forwardRef
    //   - 子组件使用useImperativeHandle, 保留一个包含对象或函数的对象给父组件使用

    // 1和2不能同时使用
    console.log(this.ref2.current)
  }

  render() {
    return (
      <div>
        <h1>
          <SubComp1 ref={this.ref1} />
        </h1>

        <h1>
          <SubComp2 ref={this.ref2} />
        </h1>
      </div>
    );
  }
}

export default App;

// 函数组件
import React, {forwardRef, memo,useImperativeHandle} from 'react';

const SubComp2 = memo(forwardRef((props, ref) => {
  const message = '你好, 我是函数子组件'
  const getMessage = () => {
    console.log(message)
  };

  useImperativeHandle(ref,()=>({
    message,
    getMessage
  }))

  return (
    <div ref={ref}>
      子组件二
    </div>
  );
}))

export default SubComp2;

// 类组件
import React, {PureComponent} from 'react';

class SubComp1 extends PureComponent {
  message = '我是子组件 - 类组件'

  getMessage = () => {
    console.log(this.message)
  }
  render() {
    return (
      <div>
        子组件1
      </div>
    );
  }
}

export default SubComp1;

```
## 受控组件与非受控组件

> 针对于表单元素来说的
>
> 1. 如果一个表单元素, 没有提供value/checked属性, 那么是非受控组件(不受react控制)
>
>    - 通过defaultValue / defaultCheckout绑定默认值, 通过DOM.value / DOM.checked获取数据
>
> 2. 如果一个表单元素, 提供了value / checked属性, 那么会受到react控制
>   - 通过value 和 checked属性绑定属性, 通过onChange事件修改数据

```jsx
import React, {PureComponent} from 'react';

class App extends PureComponent {
  state = {
    username: "",
    password: "",
    gender: 'man',
    hobbies: [{id: 0, hobby: '吃饭', isChecked: true}, {
      id: 1, hobby: '睡觉', isChecked: true
    }, {id: 2, hobby: '学习', isChecked: true}],
    selectCity: ['北京']

  }

  onTextChange = async (e) => {
    await new Promise((resolve) => {
      this.setState({
        [e.target.name]: e.target.value
      }, resolve)
    })
  }

  onRadioChange = (e) => {
    this.setState({
      gender: e.target.id
    })
  }

  onHobbyChange = (e, id) => {
    const {hobbies} = this.state

    this.setState({
      hobbies: hobbies.map(item => {
        if (item.id === id) {
          item.isChecked = e.target.checked
        }
        return item
      })
    })
  }

  onCityChange = (e) => {
    this.setState({
      selectCity: Array.from(e.target.selectedOptions, item => item.value)
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }


  render() {
    const {username, password, gender, hobbies, selectCity} = this.state

    return (<form action='#' onSubmit={this.onSubmit}>
      {/* 用户名/密码 - 文本框 */}
      <label htmlFor="username">
        <span>用户名</span>
        <input type="text" id="username" name="username" value={username}
               onChange={this.onTextChange}/>
      </label>
      <label htmlFor="password">
        <span>密码</span>
        <input type="password" id="password" name="password" value={password}
               onChange={this.onTextChange}/>
      </label>
      {/* 性别-单选框 */}
      <label htmlFor="man">
        <span>男</span>
        <input type="radio" name="sex" id="man" checked={gender === 'man'}
               onChange={this.onRadioChange}/>
      </label>
      <label htmlFor="woman">
        <span>女</span>
        <input type="radio" name="sex" id="woman" checked={gender === 'woman'}
               onChange={this.onRadioChange}/>
      </label>
      {/* 爱好-复选框 */}
      {hobbies.map((hobby) => (<label htmlFor={hobby.id} key={hobby.id}>
        <span>{hobby.hobby}</span>
        <input type="checkbox" name={hobby.hobby} id={hobby.id}
               checked={hobby.isChecked}
               onChange={(e) => this.onHobbyChange(e, hobby.id)}/>
      </label>))}
      {/* 城市-选择框 */}
      <select value={selectCity} onChange={this.onCityChange} multiple={true}>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="guangzhou">广州</option>
      </select>
      <div>
        <button>提交</button>
      </div>
    </form>);
  }
}

export default App;

```



## HOC

> higher-order component 高阶组件
>
> 高阶函数是传入函数, 或者返回函数的函数. 高阶组件是传入组件, 返回组件的函数
>
> HOC的作用:
>
> 1. 增强props
> 2. 注入context
> 3. 动态组件(根据条件展示不同的组件)



### 增强props

```jsx
import React, {PureComponent} from 'react';


function enhancedUser(OriginComponent) {
  class A extends PureComponent {
    state = {
      username: '张三',
      age: 18
    }

    render() {
      // 将原有传入的props给老组件, 同时将state注入老组件, 达到增强props的作用
      return <OriginComponent {...this.props} {...this.state} />
    }
  }

  return A
}

let User = (props) => {
  return (
    <div>
      <h1>当前的姓名为:{props.username} </h1>
      <h1>当前的年龄为: {props.age} </h1>
      <h1>当前的编号为 {props.num} </h1>
    </div>
  )
}

User = enhancedUser(User)


class App extends PureComponent {
  render() {
    return (
      <div>
        <User num='001'/>
      </div>
    );
  }
}

export default App;

```

### 注入context

```jsx
import React, {PureComponent} from 'react';

const ThemeContext = React.createContext({color: 'blue'})

const withTheme = (OriginComponent) => {
  return (props) => {
    return <>
      <ThemeContext.Consumer>
        {/* 记得将原来的props穿进去, 将context结构并注入老组件 */}
        {
          value => <OriginComponent {...props} {...value}/>
        }
      </ThemeContext.Consumer>
    </>
  }
}

let Navbar = (props) => {
  return <>
    <h1 style={{background: props.color}}>{props.name}导航栏</h1>
  </>
};

Navbar = withTheme(Navbar)


class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: 'blue'}}>
          <Navbar name={'搜索'}></Navbar>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

```

### 动态组件

```jsx
import React, {PureComponent} from 'react';

const withAuth = (LoginComponent, LogoutComponent) => {
  return (props) => {
    const token = localStorage.getItem('token')

    return !!token ? <LoginComponent {...props} token={token}/> :
      LogoutComponent

  }
};

let User = (props) => {
  return <>
    <div>登录后的页面: {props.token} </div>
  </>
}
User = withAuth(User, <h2>请登录....</h2>)


class App extends PureComponent {

  render() {
    return (
      <div>
        <User/>
      </div>
    );
  }
}

export default App;

```

### 实现connect

使用: 

```js
import React, { PureComponent } from "react";
import connect from "../hoc/connect";
import { setCount } from "../store/category";

class My extends PureComponent {
  render() {
    return (
      <div>
        <h1>数字是: {this.props.count}</h1>
        <button onClick={() => this.props.setCount(1)}>修改count</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.category.count,
});

const mapDispatchToProps = (dispatch) => ({
  setCount: (count) => dispatch(setCount(count)),
});
export default connect(mapStateToProps, mapDispatchToProps)(My);

```

connect.js

```js
import { PureComponent } from "react";
import { ReactReduxContext } from "react-redux";

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperComponent) => {
    class A extends PureComponent {
      static contextType = ReactReduxContext;

      state = mapStateToProps(this.context.store.getState());

      componentDidMount() {
        // 当store树发生任何变化的时候就更新视图
        // this.context.store.subscribe(() => {
        //   this.forceUpdate();
        // });

        // 优化: 当依赖的store状态发生变化的时候, 才更新视图
        // 当任何store变化的时候, 只去更新count有关的视图
        // 由于继承了PureComponent, 当count未变化, 则不会更新视图, 性能优化
        this.context.store.subscribe(() => {
          this.setState(mapStateToProps(this.context.store.getState()));
        });
      }

      render() {
        // 每次渲染的时候, 取最新的state和dispatch
        const state = mapStateToProps(this.context.store.getState());
        const dispatch = mapDispatchToProps(this.context.store.dispatch);

        return <WrapperComponent {...this.props} {...state} {...dispatch} />;
      }
    }

    return A;
  };
};

export default connect;

```



## ReactDOM.createPortal(element | element[], DOMelement )

> ReactDOM.createPortal()
>
>  - 在当前组件树中创建一个元素, 但是将这个元素移到另一个DOM中进行展示
>  - 可以利用这个特性封装弹出层, 模态框. 这一类组件的特点就是在当前组件树中使用, 但是结构被渲染在当前DOM树外



```jsx
// Popup弹框
import React, {PureComponent} from 'react';
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';

class Popup extends PureComponent {
  // 约定传入一些JSX元素, 作为弹出层的内容
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), 	     PropTypes.element])
  };

  constructor(props) {
    super(props);
    // 创建弹出层
    const div = document.createElement('div')
    // 设置弹出层样式, 相对于视口水平垂直居中
    div.className = 'my-popup'
    div.style.position = 'fixed'
    div.style.top = '50%'
    div.style.left = '50%'
    div.style.transform = 'translate(-50%,-50%)'
    div.style.width = '300px'
    div.style.hight = '300px'
    div.style.backgroundColor = 'gold'
    document.body.appendChild(div)
  }

  render() {
    return createPortal(this.props.children, document.querySelector('.my-popup'))
  }
}

export default Popup;

// App.jsx
import React, {PureComponent} from 'react';
import Popup from "./components/Popup";

class App extends PureComponent {

  render() {
    return (
      <div>
        <Popup>
          <h1>弹出层</h1>
          <p>内容...</p>
        </Popup>
      </div>
    );
  }
}

export default App;

```

## React.Fragment

> react提供的幽灵组件
>
> 用于渲染内容而不接受结构标签
>
> 注意: 1. 在必须提供标签属性的时候, 不能使用fragment,  2. 语法糖 <></>



```jsx
import React, {PureComponent} from 'react';
// react中组件必须有一个根节点, 如果想省略该节点, 则需要用React.Fragment
// 1. Fragment : 片段的意思
// 2. 语法糖 <></>
// 3. 在遍历绑定key的时候不能使用<></>
class App extends PureComponent {
  state = {
    movies: [
      {key: 1, name: '烈日灼心'}, {key: 2, name: '流浪地球'}
    ]
  }

  render() {
    return (
      <>
        {
          this.state.movies.map((item) => {
            return (
              // 此时必须用React.Fragment 不能用语法糖 <></>
              <React.Fragment key={item.key}>
                <span>name: {item.name}</span>
              </React.Fragment>
            )
          })
        }
      </>
    );
  }
}

export default App;

```

## React.StrickMode

> react的严格模式, 特点如下
>
> 1. 开启严格模式的组件, contructor / render / 声明周期函数会被调用两次, 只在开发模式生效, 生产模式不会生效
> 2. 不建议使用但没彻底废除的语法, 会在console面板中报错



```jsx
// app.jsx
import React, {PureComponent} from 'react';
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

class App extends PureComponent {

  render() {
    return (
      <div>
        <React.StrictMode>
          <Comp1/>
        </React.StrictMode>
        <Comp2/>
      </div>
    );
  }
}

export default App;

// comp1.jsx
import React, {PureComponent} from 'react';

class Comp1 extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('Comp2 will mount')
  }

  componentDidMount() {
    console.log('Comp1 component did mount')
  }

  render() {
    console.log('Comp1 渲染了')
    return (
      <div>
        子组件1
      </div>
    );
  }
}

export default Comp1;

// comp2.jsx

import React, {PureComponent} from 'react';

class Comp2 extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('Comp2 will mount')
  }

  componentDidMount() {
    console.log('Comp2 component did mount')
  }

  render() {
    console.log('Comp2 渲染了')

    return (
      <div>
        子组件2
      </div>
    );
  }
}

export default Comp2;

```

## React与动画

> React中使用 react-transition-group库制作动画效果, 下载 npm i react-transition-group

> 动画中的几个概念
>
> 1. appear: 出场动画, 页面第一次渲染添加的动画
> 2. enter : 开场动画
> 3. exit: 退场动画



> 注意点:
>
> 1. 其中以上三个阶段又分为: 状态本身(用于固定状态), active(用于添加过渡和动画), done(很少用) 三个小状态
> 2. 动画写样式的时候格式为   .动画名称.大状态.小状态
>
> ###### 另外注意点: transform不能添加给行内元素, 可以添加给块元素和行内块



> 1. CSSTransition
>    - 作用: 对单个元素的显示与隐藏进行动画
>    - 属性: in: 开关变量, classNames:动画类名, timeout:动画执行事件, appear:是否添加开场动画, key: 动画组或者开关动画的时候需要绑定key
> 2. SwitchTransition
>    - 作用: 对单个元素的内容进行开关, 使用需要包裹CSSTransition
>    - 属性: mode: out-in/in-out 先进后出还是先出后进
> 3. TransitionGroup
>    - 作用: 对多个(2+)元素进行动画, 需要包裹CSSTransition
>    - 属性: component指定渲染的标签, 默认是div
>
>


### CSSTransition 

```css
// 组件
import React, {PureComponent} from 'react';
import {CSSTransition} from "react-transition-group";
import './App.css'

class App extends PureComponent {
  state = {
    isShow: true,
  }

  render() {
    const {isShow} = this.state

    return (
      <div>
        <div>
          <button onClick={() => this.setState({isShow: !isShow})}>
            切换
          </button>
        </div>
        {/*
          in: 绑定开关变量
          timeout: 动画执行时间, 应与css一样
          classNames: 动画的类名
          appear: 是否开启出现动画(指的是是否在刷新或者一开始的时候走一个动画)
       */}
        <CSSTransition in={isShow} timeout={1000} classNames={'animate'} appear>
          <span>你好啊, 李银河</span>
        </CSSTransition>
      </div>
    );
  }
}

export default App;

// css
.animate-appear, .animate-enter {
  display: inline-block;
  opacity: 0;
  transform: translateX(100px);
}

.animate-appear-active, .animate-enter-active {
  display: inline-block;
  opacity: 1;
  transform: translateX(0);
  transition: all 1s cubic-bezier(0.1, 0.6, 0, 1);
}


.animate-exit {
  display: inline-block;
  opacity: 1;
  transform: translateX(0);
}

.animate-exit-active {
  display: inline-block;
  transform: translateX(100px);
  opacity: 0;
  transition: all 1s cubic-bezier(0.1, 0.6, 0, 1);
}

```



### SwitchTransition

```jsx
// 组件
import React, {PureComponent} from 'react';
import './App.css'
import {CSSTransition, SwitchTransition} from "react-transition-group";

class App extends PureComponent {
  state = {
    isShow: true,
  }

  changeIsShow = () => {
    const {isShow} = this.state
    this.setState({isShow: !isShow})
  }

  render() {
    const {isShow} = this.state

    return (<div>
      <SwitchTransition mode="out-in">
        <CSSTransition key={isShow ? 'enter' : 'exit'} timeout={500}
                       classNames={"fade"}>
          <button onClick={this.changeIsShow}>
            {isShow ? 'Hello,World' : 'GoodBye,World'}
          </button>
        </CSSTransition>
      </SwitchTransition>
    </div>);
  }
}

export default App;
//css
.fade-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-enter-active {
  opacity: 1;
  transform: translateX(0%);
}

.fade-exit {
  opacity: 1;
  transform: translateX(0%);
}

.fade-exit-active {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-active,
.fade-exit-active {
  transition: opacity 500ms, transform 500ms;
}

```



### TransitionGroup

```js
import React, {PureComponent} from 'react';
import './App.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

class App extends PureComponent {
  state = {
    inputRef: React.createRef(),
    todos: [
      {todo: '吃饭', isDone: false, id: 0},
      {todo: '睡觉', isDone: false, id: 1},
      {todo: '打豆豆', isDone: false, id: 2},
    ]
  }

  addTodo = () => {
    let {todos, inputRef} = this.state
    this.setState({
      todos: [...todos, {
        todo: inputRef.current.value,
        isDone: false,
        id: todos.length
      }]
    })
  }

  onDel = (id) => {
    this.setState(({todos}) => ({
      todos: todos.filter(item => item.id !== id)
    }))
  }
  renderTodos = () => {
    return (
      <TransitionGroup component={'ul'}>
        {
          this.state.todos.map((todo) => {
            return (
              <CSSTransition key={todo.id} timeout={1000} classNames={'fade'}>
                <li>{todo.todo} ====== <button
                  onClick={() => this.onDel(todo.id)}>删除</button></li>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }

  render() {
    const {inputRef} = this.state

    return (<div>
      <button onClick={this.addTodo}>添加待办事项</button>
      <input type="text" ref={inputRef}/>

      {
        this.renderTodos()
      }
    </div>);
  }
}

export default App;
// css
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-active {
  opacity: 1;
  transform: translateX(0%);
}

.fade-exit {
  opacity: 1;
  transform: translateX(0%);
}

.fade-exit-active {
  opacity: 0;
  transform: translateX(100%);
}

.fade-enter-active,
.fade-exit-active {
  transition: opacity 500ms, transform 500ms;
}

```





## Css in React

> CRA (create-react-app)
>
> CRA对CssPreprocessor的支持情况
>
> 1. sass
>    - 默认支持sass(配置好了loader), 只需要手动下载下sass即可
> 2. less
>    - 不支持less, 需要手动配置loader和下载less
>    - 一般不使用npm run eject暴露webpack配置, 手动配置, 而是使用CRACO覆盖配置



### less的安装

> 1. 安装CRACO, 并配置package.json中的scripts
> 2. 安装croco-less, 这个包集成了less的配置
> 3. **注意安装包的版本, 最新的CRA是5.0.1的, 下载包的时候要下 @craco/craco@alpha   craco-less@alpha, 以后更新了可能就不需要了**

```js
// 1. npm i @craco/craco@alpha  craco-less@alpha

// 2. 在根目录下新建craco.config.js配置如下
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
};

```



### Css In Js

> 一种用js方式写css的组织方式

> 使用: 
>
> 1. 下载包: npm i styled-components
>
> 功能: 
>
> - 通过props传递变量
> - 通过ThemeProvider传递变量
> - 通过attrs设置变量默认值

**example**

```jsx
// App.jsx
import React, {PureComponent} from 'react';
import {AppWrapper} from "./styles";

class App extends PureComponent {
  state = {
    bgcolor: 'purple'
  }

  setBgc = () => {
    this.setState({
      bgcolor: 'red'
    })
  }

  render() {
    const {bgcolor} = this.state
    return (
      <AppWrapper color={bgcolor} fontSize={'100px'}>
        <span className={'font'}>你好啊, 李银河</span>
        <button onClick={this.setBgc}>改变背景色</button>
      </AppWrapper>
    );
  }
}

export default App;


// styles.js
import styled from 'styled-components'

export const AppWrapper = styled.div.attrs((props) => ({
  // 可以在这里设置变量默认值
  fontSize: props.fontSize || '50px'
}))`
  .font {
    // 使用props默认值
    font-size: ${props => props.fontSize};
    //使用props传递变量
    //background-color: ${(props) => props.color};
    // 使用themeProvider
    background-color: ${(props) => props.theme.primaryColor};
  }
`

```


### ClassNames
> 1. 下载 npm i classnames
> 2. 使用classNames('常量',{类名:boolean})

```jsx
import React, { PureComponent } from "react";
import classNames from "classnames";
import styled from "styled-components";

class App extends PureComponent {
  state = {
    isShow: false,
  };

  render() {
    return (
      <AppWrapper>
        <span className={classNames({ active: this.state.isShow })}>
          你好啊, 李银河
        </span>
        <button
          onClick={() => this.setState((state) => ({ isShow: !state.isShow }))}
        >
          改变isShow
        </button>
      </AppWrapper>
    );
  }
}
const AppWrapper = styled.div`
  .active {
    background-color: purple;
  }
`;
export default App;

```


## Redux

### 纯函数的概念
> 1. 确定的输入, 确定的输出. 不能有二义性
> 2. 函数执行没有副作用(**side-effects**)
> 3. 优点: 减小编写代码的心智负担, 不会影响外界变量, 相同输入有相同输出, 符合预期

### redux流程
> dispatch(action) ---> reducer(state,action) --> state --> UI



### redux基本使用
>1. 通过redux.createStore(reducer)创建仓库
>2. reducer是一个接受preState和action的纯函数
>3. 通过store.getState() 获取当前state数据
>4. 通过store.dispatch(actionCreator(payload))派发action
>5. 通过store.subscribe(()=>{}), 订阅当state发生变化的时候的事件
>6. 通过 const uninstall = store.subscribe(()=>{}) ; uninstall()取消订阅事件

**index.js**
```jsx
const redux = require("redux");
const reducer = require("./reducer");

const store = redux.createStore(reducer);

module.exports = store;

```

**reducers**
```js
const { CHANGE_NAME } = require("./constants");
const initialState = {
  name: "张三",
};

//reducer是一个接受上一次状态和action的纯函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};

module.exports = reducer;

```

**constants**
```js
const CHANGE_NAME = "CHANGE_NAME";

module.exports = {
  CHANGE_NAME,
};

```

**action-creators**

```js
const { CHANGE_NAME } = require("./constants");

const changeNames = (payload) => {
  return {
    type: CHANGE_NAME,
    payload,
  };
};

module.exports = {
  changeNames,
};

```


**usage**
```js
const store = require("./index");
const { changeNames } = require("./action-creaters");

// 获取store的数据
const state = store.getState();

// 订阅store的变化
const unsubscribe = store.subscribe(() => {
  console.log("本次变化", store.getState());
});

// 修改store的数据
store.dispatch(
  changeNames({
    name: "李四",
  })
);
// 取消订阅store
unsubscribe(); // 只打印一次

store.dispatch(
  changeNames({
    name: "张三",
  })
);

```
## react-redux
> react-redux的作用
> 1. redux是一个不受框架使用的库. 在react中使用有些复杂. react-redux简化了redux的部分功能,让其变得简单
>   但还要依赖(下载)redux
> 2. react-redux实现了自动订阅, 更改组件内数据, 刷新视图. 在组件卸载后, 自动卸载订阅事件

> 用法:
> 1. 在index.js中用`<Provider store={store}></Provider>`包裹App
> 2. 将类组件用connect(mapStateToProps,mapActionToProps)(组件)包裹
> 3. mapStateToProps参数为state,mapActionToProps参数为dispatch, 两个函数被要求返回
>   一个对象, 这个对象会被合并到组件的props中


**Home组件, 未使用react-redux**
```jsx
import React, { PureComponent } from "react";
import store from "../store";
import { incrementAction } from "../store/action-creators";

class Home extends PureComponent {
  state = {
    // 将redux的数据, 赋值给当前组件的初始值
    num: store.getState().counter,
  };

  componentDidMount() {
    // 订阅事件: 将redux中的数据同步到当前组件,并刷新视图
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        num: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    // 卸载订阅事件
    this.unSubscribe && this.unSubscribe();
  }

  setNum = (num) => {
    // 更改redux中的数据
    store.dispatch(
      incrementAction({
        num,
      })
    );
  };
  render() {
    const { num } = this.state;

    return (
      <div>
        <h3>我是Home组件</h3>
        <h4>数字为: {num}</h4>
        <button onClick={() => this.setNum(1)}>数字+1</button>
        <button onClick={() => this.setNum(5)}>数字+5</button>
      </div>
    );
  }
}

export default Home;

```

**index.js**
```jsx
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

```

**Profile组件, 使用react-redux**
```jsx
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { decrementAction } from "../store/action-creators";

class Profile extends PureComponent {
  render() {
    const { num, setNum } = this.props;

    return (
      <div>
        <h3>我是Profile组件</h3>
        <h4>数字为: {num}</h4>
        <button onClick={() => setNum(-1)}>数字-1</button>
        <button onClick={() => setNum(-5)}>数字-5</button>
      </div>
    );
  }
}

// 映射state到props
const mapStateToProps = (state) => ({
  num: state.counter,
});

// 映射到action到props
const mapActionToProps = (dispatch) => ({
  setNum: (num) => dispatch(decrementAction({ num })),
});

export default connect(mapStateToProps, mapActionToProps)(Profile);

```


## 中间件
> 中间件的书写格式
> 1. const middleWare = (middlewareAPI) => next => action => {}
> 2. next为上一次的dispatch, 最后返回的函数是最新的dispatch

> 中间件的本质 
> 通过redux.applyMiddleware将中间件的返回的dispatch通过compose函数组合成链式调用的dispatch, 
> 最后挂载到store.dispatch上
### 实现中间件和 applyMiddleware

```js
export const logMiddleWare = (store) => {
  // next: 上一次的dispatch
  return (next) => {
    // 本次的dispatch

    return (action) => {
      if (typeof action === "object") {
        console.log("正在派发action: ", action);
        next(action);
        console.log("当前状态为: ", store.getState());
      } else {
        next(action);
      }
    };
  };
};

export const thunkMiddleWare = (store) => {
  return (next) => {
    return (action) => {
      if (typeof action === "function") {
        // 如果是函数的逻辑...
        action(store.dispatch, store.getState);
        return;
      }
      // 如果是对象
      next(action);
    };
  };
};

// 组合成链式调用的dispatch
const compose = (...funcs) => {
  return funcs.reduce((a, b) => (dispatch) => b(a(dispatch)));
};

// 应用中间件 --> 将dispatch传入, 给各个中间件修改, 并挂载真正的dispatch
export const applyMiddleware = (...middleWare) => {
  return (createStore) =>
    (...args) => {
      const store = createStore(...args);

      let dispatch = store.dispatch;

      const middleWareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args),
      };

      const chain = middleWare.map((middleWare) => middleWare(middleWareAPI));
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
};

```

## RTK

### 安装 
``npm i @reduxjs/toolkit``

基本目录 
```ts
| store
	|-- index.ts
	|-- user_slice.ts
	|-- xxx_slice.ts
```
### 基本使用
store/index.ts
```ts
import {configureStore} from "@reduxjs/toolkit";
import user_slice from "./user_slice";
import counter_slice from "./couter_slice";

// 默认开启redux开发者工具
const store = configureStore({
  reducer:{
    user:user_slice,
    counter:counter_slice
  }
})

export default store

```

counter_slice.ts, 同步action的用法
```ts
// @ts-nocheck
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter", // 只是前缀, 在调试工具中所有的action都会带上这个前缀
  initialState,
  // 虽然叫reducers, 这个名字很有迷惑性, 实际上就是定义action_creators的地方, 里边每一个都是action_creator
  reducers: {
    // 这里和redux不一样的地方是可以直接修改state, 而不需要返回新的state
    increment(state, action){
      state.count += action.payload
    },
    decrement(state,action){
      state.count -= action.payload
    }
  }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer

```

user_slice.ts , 异步action的用法
```ts
// @ts-nocheck
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {get_chunk_info} from "../api/chunk";

const initialState = {
  message: 0
}

/*
createAsyncThunk 接受两个参数，第一个是action的名字，第二个是异步函数

异步函数接受两个参数: 第一个是传递的参数，第二个是thunkAPI, 可以解构出dispatch, getState等
* const fetchUser = createAsyncThunk(
  'users',
  async (data, thunkAPI) => {}
);
// 使用时传递参数
dispatch(fetchUser(123));
* */
export const get_user_message = createAsyncThunk(
  "user/get_user_message",
  async (data, thunkAPI) => {
    const res = await get_chunk_info()
    return res.data.title
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // 放异步操作的action的地方, 可以链式调用, 一直.addCase
  extraReducers: (builder) => {
    builder
      .addCase(
        get_user_message.fulfilled,
        (state, action) => {
          state.message = action.payload
        }
      )
  }
})

export const {} = userSlice
export default userSlice.reducer

```
app.tsx 调用
```ts
//@ts-nocheck
import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./store/couter_slice";
import {get_user_message} from "./store/user_slice";

const App = () => {
  const {count} = useSelector((state) => state.counter)
  const {message} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_user_message())
  }, []);

  return (
    <div>
      计数器: {count}
      <button onClick={() => dispatch(increment(1))}>增加</button>
      <button onClick={() => dispatch(decrement(1))}>减少</button>

      <hr/>
      消息: {message}
    </div>
  )
}

export default App

```

## React-Router

> v6版本特点: 所有API向hooks迁移, 很多特性必须在函数式组件内使用, 想在类组件使用需要使用高级组件处理
### 路由基础
> 1. 下载包: react-router-dom 默认为v6版本
>   2.应用最外层需要通过HashRouter或者BrowserRouter包裹 
>   3.所有配置的路由必须被`<Routes></Routes>`包裹
>   4.路由通过`<Route path={路径} element={渲染组件} />`声明
>

```jsx
// index.js
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// App.jsx
class App extends PureComponent {
  render() {
    return (
      <>
        {/* 头部导航区 */}
        <Header />

        {/* 路由展示区 */}
        <Routes>
          <Route path="/" element={<Find />} />
          <Route path="/my" element={<My />} />
          <Route path="/friend" element={<Attention />} />
        </Routes>

        {/* 底部导航区 */}
        <Footer />
      </>
    );
  }
}

export default App;

```
### 路由传参

在 `react-router-dom` 中，常见的路由传参方式有三种：**路径参数（Path Params）**、**查询参数（Query Params）** 和 **状态参数（State Params）**。以下是每种方式的详细介绍及示例：

### 1. **路径参数（Path Params）**

路径参数是 URL 的一部分，通常用于标识特定资源。路径参数在定义路由时使用冒号 `:` 作为占位符来标识。

#### 示例：

```jsx

// 1. 定义路由
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

// 2. 获取路径参数
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams(); // 获取URL中的参数值
  return <h1>Product ID: {id}</h1>;
}


```

在访问 `/product/123` 时，`id` 的值将为 `123`。

### 2. **查询参数（Query Params）**

查询参数是 URL 中以 `?` 开头的键值对参数，通常用于过滤或排序。

#### 示例：

```jsx

// 1. 定义路由
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

// 2. 获取查询参数
import { useLocation } from 'react-router-dom';

function ProductList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category'); // 获取查询参数

  return <h1>Category: {category}</h1>;
}

```

在访问 `/products?category=electronics` 时，`category` 的值将为 `electronics`。

### 3. **状态参数（State Params）**

状态参数不出现在 URL 中，通常用于在路由跳转时传递非持久化数据。

#### 示例：

```jsx

// 1. 使用 state 传递参数
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/checkout" state={{ cart: ['item1', 'item2'] }}>
        Go to Checkout
      </Link>
    </div>
  );
}

// 2. 获取状态参数
import { useLocation } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const { cart } = location.state || {}; // 获取状态参数

  return (
    <div>
      <h1>Checkout</h1>
      <p>Cart Items: {cart?.join(', ')}</p>
    </div>
  );
}

```

在此示例中，使用 `Link` 组件将购物车数据作为 `state` 传递，目标组件可以通过 `useLocation()` 钩子来访问这些状态参数。

### 配置式路由

> 像vue一样配置路由

```jsx
// router/index.js
import My from "../pages/My";
import Find from "../pages/Find";
import Attention from "../pages/Attention";

const routes = [
  {
    path: "/",
    element: <Find />,
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/friend",
    element: <Attention />,
  },
];

export default routes;

// App.js
import React, { PureComponent } from "react";
import withRouter from "./withRouter";

import Header from "./components/header";
import Footer from "./components/footer";

class App extends PureComponent {
  render() {
    return (
      <>
        {/* 头部导航区 */}
        <Header />

        {/* 路由展示区 */}
        {this.props.router.element}

        {/* 底部导航区 */}
        <Footer />
      </>
    );
  }
}

export default withRouter(App);

// withRouter.js
import { useRoutes } from "react-router-dom";
import routes from "./router";

const withRouter = (WrapperComponent) => {
  return (props) => {
    const element = useRoutes(routes);
    const routerAPI = {
      element,
    };

    return <WrapperComponent {...props} router={routerAPI} />;
  };
};

export default withRouter;

```
### 编程式导航
> 1. 获得导航器:const nav = useNavigate()
> 2. nav(to)
> 3. to可以是路径也可以是数字, 代表前进或者后退
```jsx
// withRouter.js
import { useRoutes, useNavigate } from "react-router-dom";
import routes from "./router";

const withRouter = (WrapperComponent) => {
  return (props) => {
    const element = useRoutes(routes);
    const navigate = useNavigate();

    const routerAPI = {
      element,
      navigate,
    };

    return <WrapperComponent {...props} router={routerAPI} />;
  };
};

export default withRouter;

// Header.jsx
import React, { PureComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import withRouter from "../withRouter";

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <button onClick={() => this.props.router.navigate(-1)}>
          返回上一级
        </button>

        <div>
          <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/my">我的音乐</NavLink>
          <NavLink to="/friend">关注音乐</NavLink>
        </div>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  .active {
    color: red;
  }
`;
export default withRouter(Header);

```
### 路由传参
> 1. 只支持字符串传参, 手动拼接query参数为查询参数
> 2. 手动拼接路径 + 路由占位为params参数
> 3. const params = useParams() 获取的是params参数对象
> 4. const [URLSearchParams] = useSearchParams() 获取的是js的URLSearchParams对象, 
     > 需要遍历拿到查询参数对象
```jsx
// router/index.js
import My from "../pages/My";
import Find from "../pages/Find";
import Attention from "../pages/Attention";

const routes = [
  {
    path: "/",
    element: <Find />,
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/friend/:musicName",
    element: <Attention />,
  },
];
export default routes;


// withRouter.js
import {
  useRoutes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { memo } from "react";
import router from "./router";

const withRouter = (WrapperComponent) => {
  return memo((props) => {
    // 处理路由组件
    const routes = useRoutes(router);
    // 处理编程式导航API
    const navigate = useNavigate();
    // 处理查询参数
    let [urlSearchParams] = useSearchParams();
    let query = {};
    for (const [key, value] of urlSearchParams) {
      query[key] = value;
    }
    // 处理params参数
    const params = useParams();
    const routerAPI = {
      routes,
      navigate,
      query,
      params,
    };

    return <WrapperComponent {...props} router={routerAPI} />;
  });
};

export default withRouter;

```
### 嵌套子路由
> children可以指定嵌套子路由

```jsx
import My from "../pages/My";
import Find from "../pages/Find";
import Attention from "../pages/Attention";
import Recommend from "../pages/Recommend";
import Rank from "../pages/Rank";

const routes = [
  {
    path: "/",
    element: <Find />,
    children: [
      {
        path: "/recommend",
        element: <Recommend />,
      },
      {
        path: "/rank",
        element: <Rank />,
      },
    ],
  },
  {
    path: "/my/*",
    element: <My />,
  },
  {
    path: "/friend/:musicName/*",
    element: <Attention />,
  },
];
export default routes;

```
### 重定向和路由懒加载和Suspense
> 1. React.lazy可以懒加载一个路由组件
> 2. `<Navigate to="路径"/> `可以重定向一个组件
> 3. 当包裹的组件不存在的时候, 渲染指定的内容, 懒加载必须搭配Suspense组件使用, 否则报错
```jsx
//router.js
import { Navigate } from "react-router-dom";
import React from "react";

const My = React.lazy(() => import(/*webpackChunkName: "My"*/ "../pages/My"));
const Find = React.lazy(() =>
        import(/*webpackChunkName: "Find"*/ "../pages/Find")
);
const Attention = React.lazy(() =>
        import(/*webpackChunkName: "Attention"*/ "../pages/Attention")
);
const Recommend = React.lazy(() =>
        import(/*webpackChunkName: "Recommend"*/ "../pages/Recommend")
);
const Rank = React.lazy(() =>
        import(/*webpackChunkName: "Rank"*/ "../pages/Rank")
);

const routes = [
     {
          path: "/",
          element: <Navigate to={"/recommend"} />,
     },
     {
          path: "/",
          element: <Find />,
          children: [
               {
                    path: "/recommend",
                    element: <Recommend />,
               },
               {
                    path: "/rank",
                    element: <Rank />,
               },
          ],
     },
     {
          path: "/my/*",
          element: <My />,
     },
     {
          path: "/friend/:musicName/*",
          element: <Attention />,
     },
];
export default routes;


//App.jsx
import React from "react";

import { useRoutes } from "react-router-dom";
import routes from "./router";

import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
     return (
             <>
                  {/* 头部导航区 */}
                  <Header />

                  {/* 路由展示区 */}
                  <React.Suspense fallback={<h1>loading...</h1>}>
                       {useRoutes(routes)}
                  </React.Suspense>
                  {/* 底部导航区 */}
                  <Footer />
             </>
     );
};

export default App;

```

## Hooks
### hooks的调用规则
> 1. 只能在函数式组件,自定义hook中调用. 不能在类组件, 普通函数中调用
>    - React Hook "xxx" is called in function "xxx" that is neither a React  function component nor a custom React Hook function. 

>    - react hook被调用在某个函数, 这既不是react组件也不是react自定义hook
>    2. 自定义hook命名必须使用use开头
>    - React Hook names must start with the word "use"
>    3. 必须保证react组件相同的hook调用顺序(不能在分支语句, 循环语句中调用hook)
>    - React Hook "xxx" is called conditionally. React Hooks must be called in  the exact same order in every component render 

>    -  React Hook "useState" may be executed more than once. Possibly because it is called in a loop. React Hooks must be called in the exact same order in every component render 

### useState
> 函数式组件的状态

```jsx
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>当前数字是:{count}</h1>
      <button onClick={() => setCount(count + 1)}>数字加1</button>
    </>
  );
};

export default App;

```

useState的参数为函数时, 该函数只在第一次渲染时候调用, 称为惰性加载

```jsx
export const usePersistState = (key, initialState) => {
  const [value, setValue] = useState(() => {
    // 该函数只在第一次时候被调用, 适合state为需要逻辑计算时候用
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (e) {
      return storedValue // parse失败, 返回存储的值
    }
  })

  const setLocalStorage = (val) => {
    setValue(val)
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  return [value, setLocalStorage]
}
```



### useEffect

> useEffect(callback,deps)
> 1. **页面渲染(包括初渲染和更新)完后**, 会自动调用callback
> 2. deps可选, 不写的话是每次页面渲染后都会调用callback, 写了的话是页面渲染且依赖项发生变化的时候才会调用callback
>   即渲染条件为 componentRender && dependenceUpdate
> 3. callback的返回值可以是一个函数, 调用本次callback时候会先将上一次的返回的函数调用

#### 倒计时定时器的问题
> 定时器中执行setCount会导致函数组件重新调用, 开启多个定时器造成紊乱

```jsx
import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const [num, setNum] = useState(10);

  // 10s 开启timer1
  // 9s  开启timer2 共有定时器timer1, timer2
  // 8s  开启timer3,timer4 共有定时器 timer1,timer2,timer3,timer4...
  // 7s  开启timer5, timer6, timer7, timer8 共有定时器timer1,timer2,timer3,timer4timer5, timer6, timer7, timer8
  // ...
  setInterval(() => {
    setNum(num - 1);
  }, 1000);

  return (
    <>
      <h1>倒计时: {num} 秒</h1>
    </>
  );
};

export default App;

```

#### 解决方案一: 使用useEffect第二个参数清除定时器

```jsx
import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const [num, setNum] = useState(10);
  
  // 解决方案1:
  //  - 开启本次定时器时候, 将上一次定时器清除
  //  - 缺点: 丢失了interval的语义, 每次都把间隔定时器清除, 那跟timeout定时器有什么区别?
  useEffect(() => {
    let timer;
    if (num > 0) {
      timer = setInterval(() => {
        setNum(num - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [num]);

  return (
    <>
      <h1>倒计时: {num} 秒</h1>
    </>
  );
};

export default App;

```

#### useRef缓存count
> useRef创建的ref只创建一次, 在函数组件的生命明周期中不变

```jsx
import React, { createRef, useEffect, useRef, useState } from "react";
const App = () => {
  const [num, setNum] = useState(5);

  // 解决方案2:
  //  - 思路: 只在挂载的时候使用一次interval
  //  - 问题: 拿不到修改后的num,
  //    - 问题原因: 闭包陷阱, 每次取的都是第一次函数闭包中的num
  //    - 问题解决: 1. 使用全局变量缓存(不推荐) 2. 使用useRef缓存
  //  - 总结: useRef创建的ref只创建一次, 在函数组件的生命明周期中不变

  let numRef = useRef();
  numRef.current = num;
  useEffect(() => {
    let timer = setInterval(() => {
      if (numRef.current <= 0) {
        return clearInterval(timer);
      }
      setNum(numRef.current - 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>倒计时: {num} 秒</h1>
    </>
  );
};

export default App;

```

### useContext
> context的用法
> 1. 类组件:
>   - contextType + this.props.context
>   - Context.Consumer
>
> 2. 函数组件
>   - Context.Consumer
>   - useContext

```jsx
// index.js
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

export const ThemeContext = React.createContext({
  color: "red",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext.Provider value={{ color: "red" }}>
    <App />
  </ThemeContext.Provider>
);

// App.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./index";

const App = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {/* 用法1: Consumer */}
      <ThemeContext.Consumer>
        {(value) => <h1 style={{ color: value.color }}>主题context1</h1>}
      </ThemeContext.Consumer>

      {/* 用法二: useContext */}
      <h1 style={{ color: themeContext.color }}>主题context2</h1>
    </>
  );
};

export default App;


```

### useReducer
> 对于complicated logic 使用useReducer要比useState更清晰. 小型的redux

```jsx
import React, { useReducer } from "react";

const appReducer = (state, action) => {
  switch (action.type) {
    case "addition":
      return { ...state, count: state.count + 1 };
    case "subtraction":
      return { ...state, count: state.count - 2 };
    case "multiply":
      return { ...state, count: state.count * 3 };
    case "divide":
      return { ...state, count: state.count / 4 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    count: 0,
  });

  return (
    <>
      <h1>当前数字: {state.count}</h1>
      <button onClick={() => dispatch({ type: "addition" })}>数字加1</button>
      <button onClick={() => dispatch({ type: "subtraction" })}>数字减2</button>
      <button onClick={() => dispatch({ type: "multiply" })}>数字乘3</button>
      <button onClick={() => dispatch({ type: "divide" })}>数字除4</button>
    </>
  );
};

export default App;

```


### useCallbacks
> 缓存函数, 在传递给SCU处理过的子组件时候减少子组件的渲染次数

```jsx
import React, { useCallback, useRef, useState } from "react";

const SubComponent = React.memo((props) => {
  console.log("子组件渲染了");
  return <h1>子组件</h1>;
});

const App = () => {
  const [message, setMessage] = useState("你好,react");

  // Q1 :每次setState, App组件函数会重新执行吗? A1: 会重新执行
  // console.log("app重新执行");

  // Q2: 下面这个函数每次执行会重新创建吗? A2: 会
  // Q3: 如何验证?
  //  - A3: 使用useRef保存calc函数, 判断上一次的calc和本次的calc是否相同

  // const calcRef = useRef();
  //
  // const calc = () => {
  //   let count = 0;
  //   for (let i = 0; i < 50; i++) {
  //     count += i;
  //   }
  //   return count;
  // };
  //
  // console.log(calcRef.current === calc);
  // calcRef.current = calc;

  // Q3: 如何节省这种不必要的性能开销?
  //  - 1. 放在组件外
  //  - 2. 使用useCallback(缓存的函数,依赖项) 当依赖项发生变化的时候重新生成函数

  // const calcRef = useRef();
  //
  // const calc = useCallback(() => {
  //   let count = 0;
  //   for (let i = 0; i < 50; i++) {
  //     count += i;
  //   }
  //   return count;
  // }, []);
  //
  // console.log(calcRef.current === calc);
  // calcRef.current = calc;

  // Q4: 性能开销真的被节省了吗? A4: 没有!
  //  - 经过缓存的calc虽然没有被重新创建, 但是回调在每次App执行的时候还是会重新创建

  // Q5: useCallbacks的真正用法
  //  - 1. 子组件的渲染时机:
  //    - 一个组件在 props/state/forceUpdate的时候会re-rendered, 当父组件重新渲染时候,
  //    子组件的props一定会刷新(不管是否传值)

  // - 2. 将缓存过的callbacks传给实现过SCU的组件, 可以减少子组件re-rendered的次数
  return (
    <div>
      <h1>当前消息: {message}</h1>

      <SubComponent calc={calc} />

      <button onClick={() => setMessage(message.slice(0, message.length - 1))}>
        更新消息
      </button>
    </div>
  );
};

export default App;

```

### useMemo
>   作用:
>   1. 缓存昂贵的计算, 通常是函数创建的开销远远小于函数计算的开销的时候
>   2. 配合SCU过的子组件, 做子组件渲染的性能优化

```jsx
import React, { useMemo } from "react";

const App = () => {
  // 作用:
  //  - 1. 缓存昂贵的计算, 通常是函数创建的开销远远小于函数计算的开销的时候
  //  - 2. 配合SCU过的子组件, 做子组件渲染的性能优化
  const count = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 50; i++) {
      count += i;
    }
    return count;
  }, []);

  return (
    <div>
      <h1>当前count: {count}</h1>
    </div>
  );
};

export default App;

```

### useLayoutEffect
> 在DOM节点更新之后, 视图渲染之前做的一些副作用. 可以防止屏闪, 批处理DOM操作, 减少reflow,repaint

> 官网建议: 先使用useEffect, 如果有问题替换成useLayoutEffect
```jsx
import React, { useEffect, useLayoutEffect, useState } from "react";

/*
 * react更新视图的逻辑
 * 1. 用户setState --> 更新视图
 * 2. DOM-DIFF --> 找到更新的差异
 * 3. 虚拟DOM同步到真实DOM上, commit阶段. js和渲染线程是互斥, 此时真实DOM在更新, 但是视图没有更新
 * 4. commit阶段临近尾声, 真实DOM更新完成, 视图没有变, 收尾工作: 比如调用useLayoutEffect
 * 5. 浏览器渲染线程开始工作, 根据最新真实DOM更新视图
 * 6. 视图更新完毕, 将执行权交回react, react执行一些js, 比如useEffect
 *
 * */
const App = () => {
  const [count, setCount] = useState(100);

  // 有屏闪现象
  // useEffect(() => {
  //   if (count === 10) {
  //     setCount(Math.random());
  //   }
  // }, [count]);

  // 无屏闪现象
  useLayoutEffect(() => {
    if (count === 10) {
      setCount(Math.random());
    }
  }, [count]);

  return (
    <div>
      <h1>当前的数字: {count}</h1>
      <button onClick={() => setCount(10)}>将数字置为0</button>
    </div>
  );
};

export default App;

```


### 自定义Hooks
> 练习自定义hook 



```jsx
// hook.ts
import {useState} from "react";

export const usePersistState = (key, initialState) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (e) {
      return storedValue // parse失败, 返回存储的值
    }
  })

  const setLocalStorage = (val) => {
    setValue(val)
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  return [value, setLocalStorage]
}

// 使用
const Main = () => {
  const [count, setCount] = usePersistState('count', 10)

  return (
    <div>
      我是父组件
      {count}
      <button onClick={() => setCount(count + 1)}>按钮</button>
      
    </div>
  )
}

```

### useId
#### 什么是SPA应用
> SPA: single page application 单页面应用, 指的是一个html文件, 依靠js切换页面

#### SPA应用的优缺点
> 1. 优点: 页面间不跳转, 无刷新,屏闪现象
> 2. 缺点: 
>   - 不利于SEO: search engine optimize 优化
>   - 首屏加载速度过慢

#### SPA缺点的原因和解决方案

**1. 不利于SEO**

搜索引擎网站排名的原理: 除了收费竞价排名外, 搜索引擎厂商服务器会爬取网站的index.html, 从中
提取有用的信息(比如说外部链接), 将其存储到数据库. 而单页面应用中真实DOM很少, 故而爬虫爬取的信息
很少, 所以搜索引擎排名较低


**2. 首屏加载速度慢**

因为SPA应用会将所有页面组件打包进bundle中, 第一次加载html时候会加载包含所有页面的代码, 
导致页面渲染速度很慢

解决方案: SSR server side render 服务端渲染

指的在服务端将html加载成字符串, 再传给客户端直接进行渲染, 这样少了一步解析js的时间, 同时提高了
SEO和首屏加载速度.

html字符串传给客户端需要再跑一遍,才能渲染, 因为html字符串中可能夹杂着一些js事件(比如点击事件), 
所以需要在客户端再跑一遍, 这个再跑一遍的过程称为hydration(水合)

**3. hydration中的问题**

由于服务器和客户端都需要跑代码, 那么假如有一行代码是关于生成唯一id的, 就会导致id的不一致, 此时
代码逻辑就有可能出错, useId就是为了生成服务端和客户端的id一致性的API


### useSelector&useDispatch
> useSelector: 获取state状态

> useDispatch: 使用dispatch
>

**useSelector的性能优化**

如下代码所示: 

子组件并没有使用count数据, 但是当count发生变化的时候, 子组件重新渲染了

原因:useSelector当state发生变化的时候, 会将上次回调的返回值和本次回调的返回值

做全等比较, 如果全等则不更新组件, 反之更新组件

解决方案: 
1. 回调返回普通数据类型: 不做处理
2. 回调返回复杂数据类型: 加上第二个参数ReactRedux.shallowEqual, 将对比规则改为浅比较

```jsx
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setCount, setMessage } from "./store/base";

const SubComponent = React.memo((props) => {
  // 写法1:
  // 当父组件更改count的时候, 子组件不重新渲染
  // const message = useSelector((state) => state.base.message);

  // 写法2:
  // 当父组件更改count的时候, 子组件重新渲染
  // const { message } = useSelector((state) => ({
  //   message: state.base.message,
  // }));

  // 写法2优化:
  // 当父组件更改count的时候 子组件不重新渲染
  const { message } = useSelector(
    (state) => ({
      message: state.base.message,
    }),
    shallowEqual
  );

  console.log("子组件渲染");
  return (
    <div>
      <h1>我是子组件</h1>
      <span>{message}</span>
    </div>
  );
});

const App = () => {
  const { num, message } = useSelector((state) => {
    return {
      num: state.base.count,
      message: state.base.message,
    };
  });

  const dispatch = useDispatch();

  const increment = () => dispatch(setCount(num + 1));
  const changeMessage = () => dispatch(setMessage("hello,world"));

  return (
    <div>
      <h1>当前的数字是: {num}</h1>
      <button onClick={increment}>数字++</button>

      <h1>当前消息是:{message}</h1>
      <button onClick={changeMessage}>更改消息</button>

      <SubComponent />
    </div>
  );
};

export default App;

```
