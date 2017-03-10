'use strict';
var Benchmark = require('benchmark');
const _ = require('lodash');
var fixtures = require('../test/fixtures');
var subject = require('../lib/misfit');
var suite = new Benchmark.Suite;


const representationsById = _.reduce(fixtures.allCompleted.representations, function (memo, representation) {
  memo[representation._id] = representation;
  return memo;
}, {});

const accessor = new fixtures.accessor(representationsById);


suite.add('misfit', function () {
  subject(fixtures.allCompleted.comparisons, accessor);
})
    .add('noop', function () {
      fixtures.allCompleted.comparisons.forEach(_.noop);
    })
    .on('error', function (event) {
      console.log('ERROR', event.target.error);
    })
    .on('cycle', function (event) {
      console.log(String(event.target));
    })
    // add listeners
    .on('complete', function (event) {
      console.log(`Fastest is "${this.filter('fastest')[0].name}"`);
    })
    // run async
    .run({'async': true});