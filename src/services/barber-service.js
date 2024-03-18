import axios from "axios";

// const barberURL = 'http://127.0.0.1:8000/api';
// const barberURL = 'https://api.barberbolt.com/api';
// const barberURL = 'http://api.barber/api';
const barberURL = 'http://public.test/api';
let headers = {
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

export const getMyReservations = async (userID) => {
    try {
        const resp = await axios.get(`${barberURL}/barber/my-reservations/${userID}`);
        return resp.data;
    } catch (error) {
        return error;
    }
}

export const deleteReservationID = async (ID) => {
    try {
        const resp = await axios.delete(`${barberURL}/resource/orders/${ID}`, headers);
        if (resp.status === 200) {
            console.log(resp.data);
            return resp.data;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const uploadFile = async (file, id) => {
    let data = new FormData();
    data.append('file', file);
    data.append('orderId', id);
    try {
        const resp = await axios.post(`${barberURL}/upload`, data);
        return resp.data;

    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getHours = async (store) => {
    try {
        const resp = await axios.get(`${barberURL}/resource/stores/${store}/open-hours`);
        return resp.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};