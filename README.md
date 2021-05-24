# daytime <sup>[![Version Badge][npm-version-png]][npm-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][npm-url]

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
[npm-version-png]: https://versionbadg.es/ljharb/daytime.svg
[deps-svg]: https://david-dm.org/ljharb/daytime.svg
[deps-url]: https://david-dm.org/ljharb/daytime
[dev-deps-svg]: https://david-dm.org/ljharb/daytime/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/daytime#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/daytime.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/daytime.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/daytime.svg
[downloads-url]: https://npm-stat.com/charts.html?package=daytime
[codecov-image]: https://codecov.io/gh/ljharb/daytime/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/daytime/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/daytime
[actions-url]: https://github.com/ljharb/daytime/actions
