// To Set Local Storage With Name Of (darkMode)
let darkMode = localStorage.getItem('darkMode');


// To Get The Button From The html
const darkModeBtn = document.querySelector('.dark-btn');
const shapeBtn = document.querySelector('.shape-btn');



// Dark mode enable Function
const enableDarkMode = () => {
    // ADD Class Of 'dark-theme' To The Body
    document.body.classList.add('dark-theme');
    shapeBtn.classList.add('move');
    // ADD Dark Mode Enabled To local Storage
    darkMode = localStorage.setItem('darkMode' , 'enabled');
};

// Dark mode disable Function
const disableDarkMode = () => {
    // Remove Class Of 'dark-theme' To The Body
    document.body.classList.remove('dark-theme');
    shapeBtn.classList.remove('move');
    // ADD Dark Mode Disabled To local Storage
    darkMode = localStorage.setItem('darkMode' , 'disabled');
};


// Check if Dark Mode Was enabled Last Time The User Visit The App 
if (darkMode === 'enabled') {
    enableDarkMode();
};


// ADD Click Function To Toggle The Button
darkModeBtn.addEventListener('click' , () => {
    darkMode = localStorage.getItem('darkMode');

    // Check If The Dark Mode Is Not Enabled If Not Enable It Else Disable It
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
