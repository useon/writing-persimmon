import SignUpEmail from './SignUpEmail';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUpEmail> = {
  title: 'Component/SignUpEmail',
  component: SignUpEmail,
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
  render: () => <SignUpEmail />,
};

export default meta;
