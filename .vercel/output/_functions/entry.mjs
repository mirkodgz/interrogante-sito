import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BtRsyyxY.mjs';
import { manifest } from './manifest_Ddpa1kEl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/creaciones/_slug_.astro.mjs');
const _page6 = () => import('./pages/creaciones.astro.mjs');
const _page7 = () => import('./pages/festival/_slug_.astro.mjs');
const _page8 = () => import('./pages/festival.astro.mjs');
const _page9 = () => import('./pages/formacion-para-profesores.astro.mjs');
const _page10 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page11 = () => import('./pages/la-carretilla.astro.mjs');
const _page12 = () => import('./pages/la-familia-garrigo.astro.mjs');
const _page13 = () => import('./pages/nosotros/team/_slug_.astro.mjs');
const _page14 = () => import('./pages/nosotros.astro.mjs');
const _page15 = () => import('./pages/partners.astro.mjs');
const _page16 = () => import('./pages/performance/_slug_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/creaciones/[slug].astro", _page5],
    ["src/pages/creaciones/index.astro", _page6],
    ["src/pages/festival/[slug].astro", _page7],
    ["src/pages/festival/index.astro", _page8],
    ["src/pages/formacion-para-profesores.astro", _page9],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page10],
    ["src/pages/la-carretilla.astro", _page11],
    ["src/pages/la-familia-garrigo.astro", _page12],
    ["src/pages/nosotros/team/[slug].astro", _page13],
    ["src/pages/nosotros/index.astro", _page14],
    ["src/pages/partners.astro", _page15],
    ["src/pages/performance/[slug].astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "34a585ef-b626-4256-a299-fea01d1c267d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
