import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("you are in user router doing get request");
});

export default router;