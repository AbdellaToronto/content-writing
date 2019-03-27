const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {styles} = require('@ckeditor/ckeditor5-dev-utils');
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );


module.exports = withTypescript(
  withCSS({
    webpack(config) {
      if (process.env.ANALYZE) {
        return {
          ...config,
          plugins: config.plugins.concat(new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true
          }))
        }
      }

      return {
        ...config,
        plugins: config.plugins.concat(new CKEditorWebpackPlugin( {
          language: 'en'
        } )),
        module: {
          ...config.module,
          rules: [config.module.rules[0], config.module.rules[1], {...config.module.rules[2], exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/}].concat(
            {
              test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
              use: ['raw-loader']
            },

            {
              test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
              use: [
                {
                  loader: 'style-loader',
                  options: {
                    singleton: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: styles.getPostCssConfig({
                    themeImporter: {
                      themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                    },
                    minify: true
                  })
                }
              ]
            },
          )
        }

      };
    },
    cssModules: true,
  })
);
