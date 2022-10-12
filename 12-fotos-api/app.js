var divResults=document.querySelector("#Resultado")
const verUsers= async()=>{
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/photos")
    const json=await respuesta.json();
    console.log(json)
    var x=0;
    json.map(user=>{
        if(x==10){
return
        }
        let divUser=document.createElement("div");
        divUser.className="user";
        divUser.innerHTML=`
        <p><b>albumId:</b>${user.albumId}</p>
        <p><b>id:</b>${user.id}</p>
        <p><b>title:</b>${user.title}</p>
       
        <p><b>url:</b> <img src="${user.url}" width="100%"></p>
      
            `;
    divResults.appendChild(divUser);
    x++;
    });
}
const clearUsers = async () =>  {
    divResults.innerHTML=" ";
}