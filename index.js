import express from "express";

const app = express();

const { PORT = 8000 } = process.env;

app.get('/', (req, res) => {
    res.send("Hello!")
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});