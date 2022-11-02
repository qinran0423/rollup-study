System.register(['lodash-es'], (function () {
  'use strict';
  var camelCase;
  return {
    setters: [function (module) {
      camelCase = module.camelCase;
    }],
    execute: (function () {

      const log = msg => {
        console.log('---------- INFO ----------');
        console.log(msg);
        console.log('--------------------------');
      };

      var messages = {
        hi: 'Hey Guys, I am zce~'
      };

      var name = "rollup-study";
      var version = "1.0.0";

      console.log(name, version);
      log(messages.hi);
      console.log(camelCase('hello rollup'));

    })
  };
}));
