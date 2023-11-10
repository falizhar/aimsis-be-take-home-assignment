import { User } from './models/User';
import { UserInput } from './models/input';
import { IUser } from "./models/output";

export function mapUserInputToDomainModel(input: UserInput): IUser {
  const { name, phoneNumber, emailAddress, dateOfBirth } = input;

  return new User(
    name!,
    phoneNumber!,
    emailAddress!,
    dateOfBirth!
  );
}
