// # Code Question 4
/* 
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
    ​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

    Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
*/

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: "Main Street",
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

/* 
- Qual è il metodo migliore per clonare l’oggetto chef, e perché?
    Il metodo migliore per clonare l'oggetto chef è lo Spread Operator, perchè non essendo un oggetto complesso
    ci permette di clonare la funzione all'interno del nuovo oggetto, cosa che JSON.stringify e structuredClone
    non ci avrebbero permesso di fare

- Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
    Il metodo migliore per clonare l'oggetto chef è structuredClone, perchè permette di clonare direttamente
    sia la chiave address, che a sua volta è un oggetto e ci permette di clonare openingDate come oggetto,
    senza doverlo convertire in stringa con JSON.stringify
*/
