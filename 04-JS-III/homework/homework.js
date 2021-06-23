// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}
// console.log(incrementarPorUno([97, 100, 80, 55, 72, 94]));
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  palabras = palabras.join(" ");
  return palabras;
}

// console.log(dePalabrasAFrase(["hola", "como", "estas"]));
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  return array.includes(elemento) ? true : false;
}
// console.log(arrayContiene(["luis", "pedro"], "pedro"));

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  return numeros.reduce((num, index) => num + index);
}
// console.log(agregarNumeros([10, 20, 30]));

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  return numeros.reduce(function (entero, index) {
    return entero > index ? entero : index;
  });
}
// console.log(numeroMasGrande([10, 50, 20]));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  let arr = [];
  for (let index = 0; index <= 10; index++) {
    // const array[index] = array[index];
    arr.push(6 * index);
  }
  return arr;
}
// console.log(tablaDelSeis());
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  if (arguments.length < 1) {
    return 0;
  }
  let producto = 1;
  for (let index = 0; index < arguments.length; index++) {
    producto *= arguments[index];
  }
  return producto;
}
// console.log(multiplicarArgumentos(3, 2));

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  let newArray = arreglo.filter((elemento) => elemento > 18);
  return newArray.length;
}
// console.log(cuentoElementos([1, 20, 30]));

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario.
  //Escribe tu código aquí'
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  let numeroString = [...n.toString()].map(Number);
  for (var index = 0; index < numeroString.length; index++) {
    if (numeroString[0] === 9) {
      return true;
    }
    return false;
  }
}
// console.log(empiezaConNueve(99));

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  for (let index = 0; index < arreglo.length - 1; index++) {
    if (arreglo[index] != arreglo[index + 1]) return false;
  }
  return true;
}
// console.log(todosIguales([1, 2, 3, 4, 5]));
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === "Noviembre" || element === "Marzo" || element === "Enero") {
      newArray.push(element);
    }
  }
  if (newArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  return newArray;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  let numerosFiltrados = array.filter((number) => number > 100);
  return numerosFiltrados;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var newArray = [];
  let suma = numero;
  for (var index = 0; index < 10; index++) {
    // const element = array[index];
    suma = suma + 2;
    if (suma === index) {
      break;
    } else {
      newArray.push(suma);
    }
  }
  if (index < 10) {
    return "Se interrumpió la ejecución";
  }
  return newArray;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var suma = numero;
  var newArray = [];
  for (let index = 0; index < 10; index++) {
    // const element = array[index];
    if (index === 5) {
      continue;
    } else {
      suma += 2;
      newArray.push(suma);
    }
  }
  return newArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
