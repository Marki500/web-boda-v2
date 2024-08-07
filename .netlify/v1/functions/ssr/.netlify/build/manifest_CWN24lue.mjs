import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_cx-9Yj1i.mjs';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
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
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
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
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/CCWEB1/Desktop/Marc/ULTIMA%20BODA/web-boda-v2/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Cj_esxBj.css"},{"type":"inline","content":"body{font-family:Arial,sans-serif;margin:0;padding:0;background-color:#e6f4ea;color:#333}.container[data-astro-cid-udk54r6w]{max-width:800px;margin:0 auto;padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 2px 5px #0000001a}h1[data-astro-cid-udk54r6w],h2[data-astro-cid-udk54r6w]{text-align:center;color:#2d6a4f}table[data-astro-cid-udk54r6w]{width:100%;border-collapse:collapse;margin-bottom:20px;box-shadow:0 2px 3px #0000001a}th[data-astro-cid-udk54r6w],td[data-astro-cid-udk54r6w]{border:1px solid #ddd;padding:12px;text-align:left;vertical-align:top;background-color:#fff}th[data-astro-cid-udk54r6w]{background-color:#95d5b2;font-weight:700;color:#2d6a4f}tr[data-astro-cid-udk54r6w]:nth-child(2n){background-color:#f9f9f9}button[data-astro-cid-udk54r6w]{display:inline-block;padding:10px 20px;margin:10px 0;font-size:16px;color:#fff;background-color:#52b788;border:none;border-radius:4px;cursor:pointer;text-align:center;transition:background-color .3s ease}button[data-astro-cid-udk54r6w]:hover{background-color:#2d6a4f}\n"}],"routeData":{"route":"/informacion","isIndex":false,"type":"page","pattern":"^\\/informacion\\/?$","segments":[[{"content":"informacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/informacion.astro","pathname":"/informacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.6TezH7B2.js"}],"styles":[{"type":"external","src":"/_astro/index.Cj_esxBj.css"},{"type":"external","src":"/_astro/index.C8yJ2Tpj.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/pages/informacion.astro",{"propagation":"none","containsHead":true}],["C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/informacion@_@astro":"pages/informacion.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CWN24lue.mjs","C:/Users/CCWEB1/Desktop/Marc/ULTIMA BODA/web-boda-v2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.6TezH7B2.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/great-vibes-cyrillic-ext-400-normal.CKQhgFwn.woff2","/_astro/great-vibes-cyrillic-400-normal.C-wcqNJs.woff2","/_astro/great-vibes-vietnamese-400-normal.a2O3jU53.woff2","/_astro/great-vibes-latin-ext-400-normal.DOkzbsi7.woff2","/_astro/great-vibes-latin-400-normal.CBcwG6wP.woff2","/_astro/noto-sans-limbu-limbu-400-normal.BzbAqHEw.woff2","/_astro/noto-sans-limbu-latin-ext-400-normal.DaGKRMyP.woff2","/_astro/noto-sans-limbu-latin-400-normal.oQPg2grp.woff2","/_astro/raleway-cyrillic-ext-wght-normal.Dc5xu4We.woff2","/_astro/raleway-cyrillic-wght-normal.CqKTn0sv.woff2","/_astro/raleway-vietnamese-wght-normal.wikBsL6_.woff2","/_astro/raleway-latin-ext-wght-normal.Dm8rnUUK.woff2","/_astro/raleway-latin-wght-normal.B0Bc4KU0.woff2","/_astro/great-vibes-cyrillic-400-normal.DtFXCWjq.woff","/_astro/great-vibes-vietnamese-400-normal.Cxbm9Uac.woff","/_astro/great-vibes-latin-ext-400-normal.DCXVjJx8.woff","/_astro/noto-sans-limbu-limbu-400-normal.DlPhVWzE.woff","/_astro/great-vibes-latin-400-normal.CLO24iQJ.woff","/_astro/noto-sans-limbu-latin-ext-400-normal.U3urcQT-.woff","/_astro/noto-sans-limbu-latin-400-normal.B3TOZZpj.woff","/_astro/index.C8yJ2Tpj.css","/_astro/index.Cj_esxBj.css","/calendario.svg","/countdown.js","/favico-contravientoymarea.png","/favicon.svg","/hero-arrow-v1.svg","/hero-arrow.svg","/hero-img-big.png","/hero-img-black-big.png","/hero-img-draw.svg","/hero-img.png","/img1-test.webp","/mapa.svg","/masgircos1.webp","/masgricos2.webp","/noise.png","/reloj.svg","/_astro/client.5I5BMcNS.js","/_astro/hoisted.6TezH7B2.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
