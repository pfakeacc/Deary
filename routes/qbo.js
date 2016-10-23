var QuickBooks = require('node-quickbooks')
var consumerKey="qyprdrnbGdQEBy9fEI5bbPaRQIoaDW";
var consumerSecret="83AyUlBLnLHNbWGT7170ymGehgHLxpArTUJm2Npx";
oauthToken="qyprdRNqZD5JpvaTtFb3IX6rObsiod32Cnzh9khqaU6YVkeD";
oauthTokenSecret="nEWTAJWtae1phldZr7lB29xi42uyglX2UZBHqhbk";
realmId="123145710497954";



var iname= ["leak", "fire", "water", "gas", "alarm", "help", "pain", "fall", "fallen", "danger", "cant_get_up", "hurt", "safety", "broke", "broken", "rodent", "bug", "rat", "mouse", "cockroach", "heat", "toilet", "drain", "disposal", "mold", "light", "tv", "fan", "lightbulb", "air_conditioning", "sink", "tap", "tub", "shower", "washing_machine", "dryer", "dishwasher", "microwave", "oven", "stove", "refrigerator", "fridge"];

var ihours=[8, 25, 8, 10, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 3, 3, 3, 10, 1, 1, 1, 1, 1, 3, 2, 2, 8, 30, 30, 30, 15, 30, 30, 30, 30];

exports.qboConnect=function(req,res){
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

