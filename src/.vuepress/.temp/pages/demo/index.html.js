import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Демо\",\"lang\":\"ru-RU\",\"frontmatter\":{\"author\":\"David Khoperiya\",\"title\":\"Демо\",\"date\":\"2024-04-18T00:00:00.000Z\",\"editLink\":false,\"pageview\":false,\"copyright\":false,\"footer\":\"Ozon.FinTech © 2024-2024 All rights reserved.\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"demo/README.md\",\"localizedDate\":\"18 апреля 2024 г.\"}")
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
