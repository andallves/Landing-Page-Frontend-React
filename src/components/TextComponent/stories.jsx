import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere
    provident alias fuga vitae rerum praesentium vero atque doloribus ullam
    quisquam molestias qui, quidem, magni maiores temporibus ipsa!
    Eligendi, voluptate!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
