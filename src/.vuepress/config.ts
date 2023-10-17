import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "返回首页",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
