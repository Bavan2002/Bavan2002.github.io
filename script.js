// Connect to the Cedalo MQTT broker
var client = mqtt.connect("wss://2bit-iwud01ltywxm.cedalo.dev:443", {
	username: "web",
	password: "1234"
});

// Subscribe to the topic g
client.subscribe("TT");

// Handle incoming messages
client.on("message", function (topic, message) {
	// Update the topic label
	$("#topic").text(topic);

	// Add the message to the list
	$("#messages").prepend($("<li>").text(message.toString()));
});
