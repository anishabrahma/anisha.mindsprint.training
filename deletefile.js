const fs=require('fs');
 if(fs.existsSync('./files/data.txt')){

    fs.unlink('./files/data.txt',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('file deleted'); 
            }
        })
    }else{
   console.log('no file available to delete') ;
}