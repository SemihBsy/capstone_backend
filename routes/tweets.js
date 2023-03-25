import express from "express";
import { verifyToken } from "../verifyToken.js";
import { 
    createTweet, 
    deleteTweet, 
    likeorDislike, 
    getAllTweets, 
    getUserTweets,
    getExploreTweets, 
} from "../controllers/tweet.js";

const router = express.Router();

// Create a Tweet
router.post("/", verifyToken, createTweet);

// Delete a Tweet
router.delete("/:id", verifyToken, deleteTweet);

// Like/Dislike a Tweet
router.put("/:id/like", likeorDislike);

// Get all tweet timeline
router.get("/timeline/:id", getAllTweets);

// Get user Tweets only
router.get("/user/all/:id", getUserTweets);

// Explore
router.get("/explore", getExploreTweets);


export default router;



