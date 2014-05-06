// Require the Package
// To install, `npm install iron_worker`
var iron_worker = require('iron_worker');

// Initialize the Client
var worker = new iron_worker.Client({token: "IRON_IO_TOKEN", project_id: "IRON_IO_PROJECT_ID"});

// Let's assume we've loaded our JSON Payload into a Javascript Object as seen in example-payload.json and are ready to send it
var payload = loaded_json_payload;

worker.schedulesCreate("SendGridScheduler", payload, { "start_at" : Math.floor((new Date()).getTime()/1000) + 3600 }, function (err, body) {});
