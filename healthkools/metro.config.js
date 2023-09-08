const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

/*module.exports = mergeConfig((async () => {
    const {
      resolver: { sourceExts, assetExts },
    } = await getDefaultConfig(__dirname);
    return {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'jsx', 'js', 'json', 'ts', 'tsx', 'svg'],
      },
    };
  })());*/