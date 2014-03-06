params = JSON.parse(fs.readFileSync(process.argv[index + 1], 'utf8'));
require("fs");

var sendgrid  = require('sendgrid')(params['api_user'], params['api_key']);

sendgrid.send(params, function (err, res) {
	if(err) {
		Throw err;
	}
});
