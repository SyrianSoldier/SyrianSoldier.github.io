---
icon: edit
category:
  - js
tag:
  - promise
---
# 手写Promise源码

### 1. executor执行器函数

> 1. new Promise()时候传入的函数称之为Promise的执行器
> 2. executor是同步执行的

**测试代码**

```js
new Promise(() => { })
```

**实现代码**

```js
class Promise {
  constructor(executor) {
    executor()
  }
}
```

### 2.resolve和reject函数

**测试代码**

```js
new Promise((resolve, reject) => {
  resolve()
  reject()
})
```

**实现代码**

```js
class Promise {
  constructor(executor) {
    const resolve = () => { }
    const reject = () => { }

    executor(resolve, reject)
  }
}
```

### 3.记录resolve和reject的结果

> 用reason记录失败的结果
>
> 用value记录成功的结果

**测试代码**

```js
const p = new Promise((resolve, reject) => {
  // resolve('成功')
  reject('失败')
})
console.log(p)// 打印p可见, promise记录了成功或者失败的结果
```

**实现代码**

```js
  class Promise {
      value = null
      reason = null

      constructor(executor) {
        const resolve = (value) => {
          this.value = value
        }
        const reject = (reason) => {
          this.reason = reason
        }

        executor(resolve, reject)
      }
    }
```

### 4. promise的三种状态

> 初始的promise为pending态, resolve后promise转为fullfilled态, reject后转为rejected态

**测试代码**

```js
   const p1 = new Promise(() => { }) //Pending
   const p2 = new Promise((resolve) => resolve()) // fulfilled
   const p3 = new Promise((resolve, reject) => reject()) // rejected
   
   console.log(
     'p1', p1,
     'p2', p2,
     'p3', p3
   )
```

**实现代码**

```js{1-3,8,12,16}
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

    class Promise {
      value = null
      reason = null
      status = PENDING

      constructor(executor) {
        const resolve = (value) => {
          this.status = FULFILLED
          this.value = value
        }
        const reject = (reason) => {
          this.status = REJECTED
          this.reason = reason
        }

        executor(resolve, reject)
      }
    }
```

### 5. Promise的状态只能从pending到fulfilled或者rejected

**测试代码**
```js
 const p = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败') // 依然是成功
  })
  console.log(p)
```

**实现代码**
```js{12-14,18-20}
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

class Promise {
  value = null
  reason = null
  status = PENDING

  constructor(executor) {
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }

    }

    executor(resolve, reject)
  }
}
```

### 6. executor执行过程中出错会导致promise状态变为rejected

**测试代码**
```js
   const p = new Promise((resolve, reject) => {
    console.log(a.a) // 打印了不存在的变量, 会导致报错
  })

  console.log(p)
```

**实现代码**
```js{24-28}
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

class Promise {
  value = null
  reason = null
  status = PENDING

  constructor(executor) {
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
}
```

### 7.then方法的两个回调函数
> 能在then成功的回调中拿到promise成功的结果, 能在then失败的回调中拿到prpomise失败的结果

**测试代码**
```js
const p = new Promise((resolve, reject) => {
  // resolve('成功')
  reject('失败')
})

p.then(
  (res) => console.log(res),
  (err) => console.log(err)
)
```

**实现代码**
```js{15-17,19-21}
  const PENDING = 'pending'
  const REJECTED = 'rejected'
  const FULFILLED = 'fulfilled'

  class Promise {
    value = null
    reason = null
    status = PENDING

    constructor(executor) {
      // 省略...
    }

    then(onFulfilled, onRejected) {
      if (this.status === FULFILLED) {
        onFulfilled(this.value)
      }

      if (this.status === REJECTED) {
        onRejected(this.reason)
      }
    }
  }
```


### 8.promise异步的情况
> 发布订阅模式的实现: 先将回调函数缓存下来(订阅),再在合适的时机调用(发布)
> **测试代码**
```js
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('成功')
      reject('失败')
    }, 1000)
  })

  p.then(
    (res) => console.log(res),
    (err) => console.log(err),
  )
```

