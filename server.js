const express = require("express");
const path = require("path");
const fs = require("fs");

let reservations = ["Grace"];
let waitList = ["James"];
let all = {reservations: ["grace"], waitlist: ["james"]};

let app = express();
let PORT = process.env.PORT || 3000;

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  res.json(all);
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  res.json(waitList);
});

app.get("/api/:all?", function(req, res) {
  var reservedTables = req.params.all;

  if (reservedTables === "tables") {
    return res.json(all.reservations);
  } else if (reservedTables === "waitlist") {
  	return res.json(all.waitlist);
  };

});

app.post("/reserve", function(req, res) {
	// console.log(res);
	if (reservations.length <= 5) {
		reservations.push(res);
	}
  // If response is more than 5, then push it to the waitlist
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
