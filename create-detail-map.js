function createDetailMap(homeDataArrayForHM1, awayDataArrayForHM1){

  var homeDataArrayForHM = homeDataArrayForHM1;
  var awayDataArrayForHM = awayDataArrayForHM1;

  // function clearCanvas(){
  //   var ctx = document.getElementById("canvas").getContext("2d");
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }

  $("#background-div").empty();

  $("#background-div").append('<canvas id="detail-map"></canvas>');

  var canvas = document.getElementById("detail-map");

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

  var color = Chart.helpers.color;
  var scatterChartData = {
      datasets: [{
          pointRadius:9,
          hitRadius:20,
          pointHoverRadius: 11,
          label: "My First dataset",
          borderColor: window.chartColors.red,
          backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
          data: homeDataArrayForHM
      }, {
          pointRadius:9,
          hitRadius:20,
          pointHoverRadius: 11,
          label: "My Second dataset",
          borderColor: window.chartColors.blue,
          backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
          hidden: false,
          data: awayDataArrayForHM
      }]
  };


// var first = true;
//
//     var customLinePlugin = {
//       afterDraw: function(chartInstance) {
//         var canvas = chartInstance.chart;
//         var ctx = canvas.ctx;
//         var index;
//         var line;
//         var style;
// console.log(first);
//         if(first){
//               ctx.beginPath();
//               ctx.moveTo(0, 200);
//               ctx.lineTo(150, 0);
//               ctx.strokeStyle = "rgba(169,169,169, .6)";
//               ctx.stroke();
//               ctx.beginPath();
//               ctx.moveTo(150, 0);
//               ctx.lineTo(400, 400);
//               ctx.strokeStyle = "rgba(169,169,169, .6)";
//               ctx.stroke();
//               first = false;
//             }
//           return;
//         }
//     };
//     Chart.pluginService.register(customLinePlugin);
//
      var ctx = document.getElementById("detail-map").getContext("2d");

      window.myScatter = Chart.Scatter(ctx, {
          data: scatterChartData,
          options: {
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
                  bodyFontSize: 20,
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return ["Player: "+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].player,
                            "Min: " +data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].min];
                          }
                        }
                      }
          }
      });

};
