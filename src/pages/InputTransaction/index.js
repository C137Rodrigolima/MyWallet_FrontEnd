import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import {Conteiner, Form, Button, Input} from "../../FormComponents";
import api from "../../services/api";

function InputTransaction(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        value: "",
        description: '',
        type: true
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e){
        e.preventDefault();
        const token = localStorage.getItem("token");

        const promise = api.sendTransaction(formData, token);
        promise.then((response)=>{
            console.log(response.data);
            navigate("/main");
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <Conteiner>
            <Form onSubmit={handleSubmit}>
                <Input
                type="number"
                placeholder="Valor"
                name="value"
                onChange={handleChange}
                value={formData.value}
                required
                />
                <Input
                type="text"
                placeholder="Descrição"
                name="description"
                onChange={handleChange}
                value={formData.description}
                required
                />
                <Button type="submit">Salvar entrada</Button>
            </Form>
        <h1>Input</h1>
        </Conteiner>
    );
}

export default InputTransaction;