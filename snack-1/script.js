// # Code Question 1
/* 
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;​

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

    Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
*/

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = "Double Cheese Burger";
secondBurger.weight = 500;

console.log(hamburger.name); // "Double Cheese Burger"
console.log(secondBurger.name); // "Double Cheese Burger"

/* 
- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Non verrà creata una copia dell'array, ma sia hamburger che secondBurger lavoreranno sull'unico 
    oggetto creato all'inizio

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    è stato creato un singolo oggetto che verrà tenuto in memoria, e successivamente verrà modifica sempre l'unico che è stato creato 
*/
