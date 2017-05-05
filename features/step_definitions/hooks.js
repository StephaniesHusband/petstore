// features/step_definitions/hooks.js
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After, Before}) {
   Before(function() {
      this.reset();
   });
});
