import { mergeProps, useSSRContext } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark-indigo-100" }, _attrs))}><code><div class="font-bold text-2xl mb-5">Contact me</div><div class="flex flex-col gap-5"><div class="text-sm"><div class="flex content-center"><div class="italic">Email:\xA0</div><div class="dark-green-100">alexela8882@gmail.com</div></div><div class="flex content-center"><div class="italic">Phone:\xA0</div><div class="dark-green-100">(+63) 997-685-7925</div></div></div><div class="border-2"><iframe style="${ssrRenderStyle({ "border": "0", "height": "50vh !important" })}" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122745.13614878815!2d120.48035990919891!3d15.972573969365456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913fb28b8acf8f%3A0x432ead83f669f54f!2sUrdaneta%2C%20Pangasinan!5e0!3m2!1sen!2sph!4v1706690056368!5m2!1sen!2sph" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></code></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-P7VYVw_U.mjs.map
