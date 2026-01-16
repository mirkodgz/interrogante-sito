import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CMQicny_.mjs';
import { CheckCircle2, FileText } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$FormacionParaProfesores = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Formaci\xF3n para Profesores de Espa\xF1ol | Interrogante Spettacolo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white pb-20"> <!-- HERO SECTION --> <section class="relative h-[70vh] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0"> <img src="https://res.cloudinary.com/dskliu1ig/image/upload/v1768570198877/uploaded_image_1_1768570198877.png" alt="Formación para Profesores" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/40"></div> </div> <div class="relative z-10 text-center px-6"> <h1 class="font-nav text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter max-w-5xl mx-auto leading-none drop-shadow-2xl">
FORMACIÓN PARA PROFESORES DE ESPAÑOL
</h1> </div> </section> <!-- SECTION 1: DEL ESCENARIO AL AULA --> <section class="py-24 container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> <div class="relative group"> <div class="absolute -inset-4 bg-primary/5 rounded-sm transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div> <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Workshop" class="relative rounded-sm shadow-2xl w-full aspect-video object-cover"> </div> <div class="flex flex-col gap-6"> <h2 class="font-nav text-3xl md:text-4xl text-primary uppercase tracking-tight leading-tight">
DEL ESCENARIO AL AULA – <span class="text-gray-400">DAL PALCOSCENICO ALL'AULA</span> </h2> <h3 class="font-sans text-xl font-bold text-gray-900 border-l-4 border-secondary pl-4 py-1 italic">
Fundamentos teóricos y prácticos de la Educación
                        Artística para el aprendizaje socioemocional en clases
                        de español
</h3> <div class="font-sans text-gray-700 space-y-4 text-lg leading-relaxed text-justify"> <p>
Un Workshop de 2 horas diseñado para enriquecer la
                            enseñanza del español mediante la educación
                            artística, proporcionando herramientas teóricas y
                            prácticas que potencien la creatividad y el
                            desarrollo integral del docente.
</p> <p>
Se otorga gran importancia al desarrollo de
                            competencias emocionales y relacionales,
                            transformando el aula en un espacio de co-creación y
                            aprendizaje dinámico.
</p> </div> </div> </div> </section> <!-- SECTION 2: CARACTERISTICAS --> <section class="py-24 bg-gray-50"> <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <div class="order-2 lg:order-1 flex flex-col gap-10"> <h2 class="font-nav text-3xl md:text-4xl text-primary uppercase tracking-tight">
EL WORKSHOP SE <span class="text-secondary">CARACTERIZA</span> POR:
</h2> <div class="space-y-8"> ${[
    {
      title: "Interdisciplinariedad",
      desc: "Para descubrir c\xF3mo integrar la educaci\xF3n art\xEDstica con otras disciplinas de manera fluida y efectiva."
    },
    {
      title: "Desarrollo Integral",
      desc: "Para explorar c\xF3mo la educaci\xF3n art\xEDstica contribuye al crecimiento cognitivo, emocional, social y motriz de los estudiantes."
    },
    {
      title: "Aprendizaje Experiencial",
      desc: "Para aprender a crear experiencias significativas mediante actividades art\xEDsticas envolventes y din\xE1micas de grupo."
    },
    {
      title: "Creatividad",
      desc: "Para descubrir c\xF3mo la educaci\xF3n art\xEDstica fomenta la creatividad, competencia esencial para la resoluci\xF3n de problemas."
    }
  ].map((item) => renderTemplate`<div class="flex gap-4 items-start group"> <div class="mt-1 bg-primary/10 p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "className": "w-6 h-6", "strokeWidth": 1.5 })} </div> <div> <h4 class="font-nav text-xl text-primary uppercase mb-1"> ${item.title} </h4> <p class="font-sans text-gray-600 leading-relaxed text-lg"> ${item.desc} </p> </div> </div>`)} </div> </div> <div class="order-1 lg:order-2 grid grid-cols-2 gap-4"> <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop" class="rounded-sm shadow-lg w-full aspect-square object-cover transform translate-y-8" alt="Taller"> <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" class="rounded-sm shadow-lg w-full aspect-square object-cover" alt="Taller"> </div> </div> </div> </section> <!-- SECTION 3: PDF INFORMATIVO --> <section class="py-24 container mx-auto px-6 text-center"> <div class="max-w-3xl mx-auto bg-primary p-12 rounded-sm shadow-2xl transform rotate-1"> <div class="transform -rotate-1"> <h2 class="font-nav text-3xl md:text-4xl text-white uppercase mb-8 tracking-widest">
VISUALIZA NUESTRO PDF INFORMATIVO
</h2> <a href="#" class="inline-flex items-center gap-3 bg-secondary text-white px-10 py-4 rounded-full font-nav tracking-widest uppercase hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-xl"> ${renderComponent($$result2, "FileText", FileText, { "className": "w-6 h-6" })}
Descargar PDF
</a> </div> </div> </section> </main> ` })}`;
}, "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/formacion-para-profesores.astro", void 0);

const $$file = "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/formacion-para-profesores.astro";
const $$url = "/formacion-para-profesores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$FormacionParaProfesores,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
