[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]

# d-pac.misfits

Allows calculation of misfits in a list of data.

## Installation

```sh
$ yarn add d-pac.misfits
```

[npm-url]: https://npmjs.org/package/d-pac.misfits

[npm-image]: https://badge.fury.io/js/d-pac.misfits.svg

[travis-url]: https://travis-ci.org/d-pac/d-pac.misfits

[travis-image]: https://travis-ci.org/d-pac/d-pac.misfits.svg?branch=master

[daviddm-url]: https://david-dm.org/d-pac/d-pac.misfits.svg?theme=shields.io

[daviddm-image]: https://david-dm.org/d-pac/d-pac.misfits

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### calculateMisfits

Misfit calculator

**Parameters**

-   `items` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array of objects
-   `accessor` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Factory for creating accessor objects
    -   `accessor.create` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Factory method creating an accessor object

Returns **{}** Results
