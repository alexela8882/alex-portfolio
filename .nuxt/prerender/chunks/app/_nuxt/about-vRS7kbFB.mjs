import { mergeProps, useSSRContext } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark-indigo-100" }, _attrs))}><code><div class="font-bold text-2xl mb-5">Technical Profile</div><div class="grid grid-cols-2 gap-4"><div><div class="font-bold text-xl">Backend</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>PHP</li><li>Laravel</li><li>DJango</li><li>NodeJS</li><li>REST Api</li></ul></div><div><div class="font-bold text-xl">Frontend</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>JavaScript</li><li>ES6</li><li>jQuery</li><li>Vue3</li><li>Nuxt3</li></ul></div><div><div class="font-bold text-xl">UI/UX</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>HTML</li><li>CSS/SCSS</li><li>Bootstrap</li><li>Vuetify</li><li>Primevue</li><li>Material Design</li></ul></div><div><div class="font-bold text-xl">Integrations</div><ul style="${ssrRenderStyle({ "list-style": "circle" })}" class="dark-green-100"><li>Microsoft AAD</li><li>DynamicNavs</li><li>SAML/SAML2</li><li>ERPNext</li></ul></div><div><a href="~/assets/files/AlexanderCV.pdf" class="text-sm underline dark-green-100"> see more on my cv... </a></div></div></code></div>`);
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
//# sourceMappingURL=about-vRS7kbFB.mjs.map
