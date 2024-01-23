import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { TextArea } from "../../Components/TextArea";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://react.dev/" />
            <NoteItem placeholder="Novo link" isNew />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem value="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
