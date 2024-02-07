import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Background } from "../../components/Background";

import { Container, Form } from "./style";

export function SignUp() {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function randomSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    try {
      await api.post("/users", { name, email, password });
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível cadastrar o usuário!");
      }
    }
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>NotesHub</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={randomSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
