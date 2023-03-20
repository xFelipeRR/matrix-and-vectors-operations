// Class Matrix()
    var matrixFormated;
    var rowsContructor;
    var colsConstructor;

    function constructor(rows, cols, elements) {
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