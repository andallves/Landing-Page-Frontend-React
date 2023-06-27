import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border-radius: 1rem;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
    transition: all 300ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  `}
`;
