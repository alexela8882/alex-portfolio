import { u as useRouter } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "test",
        class: "dark-indigo-100"
      }, _attrs))}><code><div class="font-bold text-2xl mb-5">Professional Experience</div><div class="flex flex-col gap-5"><div><div class="font-bold text-sm text-xl">Addessa Corporation</div><div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div><div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div></div><div><div class="font-bold text-sm text-xl">Addessa Corporation</div><div class="font-semibold text-sm dark-indigo-300">Network Specialist</div><div class="text-sm dark-green-100">Sept 2015 - Jun 2020</div></div><div><div class="font-bold text-sm text-xl">Esco Philippines Inc.</div><div class="font-semibold text-sm dark-indigo-300">Full Stack Web Developer</div><div class="text-sm dark-green-100">Aug 2020 - Sept 2023</div></div><div><a href="javascript: void(0);" class="text-sm underline dark-green-100">check my cv...</a></div></div></code></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=experience-HJ6FaVuh.js.map
