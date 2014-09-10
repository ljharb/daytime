
#node-daytime <sup>[![Version Badge][npm-version-png]][npm-url]</sup>

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8]

[![npm badge][11]][npm-url]

[![browser support][9]][10]

npm module to combine two Date objects, "day" and "time", into a new Date object

## Example

```js
var daytime = require('daytime');
var day = new Date('11/11/2013');
var time = new Date('11/11/1111 11:11');
var expected = new Date('11/11/2013 11:11');

assert.equal(daytime(day, time), expected);
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/daytime
[npm-version-png]: http://vb.teelaun.ch/ljharb/node-daytime.svg
[3]: https://travis-ci.org/ljharb/node-daytime.svg
[4]: https://travis-ci.org/ljharb/node-daytime
[5]: https://david-dm.org/ljharb/node-daytime.svg
[6]: https://david-dm.org/ljharb/node-daytime
[7]: https://david-dm.org/ljharb/node-daytime/dev-status.svg
[8]: https://david-dm.org/ljharb/node-daytime#info=devDependencies
[9]: https://ci.testling.com/ljharb/node-daytime.png
[10]: https://ci.testling.com/ljharb/node-daytime
[11]: https://nodei.co/npm/daytime.png?downloads=true&stars=true

