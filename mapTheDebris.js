function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
  
    return arr.map(({name, avgAlt}) => {
      console.log(avgAlt)
      const period = Math.pow((Math.pow((earthRadius + avgAlt), 3) / GM), 0.5) * (2 * Math.PI);
      return {name: name , orbitalPeriod: Math.round(period)}
    });
  }
  
  //tests..
  console.table(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.table(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))