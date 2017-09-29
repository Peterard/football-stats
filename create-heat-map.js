function createHeatMap(homeDataInput, awayDataInput){

  var homeDataArray = homeDataInput;
  var awayDataArray = awayDataInput;

  dataArray = homeDataArray.concat(awayDataArray);

  $("#background-div").empty();

  $("#background-div").append('<canvas id="heatmap"></canvas>');

  var canvas = document.getElementById("heatmap");

  resizeCanvas(canvas);

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

  var heatMapRadius = 0.05;
  var heatMapBlurRadius = 0.06;

  heat.radius(Math.sqrt(canvas.width*canvas.width + canvas.height*canvas.height)*heatMapRadius, Math.sqrt(canvas.width*canvas.width + canvas.height*canvas.height)*heatMapBlurRadius);

  heat.draw();
}
