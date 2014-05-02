var worker = require('node_helper');

var sendgrid  = require('sendgrid')(worker.params['api_user'], worker.params['api_key']);

sendgrid.send(worker.params, function (err, res) {
	if(err) {
		throw err;
	}else{
		console.log(res);
	}
});
