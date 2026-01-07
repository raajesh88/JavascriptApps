// call back function demo
console.log("hii");
let prices = [20000,30000,40000,50000];
const newprices=prices.filter((val)=>{
    return val> 20000;
});
console.log(newprices);
console.log("hello");