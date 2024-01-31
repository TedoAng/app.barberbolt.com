import axios from "axios";


const barberURL = 'https://api.barberbolt.com/api';

export const getServices = async () => {
    const request = await axios.get(`${barberURL}/resource/services`);
    return request.data;
}