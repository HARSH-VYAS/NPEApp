import js from "@eslint/js";
import jasmine from "jasmine";
import globals from "globals";
import tseslint from "@typescript-eslint/parser"


export default [js.configs.recommended,
{
    files: ["**/*.spec.js", "**/*.js", "**/*.ts"],
    plugins: {
       "jasmine" : {jasmine}
    },
    languageOptions: {
        sourceType: "module",
        parser:tseslint,
    
        globals: {
            ...globals.browser,
            ...globals.jquery,
            ...globals.node,
            ...globals.jasmine
          }
    },
    rules: {
        semi: "error",
        "prefer-const": "error"
    },
    
},
];