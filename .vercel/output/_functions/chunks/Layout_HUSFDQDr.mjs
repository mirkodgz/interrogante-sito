import { A as AstroError, U as UnknownContentCollectionError, a as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, b as renderTemplate, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, r as renderComponent, c as createAstro, d as addAttribute, h as renderHead, i as renderSlot } from './astro/server_C-Iz92b6.mjs';
import 'piccolore';
/* empty css                          */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_tbLlI_c1.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_hV1IKVkD.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://interrogantespettacolo.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DFc6eAq9.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_BejFLQ8i.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navigationLinks = [
  {
    title: "NOSOTROS",
    href: "/nosotros/"
  },
  {
    title: "CURSOS Y TALLERES",
    href: "#",
    children: [
      {
        title: "TALLERES CULTURALES",
        href: "https://www.eventbrite.es/e/biglietti-laboratori-culturali-arte-cinema-comunicazione-musica-e-teatro-922855745377?aff=odcleoeventsincollection&keep_tld=1",
        external: true
      },
      {
        title: "TALLER DE MICROTEATRO",
        href: "https://milan.cervantes.es/it/cultura_spagnolo/laboratorio_teatro.htm",
        external: true
      },
      {
        title: "FORMACIÓN PARA PROFESORES",
        href: "/formacion-para-profesores/"
      },
      { title: "TALLERES PARA NIÑOS", href: "/talleres-para-ninos/" },
      { title: "CREA TU TALLER", href: "/crea-tu-taller/" }
    ]
  },
  {
    title: "FESTIVAL",
    href: "/festival/",
    children: [
      { title: "Primera Edición - A PIEDI NUDI", href: "/festival/primera-edicion-a-piedi-nudi" },
      { title: "Segunda Edición - A PIEDI NUDI", href: "/festival/segunda-edicion-a-piedi-nudi" },
      { title: "Tercera Edición - A PIEDI NUDI", href: "/festival/tercera-edicion-a-piedi-nudi" },
      { title: "Cuarta Edición - A PIEDI NUDI", href: "/festival/cuarta-edicion-a-piedi-nudi" }
    ]
  },
  {
    title: "CREACIONES",
    href: "/creaciones/",
    children: [
      { title: "De la poesía al teatro", href: "/creaciones/poesia-al-teatro/" },
      { title: "Poetas en paralelo", href: "/creaciones/poetas-en-paralelo/" },
      { title: "CORPUS", href: "/creaciones/corpus/" },
      { title: "Etiquetas", href: "/creaciones/etiquetas/" },
      { title: "Tipos", href: "/creaciones/tipos/" },
      { title: "La Familia Garrigo", href: "/creaciones/la-familia-garrigo/" }
    ]
  },
  {
    title: "PERFORMANCE",
    href: "/performance/",
    children: [
      { title: "MAL NACIDA", href: "/performance/mal-nacida/" },
      { title: "SAGRADA INSTRUCCIÓN", href: "/performance/sagrada-instruccion/" }
    ]
  },
  {
    title: "ASOCIADOS",
    href: "/la-carretilla/"
  },
  {
    title: "PARTNERS",
    href: "/partners/"
  },
  {
    title: "CONTACTO",
    href: "/contacto/"
  }
];
const contactInfo = {
  emails: ["kaluaarauz@gmail.com", "kalua@interrogantespettacolo.com"],
  social: {
    instagram: "https://www.instagram.com/interrogantespettacolo/",
    facebook: "https://www.facebook.com/interrogantespettacolo/",
    linkedin: "https://www.linkedin.com/company/interrogante-spettacolo/"
  }
};

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
);
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] }),
        children
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