**实现代码**
```js{9-10,17,24,44-47}
  const PENDING = 'pending'
  const REJECTED = 'rejected'
  const FULFILLED = 'fulfilled'

  class Promise {
    value = null
    reason = null
    status = PENDING
    onFulfilled = null
    onRejected = null

    constructor(executor) {
      const resolve = (value) => {
        if (this.status === PENDING) {
          this.status = FULFILLED
          this.value = value
          this.onFulfilled(this.value) //发布
        }
      }
      const reject = (reason) => {
        if (this.status === PENDING) {
          this.status = REJECTED
          this.reason = reason
          this.onRejected(this.reason) // 发布
        }
      }

      try {
        executor(resolve, reject)
      } catch (error) {
        reject(error)
      }
    }

    then(onFulfilled, onRejected) {
      if (this.status === FULFILLED) {
        onFulfilled(this.value)
      }

      if (this.status === REJECTED) {
        onRejected(this.reason)
      }

      if (this.status = PENDING) {
        this.onFulfilled = onFulfilled //订阅, 先存下来, 发不发布另说
        this.onRejected = onRejected // 订阅, 先存下来, 发不发布另说
      }
    }
  }
```

### 9.一个promise多次调用then方法(非链式调用)
> 同步情况下, 每次then方法都会直接触发成功或失败的回调

> 异步情况下, 需要将每次then的回调保存在数组(队列)中, 在resolve或reject时候触发

**测试代码**
```js
  const p = new Promise((resolve, reject) => {
    // resolve('成功') // 同步情况

    setTimeout(() => {
      resolve('成功') // 异步情况
    }, 1000)
  })

  p.then(
    (res) => console.log('第一次then', res),
  )

  p.then(
    (res) => console.log('第二次then', res),
  )
```

**实现代码**
```js{9,10,17,25,46-50,50-56}
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

class Promise {
  value = null
  reason = null
  status = PENDING
  onFulfilledCallBacks = []
  onRejectedCallBacks = []

  constructor(executor) {
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallBacks.forEach(cb => cb())
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallBacks.forEach(cb => cb())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    if (this.status = PENDING) {
      this.onFulfilledCallBacks.push(
        () => {
          onFulfilled(this.value)
        }
      )
      this.onRejectedCallBacks.push(
        () => {
          onRejected(this.reason)
        }
      )
    }
  }
}
```

### 10.promise的then方法的链式调用

**测试代码**

```js
  const p = new Promise((resolve, reject) => {
    resolve('成功')
  })

  p.then(
    () => { }
  ).then(
    () => { }
  )
```

**实现代码**
```js{17,38-40}
    const PENDING = 'pending'
    const REJECTED = 'rejected'
    const FULFILLED = 'fulfilled'

    class Promise {
      value = null
      reason = null
      status = PENDING
      onFulfilledCallBacks = []
      onRejectedCallBacks = []

      constructor(executor) {
        // 省略...
      }

      then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
          if (this.status === FULFILLED) {
            onFulfilled(this.value)
          }

          if (this.status === REJECTED) {
            onRejected(this.reason)
          }

          if (this.status = PENDING) {
            this.onFulfilledCallBacks.push(
              () => {
                onFulfilled(this.value)
              }
            )
            this.onRejectedCallBacks.push(
              () => {
                onRejected(this.reason)
              }
            )
          }
        })

        return promise2
      }
    }
```

### 11.onFulfilled和onRejected, return的值的情况
> 1. 当then回调中出错了, 能在下一次的失败的回调接收
> 2. 当return的为非thenable对象时, return的值都能在下一次then的成功的回调中接收
> 3. return的是thenable对象, resolve可以触发下个then的成功回调, reject可以触发下个then的失败的回调

**测试代码1**
```js
// 当then回调中出错了, 能在下一次的失败的回调接收
const p = new Promise(()=>{
    resolve()
})

const p2 = p.then(()=>{
    console.log(a)
})

p2.then(
    (res)=>console.log(res),
    (err)=>console.log(err)
)
```

**测试代码2**
```js
//当return的为非thenable对象时, return的值都能在下一次then的onFulfilled中接受
 const p = new Promise((resolve, reject) => {
    // resolve()
    reject()
  })

 // 只要return的是非thenable对象, 一律在下个then的"!成功的回调!"接收
  p.then(
    () => { return '成功' },
    () => { return '失败' }
  ).then(
    (res) => console.log('第二次的成功回调', res),
    (error) => console.log('第二次的失败回调', error)
  )
```

**测试代码3**
```js
// return的是thenable对象, resolve可以触发下个then的成功回调, reject可以触发下个then的失败的回调
 const p = new Promise((resolve, reject) => {
    resolve()
 })



  p.then(
    () => {
      // return new Promise((resolve) => resolve('成功'))
      return new Promise((resolve, reject) => reject('失败'))
    }
  ).then(
    (res) => console.log('第二次then的成功回调', res),
    (error) => console.log('第二次then的失败回调', error)
  )

```



