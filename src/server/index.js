const websocket = require('nodejs-websocket')

var server = websocket.createServer(function (conn) {
	console.log("New connection opened.")

	conn.on("close", function() {
		console.log("Connection closed.")
	})
}).listen(8080)
