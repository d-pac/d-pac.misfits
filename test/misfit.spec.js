'use strict';

const expect = require('must');
const subject = require('../lib/misfit');
const _ = require('lodash');
const fx = require('./fixtures');

function mapByID(m, o){
  m[o._id] = o;
  return m;
}


describe('misfit', function () {
  describe("spec file", function () {
    it("must be found", function () {
      expect(true).to.be.true();
    });
  });

  describe('module', function () {
    describe('(allCompleted, accessor)', function () {
      const representationsById = _.reduce(fx.allCompleted.representations, mapByID, {});
      let accessor;
      beforeEach(function () {
        accessor = new fx.accessor(representationsById);
      });

      it('should function properly', function () {
        const aggregated = subject(fx.allCompleted.comparisons, accessor);

        fx.allCompleted.output.representation.forEach(function (expected) {
          const actual = aggregated.byRepresentation[expected.representation];
          expect(Number(actual.infit.toFixed( 4 )), `Representation#infit for '${expected.representation}' incorrect`).to.equal(expected.infit);
        });
        fx.allCompleted.output.assessor.forEach(function (expected) {
          const actual = aggregated.byAssessor[expected.assessor];
          expect(Number(actual.infit.toFixed( 4 )), `Assessor#infit for '${expected.assessor}' incorrect`).to.equal(expected.infit);
        });
      });
    });

    describe('(someCompleted, accessor)', function () {
      const representationsById = _.reduce(fx.someCompleted.representations, mapByID, {});
      let accessor;
      beforeEach(function () {
        accessor = new fx.accessor(representationsById);
      });

      it('should function properly', function () {
        const aggregated = subject(fx.someCompleted.comparisons, accessor);

        fx.someCompleted.output.representation.forEach(function (expected) {
          const actual = aggregated.byRepresentation[expected.representation];
          expect(Number(actual.infit.toFixed( 4 )), `Representation#infit for '${expected.representation}' incorrect`).to.equal(expected.infit);
        });
        fx.someCompleted.output.assessor.forEach(function (expected) {
          const actual = aggregated.byAssessor[expected.assessor];
          expect(Number(actual.infit.toFixed( 4 )), `Assessor#infit for '${expected.assessor}' incorrect`).to.equal(expected.infit);
        });
      });
    });
  });
});