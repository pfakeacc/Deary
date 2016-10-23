var QuickBooks = require('node-quickbooks')
var consumerKey="qyprdrnbGdQEBy9fEI5bbPaRQIoaDW";
var consumerSecret="83AyUlBLnLHNbWGT7170ymGehgHLxpArTUJm2Npx";
oauthToken="qyprdRNqZD5JpvaTtFb3IX6rObsiod32Cnzh9khqaU6YVkeD";
oauthTokenSecret="nEWTAJWtae1phldZr7lB29xi42uyglX2UZBHqhbk";
realmId="123145710497954";



var iname= ["leak", "fire", "water", "gas", "alarm", "help", "pain", "fall", "fallen", "danger", "cant_get_up", "hurt", "safety", "broke", "broken", "rodent", "bug", "rat", "mouse", "cockroach", "heat", "toilet", "drain", "disposal", "mold", "light", "tv", "fan", "lightbulb", "air_conditioning", "sink", "tap", "tub", "shower", "washing_machine", "dryer", "dishwasher", "microwave", "oven", "stove", "refrigerator", "fridge"];

var ihours=[8, 25, 8, 10, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 3, 3, 3, 10, 1, 1, 1, 1, 1, 3, 2, 2, 8, 30, 30, 30, 15, 30, 30, 30, 30];

exports.qboConnectt=function(req,res){
	console.log("In qboConnect");
	var qbo = new QuickBooks(consumerKey,
			consumerSecret,
			oauthToken,
			oauthTokenSecret,
			realmId,
			false, // don't use the sandbox (i.e. for testing)
	true); // turn debugging on
	
	
	var issuetype = req.param("issuetype");
	var issuename = req.param("issuename");
	var issuedesp = req.param("issuedesp");
	
	var d = new Date();
	var a = iname.indexOf(issuename);
	var hours_needed = ihours[a];
	var b = a+19;
	if (a == -1){
		console.log("COULD NOT FIND ISSUENAME");
	}
	
	else{
		
		console.log("FOUND ISSUENAME");
	}
	
	console.log("issuetype="+issuetype+ " issuename="+issuename+" issuedesp="+issuedesp+" a="+a+" b="+b);
	
	qbo.createTimeActivity({
		
			"TxnDate": d,
			"NameOf": "Employee",
			"EmployeeRef": {
				"value": "55",
				"name": "Emily Platt"
			},
			"CustomerRef": {
				"value": "58",
				"name": "108"
			},
			"ItemRef": {
				"value": b,
				"name": issuename
			},
			"BillableStatus": "Billable",
			"Taxable": true,
			"HourlyRate": 20,
			"Hours": hours_needed,
			"Minutes": 0,
			"Description": issuedesp,
			"domain": "QBO",
			"sparse": false,
			
			"MetaData": {
				"CreateTime": d,
				"LastUpdatedTime": d
			}
		
	}, function(err, billPayment) {
		console.log(billPayment)
	});
	
	//res.render('index', { title: 'Express' });
	json_responses = {"status" : "success"};
	res.send(json_responses);
};


/*qbo.updateCustomer({
	  Id: '1',
	  SyncToken: '2',
	  sparse: true,
	  PrimaryEmailAddr: {Address: 'customer@example.com'}
	}, function(err, customer) {
	  if (err) console.log(err)
	  else console.log(customer)
	})
	res.render('index.ejs',{title: 'intuit'});
 *//*qbo.createAttachable({Note: 'My File'}, function(err, attachable) {
  if (err) console.log(err)
  else console.log(attachable.Id)
})

qbo.getBillPayment('42', function(err, billPayment) {
  console.log(billPayment)
})


qbo.deleteAttachable('42', function(err, attachable) {
  if (err) console.log(err)
  else console.log(attachable)
})

qbo.findAccounts({
  AccountType: 'Expense',
  desc: 'MetaData.LastUpdatedTime',
  limit: 5,
  offset: 5
  }, function(err, accounts) {
  accounts.QueryResponse.Account.forEach(function(account) {
    console.log(account.Name)
  })
})

qbo.reportBalanceSheet({department: '1,4,7'}, function(err, balanceSheet) {
  console.log(balanceSheet)
})

qbo.upload(
  fs.createReadStream('contractor.jpg'),
  'Invoice',
  40,
  function(err, data) {
    console.log(err)
    console.log(data)
  })*/

