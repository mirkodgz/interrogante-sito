import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_CMQicny_.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const creaciones = await getCollection("creaciones");
  const heroImage = "https://res.cloudinary.com/dskliu1ig/image/upload/v1768570749254/uploaded_image_1768570749254.png";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Creaciones | Interrogante Spettacolo" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-32"> <!-- HERO SECTION --> <section class="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"> <div class="absolute inset-0"> <img${addAttribute(heroImage, "src")} alt="Creaciones Hero" class="w-full h-full object-cover opacity-70"> </div> <div class="relative z-10 text-center"> <h1 class="font-nav text-5xl md:text-8xl text-white uppercase tracking-tighter drop-shadow-2xl">
CREACIONES
</h1> </div> </section> <!-- GRID OF CREATIONS - PANORAMIC CARDS --> <div class="container mx-auto px-6 max-w-7xl pt-20 space-y-12"> ${creaciones.map((obra) => renderTemplate`<a${addAttribute(`/creaciones/${obra.slug}`, "href")} class="group relative h-[250px] md:h-[350px] block overflow-hidden rounded-sm shadow-xl transition-all duration-500 hover:shadow-2xl">  <div class="absolute inset-0"> <img${addAttribute(obra.data.cover, "src")}${addAttribute(obra.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div> </div>  <div class="absolute inset-0 flex items-center justify-center p-8"> <div class="bg-primary/95 text-white px-8 py-4 border-l-4 border-white transform skew-x-[-12deg] group-hover:scale-105 transition-transform duration-300 shadow-2xl"> <div class="transform skew-x-[12deg]"> <h2 class="font-nav text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter leading-none"> ${obra.data.title} </h2> </div> </div> </div>  <div class="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div> </a>`)} </div> </main> ` })}`;
}, "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/creaciones/index.astro", void 0);

const $$file = "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/creaciones/index.astro";
const $$url = "/creaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
