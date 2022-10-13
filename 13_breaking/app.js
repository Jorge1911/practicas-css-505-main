const tu = async () =>{
    const api= await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const frase=await api.json();
    let f=frase[0];
    let divFrase=document.querySelector("#frase");
    divFrase.innerHTML=`
    <h1>${f.quote}</h1>
    <p>-${f.author}</p>

    `;
}