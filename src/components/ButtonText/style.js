import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.LIGHT_ROSE : theme.COLORS.PURPLE_100};
  border: none;
  font-size: 16px;
`;
