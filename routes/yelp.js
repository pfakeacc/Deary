
/*
 * GET home page.
 */
var Yelp = require('yelp');

exports.index = function(req, res){
	// Request API access: http://www.yelp.com/developers/getting_started/api_access 
	var typeofc = req.param("typeofc");
	
	 
	var yelp = new Yelp({
	  consumer_key: '7vLzDnZHyYvWg_cU2Py39Q',
	  consumer_secret: 'Npv_bLKHX7akdJ-blHfB53DholA',
	  token: 'DWT-7vLiyMkWeFkp2jqk8R3OMeTgGul5',
	  token_secret: 'tArD_HGYsluoOVQuJaWK131GjFs',
	});
	yelp.search({ term: 'vietnamese', location : 'San Jose', cll : '37.3289,121.8906', radius_filter: '4000', limit: '6'  })
	.then(function (data) {
	  console.log(JSON.stringify(data));
	  var jsonParse1=JSON.parse(JSON.stringify(data));
	  console.log("-------------------");
	  console.log(jsonParse1.businesses[0].name+"  "+jsonParse1.businesses[0].rating);
	  json_responses = {"data" : data};
		res.send(json_responses);
	});
	
	//res.render('index', { title: 'Express' });
};
	// See http://www.yelp.com/developers/documentation/v2/search_api 
	/*yelp.search({ term: 'food', location: 'Montreal' })
	.then(function (data) {
	  console.log(data);
	});
	 
	// See http://www.yelp.com/developers/documentation/v2/business 
	yelp.business('yelp-san-francisco')
	  .then(console.log)
	  .catch(console.error);
	 
	yelp.phoneSearch({ phone: '+15555555555' })
	  .then(console.log)
	  .catch(console.error);
	 
	// A callback based API is also available: 
	yelp.business('yelp-san-francisco', function(err, data) {
	  if (err) return console.log(error);
	  console.log(data);
	});
	res.render('index', { title: 'Express' });
};*/
