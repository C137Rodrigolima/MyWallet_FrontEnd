import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input} from "../../FormComponents";
import Container from "./style"
import api from "../../services/api";
import { Header } from "../../TextComponents";

function Output(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        value: "",
        description: '',
        type: false
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e){
        e.preventDefault();
        const token = localStorage.getItem("token");

        const promise = api.sendTransaction(formData, token);
        promise.then(()=>{
            alert(`Transação no valor de ${formData.value} realizada com sucesso!`);
            navigate("/main");
        }).catch(()=>{
            alert("Não foi possivel realizar a transação");
        })
    }

    return (
        <Container>
            <Header>
                <h1>Nova saída</h1>
            </Header>
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
        </Container>
    );
}

export default Output;