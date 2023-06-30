import validator from './validator.js';
//validator.isValid('123456789')
//validator.isValid ("4847 3529 8926 3094")
//validator.isValid('123456789')
//formulario out 


//NAME   

let nameCard = document.querySelector(".card-detail-nombre");
let nameInput = document.querySelector("#cardholder");
// let nameErrorDiv = document.querySelector(".form_cardholder-error error");

//name  dinamico not//

nameInput.addEventListener("input", () => {
    nameCard.innertext = nameInput.value;
    if(nameInput.value == "") {
      nameCard.innerText = "Nombre del usuario" 
    }else{
       nameCard.innerText = nameInput.value;
     }
    });

//CARD NUMBER

let numberCard = document.querySelector(".card_number");
let numberInput = document.querySelector("#cardNumber");
let numberErrorDiv = document.querySelector(".form_inputNumber-error");

  //ingreso numero dinamico//
  numberInput.addEventListener("input", event => {
  //texto tarjeta arriba que se actualiza constatemente
  let inputValue = event.target.value;
  numberCard.innerText = numberInput.value;
  //respuest wrong y validando que no haya una letra en numero de tarjeta
   
   //Validando que haya una letra  
 let regExp = /[A-z]/g; 
  if(regExp.test(numberInput.value)){
    showError(numberInput,numberErrorDiv, "Wrong format, numbers only" )
    //actualizando graficamentela tarjeta substituyendo  con el color rojo dewrong
    }
   else{
    numberInput.value = inputValue.replace(/\s/g,'').replace(/([0-9]{4})/g, '$1 ').trim();    
    hideError(numberInput, numberErrorDiv);
    //color del numero hideerror
   }

  //texto tarjeta de arriba, mostrando los 000 pot defecto cuando no se hay ingresado nada algo
  if (numberInput.value == "") {
      numberCard.innerText = "0000 0000 0000 0000";
  }
   
});

///botonconfirma

const formulario = document.querySelector("#formcualquier")
formulario.addEventListener ("submit", event =>{ 
    event.preventDefault()
    console.log(numberInput.value)///resultado de la validacion
    const resultadofinal= validator.isValid(numberInput.value)
    if (resultadofinal) {console.log( 'valido')
    alert("Tu tarjeta es valida")

} ////TAREA muestre alert o msj 


    
    else {console.log( 'invalido')
    alert("Tu tarjeta es invalida")

} 
    console.log()
})




//FUNCIONES:


//color mensajes de error, se crean unas funciones

function showError(divInput, divError, msgError)  {
  divError.innerText = msgError;
  divInput.style.borderColor = '#FF0000';
}

//revisar poco funcion de cambio
function hideError(divInput, divError){
divError.innerText ='';
divInput.style.borderColor = '#0000FF';
}






///////////////// boton confirm
//let confirmBoton = document.querySelector ('Validacion_section-button')
















//import validator from './validator.js';
//console.log(validator);
