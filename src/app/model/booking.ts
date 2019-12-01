export class Booking {
  constructor(
    public username: string,
    public plateNumber: string,
    public pickUpDate: Date,
    public dropOffDate: Date,
    public bookedDate: Date
  ){}
}
