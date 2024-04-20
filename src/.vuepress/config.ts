import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  // App base url
  base: "/",

  // App title
  title: "FDEI Docs",

  // App language
  lang: "ru-RU",


  // App theme
  theme:theme,

});
