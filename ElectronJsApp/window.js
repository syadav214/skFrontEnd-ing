const { BrowserWindow } = require('electron');

const defaultProps = {
  width: 1200,
  height: 800
};

class Window extends BrowserWindow {
  constructor({ file, maximize = true, ...windowSettings }) {
    super({ ...defaultProps, ...windowSettings });

    if (maximize) {
      this.maximize();
    }
    this.setIcon(__dirname + '/myApp.ico');
    // We can put index.html of build folder of ReactJS web app
    this.loadFile(file);

    // We can run any web app inside electron using loadURL of any web application
    // this.loadURL('http://localhost:3000/');    
    
    // this.webContents.openDevTools();

    // to prevent flickering
    this.once('ready-to-show', () => {
      this.show();
    });
  }
}

module.exports = Window;
