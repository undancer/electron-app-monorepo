#!/usr/bin/env tsx

import { resolve } from 'path'
import { Listr, ListrTask } from 'listr2'
import { build } from 'vite'
import { Configuration, build as electron } from 'electron-builder'

const plugins = [
  'windicss-plugin-electron-helper',
]

const projects = [
  'main',
  'preload',
  'renderer',
]

const config: Configuration = {
  electronDownload: {
    mirror: 'https://npmmirror.com/mirrors/electron/',
  },
  directories: {
    output: 'dist/electron',
  },
  files: [
    'dist/main/**/*',
    'dist/preload/**/*',
    'dist/renderer/**/*',
  ],
  mac: {
    target: ['dir'],
    asar: false,
  },
}

Promise.resolve()
  .then(() => new Listr(plugins.map((plugin): ListrTask => ({
    title: plugin,
    task: () => build({ configFile: resolve(__dirname, '../plugins', plugin, './vite.config.ts') }),
  })), { concurrent: true }).run())
  .then(() => new Listr(projects.map((project): ListrTask => ({
    title: project,
    task: () => build({ configFile: resolve(__dirname, '../packages', project, './vite.config.ts') }),
  })), { concurrent: true }).run())
  .then(() => electron({ config }))
