import { mergeProps, useSSRContext } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "test",
        class: "dark-indigo-100"
      }, _attrs))}><code><div class="font-bold text-2xl mb-5">Professional Experience</div><div class="flex flex-col gap-5"><div><div class="font-bold text-sm text-xl">Addessa Corporation</div><div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div><div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div></div><div><div class="font-bold text-sm text-xl">Addessa Corporation</div><div class="font-semibold text-sm dark-indigo-300">Network Specialist</div><div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div></div><div><div class="font-bold text-sm text-xl">Esco Philippines Inc.</div><div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div><div class="text-sm dark-green-100">Aug 2020 - Sept 2023</div></div><div><a href="" class="text-sm underline dark-green-100">check my cv...</a></div></div></code></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=experience-E7p2gGJU.mjs.map
