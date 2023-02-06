import { contextBridge, ipcRenderer } from 'electron';
import pkg from '../package.json';

window.addEventListener('DOMContentLoaded', () => {
  console.log('HTML DOMContentLoaded');
});

contextBridge.exposeInMainWorld('myIpc', {
  send: (channel: string, args: any) => {
    return ipcRenderer.send(channel, args);
  },
  on: (channel: string, listener: any) => {
    ipcRenderer.on(channel, (event, args) => listener(args));
  },
  // invoke: (channel: string, args) => {
  //   // 不推荐，推荐使用 send/sendSync => event.reply == event.sender.send == win.webContents.send/event.returnValue
  //   return ipcRenderer.invoke(channel, args);
  // },
  exit: () => {
    console.log('destroy');
    ipcRenderer.send('destroy');
  },
  getVersion: () => pkg['version']
});
