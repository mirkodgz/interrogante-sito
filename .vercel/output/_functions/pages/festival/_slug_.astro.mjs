import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { r as renderEntry, $ as $$Layout, g as getCollection } from '../../chunks/Layout_CMQicny_.mjs';
import { B as BrandButton } from '../../chunks/BrandButton_BlsFB2BL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://interrogantespettacolo.com");
async function getStaticPaths() {
  const festivalEntries = await getCollection("festival");
  return festivalEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  const { title, subtitle, cover, videoUrl, press, quote, gallery } = entry.data;
  function getYoutubeEmbedUrl(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  }
  const embedVideoUrl = getYoutubeEmbedUrl(videoUrl);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white w-full overflow-x-hidden">  <section class="relative w-full h-[75vh] flex items-center justify-center bg-gray-900 overflow-hidden"> ${cover && renderTemplate`<div class="absolute inset-0 z-0"> <img${addAttribute(cover, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/50"></div> </div>`} <div class="relative z-10 text-center px-4 max-w-7xl mx-auto"> <h1 class="text-white font-serif font-bold text-4xl md:text-6xl lg:text-8xl uppercase tracking-wider drop-shadow-2xl"> ${title} </h1> </div> </section>  <section class="py-20 md:py-32 w-full"> <div class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-20">  <div class="w-full lg:w-1/2"> <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"> ${embedVideoUrl ? renderTemplate`<iframe${addAttribute(embedVideoUrl, "src")} title="YouTube video player" class="absolute inset-0 w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-white/50">
Video no disponible
</div>`} </div> </div>  <div class="w-full lg:w-1/2 flex flex-col gap-8"> ${subtitle && renderTemplate`<h2 class="font-serif font-bold text-2xl md:text-4xl text-black uppercase leading-tight"> ${subtitle} </h2>`} <div class="prose prose-lg text-black font-sans text-lg lg:text-[18px] leading-relaxed text-justify"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section>  ${press && press.length > 0 && renderTemplate`<section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4"> <h2 class="text-center font-nav font-bold text-5xl md:text-7xl text-primary uppercase mb-20 tracking-tighter">
HABLAN DE NOSOTROS
</h2> <div class="flex flex-col md:flex-row gap-12 lg:gap-16 justify-between items-start"> ${press.map((item) => renderTemplate`<div class="flex flex-col items-center flex-1 w-full group"> <h3 class="font-nav font-bold text-2xl lg:text-3xl text-black uppercase mb-6 tracking-wide text-center"> ${item.title} </h3> <a${addAttribute(item.url, "href")} target="_blank" class="w-full aspect-[4/3] rounded-sm overflow-hidden mb-8 shadow-xl block border border-black/5"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"> </a> ${renderComponent($$result2, "BrandButton", BrandButton, { "href": item.url, "variant": "primary", "className": "scale-90 md:scale-100" }, { "default": async ($$result3) => renderTemplate`
VER MÁS
` })} </div>`)} </div> </div> </section>`}  ${quote && renderTemplate`<section class="py-24 px-4 bg-white border-y border-black/5"> <div class="max-w-5xl mx-auto text-center"> <p class="font-nav font-bold text-xl md:text-3xl text-black uppercase leading-relaxed tracking-wide italic">
"${quote}"
</p> </div> </section>`}  ${gallery && gallery.length > 0 && renderTemplate`<section class="py-20 px-4 max-w-[1600px] mx-auto"> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${gallery.map((img) => renderTemplate`<div class="aspect-square rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-100 group"> <img${addAttribute(img, "src")} alt="Galería Festival" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"> </div>`)} </div> </section>`} </main> ` })}`;
}, "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/festival/[slug].astro", void 0);

const $$file = "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/festival/[slug].astro";
const $$url = "/festival/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
