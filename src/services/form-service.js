import axios from "axios";

const formURL = 'https://api.tvangelov.com/api/send';

export const sendMessage = async (data) => {
    const request = await axios.post(formURL, data);
    return request.status === 200 ? true : false;
}