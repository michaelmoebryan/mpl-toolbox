const { Kinobi, RenderJavaScriptVisitor } = require("@lorisleiva/kinobi");
const idlDir = `${__dirname}/../idls`;
const clientDir = `${__dirname}/../clients`;

const kinobi = new Kinobi(`${idlDir}/candy_machine_core.json`);
kinobi.accept(new RenderJavaScriptVisitor(`${clientDir}/js/src/generated`));
