import axios from 'axios';

export const apiGet = async (url: string) => {
    const config = {headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }
    return await axios.get(url, config);
};