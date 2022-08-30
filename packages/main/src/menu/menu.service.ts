import { Injectable } from '@nestjs/common'
import { Menu, MenuItem, MenuItemConstructorOptions, app, shell } from 'electron'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'

const isMac = process.platform === 'darwin'
const template: (MenuItemConstructorOptions | MenuItem)[] = [
  // { role: 'appMenu' }
  ...((isMac
    ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' },
        ],
      }]
    : []) as MenuItemConstructorOptions[]),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' },
    ],
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...((isMac
        ? [
            { role: 'pasteAndMatchStyle' },
            { role: 'delete' },
            { role: 'selectAll' },
            { type: 'separator' },
            {
              label: 'Speech',
              submenu: [
                { role: 'startSpeaking' },
                { role: 'stopSpeaking' },
              ],
            },
          ]
        : [
            { role: 'delete' },
            { type: 'separator' },
            { role: 'selectAll' },
          ]) as MenuItemConstructorOptions[]),
    ],
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...((isMac
        ? [
            { type: 'separator' },
            { role: 'front' },
            { type: 'separator' },
            { role: 'window' },
          ]
        : [
            { role: 'close' },
          ]) as MenuItemConstructorOptions[]),
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => await shell.openExternal('https://electronjs.org'),
      },
    ],
  },
]

@Injectable()
export class MenuService {
  initMenu() {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    console.log(menu)
  }

  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu'
  }

  findAll() {
    return 'This action returns all menu'
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`
  }

  remove(id: number) {
    return `This action removes a #${id} menu`
  }
}
