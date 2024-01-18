import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tags";

import { Content, Container, Links } from "./style";

export default function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            eveniet excepturi voluptate pariatur eaque aliquam minima error
            illum eos iusto in hic repellendus saepe, asperiores sequi laborum
            suscipit libero? Ipsa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore eveniet excepturi voluptate pariatur eaque
            aliquam minima error illum eos iusto in hic repellendus saepe,
            asperiores sequi laborum suscipit libero? Ipsa. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Labore eveniet excepturi
            voluptate pariatur eaque aliquam minima error illum eos iusto in hic
            repellendus saepe, asperiores sequi laborum suscipit libero? Ipsa.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 1</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
