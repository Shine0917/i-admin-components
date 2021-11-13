const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ["less"],
        },
      },
    },
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            // 将枚举或者联合类型转换成字符串形式，避免字符串字面量显示别名。
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes("node_modules");
              }
              return true;
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        "style-loader",
        "css-loader",
        // 'less-loader'
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              // strictMath: true,
              //           noIeCompat: true
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: [
        path.resolve(__dirname, "../src"),
        /[\\/]node_modules[\\/].*antd/,
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