function Header({ links }) {
  const displayLinks = links || navigationLinks;
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "fixed top-0 left-0 w-full z-[120] transition-all duration-300",
        scrolled ? "bg-primary shadow-lg py-2" : "bg-primary/90 backdrop-blur-sm py-4"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "relative z-[130] flex items-center group", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/Logo-Interrogante-white2.svg",
            alt: "Interrogante Spettacolo",
            className: "h-[55px] w-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:flex ml-auto items-center gap-1", children: displayLinks.map((link) => /* @__PURE__ */ jsxs(NavigationMenu, { children: [
          /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: link.children ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "!bg-transparent text-white hover:text-secondary transition-colors !font-nav text-[18px] tracking-normal uppercase px-2", children: link.title }),
            /* @__PURE__ */ jsx(NavigationMenuContent, { children: /* @__PURE__ */ jsx("ul", { className: "grid w-[240px] gap-0 p-0 bg-primary border border-white/10 shadow-2xl", children: link.children.map((child) => /* @__PURE__ */ jsx("li", { className: "border-b border-white/5 last:border-0", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(
              "a",
              {
                href: child.href,
                target: child.external ? "_blank" : void 0,
                rel: child.external ? "noopener noreferrer" : void 0,
                className: "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-white",
                children: /* @__PURE__ */ jsx("div", { className: "text-[14px] font-medium leading-none uppercase tracking-normal font-nav text-white", children: child.title })
              }
            ) }) }, child.title)) }) })
          ] }) : /* @__PURE__ */ jsx(
            NavigationMenuLink,
            {
              href: link.href,
              className: "text-white hover:text-secondary transition-colors font-nav text-[18px] tracking-normal uppercase px-2 py-2 block",
              children: link.title
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full mt-2", children: /* @__PURE__ */ jsx(NavigationMenuViewport, { className: "!bg-primary border-none shadow-2xl text-white origin-top-left h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-md transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90" }) })
        ] }, link.title)) }),
        /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "relative z-[130] w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none",
            "aria-label": "Toggle Menu",
            children: [
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 },
                  className: "w-8 h-[1px] bg-white block"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: isOpen ? { rotate: -45, y: -2, width: "32px" } : { rotate: 0, y: 0, width: "20px" },
                  className: "h-[1px] bg-white block"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 h-[100vh] w-full bg-black z-[110] lg:hidden",
            children: /* @__PURE__ */ jsx("div", { className: "flex flex-col h-full pt-32 px-10 overflow-y-auto pb-10", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-8", children: displayLinks.map((link, i) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 + i * 0.05 },
                children: link.children ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-nav text-2xl text-white uppercase tracking-normal", children: link.title }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 pl-4 border-l border-secondary/30", children: link.children.map((child) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: child.href,
                      target: child.external ? "_blank" : void 0,
                      rel: child.external ? "noopener noreferrer" : void 0,
                      onClick: () => setIsOpen(false),
                      className: "font-nav text-[18px] text-gray-400 uppercase tracking-normal hover:text-secondary transition-colors",
                      children: child.title
                    },
                    child.title
                  )) })
                ] }) : /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: link.href,
                    onClick: () => setIsOpen(false),
                    className: "font-nav text-4xl text-white uppercase tracking-normal hover:text-secondary transition-colors",
                    children: link.title
                  }
                )
              },
              link.title
            )) }) })
          }
        ) })
      ] })
    }
  );
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-secondary text-black pt-20 pb-10 border-t border-black/10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "flex flex-col", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://res.cloudinary.com/dskliu1ig/image/upload/v1768532411/InterroganteSpettacolo-V-v3_iytvvk.svg",
            alt: "Interrogante Spettacolo",
            className: "h-48 w-auto object-contain self-start"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-black font-sans text-sm leading-relaxed max-w-sm", children: "Interrogante Spettacolo es una compañía internacional de experimentación artística. Organizada en una asociación sin ánimo de lucro de producción y promoción artística multicultural." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6", children: "DIRECCIÓN: KALUA RODRIGUEZ" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm font-sans space-y-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold", children: "ASSOCIAZIONE INTERROGANTE SPETTACOLO" }),
            /* @__PURE__ */ jsx("p", { children: "Via Per San Pietro 1328" }),
            /* @__PURE__ */ jsx("p", { children: "22010 Carlazzo (CO)" }),
            /* @__PURE__ */ jsx("p", { children: "Codice fiscale: 95142440130" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6", children: "INFO/CONTACTO" }),
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "text-sm font-sans", children: [
              /* @__PURE__ */ jsx("p", { children: "Tel/WhatsApp: +39 392 168 3752" }),
              /* @__PURE__ */ jsx("p", { children: "Dirección: Kalúa Rodríguez" })
            ] }),
            contactInfo.emails.map((email) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, className: "text-sm font-sans hover:underline", children: email }) }, email))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-nav text-lg font-bold uppercase tracking-widest border-l-4 border-white pl-3 mb-6", children: "SÍGUENOS EN" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: contactInfo.social.facebook, target: "_blank", rel: "noopener noreferrer", className: "bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md", children: /* @__PURE__ */ jsx(Facebook, { size: 24, fill: "currentColor" }) }),
          /* @__PURE__ */ jsx("a", { href: contactInfo.social.instagram, target: "_blank", rel: "noopener noreferrer", className: "bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md", children: /* @__PURE__ */ jsx(Instagram, { size: 24 }) }),
          /* @__PURE__ */ jsx("a", { href: contactInfo.social.linkedin, target: "_blank", rel: "noopener noreferrer", className: "bg-white p-2 text-primary hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-md", children: /* @__PURE__ */ jsx(Linkedin, { size: 24, fill: "currentColor" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-black/10 pt-10 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-nav font-bold uppercase tracking-widest", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Interrogante Spettacolo - All rights reserved"
    ] }) })
  ] }) });
}

const $$Astro = createAstro("https://interrogantespettacolo.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Interrogante Spettacolo - Gesti\xF3n y promoci\xF3n de espect\xE1culos de alto nivel"
  } = Astro2.props;
  const creaciones = await getCollection("creaciones");
  const festival = await getCollection("festival");
  const performance = await getCollection("performance");
  const dynamicLinks = navigationLinks.map((link) => {
    if (link.title === "CREACIONES") {
      return {
        ...link,
        children: creaciones.map((c) => ({
          title: c.data.title,
          href: `/creaciones/${c.slug}/`
        }))
      };
    }
    if (link.title === "FESTIVAL") {
      return {
        ...link,
        children: festival.map((f) => ({
          title: f.data.title,
          href: `/festival/${f.slug}/`
        }))
      };
    }
    if (link.title === "PERFORMANCE") {
      return {
        ...link,
        children: performance.map((p) => ({
          title: p.data.title,
          href: `/performance/${p.slug}/`
        }))
      };
    }
    return link;
  });
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Interrogante Spettacolo</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="Interrogante Spettacolo, teatro, festival, cultura, arte, talleres culturales, formación profesores, La Carretilla, espectáculos, Italia, Milán"><link rel="canonical"${addAttribute(new URL(Astro2.url.pathname, Astro2.site), "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(`${title} | Interrogante Spettacolo`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL("/og-image.jpg", Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(`${title} | Interrogante Spettacolo`, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL("/og-image.jpg", Astro2.url), "content")}>${renderHead()}</head> <body class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", Header, { "client:load": true, "links": dynamicLinks, "client:component-hydration": "load", "client:component-path": "D:/interrogante-sitoweb/src/components/blocks/Header", "client:component-export": "default" })} <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", Footer, {})} </body></html>`;
}, "D:/interrogante-sitoweb/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getCollection as a, cn as b, contactInfo as c, getEntry as g, renderEntry as r };
