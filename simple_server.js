var bodyParser = require('body-parser')
var express = require("express");
var app = express();

//create public page
// make express see the world with ejs-eyes
app.set('view engine', 'ejs');

//create static directory for css so that ejs knows where to find it
app.use(express.static(__dirname + '/public'));

let state = {
    switchMain: 0,
    heightAdjust: 0,
    collisionDetect: 0,
    alarmOn: 0,
    homeSet: 0
}

app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

//frontend
app.get("/url", (req, res, next) => {
 res.json(state);
});

//backend
app.post("/data", (req, res, next) => {
 state.switchMain = req.body.switchMain;
 state.heightAdjust = req.body.heightAdjust;
 state.collisionDetect = req.body.collisionDetect;
 state.alarmOn = req.body.alarmOn;
 state.homeSet = req.body.homeSet;
 console.log(req.body)
});

// create a starting page/route for user input,
// refer to html file inside 'public '
app.get('/yo', function (req, res, next) {
    //res.json(state);
	var fileToSend = "yo.html";
	res.sendFile(fileToSend, {root: './public'});
});
