---
icon: edit
category:
  - Vue2
tag:
  - vuex
---

# Vuex语法

`vuex 的使用`
vuex 语法

<!-- more -->

## 0. 创建项目 vuex 项目

- vue create vuex-demo

## 1. 清理项目

- 从上到下清除 demo 项目, 注意将 store 目录也删除掉

## 2. 编写 vuex 配置

1. 引入 Vuex
2. Vue.use(Vuex) 开启 vuex 的功能
3. 创建真正的 store, new Vuex.Store()
4. 将 store 配置到 Vue 中 , 在每个组件内都可以通过$store 获取

```js
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store(/* 配置对象 */);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```

## 3. 将 vuex 的配置抽离到 store 目录中

> new Vuex.Store(配置项), 创建 store 时需要配置 vuex, 随着配置项越来越多势必
> main.js 越来越臃肿, 所以需要将 vuex 中的配置抽离出去

1. 新建: src/store/index.js
2. 将 main.js 中有关 vuex 的配置项移到 src/store/index.js

```js
// store/index.js中
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store(/* 配置对象 */); // 暴露store
```

```js
// main.js中
import Vue from "vue";
import store from "@/store"; // 引入store
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  store, //配置store
  render: (h) => h(App),
}).$mount("#app");
```

## 4. 创建 demo 组件

> 创建两个子组件, 用于学习 vuex 的语法

1. 新建 src/components/CompOne
2. 新建 src/components/CompTwo
3. 在 App.vue 引入,注册,使用两个子组件

```vue
App.vue中的代码

<template>
  <div>
    <comp-one></comp-one>
    <comp-two></comp-two>
  </div>
</template>

<script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";

export default {
  components: {
    CompOne,
    CompTwo,
  },
};
</script>
```

## 5. vuex 配置项 1 - state

> state 用于存储组件共享的状态, 状态指的就是数据

### 5.1 state 的定义

```js
const state = {
  num: 0,
};
export default new Vuex.Store({
  // state: { num: 0 }, // 随着数据越来越多, 导致vuex越来越臃肿, 所以抽离到外部
  state,
});
```

### 5.2 在组件中使用 state

1. 模板中直接使用
2. 利用 computed 映射 state

==CompOne 组件==

```vue
<template>
  <div>
    <h1>子组件一</h1>
    {{ $store.state.num }}
  </div>
</template>
```

==CompTwo 组件==

```vue
<template>
  <div>
    <h1>子组件二</h1>
    {{ num }}
  </div>
</template>

<script>
export default {
  computed: {
    // 利用计算属性映射vuex的数据, 如果数据很多, 要写一堆computed
    num() {
      return this.$store.state.num;
    },
  },
};
```

### 5.3 MapState

> 1. 作用: 将 vuex 中的 state 直接映射为计算属性
> 2. 本质: MapState 本质是函数, 返回值为对象

==初识 mapState==

```vue
<template>
  <div>
    <h1>子组件二</h1>
    {{ num }}
  </div>
</template>

<script>
import { mapState } from "vuex";

console.log(mapState); // 函数
console.log(mapState()); // 返回值是对象
console.log(mapState(["num"])); // { num:fn }

export default {};
</script>
```

==mapState 的使用==

> mapState 有数组形式, 对象形式, 对象+函数形式 三种用法.
> 其中 数组形式 和 对象+函数形式 比较常用

src/components/CompTwo 中

```vue
<template>
  <div>
    <h1>子组件二</h1>
    {{ newNum }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    // 1. 数组形式: [state名字1,state名字2,...]
    // ...mapState(['num']),

    // 2. 对象形式: { 新名字:'老名字' }
    // ...mapState({
    //   newNum: 'num',
    // }),

    // 3. 对象的函数形式
    // {  新名字:(state)=> state的数据  }
    ...mapState({
      newNum: (state) => state.num,
    }),
  },
};
```

## 6. vuex 配置项 2 - mutations

> vuex 的数据必须在 vuex 中修改, 需要在 mutations 中声明函数修改

步骤:

1. 声明修改 state 的 mutations 函数
2. 调用 matations 函数

==声明修改 state 的 mutations 函数==

src/store/index.js 中

```js
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const state = {
  num: 0,
};

const mutations = {
  /* eslint-disable-next-line */
  SET_NUM(state, payload) {
    // state: 原始state数据, payload:调用这个函数时候的传递参数
    state.num += payload;
  },
};
export default new Vuex.Store({
  state,
  mutations,
  // mutations: {}, // 避免臃肿, 将mutations抽离到外面
});
```

==调用 matations 函数==

```vue
<template>
  <div>
    <comp-one></comp-one>
    <comp-two></comp-two>
    <!-- 绑定点击事件 -->
    <button @click="increment">数字+</button>
  </div>
</template>

<script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";

export default {
  components: {
    CompOne,
    CompTwo,
  },
  methods: {
    // 通过this.$store.commit触发mutations函数, 并传递参数
    increment() {
      this.$store.commit("SET_NUM", 2);
    },
  },
};
</script>

<style></style>
```

