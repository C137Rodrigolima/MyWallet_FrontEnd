import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Container, StyledLink, Form, Button, Input} from "../../FormComponents";
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

        promise.then(() => {
            alert("Cadastro realizado com sucesso. Faça Login!");
            navigate("/");
        });
        promise.catch(() => {
            alert("Erro ao cadastrar. Tente novamente...");
        });
    }

    return (
        <Container>
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
                <Button type="submit">Cadastrar</Button>
                <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
            </Form>
        </Container>
    );
}
export default Register;