import PropTypes from 'prop-types';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';
import * as Styled from './styles';

export const GoTop = ({ handleClick }) => {
  return (
    <Styled.Container
      href="#"
      onClick={handleClick}
      aria-label="Go to top"
      title="Go to top"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

GoTop.propTypes = {
  handleClick: PropTypes.func,
};
