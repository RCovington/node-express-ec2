import express from 'express'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(5001, () => console.log('API running on 5001'));

app.get('/', (req, res) => {
    console.log("RUSS Req was: " + JSON.stringify(req.path));
    res.json('My API running ...');
});

const favicon = new Buffer.from('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64'); 
app.get("/favicon.ico", function(req, res) {
 res.statusCode = 200;
 res.setHeader('Content-Length', favicon.length);
 res.setHeader('Content-Type', 'image/x-icon');
 res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
 res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
 res.end(favicon);
});

app.get('/*', (req, res) => {
    console.log("RUSS GET Req path was: " + JSON.stringify(req.path));
    if(req.body)
    {
       console.log("RUSS Req body was: <nothing>" );//+ JSON.stringify(req.body));
    }
    res.json('My get/*STAR* API running ...');
});

app.post('/*', (req, res) => {
    console.log("RUSS POST Req path was: " + JSON.stringify(req.path));
       console.log("RUSS Req body was: " + JSON.stringify(req.body));
       console.log("RUSS here's the req.header: " + JSON.stringify(req.header));
       console.log("RUSS here's the req.headers: " + JSON.stringify(req.headers));
       console.log("RUSS here's the req.cookies: " + JSON.stringify(req.cookies));
    res.json('My POST /*STAR* API running ...');
});

