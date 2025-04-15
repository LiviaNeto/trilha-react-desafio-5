import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sspupurkokggvyaexrrj.supabase.co/rest/v1',
    headers: {
        apikey: "ey...z6g",
        authorization: "Bearer ey...z6g"
    }
})
