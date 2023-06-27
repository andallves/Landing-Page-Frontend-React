import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles.js';
export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.white : theme.colors.primaryColor};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  @media ${theme.media.lteSmall} {
      margin-bottom: ${theme.spacings.large};
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
`;
