'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    let input = req.query.input
    let initNum = convertHandler.getNum(input)
    let initUnit = convertHandler.getUnit(input)
    if (initNum === false || initUnit === false) {
      return res.send('invalid entry')
    }
    let returnNum = parseFloat(convertHandler.convert(initNum, initUnit).toFixed(5))
    let returnUnit = convertHandler.getReturnUnit(initUnit)
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    console.log(typeof initNum)
    let responseObject = {
      'initNum': initNum,
      'initUnit': initUnit,
      'returnNum': returnNum,
      'returnUnit': returnUnit,
      'string': string,
    }
    res.json(responseObject)
  })
};
