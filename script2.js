
let list = document.getElementById('list');
let item = document.getElementById('item');
let add = document.getElementById('add');
let remove = document.getElementById('remove');
let removedItems = document.getElementById('removed-items');
let removedCount = document.getElementById('removed-count');


let removedArray = [];


function updateListColors() {
    let items = list.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (i % 2 === 0) {
            items[i].style.backgroundColor = 'white';
        } else {
            items[i].style.backgroundColor = 'yellow';
        }
    }
}

// Add button click event
add.addEventListener('click', function() {
    let itemText = item.value.trim();
    
    if (itemText === '') {
        alert('Please enter an item');
        return;
    }
    
   
    let words = itemText.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            let li = document.createElement('li');
            li.textContent = words[i];
            list.appendChild(li);
        }
    }
    

    updateListColors();
    

    item.value = '';
});


remove.addEventListener('click', function() {
    let searchText = item.value.trim().toLowerCase();
    
    if (searchText === '') {
        alert('Please enter an item to remove');
        return;
    }
    
    let items = list.getElementsByTagName('li');
    let found = false;
    
    for (let i = 0; i < items.length; i++) {
        let currentItemText = items[i].textContent.toLowerCase();
        
        if (currentItemText === searchText) {
            let removedText = items[i].textContent;
            removedArray.push(removedText);

            let removedSpan = document.createElement('span');
            removedSpan.className = 'removed-item';
            removedSpan.textContent = removedText;
            removedItems.appendChild(removedSpan);
            items[i].remove();
            found = true;
            break;
        }
    }
    
    if (!found) {
        alert('Item "' + item.value.trim() + '" not found in list');
    }
    
   
    if (removedArray.length > 0) {
        let countText = '(' + removedArray.length + ') item';
        if (removedArray.length > 1) {
            countText += 's';
        }
        countText += ' removed';
        removedCount.textContent = countText;
        removedCount.style.color = 'green';
    }
   
    updateListColors();
    
   
    item.value = '';
});