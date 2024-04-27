const prompt = require('prompt-sync')({ sigint: true });

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to calculate square root for even numbers
function calculateSquareRoot(number) {
  if (number < 0) {
    console.log('Tidak bisa input bilangan negatif');
  } else if (!isEven(number)) {
    console.log('Tidak bisa input bilangan ganjil');
  } else {
    const squareRoot = Math.sqrt(number);
    console.log(`Akar pangkat 2 dari ${number} adalah ${squareRoot}`);
  }
}

const userInput = parseFloat(prompt('Masukkan angka (harus genap): '));

calculateSquareRoot(userInput);
