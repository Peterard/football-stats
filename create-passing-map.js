function createPassingMap(homeDataArrayInput, awayDataArrayInput){

  var homeDataArrayPassingMap = homeDataArrayInput;
  var awayDataArrayPassingMap = awayDataArrayInput;

  resetPage();
  mapMode();

  $("#background-div").append('<canvas id="detail-map"></canvas>');

  var canvas = document.getElementById("detail-map");

  resizeCanvas(canvas);

  var homeTeamPassing = [];

  var color = Chart.helpers.color;

  for(var arrayCounter = 0; arrayCounter < homeDataArrayPassingMap.length; arrayCounter++){

    var borderColorArray =[];
    var colorArray =[];
    var styleArray =[];

    for(var secondaryArrayCounter = 0; secondaryArrayCounter < homeDataArrayPassingMap[arrayCounter].length; secondaryArrayCounter++){
      if(secondaryArrayCounter === 0){
        borderColorArray[secondaryArrayCounter] = "rgb(20, 240, 50)";
        colorArray[secondaryArrayCounter] = color("rgba(20, 240, 50,0.3)").alpha(0.7).rgbString();
        styleArray[secondaryArrayCounter] = 'circle';
      }else if(secondaryArrayCounter === homeDataArrayPassingMap[arrayCounter].length-1){
        borderColorArray[secondaryArrayCounter] = "rgba(0,0,0,1)";
        colorArray[secondaryArrayCounter] = color("rgb(20, 240, 50)").alpha(0.7).rgbString();
        styleArray[secondaryArrayCounter] = 'crossRot';
      }else{
        borderColorArray[secondaryArrayCounter] = "rgb(20, 240, 50)";
        colorArray[secondaryArrayCounter] = color("rgba(20, 240, 50,0.3)").alpha(0.3).rgbString();
        styleArray[secondaryArrayCounter] = 'circle';
      }
    }

    homeTeamPassing[arrayCounter] = {
                                    pointRadius:9,
                                    hitRadius:20,
                                    pointHoverRadius: 11,
                                    type:"line",
                                    label: "HomeTeamPassing",
                                    data: homeDataArrayPassingMap[arrayCounter],
                                    borderColor: "rgb(20, 240, 50)",
                                    backgroundColor: color("rgb(20, 240, 50)").alpha(0.3).rgbString(),
                                    pointBorderColor: borderColorArray,
                                    pointBackgroundColor:colorArray,
                                    pointStyle:styleArray,
                                    showLine:true,
                                    fill: false,}
  }

  var awayTeamPassing = [];
  for(var arrayCounter = 0; arrayCounter < awayDataArrayPassingMap.length; arrayCounter++){

    var borderColorArray =[];
    var colorArray =[];
    var styleArray =[];

    for(var secondaryArrayCounter = 0; secondaryArrayCounter < awayDataArrayPassingMap[arrayCounter].length; secondaryArrayCounter++){
      if(secondaryArrayCounter === 0){
        borderColorArray[secondaryArrayCounter] = window.chartColors.red;
        colorArray[secondaryArrayCounter] = color(window.chartColors.red).alpha(0.7).rgbString();
        styleArray[secondaryArrayCounter] = 'circle';
      }else if(secondaryArrayCounter === awayDataArrayPassingMap[arrayCounter].length-1){
        borderColorArray[secondaryArrayCounter] = "rgba(0,0,0,1)";
        colorArray[secondaryArrayCounter] = color(window.chartColors.red).alpha(0.7).rgbString();
        styleArray[secondaryArrayCounter] = 'crossRot';
      }else{
        borderColorArray[secondaryArrayCounter] = window.chartColors.red;
        colorArray[secondaryArrayCounter] = color(window.chartColors.red).alpha(0.3).rgbString();
        styleArray[secondaryArrayCounter] = 'circle';
      }
    }

    awayTeamPassing[arrayCounter] = {
                                    pointRadius:9,
                                    hitRadius:20,
                                    pointHoverRadius: 11,
                                    type:"line",
                                    label: "AwayTeamPassing",
                                    borderColor: window.chartColors.red,
                                    backgroundColor: color(window.chartColors.red).alpha(0.3).rgbString(),
                                    pointBorderColor: borderColorArray,
                                    pointBackgroundColor:colorArray,
                                    pointStyle:styleArray,
                                    data: awayDataArrayPassingMap[arrayCounter],
                                    showLine:true,
                                    fill: false,}
  }

  var passingData = homeTeamPassing.concat(awayTeamPassing);

  var color = Chart.helpers.color;
  var scatterChartData = {
      datasets: passingData
  };

      var ctx = document.getElementById("detail-map").getContext("2d");

      window.myScatter = Chart.Scatter(ctx, {
          data: scatterChartData,
          options: {
            elements: {
             line: {
                 tension: 0.17
               }
             },
            animation: {
                duration: 0
            },
            legend: {
                  display: false
              },
              scales: {
                  xAxes: [{
                    display: false,
                    ticks : {
                          max : 1.025,
                          min : -0.025
                    }
                  }],
                  yAxes: [{
                    display: false,
                     ticks : {
                           max : 1.025,
                           min : -0.025
                     }
                  }],
                },
              title: {
                  display: false,
                  text: 'Test Football Chart'
              },
              tooltips: {
                  bodyFontSize: getFontSize(),
                    callbacks: {
                        label: function(tooltipItem, data) {
                          if(Number(tooltipItem.index) === 0){
                            return ["Won by: "+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].player,
                            "Min: " +data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].min];
                          }else if(Number(tooltipItem.index) === (data["datasets"][tooltipItem.datasetIndex]["data"].length - 1)){
                            return ["Shot by: "+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].player,
                            "Min: " +data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].min];
                          }else {
                            return ["Passed by: "+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].player,
                            "Min: " +data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].min];
                          }
                          }
                        }
                      }
          }
      });

};
