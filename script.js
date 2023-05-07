// Create a client instance
var client = new Paho.MQTT.Client("https://2bit-iwud01ltywxm.cedalo.dev", Number(1883), "1234");

// Set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// Connect the client
client.connect({
    onSuccess: onConnect,
    userName: "web",
    password: "1234",
    useSSL: true
});

// Called when the client connects
function onConnect() {
    console.log("Connected to MQTT broker");
    // Subscribe to the topic
    client.subscribe("TT");
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection lost: " + responseObject.errorMessage);
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    console.log("Message received: " + message.payloadString);
    // Display the message on the web page
    document.getElementById("message").innerHTML = message.payloadString;
}

// Called when the ON button is clicked
document.getElementById("on").addEventListener("click", function() {
    // Publish a message to the topic
    var message = new Paho.MQTT.Message("ON");
    message.destinationName = "TT";
    client.send(message);
});

// Called when the OFF button is clicked
document.getElementById("off").addEventListener("click", function() {
    // Publish a message to the topic
    var message = new Paho.MQTT.Message("OFF");
    message.destinationName = "TT";
    client.send(message);
});
