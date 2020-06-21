export default {
    getWeather(payload){
    	
        return fetch(api + payload)
        .then(res => res.json());
    } 
}


    