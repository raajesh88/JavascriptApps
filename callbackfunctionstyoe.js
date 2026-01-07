// ananymous function
let prices=[20000,30000,50000,40000];
const newprices = prices.map((val)=>{
    
    return val-5000;
})
console.log(newprices);
// call back function as named function
function pushpa(){
console.log("thagedhe leee");
}
function panindiamovie(sukumarsmovie){
    return sukumarmovie;
}
panindiamovie(pushpa());