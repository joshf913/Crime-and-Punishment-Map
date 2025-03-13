const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    const displays = screen.getAllDisplays();
    const primaryDisplay = screen.getPrimaryDisplay();

    // Choose the primary monitor
    const targetDisplay = primaryDisplay;

    // Create a new window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        x: targetDisplay.bounds.x + 100, // Positioning the window on the chosen monitor
        y: targetDisplay.bounds.y + 100,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: true
        }
    });

    // Load the index.html file
    mainWindow.loadFile(path.join(__dirname, '../renderer/Index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});