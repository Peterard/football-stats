  var letterbox;
        if(window.outerHeight >  window.outerWidth){
          $("#background-div").css("width","80vw");
          $("#background-div").css("height","53vw");
          $("#centering").css("margin-left"," 8vw");
          $("#centering").css("margin-right"," 8vw");
          letterbox = false;
        }else{
          $("#background-div").css("width","121vh");
          $("#background-div").css("height","80vh");
          $("#centering").css("margin-left","calc((100% - 121vh)/2)");
          $("#centering").css("margin-right","calc((100% - 121vh)/2)");
          letterbox = true;
        }
        window.onresize = function(event) {
          if(letterbox && window.outerHeight >  window.outerWidth){
            $("#background-div").css("width","80vw");
            $("#background-div").css("height","53vw");
            $("#centering").css("margin-left"," 8vw");
            $("#centering").css("margin-right"," 8vw");
            letterbox = false;
          }else if(!letterbox && window.outerHeight <=  window.outerWidth){
            $("#background-div").css("width","121vh");
            $("#background-div").css("height","80vh");
            $("#centering").css("margin-left","calc((100% - 121vh)/2)");
            $("#centering").css("margin-right","calc((100% - 121vh)/2)");
            letterbox = true;
          }
        };
        var playerArray = ["Douglas Vieira","Gakuji Ota","Carlos Martínez","Akira Ibayashi ","Alan Pinheiro","Koki Anzai","Henrik Larsson", "Shunsuke Nakamura", "Artur Boruc", "Bobo Balde", "Georgios Samaras"];
        var oppositionArray = ["Ryoya Ogawa","Go Hatano","Takuo Okubo","Masato Morishige","Yohei Kajiyama","Peter Utaka","Sasa Papac", "Kirk Broadfoot", "Kenny Miller", "Lee McCulloch", "Kris Boyd"];
        var color = Chart.helpers.color;
        var scatterChartData = {
            datasets: [{
                label: "My First dataset",
                borderColor: window.chartColors.red,
                backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
                data: [{
                    x: 200,
                    y: 200,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: 0,
                    y: 0,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: 200,
                    y: 0,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: 0,
                    y: 200,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:playerArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }]
            }, {
                label: "My Second dataset",
                borderColor: window.chartColors.blue,
                backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                hidden: true,
                data: [{
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }, {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                }]
            }]
        };
        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myScatter = Chart.Scatter(ctx, {
                data: scatterChartData,
                options: {
                  legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                          display: false,
                          ticks : {
                                max : 204.5,
                                min : -4.5
                          }
                        }],
                        yAxes: [{
                          display: false,
                           ticks : {
                                 max : 204.5,
                                 min : -4.5
                           }
                        }],
                      },
                    title: {
                        display: false,
                        text: 'Test Football Chart'
                    },
                    tooltips: {
                          callbacks: {
                              label: function(tooltipItem, data) {
                                console.log(tooltipItem);
                                  console.log(data);
                                  //data[tooltipItem.datasetIndex]
                                  return "Player: "+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].player +
                                  "\n\r Min: " +data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].min;
                                }
                              }
                            }
                }
            });
        };
        document.getElementById('randomizeData').addEventListener('click', function() {
                scatterChartData.datasets[0].data = scatterChartData.datasets[0].data.map(function() {
                    return {
                        x: randomScalingFactor() + 100,
                        y: randomScalingFactor() + 100,
                        player:playerArray[Math.floor(11*Math.random())],
                        min:Math.floor(90*Math.random()),
                    };
            });
            scatterChartData.datasets[1].data = scatterChartData.datasets[1].data.map(function() {
                return {
                    x: randomScalingFactor() + 100,
                    y: randomScalingFactor() + 100,
                    player:oppositionArray[Math.floor(11*Math.random())],
                    min:Math.floor(90*Math.random()),
                };
        });
            window.myScatter.update();
        });
        $("#home-team").click(function(){
          if(scatterChartData.datasets[0].hidden){
            scatterChartData.datasets[0].hidden = false;
          }else{
              scatterChartData.datasets[0].hidden = true;
          }
          window.myScatter.update();
        })
        $("#away-team").click(function(){
          if(scatterChartData.datasets[1].hidden){
            scatterChartData.datasets[1].hidden = false;
          }else{
              scatterChartData.datasets[1].hidden = true;
          }
          window.myScatter.update();
        })