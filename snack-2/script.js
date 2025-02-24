// # Code Question 2
/* 
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};​

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";​

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

    Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
 */

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // "Salad"

console.log(secondBurger.ingredients[0]); // "Salad"

/* 
- Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Il valore che avrà l'indice 0 dell'array sia in hamburger che in secondBurger sarà "Salad"
    

- Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
    Sono stati creati due oggetti il primo hamburger e il secondo secondBurger
  
*/
