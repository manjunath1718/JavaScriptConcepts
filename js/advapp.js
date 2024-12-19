console.log("JS advance concepts");

/* Promise : represent both succes failure and 
pending state of an asynchrounus operation */
/* 
const costumePromise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        console.log("work done ");
        resolve('sucess');
        
    },2000);
});

costumePromise.then(
    (result)=>{
        console.log(result);       
    }
).catch((error)=>{
    console.log(error);
    
}) */
console.log("first line ");

function fetchDataFromDb(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success=false;
            if(success){
                resolve({name: "Akash",age:25});
            }else{
                reject("something went wrong");
            }

        },2000);
    });
}
console.log("last line");

fetchDataFromDb().then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
})

// converting async to sync

console.log("Before line of loaddata");
async function loadData(){
    // fetchDataFromDb().then((result)=>{
    //     console.log(result);     
    // }).catch((error)=>{
    //     console.log(error);    
    // })
   console.log("Before calling fetchDataFromDb");
   try{
    const data =  await fetchDataFromDb();
    console.log(data); 

   }catch(error){
    console.log(error);  
   } finally{
    console.log("finally block");
    
   }
   console.log("after calling fetchDataFromDb");
   
}
loadData();
console.log("line after calling loadData");
console.log("thankyou");

