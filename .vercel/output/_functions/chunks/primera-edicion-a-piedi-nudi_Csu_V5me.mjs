import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_2i0q5hGT.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[29,30],\"inline\":true,\"attributes\":{\"content\":\"Primera Edición del Concierto Espectáculo “PIES DESCALZOS: SUELOS, PUEBLOS Y SUS CONEXIONES”.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":29},\"end\":{\"line\":30}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":false,\"attributes\":{\"level\":1},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[31,32],\"inline\":true,\"attributes\":{\"content\":\"Finalidad\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}}],\"type\":\"heading\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":31},\"end\":{\"line\":32}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[32,33],\"inline\":true,\"attributes\":{\"content\":\"El objetivo es promover y mejorar las expresiones y tradiciones de una comunidad multicultural.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":32},\"end\":{\"line\":33}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
