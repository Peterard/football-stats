function createMatchReport(){
  resetPage();
  reportMode();

  var teamNames = ["Borussia Munchengladbach", "AWAY UNITED"];
  var managerNames = ["Barlo Bancelotti", "Yep Yuardiola"];
  var crestUrls = ["http://cdn.bleacherreport.net/images/team_logos/328x328/world_football.png",
                  "http://nflrt.com/wp-content/uploads/2014/09/Patriots-FC.png"];
  var date = "DD/MM/YYYY";
  var competitionName = "TEST COMPETITION";
  var score = "3-1";
  var wordForManager = "Manager";
  var wordForReferee = "Referee";
  var wordForStadium = "Stadium";
  var wordForTime = "Total Time";
  var wordForGoal = '<div class="icon-holder football-icon-holder"><img src="football.png" class="event-icon event-icon-football" alt="Goal" style="min-height:9.73px;min-width:9.73px;max-height:17.5px;max-width:17.5px;width:1.46vw;height:1.46vw;"></div>';
  var wordForRedCard = '<div class="icon-holder red-card-icon-holder"><img class="event-icon event-icon-red-card"  src="220px-Red_card.svg.png" alt="Red Card" style="min-height:10px;min-width:7.67px;max-height:18px;max-width:13.8px;width:1.15vw;height:1.5vw;"></div>';
  var wordForPenalty = "Penalty";
  var refereeName = "Fark Flattenberg";
  var stadiumName = "Mold Mafford";
  var timeElapsedFirstHalf = 45;
  var timeElapsedSecondHalf = 48;
  var totalTimeElapsed = timeElapsedFirstHalf+timeElapsedSecondHalf;
  var matchEvents = [{eventType:"goal", side:"home", player:"Bandrea Birlo", min:22},
                      {eventType:"red-card", side:"away", player:"Venegoor Of Hesselink", min:29},
                      {eventType:"penalty-goal", side:"away", player:"Lamine Zemmamouche", min:44},
                      {eventType:"red-card", side:"home", player:"Pangel Pi Paria", min:75},
                      {eventType:"goal", side:"away", player:"Miego Morlan", min:85}];

  var matchReportHeader = '<div id="match-details">\
    <div id="primary-match-details">\
      <div id="home-team-details" class="match-detail">\
        <div id="home-team-crest" class="crest-holder"><img src="'+crestUrls[0]+'" alt="'+teamNames[0]+' crest" class="crest"></div>\
        <div id="home-team-name" class="team-name">'+teamNames[0]+'</div>\
        <div id="home-team-manager" class="manager-name">'+wordForManager+": "+managerNames[0]+'</div>\
      </div>\
      <div id="result-details" class="match-detail">\
        <div id="date">'+date+'</div>\
        <div id="competition">'+competitionName+'</div>\
        <div id="score">'+score+'</div>\
      </div>\
      <div id="away-team-details" class="match-detail">\
        <div id="away-team-crest" class="crest-holder"><img src="'+crestUrls[1]+'" alt="'+teamNames[1]+' crest" class="crest"></div>\
        <div id="away-team-name" class="team-name">'+teamNames[1]+'</div>\
        <div id="away-team-manager" class="manager-name">'+wordForManager+": "+managerNames[1]+'</div>\
      </div>\
      <div id="secondary-match-details">\
        <div class="secondary-match-detail" id="referee-name">'+wordForReferee+": "+ refereeName +'</div>\
        <div class="secondary-match-detail" id="stadium-name">'+wordForStadium+": "+ stadiumName +'</div>\
        <div class="secondary-match-detail" id="total-time">'+wordForTime+": "+ totalTimeElapsed +"\' ("+timeElapsedFirstHalf+" + "+timeElapsedSecondHalf +')</div>\
      </div>\
    </div>\
    <div>\
    <div id="match-events" class="event-list-holder">\
    </div>\
    <div id="team-list"></div>\
  </div>';

  $("#match-report").append(matchReportHeader);

  var events = "";

  for(var eventsCounter = 0; eventsCounter < matchEvents.length; eventsCounter++){

    if(eventsCounter === 0){
      events = events + '<div id="events-header">Match events</div>';
    }

    events = events + '<div class="outer-event-row" style="width:100%;">';

    if(matchEvents[eventsCounter]["side"] === "home"){
      if(matchEvents[eventsCounter]["eventType"] === "goal"){
        events = events +'<div class="inner-event-row  home-event event-text">' + wordForGoal +'<div class="match-event home-event">'+ " "+matchEvents[eventsCounter]["player"]+'</div>'+'</div>';
      }else if(matchEvents[eventsCounter]["eventType"] === "penalty-goal"){
        events = events +'<div class="inner-event-row home-event event-text">' + wordForGoal +'<div class="match-event home-event">'+ " ("+ wordForPenalty +") "+matchEvents[eventsCounter]["player"]+'</div>'+'</div>';
      } else if(matchEvents[eventsCounter]["eventType"] === "red-card"){
        events = events +'<div class="inner-event-row home-event event-text">'+ wordForRedCard +'<div class="match-event home-event">'+ " "+matchEvents[eventsCounter]["player"]+'</div>'+'</div>';
      }
    }else{
      events = events + '<div class="inner-event-row empty-row"></div>'
    }

    events = events + '<div class="inner-event-row mins-event-row">'+ matchEvents[eventsCounter]["min"] +'\'</div>';

    if(matchEvents[eventsCounter]["side"] === "away"){
      if(matchEvents[eventsCounter]["eventType"] === "goal"){
        events = events +'<div class="inner-event-row away-event event-text">' + '<div class="match-event away-event">'+matchEvents[eventsCounter]["player"]+" "+ " "+'</div>'+ wordForGoal+'</div>'; ;
      }else if(matchEvents[eventsCounter]["eventType"] === "penalty-goal"){
        events = events +'<div class="inner-event-row  away-event event-text">' + '<div class="match-event away-event">'+"("+ wordForPenalty +") "+matchEvents[eventsCounter]["player"]+" "+ " " +'</div>'+wordForGoal+'</div>';
      } else if(matchEvents[eventsCounter]["eventType"] === "red-card"){
        events = events +'<div class="inner-event-row  away-event event-text">' + '<div class="match-event away-event">'+matchEvents[eventsCounter]["player"]+" "+ "  "+'</div>'+ wordForRedCard+'</div>';
      }
    }else{
      events = events + '<div class="inner-event-row empty-row"></div>'
    }

    events = events + '</div>';

  }

  $("#match-events").empty();
  $("#match-events").append(events);

  var teamSheets = "<div id='teamsheets'>Teamsheets</div>";

  $("#match-events").append(teamSheets);

  resizeMatchReport();
}
