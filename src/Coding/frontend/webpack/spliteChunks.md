# 代码分割

## 代码分割的默认条件
> 什么样的条件会使一个模块进行代码分割?

1. 动态引入( import() )引入的模块会被检测是否需要代码分割
2. 这个动态引入的模块,包含的模块是 共享的模块 或者是来自于node_moudles的
3. 这个动态引入的模块包含的模块体积大于30kb
4. 这个动态引入的模块, 引入的模块数小于30
5. 当前页面并发请求数小于30


以下为 webpack官网原文

默认情况下，它只会影响到按需加载的 chunks，因为修改 initial chunks 会影响到项目的 HTML 文件中的脚本标签。

webpack 将根据以下条件自动拆分 chunks：

新的 chunk 可以被共享，或者模块来自于 node_modules 文件夹
新的 chunk 体积大于 20kb（在进行 min+gz 之前的体积）
当按需加载 chunks 时，并行请求的最大数量小于或等于 30
当加载初始化页面时，并发请求的最大数量小于或等于 30
当尝试满足最后两个条件时，最好使用较大的 chunks。


```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```



# 代码分割 (code spliting)

## 为什么要进行代码分割
单页面应用的缺点是什么呢?
因为打包后的js文件过大, 导致首屏加载速度慢, 白屏

我们就是要分割js代码, 不一下加载所有的js文件, 从而让首屏加载速度变快
除了代码分割, cdn引入也可以让首屏加载速度变快

## 什么是代码分割?
通过webpack, 就是让打包以后的js文件, 变成一个个的chunk

## webpack的配置-- 代码分割

### splitChunks的默认配置
> 所有的import() 动态导入都会被分成chunk
```js
module.exports = {
  //...
   webpackConfig.optimization.splitChunks = {
        // chunks:'async' // 对异步模块优化
        chunks: 'initial', // 对同步模块优化
        minChunks: 1, // 规定最小引用数量
        minSize: 20 * 1024, // byte, 最小多大才分chunk
        cacheGroups: { // 缓存组
          defaultVendors: {
            name: 'defaultVendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10, // 优先级
            reuseExistingChunk: true, // 是否重复使用,
          },
          default: {
            name: 'default',
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        }
      }
}
```

chunks:
  1. async 
    - 只对异步模块进行优化. 即import()的模块再进行分析, 判断是否需要再拆分

  2. initial
    - 只对初始模块进行优化, 入口模块所有的文件都会进行分析