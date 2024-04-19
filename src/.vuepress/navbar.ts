import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
        text: "Компоненты",
        icon: "box",
        link: "/components/",
  },
  {
        text: "Операторы",
        icon: "gear",
        link: "/guide/",
  },
]);
