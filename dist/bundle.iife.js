(function (lodashEs) {
  'use strict';

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

})(lodashEs);
