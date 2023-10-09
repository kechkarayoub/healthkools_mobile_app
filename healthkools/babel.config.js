module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "safe": false,
      "allowUndefined": true
    }],
    ['module-resolver', { root: ['.'] }],
    '@babel/plugin-transform-flow-strip-types',
    ["@babel/plugin-transform-modules-commonjs"],
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-transform-private-property-in-object", { "loose": true }]
  ]
};
