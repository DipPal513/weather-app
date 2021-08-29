
// gloabal variable

// loader


const loader = document.querySelector('.loader');
window.addEventListener('load',()=>{
    loader.style.display = 'none';
})

const input = document.querySelector('input');
const searchBtn = document.querySelector('search-btn');
const displayError =document.getElementById('displayError');

const searchWeather = async () =>{
    if(input.value == ''){
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML =` <h2 class="p-4 bg-danger">No Search Results Found</h2>`
       
        console.log(errorDiv.innerText)
        displayError.textContent = '';
        displayError.appendChild(errorDiv);
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=40efc1d2374da0d8848db007f252200f`;
        const res =    await fetch(url)
        const data = await res.json()

        displayWeather(data)
    }    
}

const displayWeather =(data)=>{
    const displayWeather = document.getElementById('displayWeather');
    console.log(data)
    const div = document.createElement('div');
    div.className = 'text-center '
    div.innerHTML = 
    `
    <div class="card" style="width: 30rem; backdrop-filter:blur(20px); color:#fff;padding:30px; background:#ffffff26;>
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <h5>${data.sys.country}</h5>
            <p>Timezone : ${data.timezone}</p>
            <p>Temp : ${data.main.temp}</p>
            
            </div>
            <div class="card-body">
            <p class="">weather :${data.weather[0]. description}</p>
                     <p>Feels Like :${data.main.feels_like}</p>
                    </div>
                  </div> 
    `
    input.value = ''
    displayWeather.textContent = '';
    displayWeather.appendChild(div)

}