### 12.处理then中出错的情况
```js{21-25,31-35,43-47,54-58}
    const PENDING = 'pending'
    const REJECTED = 'rejected'
    const FULFILLED = 'fulfilled'

    class Promise {
      value = null
      reason = null
      status = PENDING
      onFulfilledCallBacks = []
      onRejectedCallBacks = []

      constructor(executor) {
       // 省略...
      }
      then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {

          if (this.status === FULFILLED) {
            queueMicrotask(() => {
              try {
                onFulfilled(this.value)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status === REJECTED) {
            queueMicrotask(() => {
              try {
                onRejected(this.reason)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status = PENDING) {
            this.onFulfilledCallBacks.push(
              () => {
                queueMicrotask(() => {
                  try {
                    onFulfilled(this.value)
                  } catch (error) {
                    reject(error)
                  }
                })
              }
            )
            this.onRejectedCallBacks.push(
              () => {
                queueMicrotask(() => {
                  try {
                    onRejected(this.reason)
                  } catch (error) {
                    reject(error)
                  }
                })
              }
            )
          }
        })

        return promise2
      }
    }
```

### 13.resolvePromise 

#### 13-1 reolvePromise函数
> resolvePromise方法是根据then方法回调函数返回的值, 确定promise2状态的函数
```js
    const PENDING = 'pending'
    const REJECTED = 'rejected'
    const FULFILLED = 'fulfilled'

    class Promise {
      value = null
      reason = null
      status = PENDING
      onFulfilledCallBacks = []
      onRejectedCallBacks = []

      constructor(executor) {
        // 省略...
      }

      then(onFulfilled, onRejected) {
        const promise2 = new Promise((resolve, reject) => {
          let x
          if (this.status === FULFILLED) {
            queueMicrotask(() => {
              try {
                x = onFulfilled(this.value)
                resolvePromise(promise2, x, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status === REJECTED) {
            queueMicrotask(() => {
              try {
                x = onRejected(this.reason)
                resolvePromise(promise2, x, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status = PENDING) {
            this.onFulfilledCallBacks.push(
              () => {
                queueMicrotask(() => {
                  try {
                    x = onFulfilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                  } catch (error) {
                    reject(error)
                  }
                })
              }
            )
            this.onRejectedCallBacks.push(
              () => {
                queueMicrotask(() => {
                  try {
                    x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                  } catch (error) {
                    reject(error)
                  }
                })
              }
            )
          }
        })

        return promise2
      }
    }

    function resolvePromise(promise2, x, resolve, reject) {

    }
```

#### 13-2 如果promise2和x是同一个promise是相同的, 抛出异常
**测试代码**
```js
 const p = new Promise((resolve) => {
    resolve()
  })

  const p2 = p.then(() => {
    return p2
  })

  p2.then(
    () => { },
    (error) => console.log(error)
  )
```

**实现代码**
```js
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
     return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
  }
  }
```

#### 13-2 如果x不是promise(普通值), 将再下一个then成功回调中接收
```js
  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
    }

    if (/*x是promise*/) {
      // x是promise
    } else {
      resolve(x)
    }
  }
```
#### 13-3 如果x是promise的判断条件
**测试代码**
```js
// thenable对象, 函数形式
  function fn() { }
  fn.then = function (resolve) {
    resolve('你好')
  }

 const p = new Promise((resolve) => {
      resolve()
  })

  
  const p2 = p.then(() => {
    return fn
  })

  p2.then(
    (res) => console.log(res), //你好
  )
```

**测试代码**
```js
    const p = new Promise((resolve) => {
      resolve()
    })

    const p2 = p.then(() => {
      return { then(resolve){
        resolve('你好')
      } }
    })

    p2.then(
      (res) => console.log(res), // 你好
    )
```

**实现代码**
```js{6}
 function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
    }

    if (typeof x === 'object' && x !== null || typeof x === 'function') {
      // x是promise
    } else {
      resolve(x)
    }
  }
```

#### 13-4 获取then函数
> x.then需要捕获异常, 因为可能出错(如Object.defineProperty定义属性时)
```js{8-12}
  function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
    }

    if (typeof x === 'object' && x !== null || typeof x === 'function') {
      // x是promise
      try {
        let then = x.then
      } catch(error) {
        reject(error)
      }
    } else {
      resolve(x)
    }
  }
```
**x.then出错的情况**
```js
const x = {}

Object.defineProperty(x,'then',{
    get(){
        console.log(a) // 模拟出错
    }
})

x.then() // 报错
```


#### 13-5 判断then是否为函数
> 如果then不是函数, 直接在下一次then的成功的回调中接收该值

