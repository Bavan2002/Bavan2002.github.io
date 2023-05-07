// Define MQTT broker connection parameters
var broker = {
	hostname: "mqtt.eclipse.org",
	port: 443,
	path: "/mqtt",
	username: "",
	password: "",
	useSSL: true
};

// Create a client instance
var client = new Paho.MQTT.Client(broker.hostname, broker.port, broker.path);

// Set callback handlers for MQTT client
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// Connect to MQTT broker
client.connect({
	onSuccess: onConnect,
	userName: broker.username,
	password: broker.password,
	useSSL: broker.useSSL
});

// Called when the client connects to MQTT broker
function onConnect() {
	console.log("Connected to MQTT broker");
	client.subscribe("test/topic");
}

// Called when the client loses connection to MQTT broker
function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
		console.log("Connection lost: " + responseObject.errorMessage);
	}
}

// Called when a message arrives on the subscribed topic
function onMessageArrived(message) {
	console.log("Message received: " + message.payloadString);
	document.getElementById("message").innerHTML = message.payloadString;
}
