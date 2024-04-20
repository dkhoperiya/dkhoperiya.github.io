import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
        text: "Главная",
        icon: "home",
        link: "/",
  },
  {
        text: "Компоненты",
        icon: "box",
        link: "/components/",
  },
  {
        text: "Операторы",
        icon: "gear",
        link: "/operators/",
  },
  {
        text: "Python API",
        icon: "fa-brands fa-python",
        link: "/python_api/",
  },
  {
        text: "Демо",
        icon: "chalkboard-user",
        link: "/demo/",
  },
]);
