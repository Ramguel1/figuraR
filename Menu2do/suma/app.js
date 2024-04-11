let valor=document.querySelector("#valor");

let dvs=document.querySelector("#value");
let caja=document.querySelector("#caja");
valor.oninput=()=>{
  let n=parseInt(valor.value);
   dvs.innerHTML=n;

if (n>0 && n<=25) {
     dvs.style.color="red";
}

if (n>26 && n<=50) {
     dvs.style.color="blue";
}

if (n>51 && n<=75) {
     dvs.style.color="black";
}

if (n>76 && n<=100) {
     dvs.style.color="yellow";
}

caja.style.width=n+"px";
caja.style.height=n+"px";
}