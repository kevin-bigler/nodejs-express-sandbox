let express = require('express');
let app = express();

let Speaker = require('./src/speaker.js');

const whatToSay = '100 KIDS 100 FRIENDS';
// let speaker = {
// 	speak() {
// 		console.log(whatToSay);
// 		return whatToSay;
// 	}
// }
let michael = new Speaker(whatToSay);

app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/fundle-bundle', (request, response) => {
	response.send(michael.speak());
});

app.get('/cake-day', (request, response) => {
	response.render(__dirname + '/src/views/cake-day', {dance:'NOT THE WAY I TAUGHT YOU!', beat:'UNTSZ, NT NT NT NTSZZ'});
});

app.listen(8888);