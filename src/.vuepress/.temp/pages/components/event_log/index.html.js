import comp from "/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/event_log/\",\"title\":\"Event Log\",\"lang\":\"ru-RU\",\"frontmatter\":{\"title\":\"Event Log\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/components/event_log/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"FDEI Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Event Log\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ru-RU\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"David Khoperiya\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Event Log\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
