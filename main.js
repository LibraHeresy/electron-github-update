const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // win.loadFile(`file://${__dirname}/vue-app/dist/index.html`);
  win.loadURL(`http://localhost:5173/`);
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

try {
  require('electron-reloader')(module)
}catch(e){}