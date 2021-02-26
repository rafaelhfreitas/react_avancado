import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Valor default do titulo',
    description: 'Valor default da descrição'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: 'Rafael Henrique de Freitas',
//   description: 'dhuahuahua'
// }

export const Default: Story = (args) => <Main {...args} />
// Default.args = {
//   title: '1234',
//   description: '98766'
// }
