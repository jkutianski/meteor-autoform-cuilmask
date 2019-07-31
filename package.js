Package.describe({
  name: 'miar:autoform-cuilmask',
  summary: 'Custom cuil masked input type for AutoForm',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'templating@1.0.0',
    'blaze@2.0.0',
    'underscore@1.0.0',
    'aldeed:autoform@6.0.0',
    'igorescobar:jquery-mask-plugin@1.14.16'
  ], 'client');

  api.addFiles([
    'autoform-cuilmask.html',
    'autoform-cuilmask.js'
  ], 'client');
});
