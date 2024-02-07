import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PURPLE_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;
    border: 0;

    font-size: 16px;
    font-weight: 500;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.PURPLE_300};
    }

    &:focus {
      outline: 0;
      border: none;
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
