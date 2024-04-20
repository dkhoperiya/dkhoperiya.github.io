import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/guide/test.html.vue"
const data = JSON.parse("{\"path\":\"/guide/test.html\",\"title\":\"\",\"lang\":\"ru-RU\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"guide/test.md\"}")
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
