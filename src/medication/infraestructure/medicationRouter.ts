import express from "express";
import { addMedicationController, getAllMedicationController, putPriceMedicationController , deleteMedicationController} from "./dependencies";


export const medicationRouter = express.Router();

medicationRouter.post("/create", addMedicationController.run.bind(addMedicationController));

medicationRouter.get("/",getAllMedicationController.run.bind(getAllMedicationController));

medicationRouter.put("/:name",putPriceMedicationController.run.bind(putPriceMedicationController));
    
medicationRouter.delete('/', deleteMedicationController.run.bind(deleteMedicationController));
 

