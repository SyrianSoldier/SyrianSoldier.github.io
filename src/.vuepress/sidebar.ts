import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "编程语言与技巧",
      icon: "laptop-code",
      link: "Coding/",
    },
    {
      text: "计算机科学与技术",
      icon: "https://api.iconify.design/teenyicons/computer-outline.svg",
      link: "ComputerScience/",
    },
    {
      text: "代码最佳实践",
      icon: "https://api.iconify.design/medical-icon/i-family-practice.svg",
      link: "BestPractice/",
    },
    {
      text: "英语",
      icon: "https://api.iconify.design/icon-park-outline/english.svg",
      link: "English/",
    },
    {
      text: "数学",
      icon: "https://api.iconify.design/bx/math.svg",
      link: "Math/",
    },
    {
      text: "个人",
      icon: "https://api.iconify.design/icon-park-outline/personal-privacy.svg",
      link: "Individual/",
    },
  ],
});
