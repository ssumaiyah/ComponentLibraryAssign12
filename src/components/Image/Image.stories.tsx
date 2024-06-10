import { Meta, StoryFn } from '@storybook/react';
import Image from './index';
import { ImageProps } from './index';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'text' },
    shape: { control: { type: 'radio', options: ['square', 'round'] } },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Primary Image',
  size: '150px',
};

export const Round = Template.bind({});
Round.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Round Image',
  size: '150px',
  shape: 'round',
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/600',
  alt: 'Large Image',
  size: '600px',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  size: '150px',
  disabled: true,
};
