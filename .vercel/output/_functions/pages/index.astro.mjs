import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C-Iz92b6.mjs';
import 'piccolore';
import { b as cn, g as getCollection, $ as $$Layout } from '../chunks/Layout_CMQicny_.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { S as SectionHeader, M as MotionPreset } from '../chunks/SectionHeader_DcC6qSMl.mjs';
import { B as BrandButton } from '../chunks/BrandButton_BlsFB2BL.mjs';
import Autoplay from 'embla-carousel-autoplay';
import { C as Carousel, a as CarouselContent, b as CarouselItem } from '../chunks/carousel_CG54Kyy0.mjs';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function Hero() {
  return (
    /* SECCIÓN: HERO - CINEMATIC BACKGROUND */
    /* @__PURE__ */ jsx("section", { className: "h-[90vh] relative overflow-hidden bg-black p-0 m-0", children: /* @__PURE__ */ jsx(
      "video",
      {
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover z-0",
        children: /* @__PURE__ */ jsx(
          "source",
          {
            src: "https://res.cloudinary.com/dskliu1ig/video/upload/v1768093257/videohomepage-interrogante_l8tsbd.mp4",
            type: "video/mp4"
          }
        )
      }
    ) })
  );
}

const strips = [
  { text: "TRANSFORMA", color: "bg-secondary", direction: -1 },
  // Left
  { text: "LA ENSEÑANZA", color: "bg-primary", direction: 1 },
  // Right
  { text: "DESPIERTA", color: "bg-black", direction: -1 },
  // Left
  { text: "LA CREATIVIDAD.", color: "bg-primary", direction: 1 }
  // Right
];
function TextStrips() {
  return (
    /* SECCIÓN: CINTAS DINÁMICAS - CONCEPTOS */
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#f8f8f8] overflow-hidden flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-[650px] flex flex-col gap-2 px-6", children: strips.map((strip, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { x: strip.direction * 100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: {
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.215, 0.61, 0.355, 1]
        },
        className: `
              ${strip.color} 
              py-[10px] 
              w-full 
              flex 
              items-center 
              justify-center 
              shadow-lg
              ${index % 2 === 0 ? "-rotate-2" : "rotate-2"}
            `,
        children: /* @__PURE__ */ jsx("span", { className: "text-white font-nav text-[44px] font-[700] tracking-[3px] leading-none uppercase", children: strip.text })
      },
      index
    )) }) })
  );
}

const AboutSection = () => {
  return (
    /* SECCIÓN: ABOUT / INTRO - FONDO GRADIENTE DIVIDIDO */
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 z-0",
          style: {
            background: "conic-gradient(from 180deg at 50% 50%, #4338ab 0deg, #4338ab 180deg, #a48956 180deg, #a48956 360deg)"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-6 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx(
          SectionHeader,
          {
            title: "Interrogante Spettacolo",
            highlightedWord: "Spettacolo",
            variant: "dark",
            className: "mb-12"
          }
        ),
        /* @__PURE__ */ jsx(
          MotionPreset,
          {
            fade: true,
            slide: { direction: "up", offset: 40 },
            delay: 0.6,
            transition: { duration: 0.8 },
            className: "w-full max-w-5xl mb-12",
            children: /* @__PURE__ */ jsx("div", { className: "relative aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768501444/FotoGrupoWhiteAdnBlack-1024x566-1_gdumnd.webp",
                alt: "Grupo Interrogante Spettacolo",
                className: "w-full h-full object-cover"
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          MotionPreset,
          {
            fade: true,
            slide: { direction: "up", offset: 30 },
            delay: 0.8,
            transition: { duration: 0.8 },
            className: "max-w-4xl text-center mb-12",
            children: /* @__PURE__ */ jsx("p", { className: "text-white/90 text-[16px] font-normal leading-relaxed", children: "Organizada como una asociación sin fines de lucro, Interrogante Spettacolo se dedica a la producción artística y a la enseñanza del español en Italia, utilizando un enfoque que combina la rica herencia cultural latinoamericana con metodologías pedagógicas creativas. La propuesta de la compañía no solo mejora las competencias lingüísticas de los estudiantes, sino que también promueve su desarrollo artístico, estableciendo un vínculo profundo con el idioma español a través de la expresión y la creatividad. Esto ha permitido que Interrogante Spettacolo se convierta en un referente en la formación de docentes y estudiantes, creando un entorno en el que el arte y la creatividad son fundamentales para un aprendizaje transformador." })
          }
        ),
        /* @__PURE__ */ jsx(
          MotionPreset,
          {
            fade: true,
            slide: { direction: "up", offset: 20 },
            delay: 1,
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(
              BrandButton,
              {
                text: "Conócenos más",
                href: "/nosotros/",
                variant: "white"
              }
            )
          }
        )
      ] })
    ] })
  );
};

