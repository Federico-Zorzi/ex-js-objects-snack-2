// # Code Question 7
/* 
Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca)
*/

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

function deepCopy(obj) {
  if (typeof obj !== "object") return obj;
  let copy = Array.isArray(obj) ? [] : {};

  if (!Array.isArray(obj)) {
    for (const key in obj) {
      const value = obj[key];
      if (value !== "object") {
        copy[key] = value;
      } else {
        copy[key] = deepCopy(value);
      }
    }
  } else {
    copy = [...obj];
  }
  return copy;
}

const chefCopy = deepCopy(chef);
console.log("chefCopy", chefCopy);

const numeri = [1, 2, 3];
const numeriCopy = deepCopy(numeri);
console.log("numeriCopy", numeriCopy);
