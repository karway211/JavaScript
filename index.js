const numbers = [47, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59];
const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'];

const numberOfRepetitions = numbers.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});

const mostFrequentLetters = Object.keys(numberOfRepetitions)
  .sort((a, b) => numberOfRepetitions[b] - numberOfRepetitions[a])
  .slice(0, 4)
  .map(el => letters[+el - 31] ?? ' ');


const phrase = numbers.map(el => letters[el - 31] ?? ' ').join('');

console.log(mostFrequentLetters);
console.log(phrase);