const PortfolioContent = ({ portfolioItems }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const getSlideScale = () => {
    return "md:basis-1/2 lg:basis-1/3";
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsx(
      Carousel,
      {
        setApi,
        opts: {
          align: "center",
          loop: false,
          containScroll: false,
          // Permite centrar la primera y última foto aunque no haya loop
          slidesToScroll: 1,
          duration: 45
        },
        plugins: [
          Autoplay({
            delay: 5e3,
            stopOnInteraction: false,
            stopOnFocusIn: false
          })
        ],
        children: /* @__PURE__ */ jsx(CarouselContent, { className: "ml-0", children: portfolioItems.map((item, index) => {
          const isActive = current === index;
          return /* @__PURE__ */ jsx(
            CarouselItem,
            {
              className: cn(
                "flex basis-full cursor-grab items-center justify-center transition-all duration-700 ease-in-out px-4 py-8",
                getSlideScale(),
                !isActive && "scale-90 opacity-30 blur-[2px]"
                // Más desenfoque a los lados para resaltar el centro
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8 w-full transition-transform duration-700", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => !isActive && api?.scrollTo(index),
                    className: cn(
                      "relative overflow-hidden rounded-xl w-full aspect-[4/3] shadow-2xl transition-all duration-700 cursor-pointer",
                      isActive ? "shadow-primary/40 ring-1 ring-black/5 scale-105" : "shadow-none"
                    ),
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: item.image,
                        alt: item.title,
                        className: "w-full h-full object-cover rounded-xl"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "w-full space-y-3 text-center transition-all duration-700 min-h-[120px]",
                  isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-40 translate-y-2 scale-90 blur-[1px]"
                ), children: [
                  /* @__PURE__ */ jsx("h3", { className: cn(
                    "font-nav font-bold text-black uppercase transition-all duration-700",
                    isActive ? "text-2xl lg:text-3xl tracking-normal" : "text-lg lg:text-xl tracking-normal opacity-40"
                  ), children: item.title }),
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "flex items-center justify-center gap-2 text-black font-sans text-base transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-0"
                  ), children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-normal", children: item.description }),
                    item.collaboratorLogo && /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: item.collaboratorLogo,
                        alt: "Colaborador",
                        className: "w-[35px] h-[35px] object-contain rounded-sm border border-black/10 bg-white p-0.5"
                      }
                    )
                  ] })
                ] })
              ] })
            },
            item.id
          );
        }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center gap-3", children: portfolioItems.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => api?.scrollTo(index),
          className: cn(
            "rounded-full transition-all duration-500",
            index === current ? "w-10 h-2.5 bg-primary shadow-md shadow-primary/40" : "w-2.5 h-2.5 bg-black/30 hover:bg-black/60"
            // Puntos inactivos más visibles
          ),
          "aria-label": `Go to project ${index + 1}`
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("span", { className: "text-black/40 text-[11px] font-nav lg:text-[12px] tracking-[3px] uppercase", children: [
        current + 1,
        " / ",
        portfolioItems.length
      ] })
    ] })
  ] });
};

const Portfolio = ({ portfolioItems }) => {
  return (
    /* SECCIÓN: PORTAFOLIO / PROYECTOS */
    /* @__PURE__ */ jsxs("section", { className: "space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24 bg-[#efeff6] text-black", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "Cursos y talleres en español",
          highlightedWord: "Cursos y talleres",
          description: "Diseñamos experiencias de formación en español que transforman el aprendizaje en una vivencia artística y significativa. Inspirados en valores como la autenticidad, la innovación, la colaboración y la excelencia educativa, nuestras propuestas combinan técnicas teatrales y creativas con una profunda conexión cultural latinoamericana e hispana.\r\n\r\nOfrecemos actividades que inspiran a profesores, estudiantes y público en general, fomentando la creatividad, el crecimiento personal y profesional",
          className: "mb-8"
        }
      ) }) }),
      /* @__PURE__ */ jsx(MotionPreset, { fade: true, slide: { direction: "up", offset: 20 }, delay: 1, transition: { duration: 0.6 }, children: /* @__PURE__ */ jsx(PortfolioContent, { portfolioItems }) })
    ] })
  );
};

const FestivalCTA = () => {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex flex-col items-center", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "FESTIVAL",
        highlightedWord: "FESTIVAL",
        className: "mb-12"
      }
    ),
    /* @__PURE__ */ jsx(
      MotionPreset,
      {
        fade: true,
        slide: { direction: "up", offset: 40 },
        delay: 0.2,
        transition: { duration: 0.8 },
        className: "w-full max-w-6xl mb-12",
        children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[21/9] rounded-sm overflow-hidden group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768526709/A-Piedi-Nudi-FotoCover-Home_vbnzeg.jpg",
              alt: "Festival A Piedi Nudi",
              className: "w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 group-hover:bg-black/0 transition-colors duration-500" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      MotionPreset,
      {
        fade: true,
        slide: { direction: "up", offset: 20 },
        delay: 0.4,
        transition: { duration: 0.6 },
        children: /* @__PURE__ */ jsx(
          BrandButton,
          {
            text: "Descubre el Festival",
            href: "/festival/",
            variant: "primary",
            className: "scale-110"
          }
        )
      }
    )
  ] }) });
};

