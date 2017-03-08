const _ = require('lodash');

const pm = require('d-pac.functions').pm;
const stat = require('d-pac.functions').stat;

function fit(aggregated, path, wsr, info) {
  const temp = _.get(aggregated, path, {
    _infitN: 0,
    _infitD: 0,
    get infit() {
      return this._infitN / this._infitD;
    }
  });
  temp._infitN += wsr;
  temp._infitD += info;
  _.set(aggregated, path, temp);
}

module.exports = function (items, accessor) {
  const aggregated = {};

  items.forEach(function (item) {
    const obj = accessor.create(item);
    if(isNaN(obj.observed)){
      return true;
    }
    const pred = pm.rasch(obj.a, obj.b);
    const info = pm.fisher(obj.a, obj.b);
    const wsr = stat.square(obj.observed - pred);

    obj.paths.forEach(function (path) {
      fit(aggregated, path, wsr, info);
    });

  });
  return aggregated;
};
