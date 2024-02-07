import axios from "axios";


const barberURL = 'https://api.barberbolt.com/api';
const headers = {
    'content-type': 'application/vnd.api+json',
    'accept': 'application/vnd.api+json'
};

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

export const registerUser = async (data) => {
    try {
        const resp = await axios.post(`${barberURL}/register`, data, headers);
        if (resp.status === 200) {
            return resp.data.data.user.id;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const sendReservation = async (data) => {
    try {
        const resp = await axios.post(`${barberURL}/barber/create`, data, headers);
        return resp.status;
    } catch (error) {
        return error;
    }
};