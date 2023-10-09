import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "编程语言与技巧",
    icon: "lightbulb",
    prefix: "/Coding/",
    children: [
      {
        text: "前端技术",
        prefix: "frontend/",
        children: [
          {
            text: "JavaScript",
            link:"js"
          },
          {
            text: "Vue",
            link: "vue",
            // children:[
            //   {
            //     text: "vue3语法",
            //     link: "vue3语法"
            //   },
            //   {
            //     text: "vuex",
            //     link: "vuex"
            //   },
            //   {
            //     text: "声明式渲染进阶",
            //     link: "声明式渲染进阶"
            //   },
            //   {
            //     text: "自动注册全局组件",
            //     link: "自动注册全局组件"
            //   }
            // ]
          },
          {
            text: "React",
            link: "react/",
            // children:[
            //   {
            //     text: "react基础语法",
            //     link: "react基础语法"
            //   },
            // ]
          },
          {
            text: "Webpack",
            link: "webpack/",
            // children:[
            //   {
            //     text: "splitChunks",
            //     link: "spliteChunks"
            //   },
            // ]
          },
        ],
      },
      {
        text: "后端技术",
        icon: "lightbulb",
        prefix: "backend/",
        children: [
          {
            text: "C++",
            link: "C++"
          },
          {
            text: "Python",
            link: "python",
          },
        ],
      },
      {
        text: "Git",
        icon: "lightbulb",
        prefix: "git/",
        children: [{ text: "git操作", link: "git操作" }],
      },

    ],
  },
  {
    text: "计算机科学与技术",
    icon: "lightbulb",
    prefix: "/ComputerScience/",
    children: [
      // {
      //   text: "计算机网络",
      //   link: "network"
      // },
      {
        text: "数据结构与算法",
        link: "algorithm"
      },
      {
        text: "操作系统",
        link: "os"
      },
      {
        text: "计算机组成原理",
        link: "compositionPrinciple"
      },
      {
        text: "计算机网络",
        link: "network"
      },
      {
        text: "AI",
        icon: "lightbulb",
        prefix: "AI/",
        children: [
          { text: "动手学人工智能", link: "动手学人工智能" }
        ],
      },
    ],
  },
  {
    text: "代码最佳实践",
    icon: "lightbulb",
    prefix: "/BestPractice/",
    children: [
      {
        text: "设计模式",
        icon: "lightbulb",
        link: "design-pattern/设计模式"
      },
      {
        text: "前端性能优化",
        icon: "lightbulb",
        prefix: "",
        link: "performance/性能优化"
      },
    ],
  },
  {
    text: "英语",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "数学",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "日记",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
