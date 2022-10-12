var divResults=document.querySelector("#Resultado")
const verUsers= async()=>{
    const respuesta= await fetch("https://jsonplaceholder.typicode.com/users")
    const json=await respuesta.json();
    console.log(json)
    json.map(user=>{
        let divUser=document.createElement("div");
        divUser.className="user";
        divUser.innerHTML=`
        <p><b>ID:</b>${user.id}</p>
        <p><b>Nombre:</b>${user.name}</p>
        <p><b>Username:</b>${user.username}</p>
        <p>${user.address.street}${user.address.suite}</p>
        <p>${user.address.city}${user.address.zipicode}
        </p>
        <p><b>geolocalizacion:</b> lat:${user.address.geo.lat} lng:${user.address.geo.lng}</p>
        <p><b>telefono:</b>${user.phone}</p>
        <p><b>web:</b>${user.website}</p>
        <p><b>compañia:</b>${user.company.name}
        ${user.company.catchPhrase} ${user.company.bs}</p>
            `;
    divResults.appendChild(divUser);
    });
}
const clearUsers = async () =>  {
    divResults.innerHTML=" ";
}
