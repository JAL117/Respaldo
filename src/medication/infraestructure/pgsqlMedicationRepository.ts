import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";
import MedicationModel from "./model/medicationModel";

export class PgsqlMedicationRepository implements MedicationRepository {
  async addMedication(
    name: string,
    price: number,
    quantity: number
  ): Promise<Medication | null> {
    try {
      const createdMedication = await MedicationModel.create({
        name,
        price,
        quantity
      });
      return new Medication(
        createdMedication.id,
        createdMedication.name,
        createdMedication.price,
        createdMedication.quantity
      );
    } catch (error) {
      console.error("Error In Psql", error);
      return null;
    }
  }

  async getAllMedication(): Promise<Medication[]> {
    try {
      const medications = await MedicationModel.findAll();
      return medications.map(
        (medications) =>
          new Medication(
          medications.id,
          medications.name,
          medications.price,
          medications.quantity
          )
      );
    } catch (error) {
      console.error("Error in Psql", error);
      return [];
    }
  }

  async putPriceMedication(name: string, price: number): Promise<Medication | null> {
    try {
      const updatedMedication = await MedicationModel.findOne({ where: { name } });

      if (updatedMedication) {
        updatedMedication.price = price;
        await updatedMedication.save();

        return updatedMedication;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error in PgsqlMedicationRepository", error);
      return null;
    }
  }


}
