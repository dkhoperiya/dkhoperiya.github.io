import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/Users/dkhoperiya/my-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "/Users/dkhoperiya/my-docs/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import PDF from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import ArtPlayer from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/ArtPlayer.js";
import VidStack from "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/components/VidStack.js";

import "/Users/dkhoperiya/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("ArtPlayer")) app.component("ArtPlayer", ArtPlayer);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
