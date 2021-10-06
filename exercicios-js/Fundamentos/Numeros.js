const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliação1 = 9.871;
const avaliação2 = 6.871;

const total = avaliação1 * peso1 + avaliação2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2));
console.log(typeof media);