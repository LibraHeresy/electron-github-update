/*
 * @Author: zhouyang
 * @Date: 2023-05-15 10:31:29
 * @LastEditors: zhouyang
 * @LastEditTime: 2023-05-15 15:25:01
 * @FilePath: \electron-github-update\electron-app\main.js
 * @Desc: 描述
 */
const {
  app,
  BrowserWindow
} = require("electron");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV

const config = {
  production: {
    loadFile: path.join(__dirname, `./index.html`),
  },
  development: {
    loadFile: 'http://localhost:5173/'
  },
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL(config[NODE_ENV]?.loadFile || path.join(__dirname, `./index.html`));
};

app.on('ready', createWindow);  

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}); 

if (require('electron-squirrel-startup')) {
  app.quit();
}