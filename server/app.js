import express from 'express';
import path from 'path';

var app = express();

app.set('port', (process.env.PORT || 3000));


// Site path
app.use('/', express.static(path.join(__dirname, './../client/build')))
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './../client/build', 'index.html'));
});
export default app;