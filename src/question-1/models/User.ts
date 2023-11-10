import { UserInput } from './input';
import { IUser } from './output';
import { parseISO, isValid, isPast, differenceInYears } from 'date-fns';

export class User implements IUser {
  id: string;
  name: string;
  phoneNumber: string | null;
  emailAddress: string | null;
  dateOfBirth: Date;
  private _ageToday: number;

  constructor(
    name: string,
    phoneNumber: string | null,
    emailAddress: string | null,
    dateOfBirth: string | null | undefined
  ) {
    this.validate({name, phoneNumber, emailAddress, dateOfBirth});

    this.id = emailAddress || phoneNumber || '';
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.dateOfBirth = parseISO(dateOfBirth!);
    this._ageToday = differenceInYears(Date.now(), this.dateOfBirth);
  }

  private validate(user: UserInput): void {
    const { name, phoneNumber, emailAddress, dateOfBirth} = user;
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const isPhoneNumberValid = (phone: string) => /^\d{10}$/.test(phone);

    if (!name) throw new Error('Name cannot be empty.');
    if (!(phoneNumber || emailAddress)) throw new Error('Either phone number or email address must be provided.');
    if (phoneNumber && !isPhoneNumberValid(phoneNumber)) throw new Error('Invalid phone number.');
    if (emailAddress && !isValidEmail(emailAddress)) throw new Error('Invalid email address.');
    if (!dateOfBirth) throw new Error('Date of birth must be provided.');

    const parsedDate = parseISO(dateOfBirth);
    if (!isValid(parsedDate) || !isPast(parsedDate)) throw new Error('Invalid or future date of birth.');
  }

  get ageToday(): number {
    return this._ageToday;
  }
}
