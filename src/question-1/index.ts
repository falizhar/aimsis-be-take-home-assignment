import { UserInput } from './models/input';
import { IUser } from './models/output';

export function mapUserInputToDomainModel(input: UserInput): IUser {
  // TODO: Implement and replace the return object
  return {
    id: 'user@example.com',
    name: 'User 1',
    phoneNumber: '1234567890',
    emailAddress: 'user@example.com',
    dateOfBirth: new Date(2000, 1, 1),
    ageToday: 22,
  };
}
