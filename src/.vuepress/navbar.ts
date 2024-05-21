import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "编程语言与技巧",
    icon: "laptop-code",
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
            link: "c++第二版笔记.md"
          },
          {
            text: "Python",
            link: "python",
          },
          {
            text: "Java",
            link: "Java",
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
    icon: "https://api.iconify.design/teenyicons/computer-outline.svg",
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
        link: "AI/"
      },
    ],
  },
  {
    text: "代码最佳实践",
    icon: "https://api.iconify.design/medical-icon/i-family-practice.svg",
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
    icon: "https://api.iconify.design/icon-park-outline/english.svg",
    link:"/English/"
  },
  {
    text: "数学",
    icon: "https://api.iconify.design/bx/math.svg",
    link:"/Math/"
  },
  {
    text: "个人",
    icon: "https://api.iconify.design/icon-park-outline/personal-privacy.svg",
    link:"/Individual/"
  },
]);
