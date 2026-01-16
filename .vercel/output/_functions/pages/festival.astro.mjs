import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { a as getCollection, $ as $$Layout } from '../chunks/Layout_HUSFDQDr.mjs';
import { S as SectionHeader } from '../chunks/SectionHeader_C9zL316p.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const festivales = await getCollection("festival");
  const festivalesOrdenados = festivales.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Festival A PIEDI NUDI" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white">  <div class="pt-32 pb-12 px-4 max-w-7xl mx-auto"> ${renderComponent($$result2, "SectionHeader", SectionHeader, { "title": "Nuestro Festival", "highlightedWord": "Festival", "description": "Explora la trayectoria del festival A PIEDI NUDI a trav\xE9s de sus ediciones.", "className": "mb-16", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/interrogante-sitoweb/src/components/ui/SectionHeader", "client:component-export": "default" })}  <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> ${festivalesOrdenados.map((edicion) => renderTemplate`<article class="group relative flex flex-col gap-4">  <div class="overflow-hidden rounded-lg aspect-[4/3] bg-gray-100"> <img${addAttribute(edicion.data.cover, "src")}${addAttribute(edicion.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> </div>  <div class="space-y-2"> <span class="text-sm font-nav tracking-widest text-primary uppercase"> ${edicion.data.edition} •${" "} ${edicion.data.date.getFullYear()} </span> <h2 class="text-3xl font-primary text-black group-hover:text-primary transition-colors"> ${edicion.data.title} </h2> <p class="text-black/60 font-sans line-clamp-3"> ${edicion.data.description} </p>  <div class="pt-2"> <span class="text-black font-nav text-sm border-b border-black pb-0.5 group-hover:text-primary group-hover:border-primary transition-colors">
VER MÁS
</span> </div> </div> </article>`)} </div> </div> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/festival/index.astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/festival/index.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
