import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_2i0q5hGT.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,15],\"inline\":false,\"attributes\":{\"level\":1},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,15],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,15],\"inline\":true,\"attributes\":{\"content\":\"Cuarta Edición\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":15}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":15}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":15}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[16,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[16,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[16,17],\"inline\":true,\"attributes\":{\"content\":\"Contenido detallado de la cuarta edición del festival...\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":16},\"end\":{\"line\":17}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":16},\"end\":{\"line\":17}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":16},\"end\":{\"line\":17}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options, experimentalHeadingIdCompat);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
	experimentalHeadingIdCompat,
);

export { Content, getHeadings };
