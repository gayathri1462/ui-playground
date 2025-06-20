import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn, expect } from 'storybook/test';
import { within, userEvent } from '@storybook/testing-library';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    shimmer: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'A standard primary button with blue styling and hover effect.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = await canvas.getByRole('button');
    await userEvent.click(btn);
    expect(btn).toHaveTextContent(/primary button/i);
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'A secondary button with neutral gray background and hover state.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'An outline button with transparent background and blue border.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller button suited for compact UI layouts.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'A large button designed for emphasis or primary actions.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled primary button with muted styling and no interactivity.',
      },
    },
  },
};

export const WithCustomColor: Story = {
  args: {
    label: 'Custom Color',
    variant: 'primary',
    backgroundColor: '#facc15', // Tailwind yellow-400
  },
  parameters: {
    docs: {
      description: {
        story: 'A button using a custom background color via inline style.',
      },
    },
  },
};

export const ShimmerEffect: Story = {
  args: {
    label: 'Shimmer Loading',
    shimmer: true,
    backgroundColor: '#0ea5e9', // Tailwind blue-500
  },
  parameters: {
    docs: {
      description: {
        story: 'A shimmer-style loading button with a subtle animation overlay.',
      },
    },
  },
};
