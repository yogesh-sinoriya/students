var app = require('express')();
app.get('/',function(req, res){
	res.sendfile('./index.html');
});
app.listen(5000);


