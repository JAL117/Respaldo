import express from "express";
import { addMedicationController, getAllMedicationController, putPriceMedicationController , deleteMedicationController} from "./dependencies";


export const medicationRouter = express.Router();

medicationRouter.post("/create", (req, res) => {
  try {
    addMedicationController.run.bind(addMedicationController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

medicationRouter.get("/", (req, res) => {
  try {
    getAllMedicationController.run.bind(getAllMedicationController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

medicationRouter.put("/:name", (req, res) => { 
  try {
    putPriceMedicationController.run.bind(putPriceMedicationController)(req, res);
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

medicationRouter.delete("/:name",(req , res)=>{
  try {
    deleteMedicationController.run.bind(deleteMedicationController)(req,res);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
})

