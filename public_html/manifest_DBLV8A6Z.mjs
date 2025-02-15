import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DBE5qgVg.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/api/checkout","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checkout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checkout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checkout.js","pathname":"/api/checkout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/api/graphql","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/graphql","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/graphql\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"graphql","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/graphql.ts","pathname":"/api/graphql","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/cart/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cart","isIndex":false,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart.astro","pathname":"/cart","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/categories/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","isIndex":false,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/checkout/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/error/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/error","isIndex":false,"type":"page","pattern":"^\\/error\\/?$","segments":[[{"content":"error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/error.astro","pathname":"/error","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/menu/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/menu","isIndex":false,"type":"page","pattern":"^\\/menu\\/?$","segments":[[{"content":"menu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/menu.astro","pathname":"/menu","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/pricelist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pricelist","isIndex":false,"type":"page","pattern":"^\\/pricelist\\/?$","segments":[[{"content":"pricelist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricelist.astro","pathname":"/pricelist","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/products/detail/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products/detail","isIndex":false,"type":"page","pattern":"^\\/products\\/detail\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"detail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/detail.astro","pathname":"/products/detail","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/products/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/products","isIndex":false,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products.astro","pathname":"/products","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/success/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/gitrepos/luya_shop_frontend/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BjsMXfvU.js"},{"type":"external","value":"/_astro/page.BkFVlb8s.js"}],"styles":[{"type":"external","src":"/_astro/categories.D8P3H4Ky.css"}],"routeData":{"route":"/currencies","isIndex":false,"type":"page","pattern":"^\\/currencies\\/?$","segments":[[{"content":"currencies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/currencies.astro","pathname":"/currencies","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/gitrepos/luya_shop_frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/categories.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/category/[slug].astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/checkout.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/currencies.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/error.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/menu.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/pricelist.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/products.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/gitrepos/luya_shop_frontend/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/checkout@_@js":"pages/api/checkout.astro.mjs","\u0000@astro-page:src/pages/api/graphql@_@ts":"pages/api/graphql.astro.mjs","\u0000@astro-page:src/pages/cart@_@astro":"pages/cart.astro.mjs","\u0000@astro-page:src/pages/categories@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/category/[slug]@_@astro":"pages/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"pages/checkout.astro.mjs","\u0000@astro-page:src/pages/currencies@_@astro":"pages/currencies.astro.mjs","\u0000@astro-page:src/pages/error@_@astro":"pages/error.astro.mjs","\u0000@astro-page:src/pages/menu@_@astro":"pages/menu.astro.mjs","\u0000@astro-page:src/pages/pricelist@_@astro":"pages/pricelist.astro.mjs","\u0000@astro-page:src/pages/products/detail@_@astro":"pages/products/detail.astro.mjs","\u0000@astro-page:src/pages/products@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DBLV8A6Z.mjs","@astrojs/vue/client.js":"_astro/client.CRmRsCb3.js","C:/gitrepos/luya_shop_frontend/src/components/Products/ShowAllProducts.vue":"_astro/ShowAllProducts.B0oSxQgr.js","C:/gitrepos/luya_shop_frontend/src/components/Index/LuyaHtmlBlockList.vue":"_astro/LuyaHtmlBlockList.CFzQ7354.js","/astro/hoisted.js?q=1":"_astro/hoisted.BjsMXfvU.js","C:/gitrepos/luya_shop_frontend/src/components/Category/ShowProductsInCategory.vue":"_astro/ShowProductsInCategory.-hPJXrIg.js","C:/gitrepos/luya_shop_frontend/src/components/Cart/Cart.vue":"_astro/Cart.tNkOEoJ2.js","astro:scripts/page.js":"_astro/page.BkFVlb8s.js","/astro/hoisted.js?q=0":"_astro/hoisted.Mm5iZ0Z5.js","C:/gitrepos/luya_shop_frontend/src/components/Index/HomeCarousel.vue":"_astro/HomeCarousel.Da4bUVLG.js","C:/gitrepos/luya_shop_frontend/src/components/Checkout/Checkout.vue":"_astro/Checkout.CBIHJF3S.js","C:/gitrepos/luya_shop_frontend/src/components/Category/ViewAllCategories.vue":"_astro/ViewAllCategories.D62zvral.js","/astro/hoisted.js?q=2":"_astro/hoisted.BhzHihIs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.BkFVlb8s.js","/file:///C:/gitrepos/luya_shop_frontend/dist/404.html","/file:///C:/gitrepos/luya_shop_frontend/dist/api/checkout","/file:///C:/gitrepos/luya_shop_frontend/dist/api/graphql","/file:///C:/gitrepos/luya_shop_frontend/dist/cart/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/categories/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/checkout/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/error/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/menu/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/pricelist/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/products/detail/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/products/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/search/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/success/index.html","/file:///C:/gitrepos/luya_shop_frontend/dist/index.html"],"buildFormat":"directory"});

export { manifest };
