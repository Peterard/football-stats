var letterbox;

function resizeCanvas(canvasObject){

  if(window.outerHeight > 1.5052*window.outerWidth){
    $("#background-div").css("width","97vw");
    $("#background-div").css("height","146vw");
    $("#centering").css("margin-left","0.2vw");
    $("#centering").css("margin-right","0.2vw");
    $("canvas").css("background-image", "url('Pitch.002b2.png')");
    makeButtonsMobileFriendly()
  }else if(1.5052*window.outerHeight < window.outerWidth){
    $("#background-div").css("width","127.9vh");
    $("#background-div").css("height","85vh");
    $("#centering").css("margin-left","calc((100% - 127.9vh)/2)");
    $("#centering").css("margin-right","calc((100% - 127.9vh)/2)");
    $("canvas").css("background-image", "url('Pitch.002b.png')");
    makeButtonsComputerFriendly();
  }else if(window.outerHeight < window.outerWidth){
    $("#background-div").css("width","90vw");
    $("#background-div").css("height","59.8vw");
    $("#centering").css("margin-left","4vw");
    $("#centering").css("margin-right","4vw");
    $("canvas").css("background-image", "url('Pitch.002b.png')");
    makeButtonsComputerFriendly();
  }else{
    $("#background-div").css("width","59.8vh");
    $("#background-div").css("height","90vh");
    $("#centering").css("margin-left","calc((100% - 59.8vh)/2)");
    $("#centering").css("margin-right","calc((100% - 59.8vh)/2)");
    $("canvas").css("background-image", "url('Pitch.002b2.png')");
    makeButtonsMobileFriendly()
  }

  canvasObject.width  = $("#background-div").outerWidth();
  canvasObject.height = $("#background-div").outerHeight();
}

function makeButtonsMobileFriendly(){
  $("#control-buttons button").css("width", "100%");
  $("#control-buttons button").css("margin-top", ($("#background-div").width()/50)+"px");
  $("#control-buttons button").css("margin-bottom", ($("#background-div").width()/50)+"px");
  $("#control-buttons button").css("font-size", ($("#background-div").width()/20)+"px");
  $("#control-buttons button").css("height", ($("#background-div").width()/15)+"px");
  $("#control-buttons button").css("display", "none");
  $("#show-buttons").css("display", "block");
}

function makeButtonsComputerFriendly(){
  $("#control-buttons button").css("width", "calc((100% / 7) - 5px)");
  $("#control-buttons button").css("height", "30px");
  $("#control-buttons button").css("font-size", "16px");
  $("#control-buttons button").css("display", "inline");
  $("#show-buttons").css("display", "none");
}

function isPortrait(){
  return window.outerHeight > window.outerWidth;
}

function getFontSize(){
  if((window.outerHeight > window.outerWidth)){
    return $("#background-div").width()/25;
  }else if(window.outerHeight <= window.outerWidth){
    return 20;
  }
}

function resetPage(){
  $("#background-div").empty();
  $("#match-report").empty();
}

function reportMode(){
  $("#match-report").show();
  $("#background-div").hide();
}

function mapMode(){
  $("#background-div").show();
  $("#match-report").hide();
}

function resizeMatchReport(){

   if(window.outerWidth > 900){
     $("*").css("font-size", "12px");
     $("#date").css("font-size","15px");
     $("#competition").css("font-size","15px");
     $("#score").css("font-size","45px");
     $(".team-name").css("font-size","30px");
     $(".manager-name").css("font-size","15px");
     $(".secondary-match-detail").css("font-size","12px");
     $("#events-banner").css("font-size","25px");
     $(".match-event").css("font-size","15px");
     $(".match-event").css("min-height","25px");
     $(".match-event").css("width","175.5px");
     $(".event-text").css("width","200px");
     $(".empty-row").css("width","200px");
     $(".icon-holder").css("margin-left","3.5px");
     $(".icon-holder").css("margin-right","3.5px");
     $(".icon-holder").css("width","17.5px");
     $(".event-icon-football").css("height","17.5px");
     $(".event-icon-football").css("width","17.5px");
     $(".event-icon-red-card").css("height","18px");
     $(".event-icon-red-card").css("width","13.8px");
     $("#events-header").css("font-size","20px");
     $("#teamsheets").css("font-size","20px");
     $("#primary-match-details").css("padding-bottom","12px");

   }else if(window.outerWidth < 550){
      $("*").css("font-size", "3.1vw");
       $("#date").css("font-size","2.8vw");
       $("#competition").css("font-size","2.8vw");
       $("#score").css("font-size","9vw");
       $(".team-name").css("font-size","5.5vw");
       $(".manager-name").css("font-size","2.9vw");
       $(".secondary-match-detail").css("font-size","2.9vw");
       $("#events-banner").css("font-size","5vw");
       $(".match-event").css("font-size","3.5vw");
       $(".match-event").css("min-height","5vw");
       $(".match-event").css("width","40.8vw");
       $(".event-text").css("width","45vw");
       $(".empty-row").css("width","45vw");
       $(".icon-holder").css("margin-left","0.6vw");
       $(".icon-holder").css("margin-right","0.6vw");
       $(".icon-holder").css("width","3vw");
       $(".event-icon-football").css("height","3vw");
       $(".event-icon-football").css("width","3vw");
       $(".event-icon-red-card").css("height","3vw");
       $(".event-icon-red-card").css("width","2.3vw");
       $("#events-header").css("font-size","3.7vw");
       $("#teamsheets").css("font-size","3.7vw");
       $("#primary-match-details").css("padding-bottom","0.9vw");
   }else{
     $("*").css("font-size", "1.5vw");
     $("#date").css("font-size","1.8vw");
     $("#competition").css("font-size","1.8vw");
     $("#score").css("font-size","4.8vw");
     $(".team-name").css("font-size","3.1vw");
     $(".manager-name").css("font-size","1.8vw");
     $(".secondary-match-detail").css("font-size","1.5vw");
     $("#events-banner").css("font-size","2.8vw");
     $(".match-event").css("font-size","1.8vw");
     $(".match-event").css("min-height","2.8vw");
     $(".match-event").css("width","27.8vw");
     $(".event-text").css("width","30vw");
     $(".empty-row").css("width","30vw");
     $(".icon-holder").css("margin-left","0.3vw");
     $(".icon-holder").css("margin-right","0.3vw");
     $(".icon-holder").css("width","1.5vw");
     $(".event-icon-football").css("height","1.5vw");
     $(".event-icon-football").css("width","1.5vw");
     $(".event-icon-red-card").css("height","1.5vw");
     $(".event-icon-red-card").css("width","1.15vw");
     $("#events-header").css("font-size","2.4vw");
     $("#teamsheets").css("font-size","2.4vw");
     $("#primary-match-details").css("padding-bottom","1.5vw");
   }
}
