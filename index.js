const prompt = require('prompt-sync')()
const formulaRetangulo = require('./function.js')
const formulaCirculo = require('./function.js')
const formulaTriangulo = require('./function.js')
const pi = 3.14
let input = prompt(`Entre retângulo, triângulo e círculo, informe qual forma geométrica você deseja utilizar: `)

if (input === "Retangulo".toLowerCase() || input === "Retângulo".toLowerCase()) {
    let base = +prompt(`Informe a base do retângulo: `)
    let altura = +prompt(`Informe a altura do retângulo: `)
    
    
} else if (input === "Circulo".toLowerCase() || input === "Círculo".toLowerCase()) {
    console.log("chegou tbm")
} else if (input === "Triângulo".toLowerCase() || input === "Triangulo".toLowerCase()) {
    console.log("esse também")
} else {
    console.log("Valor incorreto")
}