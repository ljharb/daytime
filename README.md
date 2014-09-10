
#node-daytime <sup>[![Version Badge][npm-version-png]][npm-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]

[![npm badge][11]][npm-url]

[![browser support][testling-png]][testling-url]

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
[travis-svg]: https://travis-ci.org/ljharb/node-daytime.svg
[travis-url]: https://travis-ci.org/ljharb/node-daytime
[deps-svg]: https://david-dm.org/ljharb/node-daytime.svg
[deps-url]: https://david-dm.org/ljharb/node-daytime
[dev-deps-svg]: https://david-dm.org/ljharb/node-daytime/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/node-daytime#info=devDependencies
[testling-png]: https://ci.testling.com/ljharb/node-daytime.png
[testling-url]: https://ci.testling.com/ljharb/node-daytime
[11]: https://nodei.co/npm/daytime.png?downloads=true&stars=true

