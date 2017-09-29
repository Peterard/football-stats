function createHomeData(){
  var homeDataArray = [];

  var playerArray = ["Douglas Vieira","Gakuji Ota","Carlos Martínez","Akira Ibayashi ","Alan Pinheiro","Koki Anzai","Henrik Larsson", "Shunsuke Nakamura", "Artur Boruc", "Bobo Balde", "Georgios Samaras"];

  for(var arrayCounter = 0; arrayCounter < 20; arrayCounter++){
    homeDataArray[arrayCounter] = {x: Math.random(),
                                y: Math.random(),
                                player:playerArray[Math.floor(11*Math.random())],
                                min:Math.floor(90*Math.random())};

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
                                min:Math.floor(90*Math.random())};
  }
    return awayDataArray;
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
