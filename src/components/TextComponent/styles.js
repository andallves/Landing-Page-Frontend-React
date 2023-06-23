import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};

    @media ${theme.media.lteSmall} {
      font-size: ${theme.fonts.sizes.xsmall};
    }

    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
