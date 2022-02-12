import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Conteiner, StyledLink, Form, Button, Input} from "../../FormComponents";
import logo from "../../assets/Logo.png";
import api from "../../services/api";

function Register(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = api.signUp({
            ...formData
        });

        promise.then((response) => {
            navigate("/");
        });
        promise.catch((error) => {
            console.log(error);
            alert("Erro com Cadastro. Tente novamente...");
        });
    }

    return (
        <Conteiner>
            <img src={logo} alt="logo-img"/>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirme a Senha"
                />
                <Button type="submit">Cadastrar</Button>
                <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
            </Form>
        </Conteiner>
    );
}
export default Register;