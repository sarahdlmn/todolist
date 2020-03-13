import axios from 'axios';

export function getAllListe(){
    return axios.get("http://localhost:8000/api/second_lists");
}