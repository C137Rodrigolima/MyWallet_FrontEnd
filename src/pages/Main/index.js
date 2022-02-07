import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Header from "../../TextComponents/Header";
import {Conteiner, NativeWindow, Bottom} from "./style";
import outVector from "../../assets/OutVector.png";
import plusCircle from "../../assets/plus_circle.png";
import minusCircle from "../../assets/minus_circle.png";

function Main(){
    const navigate = useNavigate();
    const [apiContentReceived, SetApiContentReceived] = useState([]);

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
            <Header>
                <h1>Olá, Fulano</h1>
                <img src={outVector} alt="outbutton" />
            </Header>
        
        {apiContentReceived.length===0?
        <NativeWindow reference={false}>
            Não há registros de entrada ou saída
        </NativeWindow>
        :
        //fazer o .map no que foi recebido...
        <NativeWindow reference={true}>
            <h2>{apiContentReceived}</h2>
        </NativeWindow>
        }
        <Bottom>
        <button onClick={() => navigate("/input")}>
            <img src={plusCircle} alt="plus circle" />
            <h2>Nova entrada</h2>
        </button>
        <button onClick={() => navigate("/output")}>
            <img src={minusCircle} alt="minus circle" />
            <h2>Nova saída</h2>
        </button>
        </Bottom>
        </Conteiner>
    );
}

export default Main;