import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("DB connection successful");
    } catch (error) {
        console.log("Mongodb connection failed!")
    }
}

export default connectDB;