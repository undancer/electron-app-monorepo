#!/usr/bin/env tsx

import path from 'node:path'
import { AfterPackContext, build as electron } from 'electron-builder'
import { FuseConfig, FuseV1Options, FuseVersion, flipFuses } from '@electron/fuses'
import config from '../electron-builder.config'

type PackContext = AfterPackContext

type AfterPackFunction = (context: PackContext) => Promise<any> | any

const func = async (context: PackContext, ...afterPackFunctions: AfterPackFunction[]) => {
  for (const afterPackFunc of afterPackFunctions) {
    await afterPackFunc(context)
  }
}

const fuses = (context: PackContext, fuseConfig: FuseConfig) => async () => {
  const { appOutDir, packager, electronPlatformName: platform } = context
  const { productFilename } = packager.appInfo
  const target = ({
    darwin: (productFilename: string) => `${productFilename}.app`,
    win32: (productFilename: string) => `${productFilename}.exe`,
    linux: (_: string, packager: any) => (packager as unknown as { executableName: string }).executableName,
  })[platform](productFilename, packager)

  const electron = path.join(appOutDir, target)

  await flipFuses(electron, fuseConfig)

  console.log(electron, 'done')
}

// bootstrap
(async () => {
  await electron({
    config: {
      ...config,
      afterPack: (context: PackContext) => {
        func(context,
          // fuses(context, {
          //   version: FuseVersion.V1,
          //   [FuseV1Options.RunAsNode]: true,
          // }),
        )
      },
    },
  })
})()
