// CLASS MATRIX ------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->

var matrixFormated;
var rowsContructor;
var colsConstructor;

function constructorMatrix(rows, cols, elements) {
    //document.write(elements.length);
    rowsContructor = rows;
    colsConstructor = cols;
    matrixFormated = [];
    var matrixTemp = [];
    var colsLimit = 0;
    if(rows * cols !== elements.length) {
        console.error("A função construtora está recebendo uma quantidade maior/menor de elementos do que a matriz suporta!");
    }
    else {
        for(i = 0; i < elements.length; i++) {
            colsLimit++;
            //document.write(colsLimit);
            if(colsLimit == cols) {
                matrixTemp.push(elements[i]);
                matrixFormated.push(matrixTemp);
                matrixTemp = [];
                colsLimit = 0;
            }
            else {
                matrixTemp.push(elements[i]);
            }
        }
        console.warn("Nova matriz criada!")
        console.log(matrixFormated);
    }
    return matrixFormated;
}


function getMatrixElement(row,col) {
    if(row > rowsContructor || col > colsConstructor) {
        console.error("O índice fornecido não existe na matriz existente!");
    }
    else {
        console.log(matrixFormated[row-1][col-1]);
    }
}

function setMatrixElement(row,col,value) {
    if(row > rowsContructor || col > colsConstructor) {
        console.error("O índice fornecido não existe na matriz existente!");
    }
    else {
        matrixFormated[row-1][col-1] = value;
        console.warn("Nova matriz editada:");
        console.log(matrixFormated);
    }
}

// matrixA = constructor(3,3,[1,2,3,4,5,6,7,8,9]);
// matrixB = constructor(4,4,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
//constructor(3,3,[1,2,3,4,5,6,7,8,9]);
//getMatrixElement(3,3);

// CLASS VECTOR ------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
var dimension = 6;
var elementsVector = [1,2,3,4,5,6,7];
var resultantVector;

function constructorVector(dim, elements) {
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



// CLASS LINEAR ALGEBRA ------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->
// -------------------------------------------------------------------------->


function transposeMatrix(matrix) {
    var matrixTransposed = [];
    var matrixTemp = [];
    for(i = 0; i < matrix[0].length; i++) {
        for(j = 0; j < matrix.length; j++) {
            matrixTemp.push(matrix[j][i]);
        }
        matrixTransposed.push(matrixTemp);
        matrixTemp = [];
    }
    console.warn("Matriz transposta:");
    console.log(matrixTransposed);
    return matrixTransposed;
}

function sumMatrix(elementA, elementB, type) { 
    var matrixSum = [];
    var matrixTemp = [];
    if(type == "matrix") {
        if(elementA.length !== elementB.length || elementA[0].length !== elementB[0].length) {
            console.error("As matrizes não possuem as mesmas dimensões!");
        }
        else {
            for(i = 0; i < elementA.length; i++) {
                for(j = 0; j < elementA[0].length; j++) {
                    matrixTemp.push(elementA[i][j] + elementB[i][j]);
                }
                matrixSum.push(matrixTemp);
                matrixTemp = [];
            }
            console.warn("Matrizes somadas:");
            console.log(matrixSum);
            return matrixSum;
        }
    }
    else {
        for(i = 0; i < elementA.length; i++) {
            matrixSum.push(elementA[i] + elementB[i]);
        }
        console.warn("Vetores somados:");
        console.log(matrixSum);
    }
}

function timesMatrix(elementA, elementB, type) {
    var matrixTimes = [];
    var matrixTemp = [];
    if(type == "matrix") {
        if(typeof elementA == "number") {
            for(i = 0; i < elementB.length; i++) {
                for(j = 0; j < elementB[0].length; j++) {
                    matrixTemp.push(elementA * elementB[i][j]);
                }
                matrixTimes.push(matrixTemp);
                matrixTemp = [];
            }
            console.warn("Matriz multiplicada por escalar:");
            console.log(matrixTimes);
            return matrixTimes;
        }
        else {
            if(elementA.length !== elementB.length || elementA[0].length !== elementB[0].length) {
                console.error("As matrizes não possuem as mesmas dimensões!");
            }
            else {
                for(i = 0; i < elementA.length; i++) {
                    for(j = 0; j < elementA[0].length; j++) {
                        matrixTemp.push(elementA[i][j] * elementB[i][j]);
                    }
                    matrixTimes.push(matrixTemp);
                    matrixTemp = [];
                }
                console.warn("Matrizes multiplicadas:");
                console.log(matrixTimes);
                return matrixTimes;
            }
        }
    }
    else {
        if(typeof elementA == "number") {
            for(i = 0; i < elementB.length; i++) {
                matrixTimes.push(elementA * elementB[i]);
            }
            console.warn("Vetor multiplicado por escalar:");
            console.log(matrixTimes);
            return matrixTimes;
        }
        if(elementA.length !== elementB.length || elementA[0].length !== elementB[0].length) {
            console.error("Os vetores não possuem as mesmas dimensões!");
        }
        else {
            for(i = 0; i < elementA.length; i++) {
                matrixTimes.push(elementA[i] * elementB[i]);
            }
            console.warn("Vetores multiplicados:");
            console.log(matrixTimes);
        }
    }
}

function dotMatrix(matrixA, matrixB, type) {
    if(type == "matrix") {
        const rowsA = matrixA.length;
        const colsA = matrixA[0].length;
        const rowsB = matrixB.length;
        const colsB = matrixB[0].length;
        if (colsA !== rowsB) {
            throw new Error(`O número de colunas da matriz A (${colsA}) não é igual ao número de linhas da matriz B (${rowsB}).`);
        }

        const result = new Array(rowsA);
        for (let i = 0; i < rowsA; i++) {
            result[i] = new Array(colsB);
            for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
            }
        }
        console.log(result);
        return result;
    }
    else {
        if (matrixA.length !== matrixB.length) {
            throw new Error("Os vetores não possuem as mesmas dimensões!");
        }
        var result = 0;
        for(i = 0; i < matrixA.length; i++) {
            result += matrixA[i] * matrixB[i];
        }
        console.log(result);
        return result;
    }
}

