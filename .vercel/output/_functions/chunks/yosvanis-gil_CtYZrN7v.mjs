import { c as createGetHeadings, a as createContentComponent, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_2i0q5hGT.mjs';

const markdocConfig = {};
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":true,\"attributes\":{\"content\":\"Yosvanis Gil aporta una visión innovadora como director artístico de la compañía. Su enfoque se centra en la fusión de\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"softbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":true,\"attributes\":{\"content\":\"disciplinas artísticas para crear experiencias teatrales únicas. Con una sólida formación en artes escénicas y una\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":true,\"attributes\":{},\"children\":[],\"type\":\"softbreak\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":true,\"attributes\":{\"content\":\"perspectiva contemporánea, guía la estética visual y narrativa de las producciones de Interrogante Spettacolo.\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
