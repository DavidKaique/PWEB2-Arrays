let array = [5, 8, 12, 15, 3];

let raizes = array.map(function(item){
    return Math.pow(item, 2);
});

document.write("Array: ", array);
document.write("<br> Raizes: ", raizes);