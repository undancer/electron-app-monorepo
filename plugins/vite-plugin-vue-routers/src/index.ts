import { PluginOption } from 'vite'
import pages, { UserOptions as PagesOptions } from 'vite-plugin-pages'
import layouts, { UserOptions as LayoutsOptions } from 'vite-plugin-vue-layouts'

interface UserOptions {
  pages: PagesOptions
  layouts: LayoutsOptions
}

const virtualModuleHelper = (virtualModuleId: string, generatedCode: () => string) => {
  const resolvedVirtualModuleId = `\0${virtualModuleId}`
  return {
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        const code = generatedCode().split('\n')
          .map(line => line.trim())
          .join('\n')
          .trim()

        return {
          code,
        }
      }
    },
  }
}

export const vueRouters = (config?: Partial<UserOptions>): PluginOption => {
  const pagesOptions = config?.pages || {}
  const layoutsOptions = config?.layouts || {}

  return [
    {
      name: 'vue-routers:init',
      enforce: 'pre',
      ...virtualModuleHelper('virtual:generated-vue-routers', () =>
          `
          import { setupLayouts } from 'virtual:generated-layouts'
          import generatedPages from 'virtual:generated-pages'
          export { generatedPages, setupLayouts }
          `,
      ),
    },
    pages(pagesOptions),
    layouts(layoutsOptions),
  ]
}

