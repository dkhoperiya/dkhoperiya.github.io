import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/event_log/\",\"title\":\"Event Log\",\"lang\":\"ru-RU\",\"frontmatter\":{\"title\":\"Event Log\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
