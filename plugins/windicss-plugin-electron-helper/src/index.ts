import { Plugin, PluginUtils } from 'windicss/types/interfaces'

const electron: Plugin = ({ addUtilities }: PluginUtils) => {
  for (const value of ['drag', 'no-drag']) {
    addUtilities({
      [`.${value}`]: {
        '-webkit-app-region': value,
      },
    })
  }
}

export default electron
