import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: 0;
    border-radius: 10px;

    margin-top: 16px;
    padding: 0 16px;

    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;
