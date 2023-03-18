import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

// database config
const MONGO = process.env.MONGO;

// Connect to the database
mongoose.set('strictQuery', false);
mongoose.connect(MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Connection message handler
mongoose.connection
.on("open", () => console.log("Connected to mongodb"))
.on("close", () => console.log("Disconnected from mongodb"))
.on("error", (error) => console.log(error))

app.use("/api/users", userRoutes);

const PORT =  process.env.PORT ?? 8000
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});