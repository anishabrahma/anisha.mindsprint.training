async function fetchData(){
try{
    const resp= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json= await resp.json();
    console.log(json)
}
catch(error){
    console.log(error);
}
}
fetchData()