function gauss(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  let pivo, temp;

  for (let i = 0; i < linhas; i++) {
    // Encontrar o pivô da linha atual
    pivo = matriz[i][i];

    // Se o pivô for zero, trocar por outro elemento da mesma coluna
    if (pivo === 0) {
      for (let j = i + 1; j < linhas; j++) {
        if (matriz[j][i] !== 0) {
          // Trocar as linhas i e j
          temp = matriz[i];
          matriz[i] = matriz[j];
          matriz[j] = temp;
          pivo = matriz[i][i];
          break;
        }
      }
    }

    // Se não existir pivô para a linha, passar para a próxima linha
    if (pivo === 0) {
      continue;
    }

    // Dividir toda a linha pelo pivô
    for (let j = i + 1; j < colunas; j++) {
      matriz[i][j] /= pivo;
    }
    matriz[i][i] = 1;

    // Eliminar os elementos abaixo do pivô
    for (let j = i + 1; j < linhas; j++) {
      temp = matriz[j][i];
      matriz[j][i] = 0;
      for (let k = i + 1; k < colunas; k++) {
        matriz[j][k] -= temp * matriz[i][k];
      }
    }
  }

  return matriz;
}

function solver(A, B) {
  const linhas = A.length;
  const colunas = A[0].length;
  const solucao = new Array(linhas);

  // Verificar se o sistema é possível e determinado
  for (let i = 0; i < linhas; i++) {
    let soma = 0;
    for (let j = 0; j < colunas; j++) {
      soma += A[i][j];
    }
    if (soma === 0 && B[i][0] !== 0) {
      // Sistema impossível
      return {classificacao: 'impossivel', solucao: null};
    } else if (soma === 0 && B[i][0] === 0) {
      // Linha nula
      solucao[i] = 0;
    } else {
      // Sistema possível e determinado
      break;
    }
  }

  // Resolver o sistema linear
  for (let i = linhas - 1; i >= 0; i--) {
    let soma = 0;
    for (let j = i + 1; j < colunas; j++) {
      soma += A[i][j] * solucao[j];
    }
    solucao[i] = (B[i][0] - soma) / A[i][i];
  }

  return {classificacao: 'possivel e determinado', solucao};
}

