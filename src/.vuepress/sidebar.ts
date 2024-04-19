import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/components/": [
    {
      text: "Daily Reporting 2.0",
      icon: "file",
      prefix: "daily_reporting/",
      collapsible: true,
      children: [
          "overview",
          "quick_start",
          "user_guide",
          "python_api",
          "change_log"
      ],
    },
    {
      text: "CDM/DDS",
      icon: "book",
      prefix: "cdm_dds/",
      collapsible: true,
      children: [
          "overview",
          "quick_start",
          "user_guide",
          "python_api",
          "change_log"
      ],
    },
    {
      text: "Progress Goal",
      icon: "clipboard-check",
      prefix: "progress_goal/",
      collapsible: true,
      children: [
          "overview",
          "quick_start",
          "user_guide",
          "python_api",
          "change_log"
      ],
    },
    {
      text: "Event Log",
      icon: "user",
      prefix: "event_log/",
      collapsible: true,
      children: [
          "overview",
          "quick_start",
          "user_guide",
          "python_api",
          "change_log"
      ],
    },
  ],
});