==mapMutations==
mapMutations 的数组形式和对象形式

```vue
<template>
  <div>
    <comp-one></comp-one>
    <comp-two></comp-two>
    <!-- 数组形式 -->
    <!-- <button @click="SET_NUM(2)">数字+</button> -->

    <!-- 对象形式 -->
    <button @click="increment(2)">数字+</button>
  </div>
</template>

<script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    CompOne,
    CompTwo,
  },
  methods: {
    // 1. mapMutations的数组形式
    /*
    // 映射为
      {
        SET_NUM(payload){
          this.$store.commit('SET_NUM',payload)
        }
      }
    */
    // ...mapMutations(['SET_NUM']),

    // 2. mapMutations的对象形式
    ...mapMutations({
      increment: "SET_NUM",
    }),
  },
};
</script>

<style></style>
```

## 7. vuex 配置项 3 - actions

> 需求: 在 1s 后修改 num 怎么做?

mutations 里修改数据必须是同步的, 异步操作要在 actions 做

==store/index.js==

```js
const actions = {
  // context是一个mini的store对象, store有的它都有, 比如 state,commit...
  asyncSetNum(context, payload) {
    setTimeout(() => {
      context.commit("SET_NUM", payload);
    }, 1000);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // mutations: {}, // 避免臃肿, 将mutations抽离到外面
});
```

==App.vue==

```vue
<template>
  <div>
    <comp-one></comp-one>
    <comp-two></comp-two>

    <button @click="asyncIncrement(2)">数字+</button>
  </div>
</template>

<script>
import CompOne from '@/components/CompOne.vue';
import CompTwo from '@/components/CompTwo.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    CompOne,
    CompTwo,
  },
  methods: {
    // 1. 通过 this.$store.dispatch('asyncSetNum', 2)调用
    // asyncIncrement() {
    //   this.$store.dispatch('asyncSetNum', 2);
    // },

    // 2. 数组形式
    // ...mapActions(['asyncSetNum']),

    // 3. 对象形式
    // { 新名字:老action名字 }
    ...mapActions({
      asyncIncrement: 'asyncSetNum',
    }),
  },
};
</script>

<style></style>

</script>
```

## 8. vuex 配置项 4 - getters

> 新增一个数据, 这个数据永远是 num 的 10 倍怎么做, 在 vue 里可以用 computed 在 vuex 中可以用 getters

==src/store/index.js==

```js
const getters = {
  // state: 接受state数据, getters: 接受其他的getter数据
  bigNum(state, getters) {
    return state.num * 10;
  },
};
```

==App.vue==

1. getters 的调用可以通过$store.getters.名字. 也可以通过 mapGetters
2. mapGetters 有数组形式和对象形式两种

```vue
<template>
  <div>
    <comp-one></comp-one>
    <comp-two></comp-two>
    <!-- getters在模板调用 -->
    <!-- <h1>十倍数字: {{ $store.getters.bigNum }}</h1> -->

    <!-- getters通过mapGetters映射 -->
    <h1>十倍数字: {{ bigNum }}</h1>
    <button @click="asyncIncrement(2)">数字+</button>
  </div>
</template>

<script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CompOne,
    CompTwo,
  },
  computed: {
    // 1.数组形式
    // ...mapGetters(['bigNum']),

    // 2. 对象形式: 用于重命名
    ...mapGetters({
      bigNum: "bigNum",
    }),
  },
  methods: {
    ...mapActions({
      asyncIncrement: "asyncSetNum",
    }),
  },
};
</script>

<style></style>
```

## 9. vuex 模块化

> 如果整个系统的状态都堆积在 src/store/index.js, 势必会导致该文件臃肿

> 所以 vuex 提供了模块化的功能, 让我们可以为每一个组件或者 js 模块拥有自己的 store

> 比如我想让 CompOne 组件和 CompTwo 组件拥有自己的 vuex 仓库, 怎么做?

```js
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    // modules: { 模块名: 模块的配置对象 }
    // 每一个模块的配置对象中都可以再配 actions,mutations,getters,state
    compTwo: {},
    compOne: {},
  },
});
```

### 9.1 将 vuex 的模块抽离为单独的文件

> 如果我们在上面的 moudles 选项中直接写各个模块的 state,actions.., 还是会将 src/store/index.js 撑爆炸

> 所以我们将每个模块抽成单独的文件, 再组装到 store/index.js 中

==store 文件目录==
store
|-- index.js
|-- modules
-- |-- compOne.js  
-- |-- compTwo.js

==compOne.js 和 compTwo.js 文件内容==

```js
const state = {};
const getters = {};
const mutations = {};
const actions = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
```

==store/index.js==

```js
import compOne from "./modules/compOne";
import compTwo from "./modules/compTwo";

export default new Vuex.Store({
  modules: {
    // modules: { 模块名: 模块的配置对象 }
    // 每一个模块的配置对象中都可以再配 actions,mutations,getters,state
    compOne,
    compTwo,
  },
});
```

### 9.2 定义模块 compOne 的数据

