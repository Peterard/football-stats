function createHomeData(){
  var homeDataArray = [];

  var playerArray = ["Douglas Vieira","Gakuji Ota","Carlos Martínez","Akira Ibayashi ","Alan Pinheiro","Koki Anzai","Henrik Larsson", "Shunsuke Nakamura", "Artur Boruc", "Bobo Balde", "Georgios Samaras"];

  for(var arrayCounter = 0; arrayCounter < 20; arrayCounter++){
    homeDataArray[arrayCounter] = {x: Math.random(),
                                y: Math.random(),
                                player:playerArray[Math.floor(11*Math.random())],
                                min:Math.ceil(90*Math.random())};

  }

  return homeDataArray;
}

function createAwayData(){
  var awayDataArray = [];

  var oppositionArray = ["Ryoya Ogawa","Go Hatano","Takuo Okubo","Masato Morishige","Yohei Kajiyama","Peter Utaka","Sasa Papac", "Kirk Broadfoot", "Kenny Miller", "Lee McCulloch", "Kris Boyd"];

  for(var arrayCounter = 0; arrayCounter < 20; arrayCounter++){
    awayDataArray[arrayCounter] = {x: Math.random(),
                                y: Math.random(),
                                player:oppositionArray[Math.floor(11*Math.random())],
                                min:Math.ceil(90*Math.random())};
  }
    return awayDataArray;
}

function createHomePassingData(){

  var homePassingArray = [];

  var playerArray = ["Douglas Vieira","Gakuji Ota","Carlos Martínez","Akira Ibayashi ","Alan Pinheiro","Koki Anzai","Henrik Larsson", "Shunsuke Nakamura", "Artur Boruc", "Bobo Balde", "Georgios Samaras"];

  for(var arrayCounter = 0; arrayCounter < (1 + Math.random()); arrayCounter++){

    var min = Math.ceil(90*Math.random());

    var innerArray = [];

    for(var secondaryArrayCounter = 0; secondaryArrayCounter < (1 + 3*Math.random()); secondaryArrayCounter++){

      innerArray[secondaryArrayCounter] = {x: Math.random(),
                                  y: Math.random(),
                                  player:playerArray[Math.floor(11*Math.random())],
                                  min:min}

    }

    homePassingArray[arrayCounter] = innerArray;

  }

  return homePassingArray;
}


function createAwayPassingData(){

  var awayPassingArray = [];

  var oppositionArray = ["Ryoya Ogawa","Go Hatano","Takuo Okubo","Masato Morishige","Yohei Kajiyama","Peter Utaka","Sasa Papac", "Kirk Broadfoot", "Kenny Miller", "Lee McCulloch", "Kris Boyd"];

  for(var arrayCounter = 0; arrayCounter < (1 + Math.random()); arrayCounter++){

    var min = Math.ceil(90*Math.random());

    var innerArray = [];

    for(var secondaryArrayCounter = 0; secondaryArrayCounter < (1 + 3*Math.random()); secondaryArrayCounter++){

      innerArray[secondaryArrayCounter] = {x: Math.random(),
                                  y: Math.random(),
                                  player:oppositionArray[Math.floor(11*Math.random())],
                                  min:min}

    }

    awayPassingArray[arrayCounter] = innerArray;

  }

  return awayPassingArray;
}


function transposeData(dataArray){

  var transposedData = [];

  for(var arrayCounter = 0; arrayCounter < dataArray.length; arrayCounter++){
    transposedData[arrayCounter] = {
      x: (1 - dataArray[arrayCounter]["y"]),
      y: dataArray[arrayCounter]["x"],
      player: dataArray[arrayCounter]["player"],
      min: dataArray[arrayCounter]["min"]
    }
  }

  return transposedData;
}

function transposePassingData(dataArray){

  var transposedData = [];

  for(var arrayCounter = 0; arrayCounter < dataArray.length; arrayCounter++){
    var innerArray = [];
    for(var secondaryArrayCounter = 0; secondaryArrayCounter < dataArray[arrayCounter].length; secondaryArrayCounter++){
      innerArray[secondaryArrayCounter] = {
        x: (1 - dataArray[arrayCounter][secondaryArrayCounter]["y"]),
        y: dataArray[arrayCounter][secondaryArrayCounter]["x"],
        player: dataArray[arrayCounter][secondaryArrayCounter]["player"],
        min: dataArray[arrayCounter][secondaryArrayCounter]["min"]
      }
    }
    transposedData[arrayCounter] = innerArray;
  }

  return transposedData;
}


function createMap(creationFunction, homeData, awayData, tHomeData, tAwayData){
  if(isPortrait()){
    creationFunction(tHomeData, tAwayData);
  }else{
    creationFunction(homeData, awayData);
  }
}
