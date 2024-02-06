import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./style";

export function Header() {
  const [avatarUrl, setAvatarUrl] = useState("");

  const { signOut, user } = useAuth(),
    navigate = useNavigate();

  function handleNavigateProfile() {
    navigate("/profile");
  }

  useEffect(() => {
    setAvatarUrl(
      user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : ""
    );
  }, []);

  return (
    <Container>
      <Profile onClick={handleNavigateProfile}>
        <img src={avatarUrl} alt="Foto do usuário" />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
