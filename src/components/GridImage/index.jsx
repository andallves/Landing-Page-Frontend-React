import PropTypes from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={`${el.srcImg} + ${index}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      altText: PropTypes.string.isRequired,
      srcImg: PropTypes.string.isRequired,
    }),
  ).isRequired,
  sectionId: PropTypes.string,
};
