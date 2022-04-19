import axios from "axios";

const clients = axios.create({
    baseURL: 'http://localhost:3001/clients'
});

export default clients;