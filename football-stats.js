var homeData = createHomeData();
var awayData = createAwayData();

var tHomeData = transposeData(homeData);
var tAwayData = transposeData(awayData);

if(isPortrait()){
  createDetailMap(tHomeData, tAwayData);
}else{
  createDetailMap(homeData, awayData);
}

var currentMapType = "detail";

$("#detail-map-button").click(function(){
  if(isPortrait()){
    createDetailMap(tHomeData, tAwayData);
  }else{
    createDetailMap(homeData, awayData);
  }
  currentMapType = "detail"
})

$("#heatmap-button").click(function(){
  if(isPortrait()){
    createHeatMap(tHomeData, tAwayData);
  }else{
    createHeatMap(homeData, awayData);
  };
  currentMapType = "heat";
})

var homeTeamShowing = true;
var awayTeamShowing = true;

$("#home-team").click(function(){

  var newHomeData = [];
  var newAwayData = [];
  var tNewAwayData = [];
  var tNewHomeData = [];

  if(!homeTeamShowing){
      newHomeData = homeData;
      tNewHomeData = tHomeData;
      homeTeamShowing = true;
  }else{
      homeTeamShowing = false;
  }

  if(awayTeamShowing){
      newAwayData = awayData;
      tNewAwayData = tAwayData;
  }

  if(currentMapType == "heat"){

    if(isPortrait()){
        createHeatMap(tNewHomeData, tNewAwayData);
    }else{
        createHeatMap(newHomeData, newAwayData);
    };

  }else if(currentMapType == "detail"){

    if(isPortrait()){
        createDetailMap(tNewHomeData, tNewAwayData);
    }else{
        createDetailMap(newHomeData, newAwayData);
    };

  }
})

$("#away-team").click(function(){

    var newHomeData = [];
    var newAwayData = [];
    var tNewAwayData = [];
    var tNewHomeData = [];

    if(!awayTeamShowing){
        newAwayData = awayData;
        tNewAwayData = tAwayData;
        awayTeamShowing = true;
    }else{
        awayTeamShowing = false;
    }

    if(homeTeamShowing){
        newHomeData = homeData;
        tNewHomeData = tHomeData;
    }

    if(currentMapType == "heat"){

      if(isPortrait()){
          createHeatMap(tNewHomeData, tNewAwayData);
      }else{
          createHeatMap(newHomeData, newAwayData);
      };

    }else if(currentMapType == "detail"){

      if(isPortrait()){
          createDetailMap(tNewHomeData, tNewAwayData);
      }else{
          createDetailMap(newHomeData, newAwayData);
      };

    }
})



$("#randomizeData").click(function() {

  homeData = createHomeData();
  awayData = createAwayData();

  tHomeData = transposeData(homeData);
  tAwayData = transposeData(awayData);


  if(currentMapType == "heat"){

    if(isPortrait()){
        createHeatMap(tHomeData, tAwayData);
    }else{
        createHeatMap(homeData, awayData);
    };

  }else if(currentMapType == "detail"){

    if(isPortrait()){
        createDetailMap(tHomeData, tAwayData);
    }else{
        createDetailMap(homeData, awayData);
    }

  }
  homeTeamShowing = true;
  awayTeamShowing = true;
});


window.onresize = function(event) {

  var newHomeData = [];
  var newAwayData = [];
  var tNewAwayData = [];
  var tNewHomeData = [];

  if(awayTeamShowing){
      newAwayData = awayData;
      tNewAwayData = tAwayData;
  }

  if(homeTeamShowing){
      newHomeData = homeData;
      tNewHomeData = tHomeData;
  }

  if(currentMapType == "heat"){
    if(isPortrait()){
        createHeatMap(tNewHomeData, tNewAwayData);
    }else{
        createHeatMap(newHomeData, newAwayData);
    };
  }else if(currentMapType == "detail"){
    if(isPortrait()){
        createDetailMap(tNewHomeData, tNewAwayData);
    }else{
        createDetailMap(newHomeData, newAwayData);
    };
  }

}
