// Without closure
//global variable
let counter = 1;
const counterresult = () => {
    //local variable 
    let counter = 0;
    counter += 1;
    return counter;
}
//local scope
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());

