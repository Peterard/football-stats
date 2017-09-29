function createHeatMap(homeDataInput, awayDataInput){

  var homeDataArrayForHM = homeDataInput;
  var awayDataArrayForHM = awayDataInput;

  dataArray = homeDataArrayForHM.concat(awayDataArrayForHM);

  $("#background-div").empty();

  $("#background-div").append('<canvas id="heatmap"></canvas>');

  var canvas = document.getElementById("heatmap");

  resizeCanvas(canvas);

  // if(isPortrait()){
  //   for(var arrayCounter = 0; arrayCounter < homeDataArrayForHM.length; arrayCounter++){
  //     var originalX = homeDataArrayForHM[arrayCounter]["x"];
  //     var originalY = homeDataArrayForHM[arrayCounter]["y"];
  //
  //     homeDataArrayForHM[arrayCounter]["x"] = originalY;
  //     homeDataArrayForHM[arrayCounter]["y"] = originalX;
  //   }
  //
  //   for(var arrayCounter = 0; arrayCounter < awayDataArrayForHM.length; arrayCounter++){
  //     var originalX = awayDataArrayForHM[arrayCounter]["x"];
  //     var originalY = awayDataArrayForHM[arrayCounter]["y"];
  //
  //     awayDataArrayForHM[arrayCounter]["x"] = originalY;
  //     awayDataArrayForHM[arrayCounter]["y"] = originalX;
  //   }
  // }

  canvas.width  = $("#background-div").outerWidth();
  canvas.height = $("#background-div").outerHeight();

  var heatMapData = [];
  for(var arrayCounter = 0; arrayCounter < dataArray.length; arrayCounter++){
    heatMapData.push([dataArray[arrayCounter]["x"], (1-dataArray[arrayCounter]["y"]), 0.7]);
  }

  heatMapData.forEach(function(part, index, heatMapDataArray) {
    heatMapDataArray[index][0] = Math.floor(canvas.width*0.95*heatMapDataArray[index][0] + canvas.width*0.0275);
    heatMapDataArray[index][1] = Math.floor(canvas.height*0.95*heatMapDataArray[index][1] + canvas.height*0.0275);
  });

  var heat = simpleheat('heatmap').data(heatMapData).max(1);

  heat.radius(canvas.width*0.054, canvas.width*0.12);

  heat.draw();
}
