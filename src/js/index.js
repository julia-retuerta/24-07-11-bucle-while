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

const arrayOfNumbers = [];

const notRepeatedNumbers = () => {
  while (arrayOfNumbers.length < 15) {
    const randomNumber = Math.ceil(Math.random() * 20);
    if (!arrayOfNumbers.includes(randomNumber)) {
      arrayOfNumbers.push(randomNumber);
    }
  }
  console.log(arrayOfNumbers);
};

notRepeatedNumbers();
