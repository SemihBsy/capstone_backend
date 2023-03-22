import express from "express";
import { verifyToken } from "../verifyToken.js";
import { 
    createTweet, 
    deleteTweet, 
    likeorDislike, 
    getAllTweets, 
    getUserTweets, 
} from "../controllers/tweet.js";

const router = express.Router();

// Create a Tweet
router.post('/', verifyToken, createTweet);

// Delete a Tweet
router.delete('/:id', verifyToken, deleteTweet);

// Like/Dislike a Tweet
router.put('/:id/like', likeorDislike);

//  Get all tweet timeline
router.get('/timeline/:id', getAllTweets);

// Get User Tweets Only
router.get('user/all/:id', getUserTweets);


export default router;



