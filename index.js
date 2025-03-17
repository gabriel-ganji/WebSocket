let express = require("express");
let app = express();

let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log("App Rodando!");
});