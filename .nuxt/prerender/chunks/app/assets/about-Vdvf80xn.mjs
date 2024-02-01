import { u as useRouter } from '../server.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/h3@1.10.1/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unhead@1.8.10/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/@unhead+shared@1.8.10/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue-router@4.2.5_vue@3.4.15/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/destr@2.0.2/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/scule@1.2.0/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unstorage@1.10.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark-indigo-100" }, _attrs))}><code><div class="font-bold text-2xl mb-5">Technical Profile</div><div class="grid grid-cols-2 gap-4"><div><div class="font-bold text-xl">Backend</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>PHP</li><li>Laravel</li><li>DJango</li><li>NodeJS</li><li>REST Api</li></ul></div><div><div class="font-bold text-xl">Frontend</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>JavaScript</li><li>ES6</li><li>jQuery</li><li>Vue3</li><li>Nuxt3</li></ul></div><div><div class="font-bold text-xl">UI/UX</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>HTML</li><li>CSS/SCSS</li><li>Bootstrap</li><li>Vuetify</li><li>Primevue</li><li>Material Design</li></ul></div><div><div class="font-bold text-xl">Integrations</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>Microsoft AAD</li><li>DynamicNavs</li><li>SAML/SAML2</li><li>ERPNext</li></ul></div><div><a href="javascript: void(0);" class="text-sm underline dark-green-100"> see more on my cv... </a></div></div></code></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-Vdvf80xn.mjs.map
