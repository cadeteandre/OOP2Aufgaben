class Animal {
    private _species: string;
    private _age: number;
    private _color: string;

    get species() {
        return this._species
    }

    get age() {
        return this._age
    }

    get color() {
        return this._color
    }

    set species(value) {
        this._species = value;
    }

    set age(value) {
        this._age = value;
    }

    set color(value) {
        this._color = value;
    }

    constructor(species: string, age: number, color: string) {
        this._species = species;
        this._age = age;
        this._color = color;
    }
}

export default Animal;