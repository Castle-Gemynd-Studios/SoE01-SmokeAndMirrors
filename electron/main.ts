import {app, BrowserWindow} from 'electron';
//import * as url from 'url';
import * as path from 'path';

let mainWindow: BrowserWindow;

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false
		}
	});

	mainWindow.loadURL(path.join(__dirname, `index.html`));

	// Open the DevTools.
	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
	if (mainWindow === null) createWindow()
});