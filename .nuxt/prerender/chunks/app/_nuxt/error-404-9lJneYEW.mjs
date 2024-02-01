import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, defineComponent, computed, ref, h, resolveComponent } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/index.mjs';
import { hasProtocol, joinURL, parseURL, parseQuery, withTrailingSlash, withoutTrailingSlash } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/ufo@1.3.2/node_modules/ufo/dist/index.mjs';
import { _ as _export_sfc, u as useRouter, n as nuxtLinkDefaults, a as useRuntimeConfig, b as navigateTo } from '../server.mjs';
import { u as useHead } from './index-tbNGurtz.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue@3.4.15/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/h3@1.10.1/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/unhead@1.8.10/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/@unhead+shared@1.8.10/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/alexe/Documents/devs/portfolio/node_modules/.pnpm/vue-router@4.2.5_vue@3.4.15/node_modules/vue-router/dist/vue-router.node.mjs';
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

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
  };
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config = useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isProtocolURL = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isProtocolURL.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a2;
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_a2 = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _a2 : null : to.value && !props.external && !isProtocolURL.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _sfc_main = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-f5c0a1bb><div class="fixed left-0 right-0 spotlight z-10" data-v-f5c0a1bb></div><div class="max-w-520px text-center z-20" data-v-f5c0a1bb><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f5c0a1bb>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f5c0a1bb>${ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-f5c0a1bb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5c0a1bb"]]);

export { error404 as default };
//# sourceMappingURL=error-404-9lJneYEW.mjs.map
