import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/components/": [
        {
            text: "Компоненты",
            link: "/components/",
            icon: "box",
            collapsible: false,
            children: [
                {
                    text: "Daily Reporting 2.0",
                    icon: "image",
                    prefix: "daily_reporting/",
                    collapsible: true,
                    children: [
                        "overview/",
                        "quick_start/",
                        "user_guide/",
                        "changelog/"
                    ],
                },
                {
                    text: "CDM/DDS",
                    icon: "table",
                    prefix: "cdm_dds/",
                    collapsible: true,
                    children: [
                        "overview",
                        "quick_start",
                        "user_guide",
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
                        "change_log"
                    ],
                },
                {
                    text: "Event Log",
                    icon: "gears",
                    prefix: "event_log/",
                    collapsible: true,
                    children: [
                        "overview",
                        "quick_start",
                        "user_guide",
                        "change_log"
                    ],
                },
          ]
        },
    ],
    "/demo/": [
       {
            text: "Компоненты",
            link: "",
            collapsible: false,
            children: [
                "Demo_2024-04-17",
            ]
       }
    ],
});
