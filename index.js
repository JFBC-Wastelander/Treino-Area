const prompt = require("prompt-sync")();
const formula = require("./function.js");
const pi = Math.PI;
let input = prompt(
  `Entre retângulo, triângulo e círculo, informe qual forma geométrica você deseja utilizar: `
);

if (
  input === "Retangulo".toLowerCase() ||
  input === "Retângulo".toLowerCase()
) {
  let base = +prompt(`Informe a base do retângulo: `);
  let altura = +prompt(`Informe a altura do retângulo: `);
  let res = formula.formulaRetangulo(base, altura);
  console.log(res);
} else if (
  input === "Circulo".toLowerCase() ||
  input === "Círculo".toLowerCase()
) {
  let raio = +prompt(`Informe o raio do círculo: `);
  let res = formula.formulaCirculo(raio);
  console.log(res);
} else if (
  input === "Triângulo".toLowerCase() ||
  input === "Triangulo".toLowerCase()
) {
  let base = +prompt(`Informe a base do triângulo: `);
  let altura = +prompt(`Informe a altura do triângulo: `);
  let res = formula.formulaTriangulo(base, altura);
  console.log(res);
}
