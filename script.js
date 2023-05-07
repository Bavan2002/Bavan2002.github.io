const dataContainer = document.getElementById('data-container');

// Connect to the MQTT broker
const client = mqtt.connect('mqtts://2bit-iwud01ltywxm.cedalo.dev:8883');

// Subscribe to the topic
client.subscribe('TT');

// Display the received message
client.on('message', function(topic, message) {
  const data = JSON.parse(message.toString());
  
  // Create the HTML for the data row
  const row = document.createElement('div');
  row.className = 'row';
  
  const label = document.createElement('div');
  label.className = 'label';
  label.innerText = data.label + ': ';
  
  const value = document.createElement('div');
  value.className = 'value';
  value.innerText = data.value;
  
  row.appendChild(label);
  row.appendChild(value);
  
  // Add the data row to the container
  dataContainer.appendChild(row);
});