> 1. 将 App.vue 和 store/index.js 中涉及到全局 store 的 state,mutations,getters,actions 删除
> 2. 编写 store/modules/compOne.js 文件
> 3. 模块化必须开启 namespaced, 否则不生效

==compOne.js==

```js
const state = {
  person: {
    name: "张三",
  },
};
const getters = {
  name(state) {
    return state.person.name;
  },
};
const mutations = {
  SET_NAME(state, payload) {
    state.name = payload;
  },
};
const actions = {
  asyncSetName({ commit }, payload) {
    setTimeout(() => {
      commit("SET_NAME", payload);
    }, 1000);
  },
};

export default {
  namespaced: true, // 模块化必须开启namespaced, 否则不生效
  state,
  mutations,
  actions,
  getters,
};
```

### 9.3 利用$store 操作状态

> 利用$store 操作 compOne 模块 的状态

> 1. 读取 state: $store.state.模块名.数据
> 2. 读取 getters: $store.getters['模块/数据']
> 3. 调用 mutation: $store.commit('模块/mutation',payload)
> 4. 调用 action : $store.dispatch('模块/mutation',payload)

==src/components/CompOne 组件==

```vue
<template>
  <div>
    <h1>子组件一</h1>

    <h4>模块化state: {{ $store.state.compOne.person.name }}</h4>
    <h4>模块化getters: {{ $store.getters["compOne/name"] }}</h4>
    <button @click="setName">修改姓名</button>
    <button @click="asyncSetName">一秒后修改名字</button>
  </div>
</template>

<script>
export default {
  methods: {
    setName() {
      // 调用模块化的mutation
      this.$store.commit("compOne/SET_NAME", "李四");
    },
    asyncSetName() {
      // 调用模块化的actions
      this.$store.dispatch("compOne/asyncSetName", "小明");
    },
  },
};
</script>
```

### 9.4 利用 mapXXXX 操作状态

> 利用 mapXXX 操作 compTwo 的状态

**定义 compTwo 模块 的状态(直接 cv)**

```js
const state = {
  person: {
    name: "李四",
  },
};
const getters = {
  name(state) {
    return state.person.name;
  },
};
const mutations = {
  SET_NAME(state, payload) {
    state.person.name = payload;
  },
};
const actions = {
  asyncSetName({ commit }, payload) {
    setTimeout(() => {
      commit("SET_NAME", payload);
    }, 1000);
  },
};

export default {
  namespaced: true, // 必须开启namespaced才能具有模块化的能力
  state,
  mutations,
  actions,
  getters,
};
```

**操作模块的状态**
==语法 : mapXXXX('模块名',数组或者对象)==

```vue
<template>
  <div>
    <h1>子组件二</h1>

    <h3>模块化的state:{{ person.name }}</h3>
    <h3>模块化的getters:{{ name }}</h3>
    <button @click="SET_NAME('王五')">修改姓名</button>
    <button @click="asyncSetName('王五')">一秒后修改姓名</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("compTwo", ["person"]),
    ...mapGetters("compTwo", ["name"]),
  },
  methods: {
    ...mapMutations("compTwo", ["SET_NAME"]),
    ...mapActions("compTwo", ["asyncSetName"]),
  },
};
</script>

<style></style>
```

### 9.5 利用 createNamespacedHelpers 简化 mapXXXX 操作

> 1. 每一个 mapXXXX 都要写模块名, 能不能封装简化下操作?

> 2. createNamespacedHelpers 是一个函数, 传入一个模块名, 导出一个绑定了模块的 新的 mapXXX 对象

==compTwo 组件==

```js
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers("compTwo");
export default {
  computed: {
    ...mapState(["person"]),
    ...mapGetters(["name"]),
  },
  methods: {
    ...mapMutations(["SET_NAME"]),
    ...mapActions(["asyncSetName"]),
  },
};
```

## 10. vuex 数据持久化

> 1. vuex 数据的缺点, 刷新后会丢失改动的数据. 我们经常有一些需求, 比如登录后存储 token, 刷新后不希望让 token 丢失. 比如搜索历史, 刷新后也不希望丢失. 所以需要解决数据持久化的问题

> 2. vuex-persistedstate 一个持久化 vuex state 的 vuex 插件

文档地址: [vuex-persistedstate 插件](https://www.npmjs.com/package/vuex-persistedstate/v/3.2.1)

使用:

1. 下载包 npm install vuex-persistedstate@3.2.1 (需要指定版本, 该插件最新版本是适配 vuex4+vue3 的)
2. 在 src/store/index.js 中配置

核心流程:

- import createPersistedState from 'vuex-persistedstate'
- createPersistedState(配置对象)
- 配置对象 { paths:['模块.state'] }

```js
/* eslint-disable */
import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate"; //引入持久化函数
import compOne from "./modules/compOne";
import compTwo from "./modules/compTwo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    compOne,
    compTwo,
  },
  plugins: [
    // 传入配置对象
    // paths是一个数组, 需要缓存的state填在里面, 格式为 模块.state数据
    createPersistedState({
      paths: ["compTwo.person"],
    }),
  ],
});
```
