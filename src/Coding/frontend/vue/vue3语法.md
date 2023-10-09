# 一: setUp 函数

1. setUp 优势
   - setUp 组织代码的方式称为 composionAPI
   - composionAPI 比 optionsAPI 易于维护
2. setUp 函数
   - 执行时机在 beforeCreate 之上
3. setUp 中的 this
   - 没有 this
4. setUp 中的返回值
   - 必须返回一个对象
   - 对象中的属性可以直接在模板中使用(消费)

# 二: 响应式数据

1. reactive
   - reactive 只能定义响应式的 复杂数据类型, 定义响应式基本数据类型不生效
2. ref
   - 在 setUp 函数中需要通过 .value 获取, 在模板中直接使用/消费
   - 既可以定义复杂数据类型,也可以定义基本数据类型
3. 使用 reactive or ref ?
   - vue@3.2.0 版本后(^vue@3.2.0), ref 比 reactive 效率高的多

# 三: script-setup

1. 什么是 script-setup
   - `<script setup></script>`
2. script-setup 的特点
   - script-setup 标签内, 在全局作用域下, 所有变量/函数, 均可在模板中直接消费, 不用 return 对象
   - script-setup 标签内的函数作用域内的变量, 不能在模板中直接消费

# 四: 计算属性-computed

语法

1. 引入 computed

   - `import {computed} from 'vue'`

1. 函数式 conputed
   - `const 计算属性名 = computed(计算函数)`
   - 计算函数返回值, 作为计算属性的值
1. 对象式 conputed
   - ` const 计算属性名 = computed(计算属性配置项)`
   - 计算属性配置项
     - 计算属性配置项可配置 set/get 函数
     - set 函数接受一个参数, value, value 是修改计算属性时的修改值

# 五: 监视属性 - watch

语法

1. 基本语法

   - watch(监视的数据, 数据变化后的处理函数, 配置项)

2. 监视 ref 定义的数据的特别之处

   - 监视的是 ref 数据的 value 属性 `watch(ref(0).value,()=>{})`

   - 监视 ref 定义的复杂数据类型的两种写法

     - 监视 ref 对象本身, 并开启 deep:true

       ```js
       const person = ref({
         name: "zhangsan",
         age: 18,
       });

       watch(person, () => {}, { deep: true }); //不同处
       ```

       ​

     - 监视 ref 对象的 value

       ```js
       const person = ref({
         name: "zhangsan",
         age: 18,
       });

       watch(person.value, () => {}); //不同处
       ```

3. 监视响应式对象的某个属性值

   - ```js
     const person = ref({
       name: "张三",
       age: 18,
     });
     // 只监视name的变化,age变化不会触发处理函数

     watch(
       () => person.value.age,
       () => {}
     );
     ```

   - ​

# 六: 生命周期钩子

vue3 生命周期钩子与 vue2 的变换

1. 取消 beforeCreate 和 created 替换为 setUp 函数
2. update 系列和 mount 系列前加 on
   - beforeUpdate --> OnBeforeUpdate
   - 其他的以此类推
3. detroyed 更名为 unMount. 并在前加 on
   - beforeDetroyed ---> onBeforeUnMounted

# 七: 组件传值

## 父传子

1. 定义子组件

2. 在父组件引入子组件

   - 不需要使用 components 注册便可直接在模板中消费

3. 在父组件内, 通过 v-bind 给子组件绑定数据

4. 子组件通过 defineProps 接受

   - defineProps 不需要引入

   - ```js
     // defineProps 返回一个props对象
     const props = defineProps({
       msg: {
         type: String,
         required: true,
       },
     });

     // 在模板中直接使用, 在setup函数中需要props. 使用
     console.log(props.msg);
     ```

   - ​

## 子传父

1. 在父子组件同时约定暗号(自定义事件)
   - 父组件通过 @事件名约定暗号
   - 子组件通过 defineEmits([事件名])约定暗号
2. defineEmits 返回 emit 函数, 通过 emit 函数触发自定义事件
   - `emit(事件名, 参数)`

# 八: 依赖注入 provide/inject

1. provide 和 inject 是什么
   - 当前组件提供方法/函数, 其子孙组件都可以获取/消费
2. provide/inject 语法
   - provide(数据名, 数据)
   - conat 数据 = inject(数据名)

# 九: ref 绑定 dom 与组件

1. 绑定 ref
   1. 在 setup 中定义 ref 容器 `const anyRef = ref(null)`
   2. 在模板中绑定 ref <标签 ref="anyRef"></标签>
2. ref 获取组件实例的方法/属性
   1. 在父组件内完成绑定 ref
   2. 在子组件内通过 defineExpost({}) 暴露数据
   3. 在父组件内通过 ref.数据/方法 消费

# 十: toRefs

1. toRefs 是干什么的
   - 解决本来响应式数据, 结构赋值后数据不响应的问题
2. 怎么用
   - const { 解构属性 } = refs(复杂数据类型响应式对象)
