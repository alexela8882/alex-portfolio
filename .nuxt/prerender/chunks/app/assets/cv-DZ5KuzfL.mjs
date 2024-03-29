import { u as useRouter } from '../server.mjs';
import { useSSRContext } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';
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
  __name: "cv",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><embed src="https://alexela8882.github.io/alex-portfolio/files/AlexanderCV.pdf" width="100%" height="100vh"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cv-DZ5KuzfL.mjs.map
