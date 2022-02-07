import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {Conteiner, StyledLink, Form, Button, Input} from "../../FormComponents";
import logo from "../../assets/Logo.png";

function Login(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = api.signIn({
            ...formData
        });

        promise.then((response) => {
            const token= response.data;
            localStorage.setItem("token", token);
            navigate("/main");
        });
        promise.catch((error) => {
            console.log(error);
            alert("Email ou senha incorretos. Tente novamente...");
        });
    }

    return (
        <Conteiner>
            <img src={logo} alt="logo-img"/>
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit">Entrar</Button>
                <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
            </Form>
        </Conteiner>
    );
}

export default Login;