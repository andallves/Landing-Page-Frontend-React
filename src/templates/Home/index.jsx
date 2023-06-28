import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';

function Home() {
  return (
    <Styled.Wrapper>
      <Base {...mockBase} />;
    </Styled.Wrapper>
  );
}

export default Home;
