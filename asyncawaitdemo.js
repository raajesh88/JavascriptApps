// async await demo logic:
const movieresult = () => {
    return new Promise((resolve, reject) => {
        let rating = 3.5;
        if (rating > 4) {
            resolve("good movie");
        }else {
            reject("waste of ur time");
        }
});
};

//calling promise with async awaitt methods:
const result = async () => {
    try  {
          const res = await movieresult ();  
            console.log(res); 
    } catch (err) {
        console.log(err);
    }
};
result();