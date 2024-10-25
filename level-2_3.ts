import Customer from "./classes/Customer";

const customer_1 = new Customer('Andre Cadete', 'andre876@uol.com', 'bilker Allee', '08341', 'Duesseldorf');
console.log(customer_1);

//* Die Fehler
customer_1.email = 'dasda99das';
customer_1.postalCode = '9374934749';