import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { $ as $$Layout, c as contactInfo } from '../chunks/Layout_CMQicny_.mjs';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const facebookUrl = contactInfo.social.facebook;
  const instagramUrl = contactInfo.social.instagram;
  const linkedinUrl = contactInfo.social.linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto | Interrogante Spettacolo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>  <div class="relative h-[80vh] w-full bg-black overflow-hidden"> <video class="absolute inset-0 w-full h-full object-cover opacity-90" autoplay muted loop playsinline> <source src="https://res.cloudinary.com/dskliu1ig/video/upload/v1768568868/Video-Contactanos_jtw4nx.mp4" type="video/mp4"> </video> <div class="absolute inset-0 bg-black/20"></div> </div>  <div class="bg-primary text-white py-16 relative z-10"> <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start">  <div class="flex flex-col items-center gap-6"> ${renderComponent($$result2, "Mail", Mail, { "className": "w-12 h-12", "strokeWidth": 1 })} <div class="flex flex-col items-center font-nav text-xl md:text-2xl tracking-wider uppercase leading-snug"> <a href="mailto:kaluaarauz@gmail.com" class="hover:text-secondary transition-colors">kaluaarauz@gmail.com</a> <a href="mailto:kalua@interrogantespettacolo.com" class="hover:text-secondary transition-colors">kalua@interrogantespettacolo.com</a> </div> </div>  <div class="flex flex-col items-center gap-6 md:border-l md:border-r border-white/20"> ${renderComponent($$result2, "Phone", Phone, { "className": "w-12 h-12", "strokeWidth": 1 })} <div class="flex flex-col items-center font-nav text-xl md:text-2xl tracking-wider uppercase leading-snug"> <a href="tel:+393921683752" class="hover:text-secondary transition-colors">+39 392 168 3752</a> <a href="tel:+393276205332" class="hover:text-secondary transition-colors">+39 327 620 5332</a> </div> </div>  <div class="flex flex-col items-center gap-6"> <div class="flex gap-4"> <a${addAttribute(facebookUrl, "href")} target="_blank" rel="noopener noreferrer" class="border-2 border-white p-2 rounded-sm hover:bg-white hover:text-primary transition-colors duration-300"> ${renderComponent($$result2, "Facebook", Facebook, { "className": "w-8 h-8", "strokeWidth": 1.5 })} </a> <a${addAttribute(instagramUrl, "href")} target="_blank" rel="noopener noreferrer" class="border-2 border-white p-2 rounded-sm hover:bg-white hover:text-primary transition-colors duration-300"> ${renderComponent($$result2, "Instagram", Instagram, { "className": "w-8 h-8", "strokeWidth": 1.5 })} </a> <a${addAttribute(linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" class="border-2 border-white p-2 rounded-sm hover:bg-white hover:text-primary transition-colors duration-300"> ${renderComponent($$result2, "Linkedin", Linkedin, { "className": "w-8 h-8", "strokeWidth": 1.5 })} </a> </div> <span class="font-nav text-xl md:text-2xl tracking-widest uppercase font-bold">SOCIAL</span> </div> </div> </div> </div>  <div class="bg-white py-32 text-center"> <h1 class="font-nav text-6xl md:text-8xl lg:text-9xl text-primary uppercase tracking-tighter leading-none">
CONTÁCTANOS
</h1> </div> </main> ` })}`;
}, "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
