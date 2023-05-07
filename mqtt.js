var mqttBroker = '2bit-iwud01ltywxm.cedalo.dev';
var mqttPort = 8883;
var mqttTopic = 'TT';

var client = new Paho.MQTT.Client(mqttBroker, mqttPort, 'mqtt-webclient');

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

var options = {
  useSSL: true,
  userName: 'web',
  password: '1234',
  onSuccess: onConnect,
  onFailure: onFailure
};

client.connect(options);

function onConnect() {
  console.log('Connected to MQTT broker');
  client.subscribe(mqttTopic);
}

function onFailure() {
  console.log('Failed to connect to MQTT broker');
}

function onConnectionLost(response) {
  console.log('Connection lost: ' + response.errorMessage);
}

function onMessageArrived(message) {
  console.log('Received message: ' + message.payloadString);
  document.getElementById('mqttData').innerHTML = message.payloadString;
}
