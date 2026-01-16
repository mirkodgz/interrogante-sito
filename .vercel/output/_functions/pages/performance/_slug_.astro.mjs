import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getEntry, r as renderEntry, $ as $$Layout } from '../../chunks/Layout_HUSFDQDr.mjs';
import { Youtube } from 'lucide-react';
import { C as Carousel, a as CarouselContent, b as CarouselItem, c as CarouselPrevious, d as CarouselNext } from '../../chunks/carousel__vx1qk3N.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://interrogantespettacolo.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const entry = await getEntry("performance", slug);
  if (!entry) return Astro2.redirect("/404");
  const { Content } = await renderEntry(entry);
  const hasGallery = entry.data.gallery && entry.data.gallery.length > 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.title} - Performance` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-24">  <section class="relative h-[60vh] w-full overflow-hidden bg-black mb-16"> ${entry.data.cover && renderTemplate`<div class="absolute inset-0"> <img${addAttribute(entry.data.cover, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-full object-cover opacity-80"> <div class="absolute inset-0 bg-black/20"></div> </div>`} <div class="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-20"> <h1 class="font-nav text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter"> ${entry.data.title} </h1> </div> </section> <div class="container mx-auto px-6 max-w-7xl">   <div class="max-w-4xl mx-auto text-center mb-16"> <div class="prose prose-lg prose-p:font-sans prose-p:text-gray-800 prose-headings:font-serif max-w-none text-justify"> ${renderComponent($$result2, "Content", Content, {})} </div> </div>  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-start">  <div class="flex flex-col"> ${hasGallery ? renderTemplate`<div class="w-full rounded-sm overflow-hidden shadow-2xl bg-gray-100"> ${renderComponent($$result2, "Carousel", Carousel, { "className": "w-full", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/ui/carousel", "client:component-export": "Carousel" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CarouselContent", CarouselContent, {}, { "default": async ($$result4) => renderTemplate`${entry.data.gallery.map((img, idx) => renderTemplate`${renderComponent($$result4, "CarouselItem", CarouselItem, { "key": idx }, { "default": async ($$result5) => renderTemplate` <div class="aspect-[4/5] w-full relative"> <img${addAttribute(img, "src")}${addAttribute(`${entry.data.title} gallery ${idx + 1}`, "alt")} class="absolute inset-0 w-full h-full object-cover"> </div> ` })}`)}` })} ${renderComponent($$result3, "CarouselPrevious", CarouselPrevious, { "className": "left-4" })} ${renderComponent($$result3, "CarouselNext", CarouselNext, { "className": "right-4" })} ` })} </div>` : (
    /* Fallback to Video if no gallery, preserving original Logic for Mal Nacida if desired, 
       OR we can move Video to bottom always? 
       User said "Video breve url ... (embebido en la pagina)" specifically.
       If we have NO gallery, the video is likely the main visual.
       If we HAVE gallery, the gallery is the main visual, video goes bottom.
    */
    entry.data.videoUrl && renderTemplate`<div class="aspect-video w-full rounded-sm overflow-hidden shadow-2xl mb-4 group relative bg-black"> <iframe width="100%" height="100%"${addAttribute(entry.data.videoUrl.replace(
      "watch?v=",
      "embed/"
    ), "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="absolute inset-0 w-full h-full"></iframe> </div>`
  )} </div>  ${entry.data.details && renderTemplate`<div class="bg-primary p-8 md:p-12 rounded-sm text-white shadow-xl h-full">  <div class="font-sans text-sm md:text-base leading-relaxed whitespace-pre-wrap">${unescapeHTML(entry.data.details.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  ).replace(/\n/g, "<br/>"))}</div> </div>`} </div>  ${hasGallery && entry.data.videoUrl && renderTemplate`<div class="max-w-4xl mx-auto mb-12"> <h3 class="font-nav text-2xl uppercase mb-6 text-center">
Video
</h3> <div class="aspect-video w-full rounded-sm overflow-hidden shadow-2xl mb-4 group relative bg-black"> <iframe width="100%" height="100%"${addAttribute(entry.data.videoUrl.replace(
    "watch?v=",
    "embed/"
  ), "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="absolute inset-0 w-full h-full"></iframe> </div> </div>`}  ${entry.data.fullVideoUrl && renderTemplate`<div class="text-center mb-24"> <a${addAttribute(entry.data.fullVideoUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-nav tracking-widest uppercase hover:bg-primary transition-colors duration-300"> ${renderComponent($$result2, "Youtube", Youtube, { "className": "w-5 h-5" })}
Ver Video Completo
</a> </div>`} </div> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/performance/[slug].astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/performance/[slug].astro";
const $$url = "/performance/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
