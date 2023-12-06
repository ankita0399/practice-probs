const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jokes = require("./data.js")
dotenv.config();
const port = process.env.PORT || 3001;

console.log(jokes)

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World !");
})

app.get("/post", (req, res) => {
    res.send("Make a post here");
})

app.post("/joke", (req, res) => {

    jokes.push(req.body);
    console.log(req.body);
    res.send(jokes);
})

app.get("/joke", (req, res) => {
    res.json(jokes)
})


app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})