let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/addtwonumbers', function (req,res) {
    let number1 = req.query.number1;
    let number2 = req.query.number2;
    let result = parseInt(number1) + parseInt(number2);
    let response = {statusCode: 200, message: 'success', data:result}
    res.json(response);
});



app.listen(port, () => {
    console.log('server started');
});