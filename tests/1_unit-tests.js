const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

    suite('Function convertHandler.getNum(input)', function () {

        test('Whole number input', function (done) {
            var input = '32mi';
            assert.equal(convertHandler.getNum(input), 32);
            done();
        });

        test('decimal number input', function (done) {
            var input = '32.6mi';
            assert.equal(convertHandler.getNum(input), 32.6);
            done();
        });

        test('fractional input', function (done) {
            var input = '1/2mi';
            assert.equal(convertHandler.getNum(input), 1/2);
            done();
        });

        test('fractional input with decimal', function (done) {
            var input = '1/2.5mi';
            assert.equal(convertHandler.getNum(input), 1/2.5);
            done();
        });

        test('double fraction', function (done) {
            var input = '1/2/1mi';
            assert.equal(convertHandler.getUnit(input), false);
            done();
        });


    })

});