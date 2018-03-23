import express from 'express';

var app = express();

app.set('port', (process.env.PORT || 3000));


export default app;