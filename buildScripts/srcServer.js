import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const	compiler	= webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname,'../src/index.html'));
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
