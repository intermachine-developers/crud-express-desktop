const { app, BrowserWindow } = require('electron')

// servidor
const { listen } = require('./server/app')

// puerto
const port = require('./server/port')

// start server
listen(port, () => console.log(`App running on port ${port} 🔥`))

// variable global
let mainWindow

// ventana principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.setTitle('')

  mainWindow.show()

  mainWindow.loadURL(`http://localhost:${port}`)

  mainWindow.on('closesd', () => {
    mainWindow = null
  })
}

/** eventos de la aplicacion */

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
