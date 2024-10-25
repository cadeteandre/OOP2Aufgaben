export enum Gender {
    male = 'Male',
    female = 'Female'
}

class Person {
    private _name: string;
    private _gender: Gender;
    _birthday?: Date;

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    set name(value) {
        this._name = value;
    }

    set gender(value) {
        this._gender = value;
    }

    constructor(name: string, gender: Gender, birthday?: Date) {
        this._name = name;
        this._gender = gender;
        this._birthday = birthday ?? new Date();
    }
}

export default Person;
