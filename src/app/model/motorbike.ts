export interface Motorbike {
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
  motorbikeType: string;
  sideCarPresent: boolean;
  helmetProvided: boolean;
}
