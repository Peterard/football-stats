function createHeatMap(homeDataArray, awayDataArray){

  console.log(homeDataArray);
  console.log(awayDataArray);

  dataArray = homeDataArray.concat(awayDataArray);

  $("#background-div").empty();

  $("#background-div").append('<canvas id="heatmap"></canvas>');

  var canvas = document.getElementById("heatmap");

  resizeCanvas(canvas);

  canvas.width  = $("#background-div").outerWidth();
  canvas.height = $("#background-div").outerHeight();

  var heatMapData = [];
  for(var arrayCounter = 0; arrayCounter < dataArray.length; arrayCounter++){
    heatMapData.push([dataArray[arrayCounter]["x"], (1-dataArray[arrayCounter]["y"]), 0.5]);
  }

  heatMapData.forEach(function(part, index, heatMapDataArray) {
    heatMapDataArray[index][0] = Math.floor(canvas.width*0.95*heatMapDataArray[index][0] + canvas.width*0.0275);
    heatMapDataArray[index][1] = Math.floor(canvas.height*0.95*heatMapDataArray[index][1] + canvas.height*0.0275);
  });

  var heat = simpleheat('heatmap').data(heatMapData).max(1);

  heat.radius(40, 90);

  heat.draw();
}
