import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
<<<<<<< HEAD
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
=======
  {
    ignores: ["dist/**", "node_modules/**", "build/**", "*.d.ts"]
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  ...tseslint.configs.recommended,
  { 
    files: ["**/*.json"], 
    plugins: { json }, 
    language: "json/json", 
    extends: ["json/recommended"],
    ignores: ["package-lock.json"]
  },
  { 
    files: ["**/*.css"], 
    plugins: { css }, 
    language: "css/css", 
    extends: ["css/recommended"] 
  },
>>>>>>> copilot/fix-92dd1aac-5897-48ae-9cf9-bcbba4fe8a6a
]);
