// promises demo
const movieRating= new Promise((resolve , reject)=>{
    let rating = 4.5;
    if (rating > 4){
        resolve("good movie");
    }
    else{
        reject("waste of ur time");
    }
    });
//to call  promise
movieRating.then((result)=>{
    console.log(result);
}) .catch((result)=>{
    console.log(result);
});

