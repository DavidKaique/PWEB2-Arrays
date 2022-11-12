let array1 = [3, 5, 12, -12, -1, -15, 200, 55]

let array2 = array1.sort((a,b) => b - a);

let array3 = array2.join(", ");
document.write(array3);