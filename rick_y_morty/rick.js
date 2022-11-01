const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
data.results.map(item=>{
divItem=document.createElement('div')
divItem.innerHTML=`
<div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text"><b>estatus:</b>${item.status}</p>
    <p class="card-text"><b>especie:</b>${item.species}</p>
    <p class="card-text"><b>genero:</b>${item.gender}</p>
    
  </div>
</div>
`
divRes.appendChild(divItem);
});
}

const apiUbi=async(pagina)=>{
  let url="https://rickandmortyapi.com/api/location?page="+pagina;
  const api=await fetch(url);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#resultado");
  divRes.innerHTML=""
data.results.map(item=>{
divItem=document.createElement('div')
divItem.innerHTML=`
<div class="card" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text"><b>locacion:</b>${item.type}</p>
  <p class="card-text"><b>dimension:</b>${item.dimension}</p>
  <p class="card-text"><b>episodio creado:</b>${item.created}</p>
  <p class="card-text"><b>id:</b>${item.id}</p>
  
</div>
</div>
`
divRes.appendChild(divItem);
});
}


const apiEpi=async(pagina)=>{
  let url="https://rickandmortyapi.com/api/episode?page="+pagina;
  const api=await fetch(url);
  const data=await api.json();
  console.log(data);
  divRes=document.querySelector("#resultado");
  divRes.innerHTML=""
data.results.map(item=>{
divItem=document.createElement('div')
divItem.innerHTML=`
<div class="card" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text"><b>fecha de creacion:</b>${item.air_date}</p>
  <p class="card-text"><b>episodio:</b>${item.episode}</p>
  <p class="card-text"><b>episodio creado:</b>${item.created}</p>
  <p class="card-text"><b>id:</b>${item.id}</p>
  
</div>
</div>
`
divRes.appendChild(divItem);
});
}
apiEpi(1)

