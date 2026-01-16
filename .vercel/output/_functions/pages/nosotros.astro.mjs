import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { a as getCollection, $ as $$Layout } from '../chunks/Layout_HUSFDQDr.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { M as MotionPreset, S as SectionHeader } from '../chunks/SectionHeader_C9zL316p.mjs';
import { B as BrandButton } from '../chunks/BrandButton_BlsFB2BL.mjs';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const AboutHero = () => {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[90vh] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768534859/FotoGrupo1_sfbyvs.webp",
          alt: "Nosotros - Interrogante Spettacolo",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
      MotionPreset,
      {
        fade: true,
        scale: true,
        transition: { duration: 1 },
        children: /* @__PURE__ */ jsx("h1", { className: "font-serif text-white text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mix-blend-overlay opacity-90", children: "Nosotros" })
      }
    ) })
  ] });
};

const AboutDescription = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "py-24 px-6 md:px-12 lg:px-24 text-white",
      style: {
        background: "linear-gradient(90deg, #050505, var(--color-primary, #4338ab), #050505)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-12", children: [
        /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 30 }, delay: 0.2, children: /* @__PURE__ */ jsx("h2", { className: "font-nav text-5xl md:text-7xl uppercase tracking-normal drop-shadow-lg", children: "INTERROGANTE SPETTACOLO" }) }),
        /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 30 }, delay: 0.4, children: /* @__PURE__ */ jsxs("div", { className: "font-sans text-lg md:text-xl leading-relaxed space-y-8 text-white/90", children: [
          /* @__PURE__ */ jsx("p", { children: "Interrogante Spettacolo es una compañía internacional de creación artística multicultural, fundada en La Habana y actualmente con sede en Milán. La iniciativa surge de la visión de Kalua Rodríguez, quien buscaba establecer un espacio innovador y experimental para graduados en pedagogía con inquietudes artísticas. Su experiencia como actriz y emigrante en Europa la llevó a comprender el poder del arte como medio para la reconexión personal y social, ofreciendo experiencias significativas a través del teatro y otras formas creativas." }),
          /* @__PURE__ */ jsx("p", { children: "Organizada como una asociación sin fines de lucro, Interrogante Spettacolo se dedica a la producción artística y a la enseñanza del español en Italia, utilizando un enfoque que combina la rica herencia cultural latinoamericana con metodologías pedagógicas creativas. La propuesta de la compañía no solo mejora las competencias lingüísticas de los estudiantes, sino que también promueve su desarrollo artístico, estableciendo un vínculo profundo con el idioma español a través de la expresión y la creatividad. Esto ha permitido que Interrogante Spettacolo se convierta en un referente en la formación de docentes y estudiantes, creando un entorno en el que el arte y la creatividad son fundamentales para un aprendizaje transformador." }),
          /* @__PURE__ */ jsx("p", { children: "Desde hace tres años, Interrogante Spettacolo colabora estrechamente con el Instituto Cervantes de Milán, contribuyendo al enriquecimiento cultural y educativo de la comunidad hispanohablante. Además, mantiene alianzas con instituciones culturales de renombre en la ciudad, como el Museo de las Culturas de Milán, el Pabellón de Arte Contemporáneo (PAC), la Fabbrica del Vapore, la Asociación Cultural CUBEART, la Casa della Poesia di Milano y la Accademia dei Filodrammatici de Milán. Su misión es transformar la enseñanza del español en Italia a través de un enfoque creativo que combina elementos artísticos y teatrales, estableciendo un estándar innovador que inspire y mejore el proceso educativo. Con un compromiso firme hacia la excelencia, Interrogante Spettacolo celebra la diversidad cultural y fomenta el crecimiento colaborativo mediante el intercambio de experiencias y el desarrollo de redes de aprendizaje." })
        ] }) })
      ] })
    }
  );
};

const TeamList = ({ teamMembers }) => {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "NUESTRO EQUIPO",
        highlightedWord: "EQUIPO",
        className: "mb-16"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs(
      MotionPreset,
      {
        fade: true,
        slide: { direction: "up", offset: 30 },
        delay: index * 0.2,
        className: "flex flex-col items-center group text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative w-64 h-64 mb-8", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: member.data.profileImage || member.data.cover,
              alt: member.data.name,
              className: "w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
            }
          ) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-nav text-3xl font-bold uppercase text-black mb-2 tracking-wide", children: member.data.name }),
          /* @__PURE__ */ jsx("p", { className: "font-sans text-sm text-black/70 mb-6", children: member.data.role }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-5 mb-8 text-black justify-center w-full", children: [
            member.data.facebook && /* @__PURE__ */ jsx("a", { href: member.data.facebook, target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Facebook, { size: 22 }) }),
            member.data.instagram && /* @__PURE__ */ jsx("a", { href: member.data.instagram, target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 22 }) }),
            member.data.linkedin && /* @__PURE__ */ jsx("a", { href: member.data.linkedin, target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { size: 22 }) })
          ] }),
          /* @__PURE__ */ jsx(
            BrandButton,
            {
              text: "LEER MÁS",
              href: `/nosotros/team/${member.slug}`,
              variant: "primary",
              className: "!px-8"
            }
          )
        ]
      },
      member.id
    )) })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const teamMembers = await getCollection("team");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - Interrogante Spettacolo" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "AboutHero", AboutHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/interrogante-sitoweb/src/components/blocks/AboutHero", "client:component-export": "default" })} ${renderComponent($$result2, "AboutDescription", AboutDescription, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/interrogante-sitoweb/src/components/blocks/AboutDescription", "client:component-export": "default" })} ${renderComponent($$result2, "TeamList", TeamList, { "client:load": true, "teamMembers": teamMembers, "client:component-hydration": "load", "client:component-path": "D:/interrogante-sitoweb/src/components/blocks/TeamList", "client:component-export": "default" })} </main> ` })}`;
}, "D:/interrogante-sitoweb/src/pages/nosotros/index.astro", void 0);

const $$file = "D:/interrogante-sitoweb/src/pages/nosotros/index.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
