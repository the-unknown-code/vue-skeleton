import '../style/tailwind.scss'
import '../style/main.scss'

import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
