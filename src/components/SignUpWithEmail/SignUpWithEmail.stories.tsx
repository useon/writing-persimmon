import SignUpWithEmail from './SignUpWithEmail';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUpWithEmail> = {
  title: 'Component/SignUpWithEmail',
  component: SignUpWithEmail,
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
  render: () => <SignUpWithEmail />,
};

export default meta;
