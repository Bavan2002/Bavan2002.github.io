// Connect to the MQTT broker
var client = mqtt.connect('wss://test.mosquitto.org:8081');

// Subscribe to the topic
client.on('connect', function () {
    client.subscribe('mytopic');
});

// Display the received messages
client.on('message', function (topic, message) {
    document.getElementById('topic').textContent = topic;
    document.getElementById('message').textContent = message.toString();
});
