const express = require("express");
const path = require("path");
const fs = require("fs");

let reservations =
	[{ 
		Name: "Grace",
		Phone: "9999999999",
		Email: "example@gmail.com",
		Unique_ID: 1
	},
	{ 
		Name: "Mike",
		Phone: "9999999999",
		Email: "example@gmail.com",
		Unique_ID: 2
	},
	{ 
		Name: "Don",
		Phone: "9999999999",
		Email: "example@gmail.com",
		Unique_ID: 3
	},
	{ 
		Name: "Fausto",
		Phone: "9999999999",
		Email: "example@gmail.com",
		Unique_ID: 4
	},
	{ 
		Name: "Richard",
		Phone: "9999999999",
		Email: "example@gmail.com",
		Unique_ID: 5
	}];
let waitList = 
	[{ 
		Name: "James",
		Phone: "8888888888",
		Email: "example1@gmail.com",
		Unique_ID: 6
	}];

let all = {reservations, waitList};

let app = express();
let PORT = process.env.PORT || 3000;

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/:all?", function(req, res) {
  var reservedTables = req.params.all;

  if (reservedTables === "tables") {
    return res.json(all.reservations);
  } else if (reservedTables === "waitlist") {
  	return res.json(all.waitlist);
  } else {
  	return res.json(all);
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
