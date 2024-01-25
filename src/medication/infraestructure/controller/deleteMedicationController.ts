
import { Request, Response } from "express";
import { DeleteMedicationUseCase } from "../../aplication/deleteMedicationUseCase";

export class DeleteMedicationController {
  constructor(readonly deleteMedicationUseCase: DeleteMedicationUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const { name } = req.params;

      const isDeleted = await this.deleteMedicationUseCase.run(name);

      if (isDeleted) {
        return res.status(200).send({
          status: "success",
          message: "Medicamento eliminado"
        });
      } else {
        return res.status(404).send({
          status: "error",
          message: "No se encontró el medicamento para eliminar"
        });
      }
    } catch (error) {
      console.error("Error en el controlador", error);
      res.status(500).send({
        status: "error",
        message: "Error en el servidor"
      });
    }
  }
}
