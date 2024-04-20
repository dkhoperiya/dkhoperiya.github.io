export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"ru-RU\",\"title\":\"FDEI Docs\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/assets/icon/logo-128.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
