import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-0lnwyky-shard-00-00.rrdvnll.mongodb.net:27017,ac-0lnwyky-shard-00-01.rrdvnll.mongodb.net:27017,ac-0lnwyky-shard-00-02.rrdvnll.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nehkc-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Congratulations! Database Connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log(
      "ERROR Occured while connecting to Database, Please Check!",
      error.message
    );
  });
};

export default Connection;
