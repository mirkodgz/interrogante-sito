import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getEntry, r as renderEntry, $ as $$Layout } from '../../chunks/Layout_HUSFDQDr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://interrogantespettacolo.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const post = await getEntry("blog", slug);
  if (!post) return Astro2.redirect("/404");
  const { Content } = await renderEntry(post);
  const { title, cover, author, date } = post.data;
  const formattedDate = date ? new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} - Blog` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-24">  <div class="relative h-[45vh] w-full bg-black overflow-hidden flex items-center justify-center"> ${cover && renderTemplate`<div class="absolute inset-0 z-0"> <img${addAttribute(cover, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover opacity-60"> <div class="absolute inset-0 bg-black/40"></div> </div>`} <div class="relative z-10 container mx-auto px-6 text-center max-w-5xl"> <h1 class="font-nav text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter leading-tight drop-shadow-lg"> ${title} </h1> <div class="flex items-center justify-center gap-4 mt-6 text-white/90 font-serif text-lg"> ${author && renderTemplate`<span class="uppercase tracking-widest text-sm font-sans font-bold text-white border-b border-white/30 pb-1"> ${author} </span>`} ${formattedDate && renderTemplate`<span>|</span>`} ${formattedDate && renderTemplate`<span>${formattedDate}</span>`} </div> </div> </div>  <article class="container mx-auto px-6 max-w-4xl py-16 md:py-24"> <div class="prose prose-lg md:prose-xl prose-headings:font-serif prose-p:font-sans prose-p:text-gray-700 prose-a:text-primary max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/blog/[slug].astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
