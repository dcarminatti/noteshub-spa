import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";

export const Container = styled.div`
  position: relative;
  flex: 1;
  background: black;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  opacity: 0.5;
`;
