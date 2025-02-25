// # Code Question 3
/* 
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);

const thirdBurger = structuredClone(hamburger);

    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

secondBurger.name = "Cheese Burger 2";
thirdBurger.name = "Cheese Burger 3";

console.log("hamburger", hamburger);
console.log("secondBurger", secondBurger);
console.log("thirdBurger", thirdBurger);

/* 
- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    Sono stati creati 9 oggetti diversi
*/
