import express from "express";
import { getUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update user
router.put('/:id', verifyToken, updateUser);

// Get user
router.get('/find/:id', getUser);

// Delete User
router.delete('/:id', verifyToken, deleteUser);

export default router;