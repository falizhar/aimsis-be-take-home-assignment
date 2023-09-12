import { mapUserInputToDomainModel } from '..';

describe('Question 1', () => {
  it('Should map emailAddress to id if both phoneNumber and emailAddress are available', () => {
    const result = mapUserInputToDomainModel({
      name: 'John Doe',
      phoneNumber: '1234567890',
      emailAddress: 'john@example.com',
      dateOfBirth: '1990-02-21',
    });

    expect(result).toMatchObject({
      id: 'john@example.com',
      name: 'John Doe',
      phoneNumber: '1234567890',
      emailAddress: 'john@example.com',
      dateOfBirth: new Date(1990, 1, 21),
    });
  });

  it('Should return correct ageToday based on the dateOfBirth', () => {
    const result = mapUserInputToDomainModel({
      name: 'John Doe',
      phoneNumber: '1234567890',
      emailAddress: 'john@example.com',
      dateOfBirth: '1990-01-01',
    });

    expect(result.ageToday).toEqual(33);
  });

  it('Should map emailAddress to id if only emailAddress is available', () => {
    const result = mapUserInputToDomainModel({
      name: 'John Doe',
      phoneNumber: null,
      emailAddress: 'john@example.com',
      dateOfBirth: '1990-02-21',
    });

    expect(result).toMatchObject({
      id: 'john@example.com',
      name: 'John Doe',
      phoneNumber: null,
      emailAddress: 'john@example.com',
      dateOfBirth: new Date(1990, 1, 21),
    });
  });

  it('Should map phoneNumber to id if only phoneNumber is available', () => {
    const result = mapUserInputToDomainModel({
      name: 'John Doe',
      phoneNumber: '1234567890',
      emailAddress: null,
      dateOfBirth: '1990-02-21',
    });

    expect(result).toMatchObject({
      id: '1234567890',
      name: 'John Doe',
      phoneNumber: '1234567890',
      emailAddress: null,
      dateOfBirth: new Date(1990, 1, 21),
    });
  });

  it('Should throw if name is an empty string', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: '',
        phoneNumber: '1234567890',
        emailAddress: 'john@example.com',
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if name is null', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: null,
        phoneNumber: '1234567890',
        emailAddress: 'john@example.com',
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if both phoneNumber and emailAddress are undefined', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: undefined,
        emailAddress: undefined,
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if phoneNumber is not 10 characters long', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '12345678',
        emailAddress: 'john@example.com',
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if phoneNumber consists of non-numeric characters', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '123456abcd',
        emailAddress: null,
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if emailAddress is not in a valid email address format', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '1234567890',
        emailAddress: 'john@example@com',
        dateOfBirth: '1990-02-21',
      });
    }).toThrow();
  });

  it('Should throw if dateOfBirth is not defined', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '1234567890',
        emailAddress: 'john@example.com',
        dateOfBirth: undefined,
      });
    }).toThrow();
  });

  it('Should throw if dateOfBirth is not in the ISO 8601 date format', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '1234567890',
        emailAddress: 'john@example.com',
        dateOfBirth: '01-01-1990',
      });
    }).toThrow();
  });

  it('Should throw if dateOfBirth is in the future', () => {
    expect(() => {
      mapUserInputToDomainModel({
        name: 'John Doe',
        phoneNumber: '1234567890',
        emailAddress: 'john@example.com',
        dateOfBirth: '2050-01-01',
      });
    }).toThrow();
  });
});
