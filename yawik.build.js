({
  baseUrl: ".",
  mainConfigFile: "config.js",
  name: "bower_components/almond/almond", // assumes a production build using almond
  include: ['yawik'],
  out: "yawik.min.js",
  optimizeCss: "standard",
  stubModules: ['rv', 'amd-loader', 'text']
})