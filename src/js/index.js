// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// BUCLE WHILE
// MIENTRAS condición -> ejecuta

// El número secreto es 4

// let secretNumber = 0;

// while (secretNumber !== 4) {
//   const randomNumber = Math.floor(Math.random() * 10);
//   secretNumber = randomNumber;
//   console.log(secretNumber);
// }

// Crea una función que rellene un array con 15 números del 1 al 20 que no se repitan

// const arrayOfNumbers = [];

// const notRepeatedNumbers = () => {
//   while (arrayOfNumbers.length < 15) {
//     const randomNumber = Math.ceil(Math.random() * 20);
//     if (!arrayOfNumbers.includes(randomNumber)) {
//       arrayOfNumbers.push(randomNumber);
//     }
//   }
//   console.log(arrayOfNumbers);
// };

// notRepeatedNumbers();

// Recursividad -> función que se llama a sí misma

const countDown = number => {
  if (number < 0) return;

  console.log(number);

  return countDown(number - 1);
};

countDown(10);

// Mismo ejercicio hecho con recursividad

const arrayOfNumbers = [];

const notRepeatedNumbers = () => {
  if (arrayOfNumbers.length === 15) {
    console.log(arrayOfNumbers);
    return;
  }

  const randomNumber = Math.ceil(Math.random() * 20);

  if (!arrayOfNumbers.includes(randomNumber)) {
    arrayOfNumbers.push(randomNumber);
  }

  notRepeatedNumbers();
};

notRepeatedNumbers();

// Consejos para el bingo

let counter = 0;

const intervalId = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 500);

// Switch
// Evitar usarlo a no ser que sea la única opción posible
// Funciona como el if, else if, else
// Si no se escribe break, se ejecutan todas las líneas. Es para que el código deje de ejecutarse cuando se cumple una condición

const number = 4;

switch (number) {
  case 1:
    console.log('El número es 1');
    break;

  case 2:
    console.log('El número es 2');
    break;

  case 3:
    console.log('El número es 3');
    break;

  case 4:
    console.log('El número es 4');
    break;

  default:
    console.log('El número es mayor de 4');
    break;
}