**测试代码**
```js
const p = new Promise((resolve) => {
  resolve()
})


  const p2 = p.then(() => {
    return { then: '你好' }
  })

  p2.then(
    (res) => console.log(res) // { then: '你好' }
  )
```

**实现代码**
```js{9-13}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
    }

    if (typeof x === 'object' && x !== null || typeof x === 'function') {
      try {
        let then = x.then
        if (typeof then === 'function') {
          // todo...
        } else {
          resolve(x)
        }
      } catch (error) {
        reject(error)
      }
    } else {
      resolve(x)
    }
  }
```

#### 13-6 then函数的调用, 确定promise2的状态
> return的promise的状态和promise2的状态保持一致
> **测试代码**
```js
  const p = new Promise((resolve) => {
    resolve()
  })


  const p2 = p.then(() => {
    return new Promise((resolve, reject) => reject('失败'))
  })

  p2.then(
    (res) => console.log(res),
    (error) => console.log(error)
  )
```

**实现代码**
```js{11-15}
    function resolvePromise(promise2, x, resolve, reject) {
      if (promise2 === x) {
        return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
      }

      if (typeof x === 'object' && x !== null || typeof x === 'function') {
        // x是promise
        try {
          let then = x.then
          if (typeof then === 'function') {
            then.call(
              x,
              (res) => resolve(res),
              (error) => reject(error)
            )
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
        }
      } else {
        resolve(x)
      }
    }
```


#### 13-7: 递归调用resolvePromise

**测试代码**
```js
  const p = new Promise((resolve) => {
    resolve()
  })


  const p2 = p.then(() => {
    return new Promise((resolve, reject) => resolve(
      new Promise((resolve) => resolve('成功'))
    ))
  })

  p2.then(
    (res) => console.log(res) // 成功
  )
```

**实现代码**
```js{13}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError(' Chaining cycle detected for promise #<Promise>'))
    }

    if (typeof x === 'object' && x !== null || typeof x === 'function') {
      // x是promise
      try {
        let then = x.then
        if (typeof then === 'function') {
          then.call(
            x,
            (res) => resolvePromise(promise2, res, resolve, reject),
            (error) => reject(error)
          )
        } else {
          resolve(x)
        }
      } catch (error) {
        reject(error)
      }
    } else {
      resolve(x)
    }
  }
```

#### 13-8: then方法不传onFulfilled或者onRejected应该被屏蔽
**测试代码**
```js
 const p = new Promise((resolve) => {
    resolve('成功')
  })

  p.then().then(
    (res) => console.log(res),
    (error) => console.log(error)
  )
```

**实现代码**
```js{}
then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }

    // 省略...
  }
    
```
### Promise的静态方法

#### Promise.resolve
> Promise.resolve('成功') 等价于 new Promise(resolve => resolve())

**测试代码**
```js
const p = Promise.resolve('成功')
p.then(res => console.log(res))


// 当resolve的值为promise的情况
const p = Promise.resolve(new Promise(resolve => resolve('成功')))
p.then(res => console.log(res))
```

**实现代码**
```js
static resolve(value){
    return new Promise((resolve,reject) => resolve(value))
}

const resolve = (value) => {
    if (this.status === PENDING) {
        if(value instanceof  Promise){
            value.then(res => resolve(res))
            return
        }
        this.value = value
        this.status = FUFILLED
        this.onFulfilledCallBacks.forEach(cb => cb())
    }
}
```

#### Promise.reject
**测试代码**

```js
Promise.reject('失败').then(
    ()=>{},
    (err)=>console.log(err)
)

// reject没有穿透promise的能力
Promise.reject(new Promise((resolve, reject)=> reject('失败'))).then(
    ()=>{},
    (err)=>console.log(err)
)
```

**实现代码**

```js
static reject(reason){
    return new Promise((resolve,reject) => reject(reason))
}
```

#### Promise.all

> 等一堆promise操作(resolve/reject)的方法

> 入参: 一个可迭代的promise集合(常用数组)

> 返回值: promise实例

> 说明: 当所有promise成功时候, then方法接收成功每个promise成功的原因, 当有一个promise失败的时候, 接受失败的原因

**测试代码**
```js
const promises = [
    new Promise(resolve => setTimeout(() => resolve('p1'),3000)),
    new Promise(resolve => setTimeout(() => resolve('p2'),1000)),
    new Promise(resolve => setTimeout(() => resolve('p3'),2000))
]

// 等到所有promise的状态变更后才拿到最后的结果, 并且结果的顺序和promises数组的顺序是一致的
Promise.all(promises).then(res => console.log(res)) //['p1', 'p2', 'p3']


const promises = [
    new Promise(resolve => setTimeout(() => resolve('p1'),3000)),
    new Promise((resolve,reject) => setTimeout(() => reject('p2失败了'),1000)),
    new Promise(resolve => setTimeout(() => resolve('p3'),2000))
]

// 一个失败就会导致promise.all返回的promise失败
Promise.all(promises).then(
    ()=>{},
    (error)=> console.log({error})
) 
```

