import axios from "axios";


const barberURL = 'https://api.barberbolt.com/api';

export const getServices = async () => {
    const request = await axios.get(`${barberURL}/resource/services`);
    return request.data;
}

export const getReservations = async () => {
    try {
        const resp = await axios.get(`${barberURL}/barber/reservations`);
        const reservations =  resp.data.reduce((acc, curr) => {
            let splits = curr.split(' ');
            if ( acc[splits[0]] ) {
                acc[splits[0]].push(splits[1]);
            } else {
                acc[splits[0]] = [];
                acc[splits[0]].push(splits[1]);
            }
            return acc
        }, {});
        return reservations; 

    } catch (error) {
        return error;
    }
};