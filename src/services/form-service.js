import axios from "axios";

const URL = 'https://api.tvangelov.com/api/send';

export const sendMessage = async (data) => {
    const request = await axios.post(URL, data);
    return request.status === 200 ? true : false;
}