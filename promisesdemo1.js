//bubble game logic using promise
const bubbleScore =new Promise ((resolve,reject)=>{
 let score = Math.floor(Math.random()*10);
 if(score >=5){
    resolve("you win the game with score: " + score);
 }
 else{
    reject("you lose the game with score: " + score);
 }
});
bubbleScore.then((result)=>{
    console.log(result);
}).catch((result)=>{
    console.log(result);
});