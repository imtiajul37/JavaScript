let weather = {
    'apiKey' : '91cac636fe89369b45478f25294b55fe',
    FetchWeather : function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.display(data));
    },
    display: function(data){
        const { name, message } = data;
        const {lat, lon} = data.coord;
        const { icon, description, main} = data.weather[0];
        const { temp , humidity,feels_like} = data.main;
        const {speed} = data.wind;
        document.querySelector('.city').innerHTML =  `Weather in ${name}`;
        document.querySelector('.temp').innerHTML = Math.ceil(temp) + '°C';
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png" ;
        document.querySelector('.feel').innerHTML ='Feels like ' + Math.ceil(feels_like) + '°C';
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.humidity').innerHTML = `Humidity is : ${humidity}%` ;
        document.querySelector('.wind').innerHTML = `Wind speed is : ${speed}km/h`;
        document.querySelector('.lat').innerHTML = 'Latitude : ' + lat;
        document.querySelector('.lon').innerHTML = 'Longitude : ' + lon;
       
        
        // images
        let body = document.querySelector('body');
        if(main == 'Rain'){
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/rain.jpg");
            x.setAttribute("alt", "Rainy");
            document.body.appendChild(x);
    
        }else if(main == 'Clear'){
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/sunny.jpg");
            x.setAttribute("alt", "Rainy");
            document.body.appendChild(x);
        }else if(main == 'Clouds'){
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/hazy.jpg");
            x.setAttribute("alt", "Rainy");
            document.body.appendChild(x);
        }else if(main == 'strom'){
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/strom.jpg");
            x.setAttribute("alt", "Rainy");
            document.body.appendChild(x);
        }else if(main == 'Haze'){
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/hazy.jpg");
            x.setAttribute("alt", "Rainy");
            document.body.appendChild(x);
        }else{
            let x = document.createElement("IMG");
            x.classList.add('bg')
            x.setAttribute("src", "img/common.jpg");
            x.setAttribute("alt", "Weather");
            document.body.appendChild(x)
        }
        
        
        
    },
    search : function (){
        this.FetchWeather(document.querySelector('#search').value);
    } 

};

document.querySelector('.continer__search button').addEventListener('click' , function(e){
    weather.search()
} )











