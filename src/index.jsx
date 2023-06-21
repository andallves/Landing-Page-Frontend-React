import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { ThemeProvider, css } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/Home';

const changeBackground = (theme, bg) => css`
  background: ${bg};
  color: #000;
`;
export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryColor};

  ${({ theme, bg }) => css`
    color: ${theme.colors.white};
    ${changeBackground(theme, bg)}
  `}
`;

export const Container2 = styled(Container).attrs({ as: 'article' })`
  background: blue;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container bg="red">
        <Home />
        <GlobalStyles />
      </Container>
      <Container2>
        <h1>Oi</h1>
      </Container2>
    </ThemeProvider>
  </React.StrictMode>,
);
