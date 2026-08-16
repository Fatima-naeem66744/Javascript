export function createExpenseId() {
    return crypto.randomUUID();
}

export function validateExpense({ description, amount, category, date }) {
    if (!description.trim()) {
        return 'Description cannot be empty.';
    }
    if (amount === '' || amount === null || amount === undefined) {
        return 'Amount cannot be empty.';
    }

    const numAmount = Number(amount);
    if (Number.isNaN(numAmount)) {
        return 'Amount must be a number.';
    }
    if (numAmount <= 0) {
        return 'Amount must be greater than zero.';
    }
    if (!category) {
        return 'Please select a category.';
    }
    if (!date) {
        return 'Please choose a date.';
    }
    return null;
}

function buildExpense(expenseData, id) {
    return {
        id: id || createExpenseId(),
        description: expenseData.description.trim(),
        amount: Number(expenseData.amount),
        category: expenseData.category,
        date: expenseData.date,
    };
}

export function addExpense(expenses, expenseData) {
    return [...expenses, buildExpense(expenseData)];
}

export function updateExpense(expenses, id, expenseData) {
    const updatedExpense = buildExpense(expenseData, id);
    return expenses.map((expense) =>
        expense.id === id ? updatedExpense : expense
    );
}

export function deleteExpense(expenses, id) {
    return expenses.filter((expense) => expense.id !== id);
}

export function filterExpenses(expenses, { category, startDate, endDate }) {
    return expenses.filter((expense) => {
        if (category && category !== 'All' && expense.category !== category) {
            return false;
        }
        if (startDate && expense.date < startDate) {
            return false;
        }
        if (endDate && expense.date > endDate) {
            return false;
        }
        return true;
    });
}

export function calculateTotal(expenses) {
    const rawTotal = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
    return Math.round(rawTotal * 100) / 100;
}

export function calculateCategoryTotals(expenses) {
    const totals = {};
    for (const expense of expenses) {
        if (totals[expense.category]) {
            totals[expense.category] += Number(expense.amount);
        } else {
            totals[expense.category] = Number(expense.amount);
        }
    }
    return totals;
}
