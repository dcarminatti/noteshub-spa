import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { useState } from "react";

import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { TextArea } from "../../Components/TextArea";

export function New() {
  const [links, setLinks] = useState([]),
    [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

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
            {links.map((link, index) => {
              return <NoteItem key={String(index)} value={link} />;
            })}
            <NoteItem
              placeholder="Novo link"
              isNew
              value={newLink || ""}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
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
