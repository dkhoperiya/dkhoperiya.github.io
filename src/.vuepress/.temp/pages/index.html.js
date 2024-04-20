import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Главная\",\"lang\":\"ru-RU\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Главная\",\"heroImage\":\"/assets/image/ozi-doc.svg\",\"bgImage\":\"/assets/image/Light_03.png\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"FDEI Docs\",\"tagline\":\"Единая точка входа для описания инженерных решений.\",\"highlights\":[{\"header\":\"Компонентные решения\",\"description\":\"Автоматизация критических процессов и библиотеки\",\"color\":\"white\",\"image\":\"/assets/image/ozi-component.svg\",\"bgImage\":\"/assets/image/Blue_03.png\",\"features\":[{\"title\":\"Daily Reporting 2.0\",\"icon\":\"file\",\"details\":\"Отправка отчетности\",\"link\":\"/components/daily_reporting/overview\"},{\"title\":\"CDM/DDS\",\"icon\":\"table\",\"details\":\"Формирование отчетности\",\"link\":\"/components/cdm_dds/overview\"},{\"title\":\"Progres Goal\",\"icon\":\"clipboard-check\",\"details\":\"Прогресс голов\",\"link\":\"/components/progress_goal/overview\"},{\"title\":\"Event Log\",\"icon\":\"user\",\"details\":\"Логирование событий\",\"link\":\"/components/event_log/overview\"},{\"title\":\"Data Quality\",\"icon\":\"user\",\"details\":\"Контроль качества данных\",\"link\":\"/components/data_quality/overview\"}]},{\"header\":\"Операторы Apache Airflow\",\"description\":\"Типовые классы для LowCode разработки DAG'ов\",\"image\":\"/assets/image/ozi-operators.svg\",\"color\":\"white\",\"bgImage\":\"/assets/image/Dark_03.png\",\"features\":[{\"title\":\"VerticaOperator\",\"details\":\"Выполнение запросов в Vertica\",\"link\":\"/operators/vertica_operator/overview\"},{\"title\":\"ClickHouseOperator\",\"details\":\"Выполнение запросов в ClickHouse\",\"link\":\"/operators/clikhouse_operator/overview\"},{\"title\":\"ClickHouseToVerticaOperator\",\"details\":\"Перенос данных из ClickHouse в Vertica\",\"link\":\"/operators/clikhouse_to_vertica_operator/overview\"},{\"title\":\"S3ToVerticaOperator\",\"details\":\"Перенос данных из S3 в Vertica\",\"link\":\"/operators/s3_to_vertica_operator/overview\"},{\"title\":\"VerticaToS3Operator\",\"details\":\"Перенос данных из Vertica в S3\",\"link\":\"/operators/vertica_to_s3_operator/overview\"}]}],\"copyright\":false,\"footer\":\"Ozon.FinTech © 2024-2024 All rights reserved.\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.59,\"words\":176},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
