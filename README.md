[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-url]][daviddm-image]

# d-pac.misfits

Allows calculation of misfits in a list of data.

## Installation

```sh
$ yarn add d-pac.misfits
```

## API

<a name="calculateMisfits"></a>

## calculateMisfits(items, accessor) ⇒ <code>Object</code>
Misfit calculator

**Kind**: global function  
**Returns**: <code>Object</code> - - Results  

| Param | Type | Description |
| --- | --- | --- |
| items | <code>Array</code> | Array of objects |
| accessor | <code>Object</code> | Factory for creating accessor objects |
| accessor.create | <code>function</code> | Factory method creating an accessor object |



[npm-url]: https://npmjs.org/package/d-pac.misfits
[npm-image]: https://badge.fury.io/js/d-pac.misfits.svg
[travis-url]: https://travis-ci.org/d-pac/d-pac.misfits
[travis-image]: https://travis-ci.org/d-pac/d-pac.misfits.svg?branch=master
[daviddm-url]: https://david-dm.org/d-pac/d-pac.misfits.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/d-pac/d-pac.misfits