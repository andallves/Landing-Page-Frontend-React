import PropTypes from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
