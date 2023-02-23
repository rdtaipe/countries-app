import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../Redux/Reducer";

export const getCountrycities =  (country) => {
     const countries = axios.get(`http://api.geonames.org/searchJSON?country=${country}&username=rdtaipe`)
    return countries
} 


export const getPlaces=(place)=>{
	// localhost:7000/places/:Argentina
    const places = axios.get(`http://localhost:7000/places/${place}`)
    return places

   

    }

