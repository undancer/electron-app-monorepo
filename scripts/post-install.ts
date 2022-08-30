#!/usr/bin/env tsx

import { exec } from 'child_process'

const commands = [
  'patch-package',
  //   'node scripts/gen-electron-builder-config.mjs',
  'eslint .',
  'electron-builder install-app-deps',
]

exec(commands.join(' && '), (error, stdout, stderr) => {
  console.log(error, stdout, stderr)
})
