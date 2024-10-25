class Customer {
    private _name: string = '';
    private _email: string = '';
    private _address: string = '';
    private _postalCode: string = 0;
    private _city: string = '';

    get name() {
        return this._name;
    }
    
    get email() {
        return this._email;
    }

    get address() {
        return this._address;
    }

    get postalCode() {
        return this._postalCode;
    }

    get city() {
        return this._city;
    }

    set name(value) {
        if(value.length > 60) {
            console.error('Der Wert wird dann nicht gesetzt');
        } else {
            this._name = value;
        }
    }

    set email(value) {
        if(value.includes('@')) {
            this._email = value;
        } else {
            console.error('Email must include an @');
        }
    }

    set address(value) {
        this._address = value;
    }

    set postalCode(value) {
        if(value.length === 5 && Number(value) >= Number('00000') && Number(value) <= 99999) {
            this._postalCode = value;
        } else {
            console.error('Der Wert wird dann nicht gesetzt');
        }
    }

    set city(value) {
        this._city = value;
    }

}

export default Customer;