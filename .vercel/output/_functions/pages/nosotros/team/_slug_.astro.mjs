import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../../../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { g as getEntry, r as renderEntry, $ as $$Layout } from '../../../chunks/Layout_HUSFDQDr.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://interrogantespettacolo.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const entry = await getEntry("team", slug);
  if (!entry) return Astro2.redirect("/404");
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${entry.data.name} - Team` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen">  <section class="relative h-[80vh] w-full overflow-hidden bg-black"> <div class="absolute inset-0"> <img${addAttribute(entry.data.cover, "src")}${addAttribute(entry.data.name, "alt")} class="w-full h-full object-cover opacity-60"> <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> </div> <div class="relative z-10 h-full container mx-auto px-6 flex flex-col justify-end pb-32 items-center"> <h1 class="font-nav text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter text-center"> ${entry.data.name} </h1> </div> </section>  <section class="py-24"> <div class="container mx-auto px-6 max-w-7xl">  <div class="flex flex-col md:flex-row justify-between items-start border-b border-black/10 pb-12 mb-16 gap-8"> <div class="flex flex-col"> <h2 class="font-nav text-4xl md:text-5xl uppercase text-black mb-2 tracking-wide"> ${entry.data.name} </h2> <p class="font-serif text-xl md:text-2xl text-black/70 italic"> ${entry.data.role} </p> </div> <div class="flex gap-6"> ${entry.data.facebook && renderTemplate`<a${addAttribute(entry.data.facebook, "href")} target="_blank" rel="noopener noreferrer" class="text-black hover:text-primary transition-colors"> <span class="sr-only">Facebook</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a>`} ${entry.data.instagram && renderTemplate`<a${addAttribute(entry.data.instagram, "href")} target="_blank" rel="noopener noreferrer" class="text-black hover:text-primary transition-colors"> <span class="sr-only">Instagram</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })} </svg> </a>`} ${entry.data.linkedin && renderTemplate`<a${addAttribute(entry.data.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="text-black hover:text-primary transition-colors"> <span class="sr-only">LinkedIn</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })} </svg> </a>`} </div> </div>  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">  <div class="lg:col-span-4 flex justify-center lg:justify-start"> <div class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-black/5 bg-primary/5"> <img${addAttribute(entry.data.profileImage || entry.data.cover, "src")}${addAttribute(entry.data.name, "alt")} class="w-full h-full object-cover"> </div> </div>  <div class="lg:col-span-8"> <div class="prose prose-lg prose-p:font-sans prose-p:text-black/80 prose-p:leading-relaxed prose-headings:font-serif prose-a:text-primary max-w-none text-justify"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </section> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/nosotros/team/[slug].astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/nosotros/team/[slug].astro";
const $$url = "/nosotros/team/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
