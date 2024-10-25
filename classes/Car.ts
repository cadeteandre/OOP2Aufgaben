import Cartype from './CarType';

class Car {
    _brand: string;
    private _constructionYear: number;
    _currentSpeed: number;
    _carType: Cartype;


    get constructionYear() {
        return this._constructionYear;
    }

    constructor(brand: string, constructionYear: number, currentSpeed: number, carType: Cartype) {
        this._brand = brand;
        this._constructionYear = constructionYear;
        this._currentSpeed = currentSpeed;
        this._carType = carType;
    }

    getSpeedInfo() {
        switch(true) {
            case (this._currentSpeed <= 40):
                return 'Driving slowly';
                break;
            case (this._currentSpeed > 40 && this._currentSpeed <= 70):
                return 'Driving normally';
                break;
            case (this._currentSpeed > 70 && this._currentSpeed <= 120):
                return 'Driving fast';
                break;
            case (this._currentSpeed > 120 && this._currentSpeed <= 190):
                return 'Driving really fast';
                break;
            case (this._currentSpeed > 190):
                return 'WTF';
                break;
        }
    }

    getCarType(): Cartype {
        return this._carType;
    }
}

export default Car;