import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "FDEI Docs",

  lang: 'ru-RU',

  srcDir: 'src',

  ignoreDeadLinks: true,

  lastUpdated: true,

  base: '/',

  head: [
      [
          'link',
          {
            rel: 'icon',
            href: '/assets/logo/logo-128.svg'
          }
      ]
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {

    outline: [2, 3],

    logo: '/assets/logo/logo-128.svg',

    footer: {
      message: 'FDEI Docs.',
      copyright: 'Copyright © 2024-2024 Ozon.Fintech'
    },

    editLink: {
      pattern: ({filePath}) => {
        if (filePath.startsWith('components/')) {
          return `https://github.com/acme/monorepo/edit/main/${filePath}`
        } else {
          return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`
        }
      }
    },

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Компоненты', link: '/components/' },
      { text: 'Операторы', link: '/operators/' },
      { text: 'Python API', link: '/python_api/' },
      { text: 'Демо', link: '/demo/' },
    ],

    sidebar: {
      "/components/": [
        {
          text: 'Компоненты',
          link: '/components/',
          items: [
            {
              text: "Daily Reporting 2.0",
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/components/daily_reporting/overview/'
                },
                {
                  text: 'Quick Start',
                  link: '/components/daily_reporting/quick_start/'
                },
                {
                  text: 'User Guide',
                  link: '/components/daily_reporting/user_guide/'
                },
                {
                  text: 'Changelog',
                  link: '/components/daily_reporting/changelog/'
                },
              ]
            },
            {
              text: "CDM/DDS",
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/components/cdm_dds/overview/'
                },
                {
                  text: 'Quick Start',
                  link: '/components/cdm_dds/quick_start/'
                },
                {
                  text: 'User Guide',
                  link: '/components/cdm_dds/user_guide/'
                },
                {
                  text: 'Changelog',
                  link: '/components/cdm_dds/changelog/'
                },
              ]
            },
            {
              text: "Progress Goal",
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/components/progress_goal/overview/'
                },
                {
                  text: 'Quick Start',
                  link: '/components/progress_goal/quick_start/'
                },
                {
                  text: 'User Guide',
                  link: '/components/progress_goal/user_guide/'
                },
                {
                  text: 'Changelog',
                  link: '/components/progress_goal/changelog/'
                },
              ]
            },
            {
              text: "Event Log",
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/components/event_log/overview/'
                },
                {
                  text: 'Quick Start',
                  link: '/components/event_log/quick_start/'
                },
                {
                  text: 'User Guide',
                  link: '/components/event_log/user_guide/'
                },
                {
                  text: 'Changelog',
                  link: '/components/event_log/changelog/'
                },
              ]
            }
          ]
        },
      ],
      "/operators/": [
        {
          text: 'Операторы',
          link: '/operators/',
          items: [
            {
              text: "Vertica",
              collapsed: true,
              items: [
                {
                  text: 'VerticaOperator',
                  link: '/components/vertica/vertica_operator/'
                },
                {
                  text: 'VerticaToClickHouseOperator',
                  link: '/components/vertica/vertica_to_clickhouse_operator/'
                },
                {
                  text: 'VerticaToS3Operator',
                  link: '/components/vertica/vertica_to_s3_operator/'
                },
              ]
            },
            {
              text: "ClickHouse",
              collapsed: true,
              items: [
                {
                  text: 'ClickHouseOperator',
                  link: '/components/clickhouse/clickhouse_operator/'
                },
                {
                  text: 'ClickHouseToVerticaOperator',
                  link: '/components/clickhouse/clickhouse_to_vertica_operator/'
                },
                {
                  text: 'ClickHouseToS3Operator',
                  link: '/components/clickhouse/clickhouse_to_s3_operator/'
                },
              ]
            },
            {
              text: "S3",
              collapsed: true,
              items: [
                {
                  text: 'S3ToVerticaOperator',
                  link: '/components/s3/s3_to_vertica_operator/'
                },
                {
                  text: 'S3ToClickHouseOperator',
                  link: '/components/s3/s3_to_clickhouse_operator/'
                },
                {
                  text: 'S3ToPostgreOperator',
                  link: '/components/s3/s3_to_postgre_operator/'
                },
              ]
            },
            {
              text: "PostgreSQL",
              collapsed: true,
              items: [
                {
                  text: 'PostgreOperator',
                  link: '/components/postgresql/postgre_operator/'
                },
                {
                  text: 'PostgreToVerticaOperator',
                  link: '/components/postgresql/postgre_to_vertica_operator/'
                },
                {
                  text: 'PostgreToClickHouseOperator',
                  link: '/components/postgresql/postgre_to_clickhouse_operator/'
                },
                {
                  text: 'PostgreToS3Operator',
                  link: '/components/postgresql/postgre_to_s3_operator/'
                },
              ]
            }
          ]
        },
      ],
      "/python_api/daily_reporting/": [
        {
          text: 'Daily Reporting API',
          link: '/python_api/daily_reporting/',
          items: [
            {
              text: "Классы",
              collapsed: true,
              items: [
                {
                  text: 'Report',
                  link: '/python_api/daily_reporting/classes/report/'
                },
                {
                  text: 'Metric',
                  link: '/python_api/daily_reporting/classes/metric'
                },
                {
                  text: 'ReportTableImage',
                  link: '/python_api/daily_reporting/classes/report_table_image'
                },
              ]
            },
            {
              text: "Функции",
              collapsed: true,
              items: [
                {
                  text: 'send_report_func',
                  link: '/python_api/daily_reporting/functions/send_report_func/'
                },
              ]
            },
          ]
        },
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: "<svg viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
               "<path d=\"m2.5441 127 60.809-62.332a1.124 1.124 0 0 0 0.1359-1.4368c-3.6977-5.1625-10.521-6.0578-13.05-9.5268-7.4903-10.275-9.3909-16.092-12.61-15.731a0.98374 0.98374 0 0 0-0.58464 0.3085l-21.966 22.518c-12.638 12.944-14.454 41.475-14.782 65.367a1.1908 1.1908 0 0 0 2.0473 0.83273z\" fill=\"#017cee\"/>\n" +
               "<path d=\"m126.99 125.46-62.332-60.813a1.124 1.124 0 0 0-1.4389-0.1359c-5.1625 3.6998-6.0578 10.521-9.5268 13.05-10.275 7.4903-16.092 9.3909-15.731 12.61a0.98374 0.98374 0 0 0 0.3085 0.58248l22.518 21.966c12.944 12.638 41.475 14.454 65.367 14.782a1.1908 1.1908 0 0 0 0.83489-2.0408z\" fill=\"#00ad46\"/>\n" +
               "<path d=\"m60.792 112.72c-7.076-6.9035-10.355-20.559 3.2058-48.719-22.046 9.8525-29.771 22.803-25.972 26.511z\" fill=\"#04d659\"/>\n" +
               "<path d=\"m125.45 1.0113-60.807 62.332a1.1218 1.1218 0 0 0-0.1359 1.4368c3.6998 5.1625 10.519 6.0578 13.05 9.5268 7.4903 10.275 9.393 16.092 12.61 15.731a0.97943 0.97943 0 0 0 0.58464-0.3085l21.966-22.518c12.638-12.944 14.454-41.475 14.782-65.367a1.193 1.193 0 0 0-2.0495-0.83273z\" fill=\"#00c7d4\"/>\n" +
               "<path d=\"m112.73 67.211c-6.9035 7.076-20.559 10.355-48.721-3.2058 9.8525 22.046 22.803 29.771 26.511 25.972z\" fill=\"#11e1ee\"/>\n" +
               "<path d=\"m1.0017 2.5495 62.332 60.807a1.124 1.124 0 0 0 1.4368 0.1359c5.1625-3.6998 6.0578-10.521 9.5268-13.05 10.275-7.4903 16.092-9.3909 15.731-12.61a0.99022 0.99022 0 0 0-0.3085-0.58463l-22.518-21.966c-12.944-12.638-41.475-14.454-65.367-14.782a1.1908 1.1908 0 0 0-0.83273 2.0495z\" fill=\"#e43921\"/>\n" +
               "<path d=\"m67.212 15.284c7.076 6.9035 10.355 20.559-3.2058 48.721 22.046-9.8525 29.771-22.805 25.972-26.511z\" fill=\"#ff7557\"/>\n" +
               "<path d=\"m15.279 60.8c6.9035-7.076 20.559-10.355 48.721 3.2058-9.8525-22.046-22.803-29.771-26.511-25.972z\" fill=\"#0cb6ff\"/>\n" +
               "<circle cx=\"64.009\" cy=\"63.995\" r=\"2.7182\" fill=\"#4a4848\"/>\n" +
               "</svg>"
          },
        link: ''
      },
      {
        icon: {
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 128 128\" xml:space=\"preserve\">" +
               "<path fill=\"#E24329\" d=\"m124.755 51.382-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121 4.581 4.581 0 0 0-5.236.281 4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31 4.581 4.581 0 0 0-5.236-.281 4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758 26.218-19.634.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z\"/>" +
               "<path fill=\"#FC6D26\" d=\"m124.755 51.382-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z\"/>" +
               "<path fill=\"#FCA326\" d=\"m40.066 107.771 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z\"/>" +
               "<path fill=\"#FC6D26\" d=\"M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516L64 89.655 26.42 61.271z\"/>" +
               "</svg>"
          },
        link: ""}
    ]
  }
})
