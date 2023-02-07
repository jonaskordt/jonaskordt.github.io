module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: [".eslintrc.js", "build"],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "default-case": "off",
    "import/prefer-default-export": "off",
  },
};
