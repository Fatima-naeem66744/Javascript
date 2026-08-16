const STORAGE_KEY = 'expense-tracker.expenses';

export function loadExpenses() {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === null) {
        return [];
    }

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

export function saveExpenses(expenses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}
