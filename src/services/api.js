import axios from "axios";

const BASE_URL = "https://carlos-my-wallet.herokuapp.com";

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

function sendTransaction(body, token) {

    const config = createConfig(token);
    const promise = axios.post(`${BASE_URL}/sendTransaction`, body, config);

    return promise;
}

const api = {
    signUp,
    signIn,
    getTransactionRecord,
    sendTransaction
}

export default api;