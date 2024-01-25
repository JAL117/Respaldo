import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";

export class PutPriceMedicationUseCase {
  constructor(readonly medicationRepository: MedicationRepository) {}

  async run(name: string, price: number): Promise<Medication | null> {
    try {
      const updatedMedication = await this.medicationRepository.putPriceMedication(name, price);
      return updatedMedication;
    } catch (error) {
      console.error("Error in PutPriceMedicationUseCase", error);
      return null;
    }
  }
}