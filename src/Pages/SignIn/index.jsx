import { FiLock, FiMail } from "react-icons/fi";

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";

import { Container, Form } from "./style";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a>Criar conta</a>
      </Form>
    </Container>
  );
}
