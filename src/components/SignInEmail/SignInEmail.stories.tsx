import SignInEmail from './SignInEmail';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignInEmail> = {
  title: 'Component/SignInEmail',
  component: SignInEmail,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SignInEmail />,
};

export default meta;
