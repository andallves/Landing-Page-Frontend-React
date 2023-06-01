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

  it('should render correct tag', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    const p = container.querySelector('p');

    expect(p.tagName).toBe('P');
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <p
          class="c0"
        >
          Children
        </p>
      </div>
    `);
  });
});
