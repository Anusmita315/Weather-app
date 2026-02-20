async function getWeather(){

    let city=document.getElementById("city").value;
    
    if(city==""){
    alert("Enter city");
    return;
    }
    
    let geo=`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    let g=await fetch(geo);
    let gdata=await g.json();
    
    if(!gdata.results){
    alert("City not found");
    return;
    }
    
    let lat=gdata.results[0].latitude;
    let lon=gdata.results[0].longitude;
    let place=gdata.results[0].name;
    
    let weather=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    let w=await fetch(weather);
    let wdata=await w.json();
    
    document.getElementById("place").innerText=place;
    document.getElementById("temp").innerText=wdata.current_weather.temperature+"°C";
    document.getElementById("wind").innerText="Wind: "+wdata.current_weather.windspeed+" km/h";
    document.getElementById("time").innerText=wdata.current_weather.time;
    }