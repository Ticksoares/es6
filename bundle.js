"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ["banana", "maça", "abacate", "abacaxi"];
/*const squareArr = arr.map(function (numero) {
  return numero * 10;
});
console.log(squareArr);

const teste = ["Zero", "um", "dois", "três", "quatro", "cinco"];

const numberTest = teste.map(function (item, index) {
  return console.log(`o ${item} está na posição ${index} do array`);
});*/

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //console.log(sum);

var total = arr.reduce(function (total, next) {
  var calc = total + next;
  resposta = calc / 2;
  return resposta;
}); //console.log(total);

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
