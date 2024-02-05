import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi";
import { api } from "../../Services/api";

import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../Components/Input";
import { Note } from "../../Components/Note";
import { Section } from "../../Components/Section";
import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]),
    [tagsSelected, setTagsSelected] = useState([]),
    [search, setSearch] = useState([]),
    [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    const reset = tagName === "all",
      alreadySelected = tagsSelected.includes(tagName);

    if (reset) {
      return setTagsSelected([]);
    }

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li onClick={() => handleTagSelected("all")}>
          <ButtonText title="Todos" isActive={tagsSelected.length === 0} />
        </li>
        {tags &&
          tags.map((tag) => {
            return (
              <li
                key={String(tag.id)}
                onClick={() => handleTagSelected(tag.name)}
              >
                <ButtonText
                  title={tag.name}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            );
          })}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar por títulos"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => {
            return (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            );
          })}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
