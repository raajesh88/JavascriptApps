// objects in js
const movieinfo = {
moviename : "akanda 2",
heroname : "Balayya",
directorname : "Boyapati "
}
//how to get 
console.log(movieinfo.directorname);
// another way
console.log(movieinfo["heroname"]);
// all the values at once 
for (let info in movieinfo){
    console.log(movieinfo[info]);
}
// es6 + new feature 
//object.keys
Object.keys(movieinfo).forEach((key)=>{
console.log(key);
});
// to get only values 
//object.values  
Object.values(movieinfo).forEach((value)=>{
    console.log(value);
});
// to  get keys and values 
// object.entries
Object.entries(movieinfo).forEach((entry) => {
    console.log(entry[0] +" " +  entry[1]);
});
// for of 
for (let[info,infovalues] of Object.entries(movieinfo)){
    console.log(info + " " + infovalues);
}
// nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
// caught object 
const placedorder = {
    products : [
       { pid : 1234,pname : "drone",price : 10000 },
         { pid : 1235,pname : "laptop",price : 50000 },
    ],
    shippingaddress : {
        area : "vadlamudi",
        street : "vignan",
        pincode : 522213
    },
    userinfo: {
        uid : 1001, uname : "Rajesh",

    }

}
console.log(placedorder.userinfo.uname);

