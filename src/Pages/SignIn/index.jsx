import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../Hooks/auth";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import { Container, Form, Background } from "./style";

export function SignIn() {
  const data = useAuth();

  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
