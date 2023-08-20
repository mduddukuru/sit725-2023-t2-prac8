let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let route = require('./routes/route');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', route);


app.listen(port, () => {
    console.log('server started');
});




