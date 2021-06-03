const os = require('os');
const si = require('systeminformation');
const osutils = require('os-utils');
const { setImmediate, setInterval } = require('timers');
const diskspace = require('diskspace');



// for Catching Client UserName
const usrName = document.querySelector('.user-name');

usrName.innerHTML = os.userInfo().username;



// Total Memory (GB)
let totalMemory = os.totalmem() / Math.pow(10,9);
const totalRam = document.querySelector('.total-ram');
totalRam.innerHTML = "Total: " + Math.round(totalMemory) + " GB";

// Free Memory (GB)
setInterval(() => {
    let freeMem = os.freemem() / Math.pow(10,9);
    const freeRam = document.querySelector('.free-ram');
    freeRam.innerHTML = "Free: " + freeMem.toFixed(3) + " GB";
}, 500);



// Cpu info "brand" , "model" , "speed (GHZ)" , "cores"
const cpuInfo = document.querySelector('.cpu-info');
const speedCpu = document.querySelector('.speed');
const core = document.querySelector('.core');

si.cpu(function(data) {
    cpuInfo.innerHTML = data.manufacturer + " " + data.brand;
    speedCpu.innerHTML = data.speed + " Ghz ";
    core.innerHTML = data.cores + " Cores";
})




