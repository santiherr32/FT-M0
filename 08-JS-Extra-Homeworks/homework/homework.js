// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArr = [];
  // Object.entries(objeto).forEach(function (value, index) {
  //   newArr.push(value);
  // });
  for (let key in objeto) {
    newArr.push([key, objeto[key]]);
  }
  return newArr;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  // let count = 0;
  let newObj = {};
  string = string.split("").sort();

  for (const char of string) {
    if (!newObj[char]) {
      newObj[char] = 1;
    } else {
      newObj[char]++;
    }
  }

  return newObj;
}
// console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let upperRgx = /[A-Z]/g;
  let caps = s.match(upperRgx);
  // console.log(caps);
  for (let i = 0; i < caps.length; i++) {
    let index = s.indexOf(caps[i]);
    s = s.substring(0, index) + s.substring(index + 1, s.length);
  }
  s = caps.join("") + s;

  return s;
  // let result = [];
  // let lowerCase = [];
  // for (let index = 0; index < s.length; index++) {
  //   const element = s[index];
  //   if (element.match(/[A-Z]/)) {
  //     result.push(element);
  //   } else {
  //     lowerCase.push(element);
  //   }
  // }

  // result.push(lowerCase.join(""));
  // console.log(result);
  // return result.join("");
}
console.log(capToFront("DESARollADOR"));

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newStr = str.split(" ");

  newStr.forEach(function (element, index) {
    newStr[index] = [...element].reverse().join("");
  });
  return newStr.join(" ");
}
// console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroAComparar = numero.toString().split("");
  let numeroAlReves = numero.toString().split("").reverse();
  let contador = 0;
  for (let index = 0; index < numeroAComparar.length; index++) {
    // const element = numeroAlReves[index];
    if (numeroAComparar[index] === numeroAlReves[index]) {
      contador++;
    }
  }
  if (contador === numero.toString().length) return "Es capicua";
  return "No es capicua";
}
// console.log(capicua(6886));

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace(/[abc]/g, "");
  return cadena;
}
// console.log(deleteAbc("crybaby"));

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b) {
    if (a.length > b.length) return 1;
    if (b.length > a.length) return -1;
    return 0;
  });
  return arr;
}
// console.log(sortArray(["You", "are", "beautiful", "looking"]));

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let interArray = [];
  arreglo1.forEach(function (element1) {
    arreglo2.forEach(function (element2) {
      if (element1 === element2) {
        if (!interArray.includes(element1)) {
          interArray.push(element1);
        }
      }
    });
  });
  return interArray;
}
// console.log(buscoInterseccion([5, 4, 2, 1, 4, 5], [2, 3, 4, 6, 4, 5]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
