import Animal from "./classes/Animal";
import Person from "./classes/Person";
import { Gender } from "./classes/Person";

const animal_1 = new Animal('Jaguar', 8, 'yellow and black')
console.log(animal_1);

const person_1 = new Person('Andre', Gender.male);
console.log(person_1);
