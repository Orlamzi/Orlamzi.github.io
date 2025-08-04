const themeBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = 'Light Mode'
}
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark')
    } else {
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light')
    }
});


const clearAllBtn = document.getElementById('clear');
const allItems = document.querySelector('ul');
clearAllBtn.addEventListener('click', () => {
    allItems.remove();
});

const removeBtn = document.querySelectorAll('#remove-item-btn');
removeBtn.forEach((x) => {
    x.addEventListener('click', () => {
        x.parentElement.remove()
    });
});

function createNewItem(item) {
    const li  = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = document.createElement('button');
    button.appendChild(document.createTextNode('x'));
    li.className = 'item'
    button.className = 'remove-item';
    li.appendChild(button)
    document.querySelector('ul').appendChild(li);

    const removeBtn = document.querySelectorAll('.remove-item');
    removeBtn.forEach((x) => {
    x.addEventListener('click', () => {
        x.parentElement.remove()
    });
});
}
createNewItem('Egg');

const searchBar = document.getElementById('item-input');
const preview = document.getElementById('preview');
const addItemBtn = document.getElementById('add-item')
const items = document.querySelectorAll('#item-list .item');

let matchedItem = null;

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    matchedItem = null;
    preview.textContent = '';

    items.forEach((item) => {
        const itemName = item.textContent.toLowerCase();

        if (item.classList.contains('hidden') && itemName.includes(searchTerm) 
        && searchTerm !== '') {
           matchedItem = item;
           preview.textContent = `item found: ${item.textContent}`;
        }
    });
});


addItemBtn.addEventListener('click', (button) => {
    button.preventDefault();
    if (matchedItem) {
        matchedItem.classList.remove('hidden');
        preview.textContent = '';
        searchBar.value = '';
        matchedItem = null;
    } else {
        preview.textContent = 'item not found...';
        preview.style.color = 'red';
    }
});


function createNewItem2(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const xBtn = document.createElement('button');
    xBtn.appendChild(document.createTextNode('x'));

    li.className = 'item';
    xBtn.className = 'remove-item';
    
    li.appendChild(xBtn);

    document.getElementById('item-list').appendChild(li);

    xBtn.addEventListener('click', () => {
        xBtn.parentElement.remove();
    });
}
createNewItem2('Guava');