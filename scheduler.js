var worker = require('node_helper');

var sendgrid  = require('sendgrid')(worker.params['api_user'], worker.params['api_key']);

var email = new sendgrid.Email(worker.params);
sendgrid.send(email, function (err, res) {
	if(err) {
		throw err;
	}else{
		console.log(res);
	}
});
