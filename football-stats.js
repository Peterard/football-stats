var homeData = createHomeData();
var awayData = createAwayData();

var tHomeData = transposeData(homeData);
var tAwayData = transposeData(awayData);

var homePassingData = createHomePassingData();
var awayPassingData = createAwayPassingData();

var tHomePassingData = transposePassingData(homePassingData);
var tAwayPassingData = transposePassingData(awayPassingData);

createMap(createHeatMap, homeData, awayData, tHomeData, tAwayData);

$("button").click(function(){
        $.ajax({url: "https://peterard.github.io/football-stats/test-json.js", success: function(result){
            console.log(result);
            console.log(JSON.parse(result));
        }});
    });


var currentMapType = "heat";

$("#detail-map-button").click(function(){
  if(currentMapType != "detail"){
    createMap(createDetailMap, homeData, awayData, tHomeData, tAwayData);
    currentMapType = "detail"
    homeTeamShowing = true;
    awayTeamShowing = true;
  }
})

$("#heatmap-button").click(function(){
  if(currentMapType != "heat"){
    createMap(createHeatMap, homeData, awayData, tHomeData, tAwayData);
    currentMapType = "heat";
    homeTeamShowing = true;
    awayTeamShowing = true;
  }
})

var homeTeamShowing = true;
var awayTeamShowing = true;

$("#home-team").click(function(){

  var newHomeData = [];
  var newAwayData = [];
  var tNewAwayData = [];
  var tNewHomeData = [];
  var newHomePassingData = [];
  var newAwayPassingData = [];
  var tNewHomePassingData = [];
  var tNewAwayPassingData = [];

  if(!homeTeamShowing){
      newHomeData = homeData;
      tNewHomeData = tHomeData;
      newHomePassingData = homePassingData;
      tNewHomePassingData = tHomePassingData;
      homeTeamShowing = true;
  }else{
      homeTeamShowing = false;
  }

  if(awayTeamShowing){
      newAwayData = awayData;
      tNewAwayData = tAwayData;
      newAwayPassingData = awayPassingData;
      tNewAwayPassingData = tAwayPassingData;
  }

  if(currentMapType == "heat"){
    createMap(createHeatMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
  }else if(currentMapType == "detail"){
    createMap(createDetailMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
  }else if(currentMapType == "passing"){
    createMap(createPassingMap, newHomePassingData, newAwayPassingData, tNewHomePassingData, tNewAwayPassingData);
  }
})

$("#away-team").click(function(){

    var newHomeData = [];
    var newAwayData = [];
    var tNewAwayData = [];
    var tNewHomeData = [];
    var newHomePassingData = [];
    var newAwayPassingData = [];
    var tNewHomePassingData = [];
    var tNewAwayPassingData = [];

    if(!awayTeamShowing){
        newAwayData = awayData;
        tNewAwayData = tAwayData;
        newAwayPassingData = awayPassingData;
        tNewAwayPassingData = tAwayPassingData;
        awayTeamShowing = true;
    }else{
        awayTeamShowing = false;
    }

    if(homeTeamShowing){
        newHomeData = homeData;
        tNewHomeData = tHomeData;
        newHomePassingData = homePassingData;
        tNewHomePassingData = tHomePassingData;
    }

    if(currentMapType == "heat"){
      createMap(createHeatMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
    }else if(currentMapType == "detail"){
      createMap(createDetailMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
    }else if(currentMapType == "passing"){
      createMap(createPassingMap, newHomePassingData, newAwayPassingData, tNewHomePassingData, tNewAwayPassingData);
    }
})



$("#randomizeData").click(function() {

  homeData = createHomeData();
  awayData = createAwayData();

  tHomeData = transposeData(homeData);
  tAwayData = transposeData(awayData);

  homePassingData = createHomePassingData();
  awayPassingData = createAwayPassingData();

  tHomePassingData = transposePassingData(homePassingData);
  tAwayPassingData = transposePassingData(awayPassingData);

  if(currentMapType == "heat"){
    createMap(createHeatMap, homeData, awayData, tHomeData, tAwayData);
  }else if(currentMapType == "detail"){
    createMap(createDetailMap, homeData, awayData, tHomeData, tAwayData);
  }else if(currentMapType == "passing"){
    createMap(createPassingMap, homePassingData, awayPassingData, tHomePassingData, tAwayPassingData);
  }
  homeTeamShowing = true;
  awayTeamShowing = true;
});

$("#passing-map-button").click(function() {
  if(currentMapType != "passing"){
    createMap(createPassingMap, homePassingData, awayPassingData, tHomePassingData, tAwayPassingData);
    currentMapType = "passing";
    homeTeamShowing = true;
    awayTeamShowing = true;
  }
})

$("#match-report-button").click(function(){
  createMatchReport();
  currentMapType = "report";
});

$("#show-buttons").click(function(){
  $(this).siblings().toggle();
});


window.onresize = function(event) {

  if(currentMapType === "report"){
    resizeMatchReport();
  }else{

    var newHomeData = [];
    var newAwayData = [];
    var tNewAwayData = [];
    var tNewHomeData = [];

    var newHomePassingData = [];
    var newAwayPassingData = [];
    var tNewAwayPassingData = [];
    var tNewHomePassingData = [];

    if(awayTeamShowing){
        newAwayData = awayData;
        tNewAwayData = tAwayData;
        newAwayPassingData = awayPassingData;
        tNewAwayPassingData = tAwayPassingData;
    }

    if(homeTeamShowing){
        newHomeData = homeData;
        tNewHomeData = tHomeData;
        newHomePassingData = homePassingData;
        tNewHomePassingData = tHomePassingData;
    }

    if(currentMapType == "heat"){
      createMap(createHeatMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
    }else if(currentMapType == "detail"){
      createMap(createDetailMap, newHomeData, newAwayData, tNewHomeData, tNewAwayData);
    }else if(currentMapType == "passing"){
      createMap(createPassingMap, homePassingData, awayPassingData, tHomePassingData, tAwayPassingData);
    }
}

}
