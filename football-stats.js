
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

var homeData = []//createHomeData();
var awayData = []//createAwayData();

homeData[0] = {x:0,y:0,player:"test",min:0}
homeData[1] = {x:1,y:0,player:"test",min:0}
homeData[2] = {x:0,y:1,player:"test",min:0}
homeData[3] = {x:1,y:1,player:"test",min:0}

//createDetailMap(createHomeData(), createAwayData());

createDetailMap(homeData, awayData);

//createHeatMap(homeData, awayData);

var currentMapType = "detail";

$("#detail-map-button").click(function(){
  createDetailMap(homeData, awayData);
  currentMapType = "detail"
})

$("#heatmap-button").click(function(){
  createHeatMap(homeData, awayData);
  currentMapType = "heat";
})

var homeTeamShowing = true;
var awayTeamShowing = true;

$("#home-team").click(function(){

  var newHomeData = [];
  var newAwayData = [];

  if(!homeTeamShowing){
      newHomeData = homeData;
      homeTeamShowing = true;
  }else{
      homeTeamShowing = false;
  }

  if(awayTeamShowing){
      newAwayData = awayData;
  }

  if(currentMapType == "heat"){

    createHeatMap(newHomeData, newAwayData);

  }else if(currentMapType == "detail"){

    createDetailMap(newHomeData, newAwayData);

  }
})

$("#away-team").click(function(){

    var newHomeData = [];
    var newAwayData = [];

    if(!awayTeamShowing){
        newAwayData = awayData;
        awayTeamShowing = true;
    }else{
        awayTeamShowing = false;
    }

    if(homeTeamShowing){
        newHomeData = homeData;
    }

    if(currentMapType == "heat"){

      createHeatMap(newHomeData, newAwayData);

    }else if(currentMapType == "detail"){

      createDetailMap(newHomeData, newAwayData);

    }
})



$("#randomizeData").click(function() {

  homeData = createHomeData();
  awayData = createAwayData();

  if(currentMapType == "heat"){

    createHeatMap(homeData, awayData);

  }else if(currentMapType == "detail"){

    createDetailMap(homeData, awayData);

  }

});
