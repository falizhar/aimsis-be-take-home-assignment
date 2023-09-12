export interface IUser {
  id: string;
  name: string;
  phoneNumber: string | null;
  emailAddress: string | null;
  dateOfBirth: Date;
  ageToday: number;
}
