const { shell } = require("electron");
// For Changing The Top Bar Title Depend On HTML Title

const title = document.querySelector(".title");
const appTitle = document.querySelector(".app-title");

appTitle.innerHTML = title.innerHTML;

// For Navigation Between The Pages

const tabButtons = document.querySelectorAll(".menu a");
const tabPanels = document.querySelectorAll(".main-container  .contents");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.color = "";
    node.style.backgroundColor = "";
  });
  tabButtons[panelIndex].style.color = "#ffffff";
  tabButtons[panelIndex].style.backgroundColor = "#d35400";
  tabPanels.forEach(function (node) {
    node.style.opacity = "0";
    node.style.visibility = "hidden";
    node.style.top = "-100%";
  });
  tabPanels[panelIndex].style.opacity = "1";
  tabPanels[panelIndex].style.visibility = "visible";
  tabPanels[panelIndex].style.top = "20rem";
}
showPanel(0, "#ffffff");

// To Get Current Time and Date
setInterval(() => {
  const date = document.querySelector(".date");
  let date_ob = new Date();
  date.innerHTML = date_ob;
}, 500);

const aboutShow = document.querySelector(".show-about");
const aboutClose = document.querySelector(".close-about");
const about = document.querySelector(".about-page");

aboutShow.addEventListener("click", () => {
  about.classList.add("show");
});
aboutClose.addEventListener("click", () => {
  about.classList.remove("show");
});

const socialFb = document.querySelector(".social-fb");
const socialIg = document.querySelector(".social-ig");
const socialYt = document.querySelector(".social-yt");
const socialCp = document.querySelector(".social-cp");
const socialWs = document.querySelector(".social-ws");

socialFb.addEventListener("click", () => {
  shell.openExternal("https://www.facebook.com/abdelmalek.tammal/");
});
socialIg.addEventListener("click", () => {
  shell.openExternal("https://www.instagram.com/malick_tammal/");
});
socialYt.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/channel/UCxP3N9RP-lCJeTi04hazsZw"
  );
});
socialCp.addEventListener("click", () => {
  shell.openExternal("https://codepen.io/ADAMSKIDZ");
});
socialWs.addEventListener("click", () => {
  shell.openExternal("https://malicktammal.netlify.app/");
});
