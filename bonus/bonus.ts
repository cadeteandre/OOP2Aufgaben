import Customer from "../classes/Customer";

const customer_1 = new Customer('Andre', 'andre98@mail.com', 'Bilker Allee', '40667', 'Duesseldorf');
console.log(customer_1);

customer_1.email = 'andre@ola.com';