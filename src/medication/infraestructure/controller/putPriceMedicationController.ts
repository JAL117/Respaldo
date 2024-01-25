import { Request, Response } from "express";
import { PutPriceMedicationUseCase } from "../../aplication/putPriceMedicactionUseCase";

export class PutPriceMedicationController {
  constructor(readonly putPriceMedicationUseCase: PutPriceMedicationUseCase) {}

  async run(req: Request, res: Response) {
    try {
      let { name } = req.params;  
      let { price } = req.body;

      const updatedMedication = await this.putPriceMedicationUseCase.run(name, price);

      if (updatedMedication) {
        return res.status(200).json({
          status: "success",
          data: {
            name: updatedMedication.name,
            price: updatedMedication.price,
            quantity: updatedMedication.quantity,
          },
          message: "Medicamento actualizado",
        });
      } else {
        return res.status(404).json({
          status: "error",
          data: [],
          message: "No se encontró el medicamento a actualizar",
        });
      }
    } catch (error) {
      console.error("Error in PutPriceMedicationController", error);
      return res.status(500).json({
        status: "error",
        message: "Error en el servidor",
      });
    }
  }
}
