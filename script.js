
let moscow = document.getElementById('moscow');
let alex = document.getElementById('alex');
let vilva = document.getElementById('vilva');
let perm = document.getElementById('perm');
let ekb = document.getElementById('ekb');


let block = document.getElementById('menu');
let syp = document.getElementById('syper');
function opening (){
    block.classList.toggle('act')
    syp.classList.toggle('activation')
}

let burgerMenu = document.getElementById('burger');
burgerMenu.addEventListener('click', opening)



let objora = document.getElementById('setter');
function set(){
    block.classList.toggle('act')
    objora.classList.add('set__1')
    burger.classList.add('none')
};
setting = document.getElementById('set');
setting.addEventListener('click', set)

function escap(){
    burger.classList.remove('none')
    objora.classList.remove('set__1')
    syp.classList.remove('activation')
}
esc = document.getElementById('escs');
esc.addEventListener('click', escap)





function temp() {

}
let btn = document.getElementById('btn');

if(btn.addEventListener('click', function temp(){
    let city = document.getElementById('int').value;
    span.innerHTML = `${city}`
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));
else if(vilva.addEventListener('click', function vlv(){
    block.classList.remove('act')
    syp.classList.remove('activation')
    let myCity = 'Всеволодо-Вильва';
    span.innerHTML = `${myCity}`
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));
else if(alex.addEventListener('click', function func(){
    block.classList.remove('act')
    syp.classList.remove('activation')
    let myCitys = 'Александровск';
    span.innerHTML = `${myCitys}`
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCitys}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));
else if(moscow.addEventListener('click', function msc(){
    block.classList.remove('act')
    syp.classList.remove('activation')
    let myCitys = 'Москва';
    span.innerHTML = `${myCitys}`
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCitys}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));
else if(perm.addEventListener('click', function prm(){
    block.classList.remove('act')
    syp.classList.remove('activation')
    let myCitys = 'Пермь';
    span.innerHTML = `${myCitys}`
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCitys}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));
else (ekb.addEventListener('click', function ekaterinburg(){
    block.classList.remove('act')
    syp.classList.remove('activation')
    let myCitys = 'Екатеринбург';
    span.innerHTML = `${myCitys}`
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCitys}&appid=b1fc6565e50827e1ee92621602315cd9`)
    .then(function(resp) { return resp.json()})
    .then(function(data) {
        console.log(data)
        document.querySelector('.gradus').innerHTML = Math.round(data.main.temp - 273) + '&deg;' + 'C';
        document.querySelector('.icon').innerHTML = `<img class = "sun" src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.window').innerHTML = `<p class="speed">${data.weather[0]['description']}</p>`;
        document.querySelector('.deg').innerHTML = `<p class="degger">Скорость ветра: ${data.wind.speed} m/s</p>`;

    })
    .catch(function() {

    });
}));


