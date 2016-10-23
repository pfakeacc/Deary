var accountSid = 'ACf45a3674f16f51148900132024c460a3'; 
var authToken = '8446627e5a4b458facedb6d8b38620a1'; 

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
/*
 * GET home page.
 */

exports.index = function(req, res){


	client.messages.create({
		to: "+15102039956", 
		from: "+16692316114",
		body: "Granny Martha: I am in an Emergency! Please help. -unit 108",  
	}, function(err, message) { 
		console.log(message); 
	});  
	json_responses = {"status" : "success"};
	res.send(json_responses);
};
