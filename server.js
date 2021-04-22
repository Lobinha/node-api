const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Rocktseat");
}
);

app.listen(3001);