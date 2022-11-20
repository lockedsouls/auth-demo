const express = require("express"); const app = express();
const path = require("path");

app.use(require("cors")());
app.use(express.json());
app.use(express.static(path.join(`${__dirname}/views`)))

app.route("/")
    .get((req, res) => {
        res.sendFile(path.join(`${__dirname}/views/index.html`));
    });

app.listen(3000, "192.168.1.5", () => console.log("Server started"));