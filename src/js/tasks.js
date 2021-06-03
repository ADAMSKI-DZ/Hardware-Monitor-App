const electron = require('electron');
const {ipcRenderer} = require('electron');
const ipc = ipcRenderer;

// To Get CPU Usage Percentage And Ram Percentage
const perCpu = document.querySelector('.cpu-per');
const perMem = document.querySelector('.mem-per');

ipc.on('cpu-usage' , (event, data) => {
    perCpu.innerHTML = "Usage(%): " + data.toFixed(2) + '%';
})
ipc.on('mem-usage' , (event, data) => {
    perMem.innerHTML = "Free(%): " + data.toFixed(2) + '%';
})


// For Functionality Of Close And Minimize The App
const closeBtn = document.querySelector('.close-btn');
const minimizeBtn = document.querySelector('.minimize-btn');

closeBtn.addEventListener('click' , () => {
    ipc.send('close-the-app');
});
minimizeBtn.addEventListener('click' , () => {
    ipc.send('minimize-the-app');
});

