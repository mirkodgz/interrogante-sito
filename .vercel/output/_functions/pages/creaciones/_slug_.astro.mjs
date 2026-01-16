import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getEntry, r as renderEntry, $ as $$Layout } from '../../chunks/Layout_HUSFDQDr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://interrogantespettacolo.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const entry = await getEntry("creaciones", slug);
  if (!entry) return Astro2.redirect("/404");
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.title} - Creaciones` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-24">  <section class="relative h-[60vh] w-full overflow-hidden bg-black mb-16"> ${entry.data.cover && renderTemplate`<div class="absolute inset-0"> <img${addAttribute(entry.data.cover, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-full object-cover opacity-80"> <div class="absolute inset-0 bg-black/20"></div> </div>`} </section> <div class="container mx-auto px-6 max-w-7xl">  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-start">  <div class="flex flex-col"> ${entry.data.videoUrl && renderTemplate`<div class="aspect-video w-full rounded-sm overflow-hidden shadow-2xl mb-4 group relative bg-black"> <iframe width="100%" height="100%"${addAttribute(entry.data.videoUrl.replace(
    "watch?v=",
    "embed/"
  ), "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="absolute inset-0 w-full h-full"></iframe> </div>`} ${entry.data.videoUrl && renderTemplate`<a${addAttribute(entry.data.videoUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-primary text-center font-serif text-lg hover:underline mt-2">
Video Completo
</a>`} </div>  ${entry.data.details && renderTemplate`<div class="bg-primary p-8 md:p-12 rounded-sm text-white shadow-xl">  <div class="font-sans text-sm md:text-base leading-relaxed whitespace-pre-wrap">${unescapeHTML(entry.data.details.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  ).replace(/\n/g, "<br/>"))}</div> </div>`} </div>  <div class="max-w-4xl mb-24"> <h1 class="font-nav text-5xl md:text-6xl text-black uppercase tracking-tighter mb-8 leading-none"> ${entry.data.title} </h1> <div class="prose prose-lg prose-p:font-sans prose-p:text-gray-800 prose-headings:font-serif text-justify max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </div>  ${entry.data.quote && renderTemplate`<div class="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-24 px-4"> <div class="text-6xl text-black mb-6 font-serif">“</div> <blockquote class="font-serif text-2xl md:text-3xl italic text-black leading-relaxed mb-8"> ${entry.data.quote} </blockquote> ${entry.data.quoteAuthor && renderTemplate`<cite class="font-nav text-xl text-black uppercase tracking-widest not-italic font-bold"> ${entry.data.quoteAuthor} </cite>`} </div>`}  ${entry.data.gallery && entry.data.gallery.length > 0 && renderTemplate`<section> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"> ${entry.data.gallery.map((image, i) => renderTemplate`<div class="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100"> <img${addAttribute(image, "src")}${addAttribute(`Gallery image ${i + 1}`, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div>`)} </div> </section>`} </div> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/creaciones/[slug].astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/creaciones/[slug].astro";
const $$url = "/creaciones/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
