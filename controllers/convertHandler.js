function ConvertHandler() {

  const numSplit = (str, no) => {
    if (!/\d/.test(str)) {
      return 'invalid'
    }
    const regex = /^(\d*\.?\d*)\/?(\d*\.?\d*)/
    let numPart = str.match(regex)[0]
    let unitPart = str.replace(numPart, '')
    let num = eval(numPart).toFixed(2)
    return no ? num : unitPart
  }

  const metric = ['L', 'Km', 'Kg'];
  const imperial = ['gal', 'mi', 'lbs'];
  const bothSystems = metric.concat(imperial).map(x => x.toLowerCase())
  const longUnits = ['litres', 'kilometres', 'kilograms', 'gallons', 'miles', 'pounds']

  this.getNum = function (input) {
    if (input == '' || input == undefined) {
      return 'invalid'
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
    console.log('metric', metricLocale, 'imperial', imperialLocale)
    if (metricLocale >= 0) {
      return imperial[metricLocale]
    } return metric[imperialLocale]
  };

  this.spellOutUnit = function (unit) {
    let result;

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
    return initNum + ' ' + longUnits[bothSystems.indexOf(initUnit)] + ' converts to ' + returnNum + ' ' + longUnits[bothSystems.indexOf(returnUnit.toLowerCase())]
  };

}

module.exports = ConvertHandler;
