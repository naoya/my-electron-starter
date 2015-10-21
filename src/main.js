import app from 'app'
import BrowserWindow from 'browser-window'
import crashReporter from 'crash-reporter'

crashReporter.start();

let mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({width: 480, height: 640});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
