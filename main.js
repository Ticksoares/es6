const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maça", "abacate", "abacaxi"];

/*const squareArr = arr.map(function (numero) {
  return numero * 10;
});
console.log(squareArr);

const teste = ["Zero", "um", "dois", "três", "quatro", "cinco"];

const numberTest = teste.map(function (item, index) {
  return console.log(`o ${item} está na posição ${index} do array`);
});*/

const sum = arr.reduce(function (total, next) {
  return total + next;
});

//console.log(sum);

const total = arr.reduce(function (total, next) {
  let calc = total + next;

  resposta = calc / 2;

  return resposta;
});

//console.log(total);

const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(filter);
