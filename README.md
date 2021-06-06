# Hardware Monitor App 💻

> Some information 📃

This app is coded for pc , and use Electron js to coded it

and also used html , css , javascript , electron and some of npm packages

# Setup the app 📲

> Npm packages 🧰

1. diskspace

```bash
npm i diskspace
```

2. os-utils

```bash
npm i os-utils
```

3. systeminformation

```bash
npm i systeminformation
```

---

> To start the app 🚀

Install electron js

```bash
npm i --save-dev electron
```

Start the app with

```bash
npm start
```

---

> Packaging the app 🧱

Install electron packager

```bash
npm install electron-packager --save-dev
```

- Package for windows

Add this code in package.json in scripts

```json
"package-win": "electron-packager . hardware-monitor --overwrite --asar=true --platform=win32 --arch=ia32 --icon=data/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Hardware Monitor\""
```

- Package for linux

Add this code in package.json in scripts

```json
"package-linux" : "electron-packager . --overwrite --platform=linux --arch=x64 --icon=data/icon.png --prune=true --out=release-builds"
```

---

## More info about electron packager 📜

[Electron Packager](https://github.com/electron/electron-packager "Electron Packager")

## For more information contact me 📪

```email
    malick.tammal@gmail.com
```
