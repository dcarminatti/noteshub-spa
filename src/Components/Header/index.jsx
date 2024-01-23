import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/dcarminatti.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>Dcarminatti</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
