module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};

// Configuration changes are done in .parcelrc file to disable default parcel's babel configuration
// and use babel.config.js configuration for transpilation.
