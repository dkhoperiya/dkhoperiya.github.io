export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Главная","i":"home"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/index.html.js"), meta: {"t":"Компонентные решения","i":"box"} }],
  ["/operators/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/operators/index.html.js"), meta: {"t":"Quick Start","i":"lightbulb"} }],
  ["/operators/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/operators/test.html.js"), meta: {"t":""} }],
  ["/demo/Demo_2024-04-17.html", { loader: () => import(/* webpackChunkName: "Demo_2024-04-17.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/demo/Demo_2024-04-17.html.js"), meta: {"t":"Демо 2024-04-17"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Демо"} }],
  ["/components/cdm_dds/change_log.html", { loader: () => import(/* webpackChunkName: "change_log.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/change_log.html.js"), meta: {"t":"Change Log"} }],
  ["/components/cdm_dds/overview.html", { loader: () => import(/* webpackChunkName: "overview.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/overview.html.js"), meta: {"t":"Overview"} }],
  ["/components/cdm_dds/python_api.html", { loader: () => import(/* webpackChunkName: "python_api.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/python_api.html.js"), meta: {"t":"Python API"} }],
  ["/components/cdm_dds/quick_start.html", { loader: () => import(/* webpackChunkName: "quick_start.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/quick_start.html.js"), meta: {"t":"Quick Start"} }],
  ["/components/cdm_dds/user_guide.html", { loader: () => import(/* webpackChunkName: "user_guide.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/user_guide.html.js"), meta: {"t":"User Guide"} }],
  ["/components/daily_reporting/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/daily_reporting/index.html.js"), meta: {"t":"Daily Reporting 2.0","i":"image"} }],
  ["/components/event_log/change_log.html", { loader: () => import(/* webpackChunkName: "change_log.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/change_log.html.js"), meta: {"t":"Change Log"} }],
  ["/components/event_log/overview.html", { loader: () => import(/* webpackChunkName: "overview.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/overview.html.js"), meta: {"t":"Overview"} }],
  ["/components/event_log/python_api.html", { loader: () => import(/* webpackChunkName: "python_api.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/python_api.html.js"), meta: {"t":"Python API"} }],
  ["/components/event_log/quick_start.html", { loader: () => import(/* webpackChunkName: "quick_start.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/quick_start.html.js"), meta: {"t":"Quick Start"} }],
  ["/components/event_log/user_guide.html", { loader: () => import(/* webpackChunkName: "user_guide.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/user_guide.html.js"), meta: {"t":"User Guide"} }],
  ["/components/progress_goal/change_log.html", { loader: () => import(/* webpackChunkName: "change_log.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/change_log.html.js"), meta: {"t":"Change Log"} }],
  ["/components/progress_goal/overview.html", { loader: () => import(/* webpackChunkName: "overview.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/overview.html.js"), meta: {"t":"Overview"} }],
  ["/components/progress_goal/python_api.html", { loader: () => import(/* webpackChunkName: "python_api.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/python_api.html.js"), meta: {"t":"Python API"} }],
  ["/components/progress_goal/quick_start.html", { loader: () => import(/* webpackChunkName: "quick_start.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/quick_start.html.js"), meta: {"t":"Quick Start"} }],
  ["/components/progress_goal/user_guide.html", { loader: () => import(/* webpackChunkName: "user_guide.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/user_guide.html.js"), meta: {"t":"User Guide"} }],
  ["/components/daily_reporting/changelog/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/daily_reporting/changelog/index.html.js"), meta: {"t":"Changelog"} }],
  ["/components/daily_reporting/overview/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/daily_reporting/overview/index.html.js"), meta: {"t":"Overview"} }],
  ["/components/daily_reporting/quick_start/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/daily_reporting/quick_start/index.html.js"), meta: {"t":"Quick Start"} }],
  ["/components/daily_reporting/user_guide/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/daily_reporting/user_guide/index.html.js"), meta: {"t":"User Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/components/cdm_dds/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/cdm_dds/index.html.js"), meta: {"t":"Cdm Dds"} }],
  ["/components/event_log/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/event_log/index.html.js"), meta: {"t":"Event Log"} }],
  ["/components/progress_goal/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/dkhoperiya/my-docs/src/.vuepress/.temp/pages/components/progress_goal/index.html.js"), meta: {"t":"Progress Goal"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
