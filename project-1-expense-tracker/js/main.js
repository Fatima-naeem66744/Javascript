import { loadExpenses, saveExpenses } from './storage.js';
import {
    addExpense,
    updateExpense,
    deleteExpense,
    filterExpenses,
    validateExpense,
    calculateTotal,
    calculateCategoryTotals,
} from './expenses.js';
import * as ui from './ui.js';

let allExpenses = loadExpenses();
let editingId = null;

function getFilteredExpenses() {
    return filterExpenses(allExpenses, ui.getFilterValues());
}

function render() {
    const filtered = getFilteredExpenses();
    ui.renderExpenses(filtered, { onEdit, onDelete });
    ui.updateTotal(calculateTotal(filtered));
    ui.updateCategoryTotals(calculateCategoryTotals(filtered));
}

function saveAndRender() {
    saveExpenses(allExpenses);
    render();
}

function onEdit(id) {
    const expense = allExpenses.find((item) => item.id === id);
    if (!expense) {
        return;
    }
    editingId = id;
    ui.fillForm(expense);
}

function onDelete(id) {
    allExpenses = deleteExpense(allExpenses, id);
    saveAndRender();
}

document.getElementById('expenseForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = ui.getFormData();

    const errorMessage = validateExpense(formData);
    if (errorMessage) {
        ui.showMessage(errorMessage);
        return;
    }

    if (editingId) {
        allExpenses = updateExpense(allExpenses, editingId, formData);
        editingId = null;
    } else {
        allExpenses = addExpense(allExpenses, formData);
    }

    saveAndRender();
    ui.clearForm();
});

document.getElementById('cancelEdit').addEventListener('click', () => {
    editingId = null;
    ui.clearForm();
});

document.getElementById('clearExpenses').addEventListener('click', () => {
    if (confirm('Delete ALL expenses? This cannot be undone.')) {
        allExpenses = [];
        saveAndRender();
    }
});

document.getElementById('categoryFilter').addEventListener('change', render);
document.getElementById('startDate').addEventListener('change', render);
document.getElementById('endDate').addEventListener('change', render);

document.getElementById('clearFilters').addEventListener('click', () => {
    ui.resetFilterInputs();
    render();
});

render();
