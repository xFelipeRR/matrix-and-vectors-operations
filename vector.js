var dimension = 6;
var elementsVector = [1,2,3,4,5,6,7];
var resultantVector;

function constructor(dim, elements) {
    if(dim !== elements.length-1) {
        console.error("A função construtora está recebendo uma quantidade maior/menor de elementos do que o vetor suporta!");
    }
    else {
        console.warn("Novo vetor criado:");
        resultantVector = elements;
        console.log(resultantVector);
    }
    return resultantVector;
}

function getVectorElement(i) {
    if(i >= resultantVector.length) {
        console.error("Este índice não existe no vetor");
    }
    else {
        console.log(resultantVector[i]);
    }
}

function setVectorElement(i,value) {
    if(i >= resultantVector.length) {
        console.error("Este índice não existe no vetor");
    }
    else {
        resultantVector[i] = value;
        console.warn("Novo vetor editado:");
        console.log(resultantVector);
    }
}

// vectorA = constructor(6, [1,2,3,4,5,6,7]);
// vectorB = constructor(4, [1,2,3,4,5]);

