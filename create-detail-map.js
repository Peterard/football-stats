function createDetailMap(homeDataArrayInput, awayDataArrayInput){

  var homeDataArrayDetailMap = homeDataArrayInput;
  var awayDataArrayDetailMap = awayDataArrayInput;

  resetPage();
  mapMode();

  $("#background-div").append('<canvas id="detail-map"></canvas>');

  var canvas = document.getElementById("detail-map");

  resizeCanvas(canvas);

  var color = Chart.helpers.color;
  var scatterChartData = {
      datasets: [{
          pointRadius:9,
          hitRadius:20,
          pointHoverRadius: 11,
          type:"line",
          label: "My First dataset",
          borderColor: "rgb(20, 240, 50)",
          backgroundColor: color("rgb(20, 240, 50)").alpha(0.3).rgbString(),
          data: homeDataArrayDetailMap
      }, {
          type:"line",
          pointRadius:9,
          hitRadius:20,
          pointHoverRadius: 11,
          label: "My Second dataset",
          borderColor: window.chartColors.red,
          backgroundColor: color(window.chartColors.red).alpha(0.3).rgbString(),
          data: awayDataArrayDetailMap
      }]
  };

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
                  bodyFontSize: getFontSize(),
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
