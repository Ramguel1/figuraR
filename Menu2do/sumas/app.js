console.log("hola mundo");
alert("hola mundo");


const suma=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value);
  
    let sum=n1+n2;
    let res=document.querySelector("#res");

if (isNaN(sum)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+sum+"</h1>";
}
}


const resta=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value );
  
    let rest=n1-n2;
document.querySelector("#res")
if (isNaN(rest)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+rest+"</h1>";
}
}

const multiplicar=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value);
  
    let mult=n1*n2;
document.querySelector("#res")
if (isNaN(mult)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+mult+"</h1>";
}
}


const div=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value);
  
    let di=n1/n2;
document.querySelector("#res")
if (isNaN(di)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+di+"</h1>";
}
}


const p=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value);
  
    let pe=n1%n2;
document.querySelector("#res")
if (isNaN(pe)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+pe+"</h1>";
}
  
}

const ex=()=>{
  let n1=parseInt(document.querySelector("#num1").value);
  let n2=parseInt(document.querySelector("#num2").value);
  
     let eex=Math.pow(n1,n2);
document.querySelector("#res")

if (isNaN(eex)) {
res.innerHTML="<h1>"+0+"</h1>";
  
} else {
  res.innerHTML="<h1>"+eex+"</h1>";
}
}
const  eli=()=>{
  let n1=parseInt(document.querySelector("#num1").value="");
  let n2=parseInt(document.querySelector("#num2").value="");
  
    let eli="";
document.querySelector("#res").innerHTML=eli
}