export let ArnozRouter = express.Router()
import express from "express";
import { createOne, deleteOne, getAll, getById } from "../controllers/aranozControllers.js";

ArnozRouter.get("/aranoz", getAll);
  ArnozRouter.get("/aranoz/:id", getById);
  ArnozRouter.post("/aranoz", createOne);
  ArnozRouter.delete("/aranoz/:id", deleteOne);