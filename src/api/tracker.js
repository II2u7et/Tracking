import axios from 'axios';

export default axios.create({
    baseURL: 'http://c7e28a8aa3da.ngrok.io'
    // baseURL change every 8hrs
})
