const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano");
const cssDeclarationSorter = require("css-declaration-sorter");
const postcssAlias = require("postcss-alias");
const postcssConditionals = require("postcss-conditionals");
const postcssCustomMedia = require("postcss-custom-media");
const postcssFunctions = require("postcss-functions");
const postcssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const postcssPxtorem = require("postcss-pxtorem");
const postcssScss = require("postcss-scss")

module.exports = {
    plugins: [
        postcssScss(),
        autoprefixer(),
        cssnano(),
        cssDeclarationSorter(),
        postcssAlias(),
        postcssConditionals(),
        postcssCustomMedia(),
        postcssFunctions(),
        postcssImport(),
        postcssPresetEnv({
            stage: 1
        }),
        postcssPxtorem()
    ]
}