const verClima=()=>{
    let apikey="c8bc0aeda1202c73f14c40e402dc1307";
    let divRes=document.querySelector("#res");
    if(navigator.geolocation){
        var success =async function(position){
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
        console.log("latitud " + latitud +",longitud:" +longitud);
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lag=es`
        console.log(url);
        const api= await fetch(url);
        const data= await api.json();
        console.log(data);
        const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        divRes.innerHTML=`
        
        <h1>${data.name}</h1>
        <img src="${urlIcon}">
        <p>temperatura:${data.main.temp} °c</p>
        <h2>${data.weather[0].description.toUpperCase()}</h2>
        <p>min:${data.main.temp_min}°</p>
        <p>max:${data.main.temp_max}°</p>
        <p>presion:${data.main.pressure}hPa</p>
        <p>humedad:${data.main.humidity}%</p>
        <p> velocidad del viento:${data.wind.speed}km/h</p>
        `;
        }
        navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        });
        }
}
