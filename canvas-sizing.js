var letterbox;

function resizeCanvas(canvasObject){

  if(window.outerHeight > 1.7*window.outerWidth){

    $("#background-div").css("width","93vw");
    $("#background-div").css("height","140vw");
    $("#centering").css("margin-left","0.2vw");
    $("#centering").css("margin-right","0.2vw");
    letterbox = false;
    $("canvas").css("background-image", "url('Pitch.002b2.png')");
    $("#randomizeData").css("width", "100%");
    $("#randomizeData").css("font-size", "30px");
    $("#randomizeData").css("margin", "2px");
    $("#home-team").css("width", "100%");
    $("#home-team").css("font-size", "30px");
    $("#home-team").css("margin", "2px");
    $("#away-team").css("width", "100%");
    $("#away-team").css("font-size", "30px");
    $("#away-team").css("margin", "2px");
    $("#detail-map-button").css("width", "100%");
    $("#detail-map-button").css("font-size", "30px");
    $("#detail-map-button").css("margin", "2px");
    $("#heatmap-button").css("width", "100%");
    $("#heatmap-button").css("font-size", "30px");
    $("#heatmap-button").css("margin", "2px");

  }else if(window.outerHeight > window.outerWidth){

    $("#background-div").css("width","61vh");
    $("#background-div").css("height","93vh");
    var buffer = (100*((window.outerWidth - $("#background-div").width())/2.5))/window.outerWidth
    $("#centering").css("margin-left",buffer + "vw");
    $("#centering").css("margin-right",buffer + "vw");
    letterbox = false;
    $("canvas").css("background-image", "url('Pitch.002b2.png')");

  }else{

    $("#background-div").css("width","121vh");
    $("#background-div").css("height","80vh");
    $("#centering").css("margin-left","calc((100% - 121vh)/2)");
    $("#centering").css("margin-right","calc((100% - 121vh)/2)");
    letterbox = true;
    $("canvas").css("background-image", "url('Pitch.002b.png')");

  }
  canvasObject.width  = $("#background-div").outerWidth();
  canvasObject.height = $("#background-div").outerHeight();
}

function isPortrait(){
  return window.outerHeight > window.outerWidth;
}
