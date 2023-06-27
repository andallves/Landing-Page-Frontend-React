import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';

import mock from './mock';

describe('<GridContent>', () => {
  it('should render Grid Content', () => {
    renderTheme(<GridContent {...mock} background={undefined} />);
  });

  it('should render Grid Content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
