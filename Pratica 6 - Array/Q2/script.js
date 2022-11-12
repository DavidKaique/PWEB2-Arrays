let positivos = function (value){
    return value >= 0;
};

array1 = [2,-8,-13,-7,40, 60]

let array2 = array1.filter(positivos);

let array3 = array2.reduce((a , v) => a + v, 0);
document.write(array3);