exports.qboConnect=function(req,res){
	console.log("In qboConnect");
		var qbo = new QuickBooks(consumerKey,
	                         consumerSecret,
	                         oauthToken,
	                         oauthTokenSecret,
	                         realmId,
	                         false, // don't use the sandbox (i.e. for testing)
	                         true); // turn debugging on
		
		//timeActivity object
		var sampleTimeObj={
				  "TimeActivity": {
					    "TxnDate": "2016-10-22",
					    "NameOf": "1",
					    "EmployeeRef": {
					      "value": "55",
					      "name": "Emily Platt"
					    },
					    "CustomerRef": {
					      "value": "21",
					      "name": "Rondonuwu Fruit and Vegi"
					    },
					    "ItemRef": {
					      "value": "8",
					      "name": "Lighting"
					    },
					    "BillableStatus": "HasBeenBilled",
					    "Taxable": false,
					    "HourlyRate": 15,
					    "Hours": 3,
					    "Minutes": 0,
					    "Description": "Rank-Urgency",
					    "domain": "QBO",
					    "sparse": false,
					    "Id": "5",
					    "SyncToken": "0",
					    "MetaData": {
					      "CreateTime": "2016-10-29T11:55:25-07:00",
					      "LastUpdatedTime": "2016-10-22T13:45:12-07:00"
					    }
					  },
					  "time": "2016-10-22T10:35:07.663-07:00"
					};
		
		/*qbo.findCustomers({
			  fetchAll: true
			}, function(e, customers) {
			  console.log(JSON.stringify(customers));
			});	{field: '', value: 'S%', operator: 'LIKE'}*/
			qbo.findTimeActivities(function(err, billPayment) {
				var p1= ["leak", "fire", "water", "gas", "alarm", "help", "pain", "fall", "fallen", "danger", "cant_get_up", "hurt", "safety", "broke", "broken"];
				var p2= ["rodent", "bug", "rat", "mouse", "cockroach", "heat", "toilet", "drain", "disposal", "mold"];
				var p3=["light", "tv", "fan", "lightbulb", "air_conditioning", "sink", "tap", "tub", "shower", "washing_machine", "dryer", "dishwasher", "microwave", "oven", "stove", "refrigerator", "fridge"];
				
				console.log("-----------------------------------------")
				for(var i=0;i<(billPayment.QueryResponse.TimeActivity).length;i++){
					billPayment.QueryResponse.TimeActivity[i]['priority']="low";
					var hours=billPayment.QueryResponse.TimeActivity[i].Hours;
					var HourlyRate=billPayment.QueryResponse.TimeActivity[i].HourlyRate;
					var bill=(hours*HourlyRate);
					billPayment.QueryResponse.TimeActivity[i]['bill']=bill;
					var str=billPayment.QueryResponse.TimeActivity[i].ItemRef.name;
					for(var j=0;j<p1.length;j++){
						if(str==p1[j]){
							console.log("++++++++");
							console.log(str);
							console.log(p1[j]);
							billPayment.QueryResponse.TimeActivity[i].priority="very high";
						}	
					}
					for(var k=0;k<p2.length;k++){
						if(str==p2[k]){
							console.log("-----------");
							console.log(str);
							console.log(p2[k]);
							billPayment.QueryResponse.TimeActivity[i].priority="high";
						}	
					}
					for(var l=0;l<p3.length;l++){
						if(str==p3[l]){
							console.log("*******");
							console.log(str);
							console.log(p3[l]);
							billPayment.QueryResponse.TimeActivity[i].priority="moderate";
						}	
					}
					console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
					console.log(JSON.stringify(billPayment.QueryResponse.TimeActivity[i].TxnDate));
					console.log(JSON.stringify(billPayment.QueryResponse.TimeActivity[i].priority));
				}
				
			console.log("---90000000000000000000000000");
			console.log(billPayment.QueryResponse.TimeActivity[0].ItemRef.name);
			console.log(billPayment.QueryResponse.TimeActivity[0].priority);
				var jsonString1= JSON.stringify(billPayment);
				  //var jsonParse1= JSON.parse(jsonString1);
				res.render('index.ejs',{obj : billPayment});	
				  
			});
			
		
	};
	/*qbo.updateCustomer({
		  Id: '1',
		  SyncToken: '2',
		  sparse: true,
		  PrimaryEmailAddr: {Address: 'customer@example.com'}
		}, function(err, customer) {
		  if (err) console.log(err)
		  else console.log(customer)
		})
		
	*//*qbo.createAttachable({Note: 'My File'}, function(err, attachable) {
	  if (err) console.log(err)
	  else console.log(attachable.Id)
	})

	qbo.getBillPayment('42', function(err, billPayment) {
	  console.log(billPayment)
	})


	qbo.deleteAttachable('42', function(err, attachable) {
	  if (err) console.log(err)
	  else console.log(attachable)
	})

	qbo.findAccounts({
	  AccountType: 'Expense',
	  desc: 'MetaData.LastUpdatedTime',
	  limit: 5,
	  offset: 5
	  }, function(err, accounts) {
	  accounts.QueryResponse.Account.forEach(function(account) {
	    console.log(account.Name)
	  })
	})

	qbo.reportBalanceSheet({department: '1,4,7'}, function(err, balanceSheet) {
	  console.log(balanceSheet)
	})

	qbo.upload(
	  fs.createReadStream('contractor.jpg'),
	  'Invoice',
	  40,
	  function(err, data) {
	    console.log(err)
	    console.log(data)
	  })*/

