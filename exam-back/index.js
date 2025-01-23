import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ArnozRouter } from "./src/router/aranozRouter.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/",ArnozRouter)


app.listen(port, async () => {
  await mongoose
    .connect(
      "mongodb+srv://miranafmbp216:miranafmbp216@cluster0.wphbo.mongodb.net/"
    )
    .catch((err) => console.log(err));

  console.log(`Example app listening on port ${port}`);
});
