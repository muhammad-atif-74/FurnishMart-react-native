const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add support for CSS/SCSS imports
config.resolver.sourceExts.push("css", "scss", "sass");

module.exports = config;