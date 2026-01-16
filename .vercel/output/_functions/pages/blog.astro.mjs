import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, F as Fragment } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { a as getCollection, $ as $$Layout } from '../chunks/Layout_HUSFDQDr.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Interrogante Spettacolo" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-24">  <div class="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden mb-16"> <div class="z-10 text-center px-6"> <h1 class="font-nav text-5xl md:text-7xl text-white uppercase tracking-tighter">
BLOG
</h1> <p class="font-serif text-white/80 mt-4 text-lg italic">
Reseñas, entrevistas y pensamientos.
</p> </div>  <div class="absolute inset-0 opacity-40"> <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div> </div> </div>  <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"> ${sortedPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block h-full flex flex-col"> <div class="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100"> ${post.data.cover ? renderTemplate`<img${addAttribute(post.data.cover, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-gray-400"> <span class="text-xs uppercase">
Sin Imagen
</span> </div>`} <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div> </div> <div class="flex flex-col flex-grow"> <div class="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 mb-3 font-sans font-bold"> ${post.data.date && renderTemplate`<span> ${new Date(
    post.data.date
  ).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </span>`} ${post.data.author && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <span class="w-1 h-1 rounded-full bg-gray-400"></span> <span>${post.data.author}</span> ` })}`} </div> <h2 class="font-nav text-2xl leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2"> ${post.data.title} </h2> ${post.data.summary && renderTemplate`<p class="font-sans text-gray-600 line-clamp-3 text-sm leading-relaxed mb-4 flex-grow"> ${post.data.summary} </p>`} <span class="inline-block text-xs uppercase tracking-widest border-b border-black pb-0.5 self-start group-hover:border-primary group-hover:text-primary transition-colors">
Leer Artículo
</span> </div> </a>`)} </div> </div> </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/blog/index.astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
