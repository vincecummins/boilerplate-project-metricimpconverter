function ConvertHandler() {

  const numSplit = (str, no) => {
    if (!/\d/.test(str)) {
      return 'invalid'
    }
    const regex = /^(\d*\.?\d*)\/?(\d*\.?\d*)/
    let numPart = str.match(regex)[0]
    let unitPart = str.replace(numPart, '')
    let num = eval(numPart).toFixed(2)
    return no ? parseInt(num) : unitPart
  }

  const metric = ['L', 'Km', 'Kg'];
  const imperial = ['gal', 'mi', 'lbs'];
  const bothSystems = metric.concat(imperial).map(x => x.toLowerCase())
  const longUnits = ['litres', 'kilometers', 'kilograms', 'gallons', 'miles', 'pounds']

  this.getNum = function (input) {
    if (input == '' || input == undefined) {
      return 'invalid'
    }
    if (bothSystems.includes(input.toLowerCase())) {
      return 1
    }
    let result = numSplit(input, true)

    return result;
  };

  this.getUnit = function (input) {
    let result = numSplit(input, false).toLowerCase()

    return bothSystems.includes(result.toLowerCase()) ? result : false;
  };

  this.getReturnUnit = function (initUnit) {
    let metricLocale = metric.map(x => x.toLowerCase()).indexOf(initUnit);
    let imperialLocale = imperial.map(x => x.toLowerCase()).indexOf(initUnit);
    if (metricLocale >= 0) {
      return imperial[metricLocale].toLowerCase()
    } return metric[imperialLocale].toLowerCase()
  };

  this.spellOutUnit = function (unit) {
    let result = longUnits[bothSystems.indexOf(unit)]

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit) {
      case 'gal':
        return initNum*galToL
        break;
      case 'l':
        return initNum/galToL
        break;
      case 'lbs':
        return initNum*lbsToKg
        break;
      case 'kg':
        return initNum/lbsToKg
        break;
      case 'mi':
        return initNum*miToKm
        break;
      case 'km':
        return initNum/miToKm
        break;
      default:
        return;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {  
    return initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' +  this.spellOutUnit(returnUnit.toLowerCase())
  };

}

module.exports = ConvertHandler;
