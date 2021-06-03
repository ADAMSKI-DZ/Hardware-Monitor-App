const {
  app,
  BrowserWindow,
  ipcMain,
  ipcRenderer,
  globalShortcut,
} = require("electron");
const path = require("path");
const os = require("os-utils");
const ipc = ipcMain;

let mainWindow = null;
let iconPath = path.join(__dirname, "./data/icon.png");

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    show: false,
    resizable: false,
    transparent: true,
    icon: iconPath,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: false,
      preload: path.join(__dirname, "./preload.js"),
    },
  });
  loading = new BrowserWindow({
    width: 1000,
    height: 500,
    frame: false,
    resizable: false,
    icon: iconPath,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      devTools: false,
    },
  });
  globalShortcut.register("CmdOrCtrl+R", () => {});

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
  loading.loadURL(`file://${__dirname}/src/loading.html`);

  setInterval(() => {
    os.cpuUsage(function (v) {
      mainWindow.webContents.send("cpu-usage", v * 100);
      mainWindow.webContents.send("mem-usage", os.freememPercentage() * 100);
    });
  }, 1000);
  mainWindow.webContents.on("did-finish-load", () => {
    setTimeout(() => {
      if (loading) {
        loading.close();
      }
      mainWindow.show();
    }, 4000);
  });
});

ipc.on("close-the-app", () => {
  mainWindow.close();
});
ipc.on("minimize-the-app", () => {
  mainWindow.minimize();
});
