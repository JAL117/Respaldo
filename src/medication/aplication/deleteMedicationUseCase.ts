import { MedicationRepository } from "../domain/medicationRepository";

export class DeleteMedicationUseCase {
  constructor(readonly medicationRepository: MedicationRepository) {}

  async run(name: string): Promise<boolean> {
    try {
      const isDeleted = await this.medicationRepository.deleteMedication(name);
      return isDeleted;
    } catch (error) {
      console.error('Error in DeleteMedicationUseCase', error);
      return false;
    }
  }
}
