import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { api } from "../../Services/api";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { Container, Form, Background } from "./style";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function randomSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    try {
      await api.post("/users", { name, email, password });
      return alert("Usuário cadastrado com sucesso!");
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
        <h1>Notes</h1>
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