**实现代码**
```js
   static all(promises){
          // all的返回值是promise
         return new Promise((resolve,reject)=>{
             let results = [] //存储每个promise resolve的结果
             let count = 0 // 记录resolve到第几个promise了
             for (let i = 0; i < promises.length; i++) {
                 const p = promises[i]
                 p.then(
                     (res)=>{
                         // res.push(res) // 不能直接push, 因为返回的promise结果是要保证顺序的
                         results[i] = res
                         count++
                         // 判断是否结束
                         if(count === promises.length){
                             console.log(1)
                             resolve(results)
                         }
                     },
                     reject
                 )
             }
         })
      }
    }
```

#### Promise.allSettled

> 与all类似,等待所有promise执行完成后返回, 只不过不会失败

```js
const promises = [
    new Promise(resolve => setTimeout(() => resolve('p1'),3000)),
    new Promise((resolve,reject) => setTimeout(() => reject('p2失败了'),1000)),
    new Promise(resolve => setTimeout(() => resolve('p3'),2000))
]

Promise.allSettled(promises).then(
    res => console.log({res}), 
    (error)=>console.log({error})
)
```

#### Promise.race

> 返回最快的那个promise的状态(失败或成功)

```js
const promises = [
    new Promise(resolve => setTimeout(() => resolve('p1'),1000)),
    new Promise((resolve,reject) => setTimeout(() => reject('p2失败了'),2000)),
    new Promise(resolve => setTimeout(() => resolve('p3'),2000))
]

Promise.race(promises).then(
    res => console.log({res}),
    (error)=>console.log({error})
)
```


### Promise 完整代码

```js
 const PENDING = 'pending'
    const FUFILLED = 'fulfilled'
    const REJECTED = 'rejected'
    class Promise {
      value
      reason
      status = PENDING
      onFulfilledCallBacks = []
      onRejectedCallBacks = []

      constructor(executor) {
        const resolve = (value) => {
          if (this.status === PENDING) {
            if (value instanceof Promise) {
              value.then(
                (res) => resolve(res)
              )
              return
            }
            this.value = value
            this.status = FUFILLED
            this.onFulfilledCallBacks.forEach(cb => cb())
          }
        }
        const reject = (reason) => {
          if (this.status === PENDING) {
            this.reason = reason
            this.status = REJECTED
            this.onRejectedCallBacks.forEach(cb => cb())
          }
        }

        try {
          executor(resolve, reject)
        } catch (error) {
          reject(error)
        }
      }

      then(onFulfilled, onRejected) {
        const p2 = new Promise((resolve, reject) => {
          if (this.status === FUFILLED) {
            queueMicrotask(() => {
              try {
                const x = onFulfilled(this.value)
                resolvePromise(x, p2, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status === REJECTED) {
            queueMicrotask(() => {
              try {
                const x = onRejected(this.reason)
                resolvePromise(x, p2, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          }

          if (this.status === PENDING) {
            // 异步
            // 订阅
            // this.onFulfilled = onFulfilled
            // this.onRejected = onRejected
            this.onFulfilledCallBacks.push(() => {
              queueMicrotask(() => {
                // 多写逻辑
                try {
                  const x = onFulfilled(this.value)
                  resolvePromise(x, p2, resolve, reject)
                } catch (error) {
                  reject(error)
                }
              })
            })

            this.onRejectedCallBacks.push(() => {
              queueMicrotask(() => {
                try {
                  const x = onRejected(this.reason)
                  resolvePromise(x, p2, resolve, reject)
                } catch (error) {
                  reject(error)
                }
              })
            })
          }
        })
        return p2
      }

      static resolve(value) {
        return new Promise((resolve) => resolve(value))
      }

      static reject(reason) {
        return new Promise((resolve, reject) => reject(reason))
      }

      static all(promises) {
        return new Promise((resolve, reject) => {
          let arr = []
          let count = 0 // 记录已经resolve了几个promise
          for (let i = 0; i < promises.length; i++) {
            const promise = promises[i]

            promise.then(
              (res) => {
                arr[i] = res
                count++
                if (count === promises.length) {
                  resolve(arr)
                }
              },
              (error) => {
                reject(error)
              }
            )
          }
        })
      }
    }

```