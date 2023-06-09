import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render the component', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const paragraph = screen.getByText('Children');

    expect(paragraph).toBeInTheDocument();
  });

  it('should render correct font-size', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const paragraph = screen.getByText('Children');

    expect(paragraph).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
