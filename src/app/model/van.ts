import { Schedule } from './schedule';
export interface Van {
  plateNumber: string;
  make: string;
  model: string;
  yearOfManufacture: string;
  transmissionType: string;
  engineCapacity: string;
  numberOfPassengers: string;
  combinedEfficiency: string;
  vehicleCategory: string;
  numberOfFreeMiles: number;
  fuelType: string;
  rate: number;
  scheduleForVehicle: Schedule;
  numberOfSuitcases: string;
  numberOfDoors: string;
}
