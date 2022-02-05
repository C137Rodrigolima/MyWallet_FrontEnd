import {Conteiner} from "../../FormComponents";
import { useState, useEffect } from "react";
import api from "../../services/api";

function Main(){
    const [apiContentReceived, SetApiContentReceived] = useState("");

    function loadTransations() {
        const token = localStorage.getItem("token");
        const promise = api.getTransactionRecord(token);
    
        promise.then((response) => {
            const apiResponse = response.data;
            SetApiContentReceived(apiResponse);
        });
    }
    
    useEffect(loadTransations, []);

    if (apiContentReceived === null) {
        return <h1>Carregando...</h1>;
    }

    return (
        <Conteiner>
        <h1>Main</h1>
        <h2>{apiContentReceived}</h2>
        </Conteiner>
    );
}

export default Main;