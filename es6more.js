//multi line strings  
let desc=
`Top college in AP
more requirements 
many activities`;
console.log(desc);
// string interpolation
let name= "Rajesh";
let lastname ="Kanagala";
console.log(`${name} ${lastname} `);
//array destructive
let pname=['realme','lc','vivo'];
let [brand1,brand2,brand3]=pname;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//object destructive
const movieinfo={
    moviename:"Bahubali",
    director:"Rajamouli",
    year:2015,
    producer:"Shobu"
};
let {moviename,director,year,producer}=movieinfo;
console.log(moviename);
console.log(director);
console.log(year);
console.log(producer);