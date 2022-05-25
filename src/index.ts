let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

let btnenviar = document.getElementById("enviar");

rotulo1.innerHTML="ingrese el primer numero";
rotulo2.innerHTML="ingrese el segundo numero";
rotulo3.innerHTML="ingrese el tercer numero";

btnenviar.addEventListener("click", ()=>{
  let nro1:number = Number(dato1.value);
  let nro2:number = Number(dato2.value);
  let nro3:number = Number(dato3.value);

  if (nro1>nro2 && nro1>nro3){
    console.log ("El número " +nro1 + " es el mayor") 
  } 
 else if (nro2>nro1 && nro2>nro3){
  console.log ("El número " +nro2 + " es el mayor"); 
}
else {
  console.log ("El número "+nro3+ " es el mayor") 
}

);
