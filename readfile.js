const fs=require('fs');

fs.readFileSync('./files/data.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})