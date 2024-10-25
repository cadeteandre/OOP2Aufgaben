class IceCreamFlavor {
    _name: string = '';
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined;

    constructor(name: string, price: number, isPopular: boolean, description?: string | undefined) {
        this._name = name;
        this._price = price;
        this._isPopular = isPopular;
        this._description = description;
    }

    getTotalPrice(numberOfScoops: number): string {
        return (this._price * numberOfScoops).toFixed(2);
    }

    printInfo() {
        if(this._isPopular) {
            console.log(`${this._name} is popular and costs ${this._price} Euro.`);
        } else {
            console.log(`${this._name} is not popular and costs ${this._price} Euro.`);
        }
    }

    getLengthOfDescription(): number {
        if(this._description) {
            return this._description.length;
        } else {
            return 0;
        }
    }
}

export default IceCreamFlavor;