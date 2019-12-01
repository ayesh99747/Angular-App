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
  scheduleForVehicle: {
    bookedDates: Date[];
  };
  numberOfSuitcases: string;
  numberOfDoors: string;
}