const NewsSection = () => {
  const newsItems = [
    {
      title: "A PIEDI NUDI 4",
      highlightedWord: "4",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768527003/Foto-Cover-APN4_fvdqfy.jpg",
      href: "#"
    },
    {
      title: "LA CARRETILLA",
      highlightedWord: "CARRETILLA",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768527018/la-carettilla-img-is_ormeeq.jpg",
      href: "/la-carretilla/"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-white border-t border-black/5", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "NEWS",
        highlightedWord: "NEWS",
        className: "mb-16"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto", children: newsItems.map((item, index) => /* @__PURE__ */ jsxs(
      MotionPreset,
      {
        fade: true,
        slide: { direction: "up", offset: 30 },
        delay: 0.2 * index,
        transition: { duration: 0.8 },
        className: "flex flex-col items-center group",
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-nav font-bold text-3xl md:text-4xl text-black uppercase mb-8 tracking-tighter", children: [
            item.title.split(item.highlightedWord)[0],
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: item.highlightedWord }),
            item.title.split(item.highlightedWord)[1]
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-8", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
          ] }),
          /* @__PURE__ */ jsx(
            BrandButton,
            {
              text: "VER MÁS",
              href: item.href,
              variant: "primary",
              className: "scale-90 md:scale-100"
            }
          )
        ]
      },
      index
    )) })
  ] }) });
};

const BlogSection = ({ blogItems }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });
  const scrollPrev = React__default.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React__default.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-[#efeff6] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        title: "BLOG EN ESPAÑOL",
        highlightedWord: "BLOG",
        className: "mb-16"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto px-12", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: scrollPrev,
          className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none",
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 48, strokeWidth: 1 })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: scrollNext,
          className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-black/40 hover:text-primary transition-colors focus:outline-none",
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 48, strokeWidth: 1 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsx("div", { className: "flex gap-6", children: blogItems.map((item) => /* @__PURE__ */ jsx("div", { className: "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0", children: /* @__PURE__ */ jsxs(
        MotionPreset,
        {
          fade: true,
          slide: { direction: "up", offset: 20 },
          className: "bg-white rounded-sm overflow-hidden shadow-sm h-full flex flex-col group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-square w-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: item.data.cover || "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800",
                alt: item.data.title,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col items-center flex-grow", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-nav font-bold text-[18px] text-center uppercase tracking-tight leading-tight mb-8 min-h-[3rem] line-clamp-2", children: item.data.title }),
              /* @__PURE__ */ jsx(
                BrandButton,
                {
                  text: "LEER MÁS",
                  href: `/blog/${item.slug}`,
                  variant: "primary",
                  showArrow: true,
                  className: "mt-auto scale-90"
                }
              )
            ] })
          ]
        }
      ) }, item.id)) }) })
    ] })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogItems = await getCollection("blog");
  const portfolioItems = [
    {
      id: "1",
      title: "Talleres culturales",
      description: "Colaboracion con :",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768143765/LavoratoriCreativiv2_p8nkt8.webp",
      collaboratorLogo: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768143720/256px-Logotipo_del_Instituto_Cervantes.svg_wea4va.png"
    },
    {
      id: "2",
      title: "Taller de microteatro",
      description: "Colaboracion con :",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768144875/Imagen-TallerdeMicroteatro_md5tl8.jpg",
      collaboratorLogo: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768143720/256px-Logotipo_del_Instituto_Cervantes.svg_wea4va.png"
    },
    {
      id: "3",
      title: "Formaci\xF3n para profesores",
      description: "Colaboracion con :",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768145257/Foto-v1s22134_r4yrrn.jpg",
      collaboratorLogo: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768143720/256px-Logotipo_del_Instituto_Cervantes.svg_wea4va.png"
    },
    {
      id: "4",
      title: "Jugando en espa\xF1ol",
      description: "Interrogante Spettacolo",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768145671/JugandoEnEspanol-DEF_sbobsb.jpg",
      collaboratorLogo: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768145671/JugandoEnEspanol-DEF_sbobsb.jpg"
    },
    {
      id: "5",
      title: "Crea tu taller",
      description: "Colaboracion con :",
      image: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768146634/CreatuTallerCover_v9fy5l.jpg",
      collaboratorLogo: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768143720/256px-Logotipo_del_Instituto_Cervantes.svg_wea4va.png"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main>  ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/Hero", "client:component-export": "default" })}  ${renderComponent($$result2, "TextStrips", TextStrips, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/TextStrips", "client:component-export": "default" })}  ${renderComponent($$result2, "PortfolioSection", Portfolio, { "client:load": true, "portfolioItems": portfolioItems, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/PortfolioSection", "client:component-export": "default" })}  ${renderComponent($$result2, "AboutSection", AboutSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/AboutSection", "client:component-export": "default" })}  ${renderComponent($$result2, "FestivalCTA", FestivalCTA, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/FestivalCTA", "client:component-export": "default" })}  ${renderComponent($$result2, "NewsSection", NewsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/NewsSection", "client:component-export": "default" })}  ${renderComponent($$result2, "BlogSection", BlogSection, { "client:load": true, "blogItems": blogItems, "client:component-hydration": "load", "client:component-path": "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/components/blocks/BlogSection", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP-LAPTOP/Desktop/interrogante-sito/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
