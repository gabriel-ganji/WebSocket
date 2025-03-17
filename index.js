let express = require("express");
let app = express();

let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

io.on("connection", (socket) => {

    socket.on("Boas vindas!", (data) => {
        console.log("Executando evento de boas vindas!");
        console.log(data);
    });

    socket.on("word", (data) => {
        console.log(data);
        socket.emit("result", data + " - Gabriel Fullstack");
    });

});

http.listen(3000, () => {
    console.log("App Rodando!");
});