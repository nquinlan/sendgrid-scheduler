# Require The Gem
# To install, `gem install iron_worker_ng`
require "iron_worker_ng"

# Initialize the Client
client = IronWorkerNG::Client.new(:token => 'IRON_IO_TOKEN', :project_id => 'IRON_IO_PROJECT_ID')

# Let's assume we've loaded our JSON Payload into a Ruby Hash as seen in example-payload.json and are ready to send it 
payload = loaded_json_payload

# Schedule the worker to run in one hour
schedule = client.schedules.create('SendGridScheduler', payload, {:start_at => Time.now + 3600})
