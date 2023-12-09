let balance = 0;

function updateBalance() {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction() {
    const amountInput = document.getElementById('amount');
    const typeInput = document.getElementById('type');
    const transactionList = document.getElementById('transactionList');

    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid positive amount.');
        return;
    }

    const transactionItem = document.createElement('li');
    const transactionTypeClass = type === 'income' ? 'income' : 'expense';
    transactionItem.className = `transaction ${transactionTypeClass}`;
    transactionItem.innerHTML = `${type.charAt(0).toUpperCase() + type.slice(1)}: $${amount.toFixed(2)}`;
    transactionList.appendChild(transactionItem);

    if (type === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }

    updateBalance();
    amountInput.value = '';
}

// Initial balance display
updateBalance();
