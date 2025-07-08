/* const themeBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//     body.classList.add('dark-mode');
//     themeBtn.textContent = 'Light Mode';
// };
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
        // localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = 'Dark Mode';
        // localStorage.setItem('theme', 'light');
    }
}); */


const themeBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
});


const removeBtn = document.querySelector('.remove-item');
function onClear() {
    const itemUl = document.querySelectorAll('ul')
    const itemList = document.querySelectorAll('li');
    itemUl.forEach((itemzz) => itemzz.remove());
    console.log('x button is clicked');
    
}
removeBtn.addEventListener('click', onClear);
