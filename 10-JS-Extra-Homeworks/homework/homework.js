// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí    
  var nuevoArray = Object.keys(objeto)
        .map(function(key) {
          return [key,objeto[key]]
          });
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    string = string.replace(/ /g,'');
    var numberOfChars = {}; 
    for(var i in string){
      numberOfChars[string[i]] = ( numberOfChars[string[i]] || 0 ) + 1; // Incrementamos el valor si el caracter ya existe
    }
    return numberOfChars;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí  
     var mayuscula = '';
     var minuscula = '';
     for (i = 0; i<s.length; i++){ 
        if(s[i] === s[i].toUpperCase()){ 
             mayuscula = mayuscula + s[i]; 
          }
      else {
             minuscula = minuscula + s[i];
           } 
      }       
     return (mayuscula + minuscula) 
   }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer 
  //de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   let strInvertido = "";
   let nuevoStr = str.split(" ").reverse().join(" ");
  
     for(let i= nuevoStr.length; i > 0; i--) {
      strInvertido = strInvertido + nuevoStr[i - 1];
    } 
   return strInvertido;
   /*for (let i = vertido.length; i > 0; i--) {
    var strInvertido = strInvertido + vertido[i - 1];    
  } */
  /*function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }*/ //Tampoco funciona
  /*var frase = "";
for(const [key, value] of Object.entries(str)){
  frase = frase +(value.split("").reverse("").join(""));
}
return frase;*/
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero;
	var capicua = 0;
	var resto = 0;

    while(num > 0)
    {
      resto = num % 10;
        num = parseInt(num / 10);
        capicua = capicua * 10 + resto;
    }

    if(capicua == numero)
    {
        return "Es capicua"
    }
    else
    {
        return "No es capicua"
    }
}
    
   


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //.replace(/a|b|c/, "");
   var modificada = "";
   modificada = cadena.replace(/a|b|c/g, "")
  return modificada;
  } 


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 /* var array = arr.sort();
  nuevoArray = [];
  var cant = 0;
  var str = "";
  for (var i = 0; i < array.length; i++) {
    str = array[i];
    for (var j = 0; j < array.length ; j++) {
      if (str === array[j]) {
        cant = cant + 1;
        if (cant === 1) {
          nuevoArray.push(array[j]);
        }
      }
    }
  }  
  return nuevoArray;
}*/
var arrayLengths = arr.map(function (e, i) {
  return {index: i, value: e.length };
});
// sorting the lengths array containing the lengths of
// arr names
arrayLengths.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});
// copy element back to the array
var sortedArrays = arrayLengths.map(function (e) {
  return arr[e.index];
});
return sortedArrays;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var a = arreglo1;
  var b = arreglo2;
  var intersection = [];

  for (let i = 0; i < a.length; i++) {
    
    for (let j = 0; j < b.length; j++) {
      if ( a[i] === b[j]) {
        intersection.push(b[j])
      }    
  }
} 
return intersection;
}



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

