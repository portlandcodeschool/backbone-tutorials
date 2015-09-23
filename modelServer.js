
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(__dirname));

var texts = [];

// Allow optional test data...
var testValues = ['Zero','One','Two','Three','Four','Five...data...things!']
var useTestValues = process.argv[2];// a number, optional extra argument when starting server
if (useTestValues)
	texts = testValues.slice(0,useTestValues);

function showData() {
	console.log('Data store is now: ', texts);
}

/*
app.get('/texts/:id', function (req, res) {
    var id = req.params.id;
    console.log('Sending text #%s...',id);
    res.send({value : texts[id]});
});

app.put('/texts/:id', function (req, res) {
	var id = req.params.id;
	console.log('Receiving text #%s...',id);
	texts[id] = req.body.value;
	showData();
	res.send({});
});

app.post('/texts', function (req, res) {
	console.log('Receiving new text...');
	var newid = texts.length;
	console.log('Assigning id of %s',newid);
	texts[newid] = req.body.value;
	showData();
	res.send({id:newid});
});

app.get('/texts', function (req, res) {
	console.log('Sending all texts...');
	showData();
	var textsAndIDs = texts.map(function (v, i) {
		return {id : i, value : v};
	});
	res.send(textsAndIDs);
});
*/

app.listen(3000);
showData();
