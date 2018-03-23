import app from './server/app.js';

// Site path
app.use('/', express.static(path.join(__dirname, '/client/build')))
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
