import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
// Consigo pegar props aqui 
  ${({ background }) => css`
    background: ${background};
  `}
`;
