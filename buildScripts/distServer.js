import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.get('/users', function(req, res){
	//Hard coding for simplicity. This would hit actual DB.
res.json([
	{"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@aol.com"},
	{"id": 2,"firstName":"Todd","lastName":"Birth","email":"Toad@aol.com"},
	{"id": 3,"firstName":"Jessica","lastName":"Yes","email":"Yes@yahoo.com"}
	]);
});


app.listen(port, function(err){
		if (err) {
			console.log(err);
		} else {
			open('http://localhost:' + port);
		}
});
