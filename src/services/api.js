import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);

    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/`, body);

    return promise;
}

function getTransactionRecord(token) {
    const config = createConfig(token);
    const promise = axios.get(`${BASE_URL}/transaction-record`, config);

    return promise;
}

function handleInput(body) {
    const promise = axios.post(`${BASE_URL}/handleInput`, body);

    return promise;
}

const api = {
    signUp,
    signIn,
    getTransactionRecord,
    handleInput
}

export default api;