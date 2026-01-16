import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getEntry, $ as $$Layout } from '../chunks/Layout_HUSFDQDr.mjs';
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const partnersEntry = await getEntry("pages", "partners");
  const partnersData = partnersEntry?.data;
  const collaborators = partnersData?.collaborators || [];
  const partners = partnersData?.partners || [];
  const press = partnersData?.press || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners | Interrogante Spettacolo" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-50 min-h-screen pb-32">  <div class="bg-primary text-white py-24 text-center mb-16"> <h1 class="font-nav text-5xl md:text-7xl uppercase tracking-tighter">
NUESTROS ALIADOS
</h1> </div> <div class="container mx-auto px-6 max-w-7xl space-y-24">  <section> <h2 class="font-nav text-4xl md:text-5xl text-primary uppercase text-center mb-12 font-bold tracking-wide">
COLABORADORES
</h2> ${collaborators.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"> ${collaborators.map((logo) => renderTemplate`<div class="w-full aspect-[3/2] bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"> <img${addAttribute(logo, "src")} alt="Colaborador" class="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-105"> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-400 italic">
No hay colaboradores añadidos aún.
</p>`} </section>  <section> <h2 class="font-nav text-4xl md:text-5xl text-primary uppercase text-center mb-12 font-bold tracking-wide">
PARTNER
</h2> ${partners.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center"> ${partners.map((logo) => renderTemplate`<div class="w-full aspect-[3/2] bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"> <img${addAttribute(logo, "src")} alt="Partner" class="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-105"> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-400 italic">
No hay partners añadidos aún.
</p>`} </section>  <section> <h2 class="font-nav text-4xl md:text-5xl text-primary uppercase text-center mb-12 font-bold tracking-wide">
PRENSA
</h2> ${press.length > 0 ? renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"> ${press.map((logo) => renderTemplate`<div class="w-full aspect-[3/2] bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"> <img${addAttribute(logo, "src")} alt="Prensa" class="max-w-full max-h-full object-contain transition-all duration-300 transform hover:scale-105"> </div>`)} </div>` : renderTemplate`<p class="text-center text-gray-400 italic">
No hay logos de prensa añadidos aún.
</p>`} </section> </div> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/partners.astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Partners,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
