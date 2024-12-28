let count = 0;

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function clearCount() {
    count = 0;
    updateDisplay();
    document.getElementById('clear').style.display = 'none';
}

function updateDisplay() {
    document.getElementById('count').textContent = count;
    document.getElementById('error').style.display = (count === 0) ? 'block' : 'none';
    document.getElementById('clear').style.display = (count > 1) ? 'block' : 'none';
}
