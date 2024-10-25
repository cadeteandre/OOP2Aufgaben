import * as EmailValidator from 'email-validator';

class Validator {
    validateEmail(email: string): boolean {
        return EmailValidator.validate(email);
    }
}

export default Validator;