import { Medication } from "./medication";

export interface MedicationRepository {
  addMedication(name: string, price: number, quantity: number): Promise<Medication | null>;
  getAllMedication(): Promise<Medication[] | null>;
  putPriceMedication(name: string, price: number): Promise<Medication | null>;
}