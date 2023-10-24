'use strict'
 // prettier-ignore
const form = document.querySelector('.act-form')
const type = document.querySelector('.type');
const distance = document.querySelector('.distances');
const duration = document.querySelector('.duration');
const candence = document.querySelector('.candence');
const elevationGain = document.querySelector('.Elev');
const container = document.querySelector('.act-box');

class Workout {
    date = new Date();
    id = (Date.now + ''.slice(-10));
    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }  
    _getDescription(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
         'October', 'November', 'December']

         this.description = `${this.types[0].toUpperCase()}${this.types.slice(1)} on
          ${months[this.date.getMonth()]} ${this.date.getDate()}` 
    }
};
class Running extends Workout{
    types = 'running';
    constructor(coords, distance, duration, candence){
        super(coords, distance, duration)
        this.candence = candence;
        this._getDescription();
        this.calcPace();
    }
    calcPace(){
        this.pace = (this.duration / this.distance).toFixed(1)
        return this.pace;
    }
};
class Cycling extends Workout{
    types = 'cycling'
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration)
        this.elevationGain = elevationGain;
        this._getDescription();
        this.calcSpeed()
    }
    calcSpeed(){
        this.speed = (this.distance / (this.duration/60)).toFixed(1)
        return this.speed;
    }
};









// Application architecture
class App  {
    #map;
    #mapZoomLevel = 13;
    #mapEvents;
    #workouts = [];
    #clicks = 0;
    constructor(){
        this._getPosition(); 
        this._getLocalStorage();
        form.addEventListener('submit', this._newWorkout.bind(this))
        type.addEventListener('change', this._toggleElevation.bind(this));
        container.addEventListener('click', this._moveToPopUp.bind(this));
    }
    _getPosition(){
        if(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function(){
            alert ("it couldn't access your location")
        });
    };
    _loadMap(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const coord = [latitude, longitude]
        this.#map = L.map('map').setView(coord, this.#mapZoomLevel);
       
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
    
        //handling click on map
        this.#map.on('click', this._showForm.bind(this))

        this.#workouts.forEach(work => {
            this._renderWorkOutMarker(work);
        })
        
    };
    _showForm(mapE) {
        this.#mapEvents = mapE;
        form.classList.remove('hidden');
        distance.focus();
    };
    _hideForm(){
        distance.value = duration.value = candence.value = elevationGain.value = '';
        form.classList.add('hidden');
    }
    _toggleElevation(){
        elevationGain.closest('.act-box-row').classList.toggle('hidden-toggle')
        candence.closest('.act-box-row').classList.toggle('hidden-toggle')
    }
    _newWorkout(e){
        const validInput = (...input) => input.every(inp => Number.isFinite(inp));
        const allPositive = (...input) => input.every(inp => inp > 0);

        e.preventDefault();
        const { lat, lng } = this.#mapEvents.latlng;
        const typeval = type.value;
        const distval  = +distance.value;
        const durVal = +duration.value;
        const canVal = +candence.value;
        const elevVal = +elevationGain.value;
        let workout;
        // validation of inputs
        if(typeval === 'running'){
            if(
                !validInput(distval, durVal, canVal) || 
                !allPositive(distval, durVal, canVal)
            ) 
            return alert('The inputs are not valid') 

            workout = new Running([lat, lng], distval, durVal, canVal)
        }
        
        if(typeval === 'cycling'){
            if(!validInput(distval, durVal, elevVal ) || 
            !allPositive(distval, durVal)) 
            return alert('The inputs are not valid') 

            workout = new Cycling([lat, lng], distval, durVal, elevVal);
        } 
        this.#workouts.push(workout)
        this._renderWorkOutMarker(workout);
        this._renderWorkout(workout);
        this._hideForm();
        this._setLocalStorage();

       
       
        // display marker
 
};
_clicks(){
    this.#clicks++;
}
_renderWorkOutMarker(workout) {
    L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
    L.popup({
    maxWidth: 250,
    minWidth: 100,
    closeOnClick: false,
    autoClose: false,
    className: `${workout.types}-popup`,
})
) 
.setPopupContent(`${workout.description}`)
.openPopup();
}
_renderWorkout(workout){
    let html = `
    <li class="workout workout--${workout.types}" data-id = "${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
    </div>
`

if(workout.types === 'running'){
    html+= `
    <div class="workout__details">
        <span class="workout__value">${workout.pace}</span>
        <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
        <span class="workout__value">${workout.candence}</span>
        <span class="workout__unit">km/min</span>
</div>
</li>`
}
if(workout.types === 'cycling'){
    html+= `
    <div class="workout__details">
        <span class="workout__value">${workout.speed}</span>
        <span class="workout__unit">km/min</span>
    </div>
    <div class="workout__details">
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">km/min</span>
</div>
</li> `
}

form.insertAdjacentHTML('afterend', html);

};
_moveToPopUp(e) {
    const workOutEL = e.target.closest('.workout');

    if(!workOutEL) return;
    const workout1 = this.#workouts.find(work => work.id === workOutEL.dataset.id)

    this.#map.setView(workout1.coords, this.#mapZoomLevel, {
        animate: true,
        pan: {
            duration: 1
        }
    })
    workout1._clicks();

}
_setLocalStorage(){
    localStorage.setItem('workouts', JSON.stringify(this.#workouts))
}
_getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workouts'));
    if(!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => {
        this._renderWorkout(work);
    })
}
reset() {
    localStorage.removeItem('workouts')
    location.reload();
}
}
const app = new App();
