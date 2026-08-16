# Expense Tracker

A beginner-friendly expense tracker built with plain HTML, CSS, and Vanilla JavaScript (ES Modules). Add, edit, delete, and filter expenses — everything persists in your browser via localStorage.

## Features

- Add expenses (description, amount, category, date)
- Edit and delete expenses
- Validation: rejects empty/missing descriptions, empty amounts, zero and negative amounts
- Filter by category and date range (start/end date)
- Live totals: overall total and totals by category
- Empty states when the list has nothing to show
- All data persists across page refreshes



## ES Module structure

```
expense-tracker/
│
├── index.html
├── style.css
├── README.md
│
└── js/
    ├── storage.js   # read/write localStorage only
    ├── expenses.js  # data logic: add/edit/delete/filter/totals/validation
    ├── ui.js        # DOM only: render list, totals, messages
    └── main.js      # coordinator: wires storage + logic + UI together
```

Responsibilities are split by purpose:
- `storage.js` — the only file that touches localStorage (JSON stringify/parse).
- `expenses.js` — pure data functions; never touches the DOM or storage.
- `ui.js` — paints the screen and reads inputs; imports nothing from the other modules.
- `main.js` — imports from all three; handles user actions, saves, and re-renders.

