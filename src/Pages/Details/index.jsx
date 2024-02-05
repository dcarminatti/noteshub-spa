import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../Services/api";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tags";

import { Content, Container, Links } from "./style";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams(),
    navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente apagar a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  });

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => {
                    return (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    );
                  })}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => {
                  return <Tag key={String(tag.id)} title={tag.name} />;
                })}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
