import Driver from "../classes/Driver";
import Car from "./classes/Car";
import Cartype from "./classes/CarType";

const suvCar = new Car('Ford', 2023, 60, Cartype.SUV);
console.log(suvCar);
console.log(suvCar.getSpeedInfo());

const convertibleCar = new Car('Mazda', 2023, 150, Cartype.Convertible);
console.log(convertibleCar);
console.log(convertibleCar.getSpeedInfo());

const hatchbackCar = new Car('Volkswagen', 2023, 250, Cartype.Hatchback);
console.log(hatchbackCar);
console.log(hatchbackCar.getSpeedInfo());

const driver_1 = new Driver('Andre', 'Cadete', 30, convertibleCar, 2013)
console.log(driver_1);
console.log(driver_1.licenseFromYear);
console.log(driver_1._car.getCarType());

