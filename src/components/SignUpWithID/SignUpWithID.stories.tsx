import SignUpWithID from './SignUpWithID';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUpWithID> = {
  title: 'Component/SignUpWithID',
  component: SignUpWithID,
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
  render: () => <SignUpWithID />,
};

export default meta;
