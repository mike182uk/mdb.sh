// https://prettier.io/docs/en/configuration

/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  importOrder: [
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderCaseInsensitive: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}
