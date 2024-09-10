const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "fox",
    projectName: "mediacloud-ux-react-poc",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@fox/mediacloud-ux-sdk-poc"],
    devServer: {
      server: "https",
    },
  });
};
