function buttonresult(){
 alert("hii");
}
let btnvalue=document.getElementById("demo");
btnvalue.addEventListener("click", buttonresult);
//click logic with ARROW fucntion
const buttonresult1=()=>{
    alert("hello");


}
let btnvalue1=document.getElementById("demo2");
btnvalue1.addEventListener("click", buttonresult1);
// mouse over ndd mouse out logic
let h2value = document.getElementById("sample");
const mouseoverlogic=()=>{
    h2value.style.color="blue";
}
const mouseoutlogic=()=>{
    h2value.style.color=" ";
}
h2value.addEventListener("mouseover" ,mouseoverlogic );
h2value.addEventListener("mouseout", mouseoutlogic);