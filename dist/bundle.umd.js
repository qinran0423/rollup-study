(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lodashEs));
})(this, (function (lodashEs) { 'use strict';

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
  console.log(lodashEs.camelCase('hello rollup'));

}));
