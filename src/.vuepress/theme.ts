import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  // Icon library
  iconAssets: "fontawesome-with-brands",

  // Navbar auxiliary buttons
  darkmode: "disable",

  // Root site logo settings
  logo: "/assets/icon/logo-128.svg",
  favicon: "/assets/icon/logo-128.svg",

  // Markdown pages folder
  docsDir: "src",

  // Navbar
  navbar: navbar,

  // Sidebar
  sidebar: sidebar,

  // Footer
  footer: "FDEI docs",
  displayFooter: true,

  // Plugins
  plugins: {

    components: {
      components: ["Badge", "VPCard", "PDF", "ArtPlayer", "VidStack"]
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      hint: true,
      mark: true,
      alert: true,
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

    },

  },

});
