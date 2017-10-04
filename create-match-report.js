function createMatchReport(){
  resetPage();
  reportMode();

  var teamNames = ["HOME FC", "AWAY UNITED"];
  var managerNames = ["Barlo Bancelotti", "Yep Yuardiola"];
  var crestUrls = ["http://cdn.bleacherreport.net/images/team_logos/328x328/world_football.png",
                  "http://nflrt.com/wp-content/uploads/2014/09/Patriots-FC.png"];
  var date = "DD/MM/YYYY";
  var competitionName = "COMPETITION_NAME";
  var score = "3-1";
  var wordForManager = "Manager";
  var wordForReferee = "Referee";
  var wordForStadium = "Stadium";
  var wordForTime = "Total Time";
  var wordForGoal = "Goal";
  var wordForRedCard = "Red Card";
  var wordForPenalty = "Penalty";
  var refereeName = "Fark Flattenberg";
  var stadiumName = "Mold Mafford";
  var timeElapsedFirstHalf = 45;
  var timeElapsedSecondHalf = 48;
  var totalTimeElapsed = timeElapsedFirstHalf+timeElapsedSecondHalf;
  var matchEvents = [{eventType:"goal", side:"home", player:"Bandrea Birlo", min:22},
                      {eventType:"goal", side:"home", player:"Bandrea Birlo", min:29},
                      {eventType:"penalty-goal", side:"home", player:"Bomas Buller", min:44},
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
    </div>\
    <div id="secondary-match-details">\
      <div class="secondary-match-detail" id="referee-name">'+wordForReferee+": "+ refereeName +'</div>\
      <div class="secondary-match-detail" id="stadium-name">'+wordForStadium+": "+ stadiumName +'</div>\
      <div class="secondary-match-detail" id="total-time">'+wordForTime+": "+ totalTimeElapsed +"\' ("+timeElapsedFirstHalf+" + "+timeElapsedSecondHalf +')</div>\
    </div>\
    <div>\
    <div id="match-events" class="event-list">\
    </div>\
  </div>';

  $("#match-report").append(matchReportHeader);

  var events = "";

  for(var eventsCounter = 0; eventsCounter < matchEvents.length; eventsCounter++){
      if(matchEvents[eventsCounter]["eventType"] === "goal"){
        events = events + '<div class="match-event '+matchEvents[eventsCounter]["side"]+'-event">'+ wordForGoal +": "+matchEvents[eventsCounter]["player"]+" "+ matchEvents[eventsCounter]["min"] +'\'</div><br>';
      }else if(matchEvents[eventsCounter]["eventType"] === "penalty-goal"){
        events = events + '<div class="match-event '+matchEvents[eventsCounter]["side"]+'-event">'+ wordForGoal +" ("+ wordForPenalty +"): "+matchEvents[eventsCounter]["player"]+" "+ matchEvents[eventsCounter]["min"] +'\'</div><br>';
      } else if(matchEvents[eventsCounter]["eventType"] === "red-card"){
        events = events + '<div class="match-event '+matchEvents[eventsCounter]["side"]+'-event">'+ wordForRedCard +": "+matchEvents[eventsCounter]["player"]+" "+ matchEvents[eventsCounter]["min"] +'\'</div><br>'
      }
  }

  $("#match-events").empty();
  $("#match-events").append(events);

  resizeMatchReport();
}
