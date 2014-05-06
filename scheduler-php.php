<?php
// Require the Library
// To install, follow the installation instructions on Github
// https://github.com/iron-io/iron_worker_php#install-iron_worker_php
require_once "IronCore.class.php";
require_once "IronWorker.class.php";

// Initialize the Client
$worker = new IronWorker(array(
    "token" => "IRON_IO_TOKEN",
    "project_id" => "IRON_IO_PROJECT_ID"
));

// Let's assume we've loaded our JSON Payload into a PHP Array as seen in example-payload.json and are ready to send it 
$payload = $loaded_json_payload;

// Schedule the worker to run in one hour
$worker->postScheduleAdvanced("SendGridScheduler", $payload, time() + 3600);
