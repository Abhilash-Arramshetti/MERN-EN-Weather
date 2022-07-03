const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const submitBtn = document.getElementById('submitBtn')
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('middle_layer')
const day = document.getElementById('day')
const today_date = document.getElementById('today_date')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const d = new Date()
day.innerText = days[d.getDay()]
today_date.innerText = d.getDate()
const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value
    if (cityVal === '') {
        city_name.innerText = 'Provide a City name'
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b81d1235add18150329af82740e85f64`
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data]
            temp.innerText = arrData[0].main.temp + '°C'
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`
            // temp_status.innerText=arrData[0].weather[0].main
            const tempMood = arrData[0].weather[0].main
            if (tempMood == 'Clear') {
                temp_status.innerHTML = "Sunny <i class='fas fa-sun style='color: cyan;'></i> ";
            }
            else if (tempMood == 'Clouds') {
                temp_status.innerHTML = " Clouds <i class='fas fa-cloud style='color: #f1f2f6;'></i> ";
            }
            else if (tempMood == 'Rain') {
                temp_status.innerHTML = "Rainy <i class='fas fa-cloud-rain style='color: #f1f2f6;'></i> ";
            }
            else {
                temp_status.innerHTML = "Cloud <i class='fas fa-cloud style='color: #f1f2f6;'></i> ";
            }
        }
        catch {
            city_name.innerText = 'Provide a Valid City name'
            datahide.classList.add('data_hide')

        }
    }
}
submitBtn.addEventListener('click', getInfo)
