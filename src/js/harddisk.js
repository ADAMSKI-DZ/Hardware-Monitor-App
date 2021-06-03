// Disk info "total disk" , "free disk" , "used disk" all with GB
const totDisk = document.querySelector(".total-disk");
const usdDisk = document.querySelector(".used-disk");
const freDisk = document.querySelector(".free-disk");
const statDisk = document.querySelector(".disk-status");
const diskInsert = document.querySelector(".disk-insert");
const insertBtn = document.querySelector(".insert-btn");
const diskMount = document.querySelector(".disk-mount");
const inputContainer = document.querySelector(".input-container");
const changeBtn = document.querySelector(".change-btn");
const diskContainer = document.querySelector(".disk-container");
const invalid = document.querySelector(".invalid");

insertBtn.addEventListener("click", () => {
  if (diskInsert.value === "A") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskA();
  }
  if (diskInsert.value === "B") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskB();
  }
  if (diskInsert.value === "C") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskC();
  }
  if (diskInsert.value === "D") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskD();
  }
  if (diskInsert.value === "E") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskE();
  }
  if (diskInsert.value === "F") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskF();
  }
  if (diskInsert.value === "G") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskG();
  }
  if (diskInsert.value === "H") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskH();
  }
  if (diskInsert.value === "I") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskI();
  }
  if (diskInsert.value === "J") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskJ();
  }
  if (diskInsert.value === "K") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskK();
  }
  if (diskInsert.value === "L") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskL();
  }
  if (diskInsert.value === "M") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskM();
  }
  if (diskInsert.value === "N") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskN();
  }
  if (diskInsert.value === "O") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskO();
  }
  if (diskInsert.value === "P") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskP();
  }
  if (diskInsert.value === "Q") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskQ();
  }
  if (diskInsert.value === "R") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskR();
  }
  if (diskInsert.value === "S") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskS();
  }
  if (diskInsert.value === "T") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskT();
  }
  if (diskInsert.value === "U") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskU();
  }
  if (diskInsert.value === "V") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskV();
  }
  if (diskInsert.value === "W") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskW();
  }
  if (diskInsert.value === "X") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskX();
  }
  if (diskInsert.value === "Y") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskY();
  }
  if (diskInsert.value === "Z") {
    inputContainer.classList.add("hide");
    diskContainer.classList.add("show");
    changeBtn.classList.add("show");
    invalid.innerHTML = "";
    return diskZ();
  } else {
    inputContainer.classList.remove("hide");
    diskContainer.classList.remove("show");
    changeBtn.classList.remove("show");
    invalid.innerHTML = "Invalid Value";
  }
});
changeBtn.addEventListener("click", () => {
  inputContainer.classList.remove("hide");
  changeBtn.classList.remove("show");
  diskContainer.classList.remove("show");
});
