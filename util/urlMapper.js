/***********  util/urlMapper.js ***********
 * 
 * Riot API HTTPS Requests
 * 
 * * Used API **
 * LOL-STATUS-V4
 * SUMMONER-V4
 * LEAGUE-V4
 * MATCH-V5
 * *************
 ***************************************/

apiUrl = {

  //LOL-STATUS-V4
  "getLolStatus" : "/lol/status/v4/platform-data",

  //SUMMONER-V4 
  "getSummoners" : "/lol/summoner/v4/summoners/by-name/",

  //LEAGUE-V4
  "getLeagueInfo" : "/lol/league/v4/entries/by-summoner/",

  // Match V5
  "getMatchId" : "/lol/match/v5/matches/by-puuid/",
  "getMatchDetail" : "/lol/match/v5/matches/",
  "getMatchTimeLine" : "/lol/match/v5/matches/",


}

module.exports = apiUrl;