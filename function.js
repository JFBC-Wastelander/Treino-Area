function formulaRetangulo (base, altura){
    let area = base*altura
    console.log("A área do retângulo é: ")
    return area
}

function formulaTriangulo (base, altura){
    let area = (base*altura)/2
    console.log("A área do triângulo é: ")
    return area
}

function formulaCirculo (raio){
    let area = (Math.PI*raio**2)
    console.log("A área do circulo é: ")
    return area
}

module.exports ={
    formulaCirculo,
    formulaRetangulo,
    formulaTriangulo,
}