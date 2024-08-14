

const search=document.querySelector("#search")
const input=document.querySelector("#input")
const temp=document.querySelector("#temp")
const wea=document.querySelector("#weather")
const max=document.querySelector("#max")
const min=document.querySelector("#min")
let city=document.querySelector("#city")


search.addEventListener("click",()=>{
    async function weatherData(){

        const APIKEY = "8fc39c8c9f8d64a0e4c6a57d68ba1caa";
        // city=input.value
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`)
        let data= await response.json() 
        // console.log(con)
        const {main,weather}  =data

    data.name=input.value
        city.innerHTML=name
        console.log(city)
        temp.innerHTML=main.temp
        console.log(temp)
        wea.innerHTML=weather[0].description
        console.log(wea);
            
        max.innerHTML=main.temp_max
        console.log(max);
        
        min.innerHTML=main.temp_min
        console.log(min);
        
    }    
    weatherData()
    })
