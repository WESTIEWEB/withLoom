import axios from 'axios';
const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        withCredentials: true,
    }
}

export const apiGet = async (url: string) => {
    return await axios.get(url,config);
};

export const apiGetCurrency:any = async (url: string) => {
    return await axios.get(url,{
        headers: {
            'x-rapidapi-key': `import.meta.env.VITE_APP_RAPIDAPI_KEY`,
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com'
          }
    });
};