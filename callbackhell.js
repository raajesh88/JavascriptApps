const studentinfo = () =>{
    console.log("student details are:");
    setTimeout(()=>{
        let rollnumbers=[1,2,3,4];
        console.log(rollnumbers);
        setTimeout((roll_number)=>{
            const data= {
                sname:"Rajesh",
                qualification:"B.Tech"
            }
            console.log(`sname is ${data.sname}
                 qualification is ${data.qualification}
                and rollnumber is ${roll_number}`);
        }, 2000 , rollnumbers[1]);

    }, 2000);
};
studentinfo();