import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./style";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

export function New() {
  const [title, setTitle] = useState(""),
    [description, setDescription] = useState(""),
    [links, setLinks] = useState([]),
    [newLink, setNewLink] = useState(""),
    [tags, setTags] = useState([]),
    [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function capitalizeWords(inputString) {
    const words = inputString.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    const resultString = capitalizedWords.join(" ");
    return resultString;
  }

  function handleAddLink() {
    setNewLink(newLink.toLowerCase());
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(linkDeleted) {
    setLinks((prevState) => prevState.filter((link) => link !== linkDeleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(tagDeleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota!");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vazio"
      );
    }

    if (newLink) {
      return alert(
        "Você deixou um link no campo para adicionar, mas não clicou em adicionar! Clique para adicionar ou deixe o campo vazio"
      );
    }

    setTitle(title.charAt(0).toUpperCase() + title.slice(1).toLowerCase());

    const formatTags = tags.map((tag) => {
      return capitalizeWords(tag);
    });

    try {
      const response = await api.post("/notes", {
        title,
        description,
        tags: formatTags,
        links,
      });

      if (response.status === 201) {
        alert("Nota criada com sucesso");
        handleBack()
      } else {
        alert("Erro ao criar nota");
      }
    } catch (error) {
      // alert("Erro ao criar nota");
      handleBack();
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              );
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
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                );
              })}
              <NoteItem
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                placeholder="Nova tag"
                onClick={handleAddTag}
                isNew
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
