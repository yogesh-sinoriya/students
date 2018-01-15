var app = require('express')();
app.get('/',function(req, res){
	res.sendfile('./index.html');
});
app.listen(process.env.PORT || 5000);


