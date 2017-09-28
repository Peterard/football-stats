var letterbox;

function resizeCanvas(canvasObject){
  if($(window).outerHeight >  $(window).outerWidth){
    $("#background-div").css("width","80vw");
    $("#background-div").css("height","53vw");
    $("#centering").css("margin-left"," 8vw");
    $("#centering").css("margin-right"," 8vw");
    canvasObject.width  = $("#background-div").outerWidth();
    canvasObject.height = $("#background-div").outerHeight();
    letterbox = false;
  }else{
    $("#background-div").css("width","121vh");
    $("#background-div").css("height","80vh");
    $("#centering").css("margin-left","calc((100% - 121vh)/2)");
    $("#centering").css("margin-right","calc((100% - 121vh)/2)");
    canvasObject.width  = $("#background-div").outerWidth();
    canvasObject.height = $("#background-div").outerHeight();

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
}
