//const validator = {
// ...
//isValid: function (numeroTarjeta) {
//console.log('ejecucion de is valid', numeroTarjeta)
//for (let i = 0; i < numeroTarjeta.length; i++) {
//console.log(numeroTarjeta[i]);
// }
//saltar entre los numeros
//}
//};

const validator = {
  /// el objeto que exportare despues, tendra dos propiedades 1validacion, isValid y 2 Maskify

  isValid: function (cardNumber) { //declaro la funcion, "cardNumber" es lugar donde insertan los numeros

    cardNumber = cardNumber.replace(/\s+/g, ''); //reemplazar los espacios
    // console.log(cardNumber);
    const arrayNumbers = cardNumber.split('');//Paso el string a un array
    const newArrayNumbers = []; //declaro un nuevo array para guardar sumas
    //console.log(arrayNumbers);

    for (let i = 0; i <= arrayNumbers.length - 1; i++) {//for sonn ciclos--recorro el array hasta el largo del arreglo -1, pero no al reves en vez de i--?
     // console.log (i, i % 2)
      if (i % 2 === 0) { //si el modulo 2, es igual a 0, significa que es su posicion es PAAAR.  El modulo es lo que sobre de la 

        //console.log("la posicion es par");
        const valorDuplicado = arrayNumbers[i] * 2; //el valor de la posicion "i" lo multiplico x2 a LOS PARES
        //console.log(valorDuplicado);
        // console.log(typeof valorDuplicado);


        if (valorDuplicado > 9) { //NUEVO ARREGLO ARRAY DE NUMEROS, que sea = al valo duplicado en el string para poderlo separar. 
          const arrayDuplicadoSplit = valorDuplicado.toString().split(''); //si el resutado de la multipliacion x2 es mayor a 9 se SUMA, ESO LO HACE EL "toString"
          //console.log(valorDuplicado);
          newArrayNumbers.push(parseInt(arrayDuplicadoSplit[0]) + parseInt(arrayDuplicadoSplit[1]));// de esa suma se di PUSHH

        } else { ///si no es mayor a 9 
          newArrayNumbers.push(valorDuplicado);
          //console.log(newArrayNumbers);
        }
      }
      else {//Si NO ES POSICION PAR QUEDA = en el newArrayNumbers
        newArrayNumbers.push(arrayNumbers[i]);
        //console.log(newArrayNumbers);

      }
    }
    //console.log(newArrayNumbers);

    let sumaTotal = 0; //sumar todo los numeros de mi arreglo/arraayy
    sumaTotal = newArrayNumbers.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    } ,0);
  
    //console.log(sumaTotal);

    const isZero = sumaTotal.toString().endsWith('0'); //Si en la suma total, el strig el ultimo valor es 0
    if (isZero === true) { //si es true, es valida y cumple con el algoritmo, wii!
      console.log("Es valida tu tarjeta");
      return true;

    } else {// si NO es 0, es falso = INVALIDA :c
      console.log("Es Invalida tu tarjeta");
      return false;

    }
  },

  maskify: function maskify(cardNumber) { //funcion maskify actuado para ocultar numeros , excepto ultimos 4
    var x = cardNumber.lenght;
    var output = "";
    for (var i = 0; i < x - 4; i++) //se crea un for para que cada posicion menos 4
    {
      output += "*"; //se cambie por un *
    }
    return output + cardNumber.substring(x - 4, x); //cuando retorna termina la ejecucio

  }
};




export default validator;

