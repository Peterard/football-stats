var letterbox;

function resizeCanvas(canvasObject){

  if(window.outerHeight > 1.7*window.outerWidth){

    $("#background-div").css("width","93vw");
    $("#background-div").css("height","140.5vw");
    $("#centering").css("margin-left","0.2vw");
    $("#centering").css("margin-right","0.2vw");
    letterbox = false;
    $("canvas").css("background-image", "url('Pitch.002b2.png')");
    makeButtonsMobileFriendly()

  }else if(window.outerHeight > window.outerWidth){

    $("#background-div").css("width","61.5vh");
    $("#background-div").css("height","93vh");
    var buffer = (100*((window.outerWidth - $("#background-div").width())/2.5))/window.outerWidth;
    $("#centering").css("margin-left",buffer + "vw");
    $("#centering").css("margin-right",buffer + "vw");
    letterbox = false;
    $("canvas").css("background-image", "url('Pitch.002b2.png')");
    makeButtonsMobileFriendlyOnSquareScreen(buffer)

  }else{

    $("#background-div").css("width","121vh");
    $("#background-div").css("height","80vh");
    $("#centering").css("margin-left","calc((100% - 121vh)/2)");
    $("#centering").css("margin-right","calc((100% - 121vh)/2)");
    letterbox = true;
    $("canvas").css("background-image", "url('Pitch.002b.png')");
    makeButtonsComputerFriendly()

  }
  canvasObject.width  = $("#background-div").outerWidth();
  canvasObject.height = $("#background-div").outerHeight();
}

function makeButtonsMobileFriendly(){
  $("#centering button").css("width", "100%");
  $("#centering button").css("font-size", "30px");
  $("#centering button").css("display", "block");
}

function makeButtonsMobileFriendlyOnSquareScreen(){
  $("#centering button").css("width", "61vh");
  $("#centering button").css("font-size", "30px");
  $("#centering button").css("margin","auto");
  $("#centering button").css("display", "block");
}

function makeButtonsComputerFriendly(){
  $("#centering button").css("width", "15%");
  $("#centering button").css("height", "60px");
  $("#centering button").css("font-size", "16px");
  $("#centering button").css("display", "inline");
}

function isPortrait(){
  return window.outerHeight > window.outerWidth;
}
