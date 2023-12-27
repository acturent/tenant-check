import { app, BrowserWindow } from 'electron';

const title = 'Tenant Check | Acturent';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 768,
    title,
  });

  mainWindow.loadURL('https://www.mysmartmove.com/acturent');

  // Prevent the window title from changing
  mainWindow.webContents.on('page-title-updated', (event) => {
    mainWindow.setTitle(title);
    event.preventDefault();
  });

  // import { dialog } from 'electron';
  // Note: Error codes: https://source.chromium.org/chromium/chromium/src/+/main:net/base/net_error_list.h
  // mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL, isMainFrame) => {
  //   console.log(`Failed to load page: ${validatedURL}.\nError (${errorCode}): ${errorDescription}`);
  //
  //   dialog.showMessageBox(mainWindow, {
  //     type: 'error',
  //     title: 'Error Loading Page',
  //     icon: 'error',
  //     textWidth: 80,
  //     message: 'There was an error loading the page.\n\nPlease close the application and try reopening it.',
  //     detail: `Error Code: ${errorCode}\n${errorDescription}`,
  //     buttons: ['OK'],
  //   });
  // });

  // Prevent links with target="_blank" from opening a new window
  mainWindow.webContents.setWindowOpenHandler((details) => {
    mainWindow.loadURL(details.url);

    return {
      action: 'deny',
    };
  });
};

app.whenReady().then(() => {
  createWindow();
});
