const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem.value === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  // Add list item to DOM
  itemList.appendChild(li);

  checkUI();

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure you want to delete this item?')) {
      e.target.parentElement.parentElement.remove();

      checkUI()
    }
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI()
}

function checkUI() {
  const items = document.querySelectorAll('li');
  console.log(items);
  if (items.length === 0) {
    itemFilter.style.display = 'none';
    clearButton.style.display = 'none';
  } else {
    itemFilter.style.display = 'block';
    clearButton.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);

checkUI();
