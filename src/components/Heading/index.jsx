import PropTypes from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
