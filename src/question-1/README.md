# Question 1

## Objectives
The assessment objectives of this question are as follows:
- Follows best practices.
- Code readability.
- Appropriate code structure.
- Appropriate naming of parameters, functions, types, classes, and fields.
- Appropriate use of OOP concepts.
- Appropriate use of comments.

## Instructions
In this scenario, we have a user input that contains the details of a new user, and we would like to validate and map to our domain model. The `UserInput` interface in the `models/input.ts` file describes the input structure, and the `IUser` interface in the `models/output.ts` file describes the structure of our domain model.

### Validation
We will need to validate the following, and throw as JS `Error` instances if any of the below conditions are not met:
1. The `name` field is not null and is not an empty string.
2. Either `phoneNumber` or `emailAddress` must be specified. Both can be specified as well.
3. If specified, the `phoneNumber` string must be exactly 10 characters, and can only contain numeric characters.
4. If specified, the `emailAddress` string must be in a valid email address format.
5. The `dateOfBirth` string must be specified, must be in the ISO 8601 date format (`YYYY-MM-DD`), and must not be in the future.

### Mapping
The output fields should be mapped as follows:
- `id`: Email address of the user if it exists, if not it should be the phone number
- `name`: Name of the user
- `phoneNumber`: Phone number of the user
- `emailAddress`: Email address of the user
- `dateOfBirth`: Date of birth of the user as a JS `Date` instance
- `ageToday`: The current age of the user (Preferably via a getter)

### Additional Instructions
- You may use any additional NPM packages as you deem fit, but you may not use any external API calls.
- It is highly recommended for the output to be a rich domain model (i.e. a class).
- You may create any additional files as necessary.
- You must not modify the signature of the `mapUserInputToDomainModel` function in `index.ts`, you can only modify the body of the function.
- You must not modify the `models/input.ts` and `models/output.ts` files in any way.
- You must not modify the `__tests__/index.test.ts` file in any way.
- You may create additional unit tests in a separate file from `__tests__/index.test.ts`.
