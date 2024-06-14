//

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Type temperature")),
  };

  //debugger;

  console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
