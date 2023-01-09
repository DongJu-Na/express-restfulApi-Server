const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const apiUrl = require('../util/urlMapper');
const urlencode = require('urlencode');

const options = {
  method: 'GET',
  headers: {
    "X-Riot-Token": process.env.API_KEY
  }
};

/* GET api listing. */
router.get('/getSummoners/:summonerName', async function(req, res, next) {

  let summonerName = req.params['summonerName'];

  if(summonerName === null 
    || summonerName === ""  
    || typeof summonerName === "undefined" 
    || summonerName === undefined)
  {
    return res.status(404).json({msg: `	Data not found`});
  }

  const url = process.env.API_HOST +  apiUrl.getSummoners + urlencode.encode(summonerName);

  // promise syntax
	fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}

});

router.get('/getLeagueInfo/:encryptedSummonerId', async function(req, res, next) {

  let encryptedSummonerId = req.params['encryptedSummonerId'];

  if(encryptedSummonerId === null 
    || encryptedSummonerId === ""  
    || typeof encryptedSummonerId === "undefined" 
    || encryptedSummonerId === undefined)
  {
    return res.status(404).json({msg: `	Data not found`});
  }

  const url = process.env.API_HOST +  apiUrl.getLeagueInfo + urlencode.encode(encryptedSummonerId);

  // promise syntax
	fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}

});

router.get('/getMatchId/:puuid', async function(req, res, next) {

  let puuid = req.params['puuid'];

  if(puuid === null 
    || puuid === ""  
    || typeof puuid === "undefined" 
    || puuid === undefined)
  {
    return res.status(404).json({msg: `	Data not found`});
  }

  const url = process.env.API_HOST +  apiUrl.getMatchId + urlencode.encode(puuid) + "/ids";

  console.log("url >> ",url);

  // promise syntax
	fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}

});

router.get('/getMatchDetail/:matchId', async function(req, res, next) {

  let matchId = req.params['matchId'];

  if(matchId === null 
    || matchId === ""  
    || typeof matchId === "undefined" 
    || matchId === undefined)
  {
    return res.status(404).json({msg: `	Data not found`});
  }

  const url = process.env.API_HOST +  apiUrl.getMatchDetail + urlencode.encode(matchId);

  // promise syntax
	fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}

});


router.get('/getMatchTimeLine/:matchId', async function(req, res, next) {

  let matchId = req.params['matchId'];

  if(matchId === null 
    || matchId === ""  
    || typeof matchId === "undefined" 
    || matchId === undefined)
  {
    return res.status(404).json({msg: `	Data not found`});
  }

  const url = process.env.API_HOST +  apiUrl.getMatchTimeLine + urlencode.encode(matchId) + "/timeline";

  // promise syntax
	fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}

});

module.exports = router;
