import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two column',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, explicabo quas, in repellat veniam aspernatur dicta voluptatibus ex iste architecto modi. Quo delectus ipsa libero, aliquam minus odio explicabo ullam.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
