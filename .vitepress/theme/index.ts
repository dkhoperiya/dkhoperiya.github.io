// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import 'viewerjs/dist/viewer.min.css'
import imageViewer from 'vitepress-plugin-image-viewer'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MDImage from '../theme/components/MDImage.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    // register your custom global components
    app.component('MDImage', MDImage)
  },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }
} satisfies Theme
