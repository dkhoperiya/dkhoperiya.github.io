import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Quick Start\",\"lang\":\"ru-RU\",\"frontmatter\":{\"title\":\"Quick Start\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"title: Quick Start\",\"slug\":\"title-quick-start\",\"link\":\"#title-quick-start\",\"children\":[]},{\"level\":2,\"title\":\"Инициализация DAG'a продукта\",\"slug\":\"инициализация-dag-a-продукта\",\"link\":\"#инициализация-dag-a-продукта\",\"children\":[]},{\"level\":2,\"title\":\"Регистрация нового отчета\",\"slug\":\"регистрация-нового-отчета\",\"link\":\"#регистрация-нового-отчета\",\"children\":[]},{\"level\":2,\"title\":\"Добавление метрики\",\"slug\":\"добавление-метрики\",\"link\":\"#добавление-метрики\",\"children\":[]},{\"level\":2,\"title\":\"Активация DAG'a продукта\",\"slug\":\"активация-dag-a-продукта\",\"link\":\"#активация-dag-a-продукта\",\"children\":[]}],\"readingTime\":{\"minutes\":1,\"words\":300},\"filePathRelative\":\"guide/README.md\"}")
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
