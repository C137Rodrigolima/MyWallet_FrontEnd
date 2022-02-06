import {Conteiner} from "../../FormComponents";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import outVector from "../../assets/OutVector.png";
import plusCircle from "../../assets/plus_circle.png";
import minusCircle from "../../assets/minus_circle.png";

function Main(){
    const navigate = useNavigate();
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
            <div>
                <h1>Main</h1>
                <img src={outVector} alt="outbutton" />
            </div>
        
        {apiContentReceived.length===0?
        <div>Não há registros de
        entrada ou saída</div>
        :
        //fazer o .map no que foi recebido...
        <h2>{apiContentReceived}</h2>
        }
        <div>
        <button onClick={() => navigate("/input")}>
            <img src={plusCircle} alt="plus circle" />Nova entrada</button>
        <button onClick={() => navigate("/output")}>
            <img src={minusCircle} alt="minus circle" />Nova saída</button>
        </div>
        </Conteiner>
    );
}

export default Main;