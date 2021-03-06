'use strict';

const _ = require('lodash');

const pm = require('d-pac.functions').pm;
const stat = require('d-pac.functions').stat;

function fit(cache, aggregated, path, wsr, info) {
  const temp = _.get(cache, path, {
    _infitN: 0,
    _infitD: 0,
  });
  temp._infitN += wsr;
  temp._infitD += info;
  _.set(cache, path, temp);
  _.set(aggregated, path, {
    infit: temp._infitN / temp._infitD
  });
}

/**
 * Misfit calculator
 * @function
 * @param {Array} items - Array of objects
 * @param {Object} accessor - Factory for creating accessor objects
 * @param {Function} accessor.create - Factory method creating an accessor object
 * @returns {{}} - Results
 */
function calculateMisfits(items, accessor) {
  const cache= {};
  const aggregated = {};

  items.forEach(function (item) {
    const obj = accessor.create(item);
    if (isNaN(obj.observed)) {
      return true;
    }
    const pred = pm.rasch(obj.a, obj.b);
    const info = pm.fisher(obj.a, obj.b);
    const wsr = stat.square(obj.observed - pred);

    obj.paths.forEach(function (path) {
      fit(cache, aggregated, path, wsr, info);
    });

  });

  return aggregated;
}

module.exports = calculateMisfits;