
// All available partition disks
function diskA() {
    diskspace.check("A", function (err, result) {
      totalDisk = Math.round(result.total) / Math.pow(10, 9);
      usedDisk = Math.round(result.used) / Math.pow(10, 9);
      freeDisk = Math.round(result.free) / Math.pow(10, 9);
      totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
      usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
      freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
      statDisk.innerHTML = result.status;
      diskMount.innerHTML = "A:";
    });
  }
  function diskB() {
    diskspace.check(
      "B",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "B:";
      },
      1000
    );
  }
  function diskC() {
    diskspace.check(
      "C",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "C:";
      },
      1000
    );
  }
  function diskD() {
    diskspace.check(
      "D",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "D:";
      },
      1000
    );
  }
  function diskE() {
    diskspace.check(
      "E",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "E:";
      },
      1000
    );
  }
  function diskF() {
    diskspace.check(
      "F",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "F:";
      },
      1000
    );
  }
  function diskG() {
    diskspace.check(
      "G",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "G:";
      },
      1000
    );
    return 0;
  }
  function diskH() {
    diskspace.check(
      "H",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "H:";
      },
      1000
    );
    return 0;
  }
  function diskI() {
    diskspace.check(
      "I",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "I:";
      },
      1000
    );
  }
  function diskJ() {
    diskspace.check(
      "J",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "J:";
      },
      1000
    );
  }
  function diskK() {
    diskspace.check(
      "K",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "K:";
      },
      1000
    );
  }
  function diskL() {
    diskspace.check(
      "L",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "L:";
      },
      1000
    );
  }
  function diskKM() {
    diskspace.check(
      "M",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "M:";
      },
      1000
    );
  }
  function diskN() {
    diskspace.check(
      "N",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "N:";
      },
      1000
    );
  }
  function diskO() {
    diskspace.check(
      "O",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "O:";
      },
      1000
    );
  }
  function diskP() {
    diskspace.check(
      "P",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "P:";
      },
      1000
    );
  }
  function diskQ() {
    diskspace.check(
      "Q",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "Q:";
      },
      1000
    );
  }
  function diskR() {
    diskspace.check(
      "R",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "R:";
      },
      1000
    );
  }
  function diskS() {
    diskspace.check(
      "S",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "S:";
      },
      1000
    );
  }
  function diskT() {
    diskspace.check(
      "T",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "T:";
      },
      1000
    );
  }
  function diskU() {
    diskspace.check(
      "U",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "U:";
      },
      1000
    );
  }
  function diskV() {
    diskspace.check(
      "V",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "V:";
      },
      1000
    );
  }
  function diskW() {
    diskspace.check(
      "W",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "W:";
      },
      1000
    );
  }
  function diskX() {
    diskspace.check(
      "X",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "X:";
      },
      1000
    );
  }
  function diskY() {
    diskspace.check(
      "Y",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "Y:";
      },
      1000
    );
  }
  function diskZ() {
    diskspace.check(
      "Z",
      function (err, result) {
        totalDisk = Math.round(result.total) / Math.pow(10, 9);
        usedDisk = Math.round(result.used) / Math.pow(10, 9);
        freeDisk = Math.round(result.free) / Math.pow(10, 9);
        totDisk.innerHTML = "Total: " + totalDisk.toFixed(2) + "GB";
        usdDisk.innerHTML = "Used: " + usedDisk.toFixed(2) + "GB";
        freDisk.innerHTML = "Free: " + freeDisk.toFixed(2) + "GB";
        statDisk.innerHTML = result.status;
        diskMount.innerHTML = "Z:";
      },
      1000
    );
  }
  