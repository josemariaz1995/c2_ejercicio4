let palabras = ["café", "croissant", "tostada", "zumo"];
const arrayParaRellenar = [];

function modificaPares(array, funcion) {
  for (let i in array) {
    if (i % 2 !== 0) {
      console.log("2:" + array[i]);
      arrayParaRellenar.push(funcion(array[i]));
    } else {
      arrayParaRellenar.push(array[i]);
      console.log("1:" + array[i]);
    }
  }
  return arrayParaRellenar;
  console.log(arrayParaRellenar);
}

let palabrasParesModificadas = modificaPares(
  palabras,
  (elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1)
);
console.log(palabrasParesModificadas);
