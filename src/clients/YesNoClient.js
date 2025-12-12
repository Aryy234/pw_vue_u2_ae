import axios from 'axios';

const consumirAPI = async () => {
    const response = await axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log(response);
    return response;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}

export async function consumirAPIFacade2() {
    return await consumirAPI();
}