const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, (req, res)=>{
	console.log("Server running at " + port);
});
