import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, singleton, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return "";
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return "";
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return "fd8c9a7b4e5d6f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5";
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: process.env.NODE_ENV === "production" ? {
    kind: "github",
    repo: {
      owner: "mirkodgz",
      name: "interrogante-sito"
    }
  } : {
    kind: "local"
  },
  collections: {
    festival: collection({
      label: "Festival",
      slugField: "title",
      path: "src/content/festival/*",
      format: { frontmatter: "yaml", contentField: "content" },
      entryExtension: "mdoc",
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        subtitle: fields.text({ label: "Subtítulo" }),
        edition: fields.text({ label: "Edición (Ej: I Edición)" }),
        date: fields.date({ label: "Fecha" }),
        cover: fields.text({ label: "Imagen de Portada (URL)" }),
        location: fields.text({ label: "Ubicación" }),
        description: fields.text({ label: "Descripción Corta", multiline: true }),
        videoUrl: fields.text({ label: "URL de Youtube" }),
        press: fields.array(
          fields.object({
            title: fields.text({ label: "Medio" }),
            image: fields.text({ label: "Imagen (URL)" }),
            url: fields.text({ label: "Link" })
          }),
          { label: "Prensa" }
        ),
        quote: fields.text({ label: "Frase", multiline: true }),
        gallery: fields.array(fields.text({ label: "URL" }), { label: "Galería" }),
        content: fields.document({ label: "Contenido", formatting: true })
      }
    }),
    creaciones: collection({
      label: "Creaciones",
      slugField: "title",
      path: "src/content/creaciones/*",
      format: { frontmatter: "yaml", contentField: "content" },
      entryExtension: "mdoc",
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        subtitle: fields.text({ label: "Subtítulo" }),
        cover: fields.text({ label: "Imagen de Portada (URL)" }),
        videoUrl: fields.text({ label: "Video URL (Youtube)" }),
        details: fields.text({
          label: "Detalles (Créditos, Info Técnica)",
          multiline: true
        }),
        quote: fields.text({ label: "Frase Destacada", multiline: true }),
        quoteAuthor: fields.text({ label: "Autor de la Frase" }),
        gallery: fields.array(fields.text({ label: "URL de Imagen" }), { label: "Galería de Fotos" }),
        content: fields.document({ label: "Descripción Principal", formatting: true })
      }
    }),
    performance: collection({
      label: "Performance",
      slugField: "title",
      path: "src/content/performance/*",
      format: { frontmatter: "yaml", contentField: "content" },
      entryExtension: "mdoc",
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        date: fields.date({ label: "Fecha" }),
        venue: fields.text({ label: "Lugar" }),
        cover: fields.text({ label: "Imagen (URL)" }),
        videoUrl: fields.text({ label: "Video Breve (Youtube)" }),
        fullVideoUrl: fields.text({ label: "Video Completo (Link)" }),
        gallery: fields.array(fields.text({ label: "Imagen URL" }), { label: "Galería (Carrusel)" }),
        details: fields.text({ label: "Detalles", multiline: true }),
        description: fields.text({ label: "Descripción", multiline: true }),
        content: fields.document({ label: "Contenido", formatting: true })
      }
    }),
    blog: collection({
      label: "Blog",
      slugField: "title",
      path: "src/content/blog/*",
      format: { frontmatter: "yaml", contentField: "content" },
      entryExtension: "mdoc",
      schema: {
        title: fields.slug({ name: { label: "Título" } }),
        date: fields.date({ label: "Fecha" }),
        cover: fields.text({ label: "Imagen de Portada (URL)" }),
        author: fields.text({ label: "Autor" }),
        summary: fields.text({ label: "Resumen/Extracto", multiline: true }),
        content: fields.document({ label: "Contenido", formatting: true })
      }
    }),
    team: collection({
      label: "Team",
      slugField: "name",
      path: "src/content/team/*",
      format: { frontmatter: "yaml", contentField: "content" },
      entryExtension: "mdoc",
      schema: {
        name: fields.slug({ name: { label: "Nombre" } }),
        role: fields.text({ label: "Rol / Cargo" }),
        cover: fields.text({ label: "Foto Portada (Wide/Horizontal)" }),
        profileImage: fields.text({ label: "Foto Perfil (Vertical/Retrato)" }),
        facebook: fields.text({ label: "Facebook URL" }),
        instagram: fields.text({ label: "Instagram URL" }),
        linkedin: fields.text({ label: "LinkedIn URL" }),
        content: fields.document({ label: "Biografía", formatting: true })
      }
    })
  },
  singletons: {
    partners: singleton({
      label: "Página Partners",
      path: "src/content/pages/partners",
      format: { data: "json" },
      schema: {
        collaborators: fields.array(
          fields.image({
            label: "Logo Colaborador",
            directory: "public/images/collaborators",
            publicPath: "/images/collaborators/"
          }),
          { label: "Colaboradores (Logos)" }
        ),
        partners: fields.array(
          fields.image({
            label: "Logo Partner",
            directory: "public/images/partners",
            publicPath: "/images/partners/"
          }),
          { label: "Partners (Logos)" }
        ),
        press: fields.array(
          fields.image({
            label: "Logo Prensa",
            directory: "public/images/press",
            publicPath: "/images/press/"
          }),
          { label: "Prensa (Logos)" }
        )
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
