const form = document.getElementById('expenseForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const dateInput = document.getElementById('date');
const messageEl = document.getElementById('formMessage');
const cancelEditBtn = document.getElementById('cancelEdit');
const submitBtn = form.querySelector('button[type="submit"]');

function formatMoney(amount) {
    return '$' + Number(amount).toFixed(2);
}

export function getFormData() {
    return {
        description: descriptionInput.value,
        amount: amountInput.value,
        category: categorySelect.value,
        date: dateInput.value,
    };
}

export function fillForm(expense) {
    descriptionInput.value = expense.description;
    amountInput.value = expense.amount;
    categorySelect.value = expense.category;
    dateInput.value = expense.date;
    submitBtn.textContent = 'Update Expense';
    cancelEditBtn.hidden = false;
}

export function clearForm() {
    form.reset();
    submitBtn.textContent = 'Add Expense';
    cancelEditBtn.hidden = true;
    hideMessage();
}

export function showMessage(message) {
    messageEl.textContent = message;
    messageEl.hidden = false;
}

export function hideMessage() {
    messageEl.textContent = '';
    messageEl.hidden = true;
}

export function getFilterValues() {
    return {
        category: document.getElementById('categoryFilter').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
    };
}

export function resetFilterInputs() {
    document.getElementById('categoryFilter').value = 'All';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
}

export function renderExpenses(expenses, { onEdit, onDelete }) {
    const listEl = document.getElementById('expenseList');
    listEl.replaceChildren();

    if (expenses.length === 0) {
        const emptyEl = document.createElement('p');
        emptyEl.className = 'empty-message';
        emptyEl.textContent = 'No expenses to show. Add your first one!';
        listEl.appendChild(emptyEl);
        return;
    }

    for (const expense of expenses) {
        const itemEl = document.createElement('div');
        itemEl.className = 'expense-item';

        const infoEl = document.createElement('div');
        const titleEl = document.createElement('h3');
        titleEl.textContent = expense.description;
        const categoryEl = document.createElement('p');
        categoryEl.textContent = expense.category;
        const dateEl = document.createElement('p');
        dateEl.textContent = expense.date;
        infoEl.append(titleEl, categoryEl, dateEl);

        const rightEl = document.createElement('div');
        rightEl.className = 'expense-right';
        const amountEl = document.createElement('strong');
        amountEl.textContent = formatMoney(expense.amount);
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        rightEl.append(amountEl, editBtn, deleteBtn);

        editBtn.addEventListener('click', () => onEdit(expense.id));
        deleteBtn.addEventListener('click', () => onDelete(expense.id));

        itemEl.append(infoEl, rightEl);
        listEl.appendChild(itemEl);
    }
}

export function updateTotal(total) {
    document.getElementById('total').textContent = formatMoney(total);
}

export function updateCategoryTotals(categoryTotals) {
    const container = document.getElementById('categoryTotals');
    container.replaceChildren();

    const entries = Object.entries(categoryTotals);
    if (entries.length === 0) {
        container.textContent = 'No expenses yet.';
        return;
    }
    for (const [category, amount] of entries) {
        const spanEl = document.createElement('span');
        spanEl.textContent = category + ': ' + formatMoney(amount);
        container.appendChild(spanEl);
    }
}
