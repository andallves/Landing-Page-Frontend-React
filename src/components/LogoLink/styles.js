import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    text-decoration: none;
    align-items: center;
    color: inherit;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
