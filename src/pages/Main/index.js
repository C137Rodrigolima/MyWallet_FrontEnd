import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {Header, TextBlock, TextBottom} from "../../TextComponents";
import {Conteiner, NativeWindow, Bottom} from "./style";
import outVector from "../../assets/OutVector.png";
import plusCircle from "../../assets/plus_circle.png";
import minusCircle from "../../assets/minus_circle.png";

function Main(){
    const navigate = useNavigate();
    const [apiContentReceived, setApiContentReceived] = useState([]);
    const [nameUser, setNameUser] = useState("");
    const [balance, setBalance] = useState(0);

    useEffect(loadTransations, []);

    function loadTransations() {
        const token = localStorage.getItem("token");
        const promise = api.getTransactionRecord(token);
    
        promise.then((response) => {
            setNameUser(response.data.name);
            calcValue(response.data.recordTransaction);
            setApiContentReceived(response.data.recordTransaction);
        });
        promise.catch((error)=>{
            console.log(error);
        })
    }

    function calcValue(object){ 
        let plus = 0;
        let newArray = object.map(function(num) {
            if (num.type){
                return Number(num.value);
            }
            return Number(num.value)*(-1) ;
            });
        for(let  i=0; i<newArray.length; i++){
            plus= plus + newArray[i];
        }
        setBalance(plus.toFixed(2));
    }

    return (
        <Conteiner>
            <Header>
                <h1>Olá, {nameUser}</h1>
                <img src={outVector} onClick={() => navigate("/")} alt="outbutton" />
            </Header>
        
        {apiContentReceived.length===0?
        <NativeWindow reference={false}>
            <h1>Não há registros de entrada ou saída</h1>
        </NativeWindow>
        :
        //fazer o .map no que foi recebido...
        <NativeWindow reference={true}>
            <div>
            {apiContentReceived.map((resp) =>
            <TextBlock reference={resp.type} key={resp.value}>
                    <h4>{resp.time}</h4>
                    <h5>{resp.description}</h5>
                    <h6>{Number(resp.value).toFixed(2)}</h6>
            </TextBlock>
                    )}
            </div>
            <TextBottom referenceBalance={Number(balance)}>
                <h2>Saldo</h2>
                <h3>{balance}</h3>
            </TextBottom>
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