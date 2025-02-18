import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];




//import globals from "globals";
//import pluginJs from "@eslint/js";
//import pluginVue from "eslint-plugin-vue";

///** @type {import('eslint').Linter.FlatConfig[]} */
//export default [
//    {
//        files: ["*/.{js,mjs,cjs,vue}"],
//        languageOptions: {
//            globals: { ...globals.browser, ...globals.node }
//        },
//        rules: {
//            // Indentation: 2 spaces, including for switch cases
//            "indent": [
//                "error",
//                2,
//                { "SwitchCase": 1 }
//            ],
//            // Double quotes for strings, but allow template literals
//            "quotes": [
//                "warn",
//                "double",
//                { "avoidEscape": true, "allowTemplateLiterals": true }
//            ],
//            // Always require parentheses for arrow functions
//            "arrow-parens": [
//                "error",
//                "always"
//            ]
//        }
//    },
//    pluginJs.configs.recommended,
//    ...pluginVue.configs["flat/essential"],
//];