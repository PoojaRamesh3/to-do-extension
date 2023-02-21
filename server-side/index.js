import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extented: true }));

app.use("/", Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Server running successfully on port ${PORT}`)
);
