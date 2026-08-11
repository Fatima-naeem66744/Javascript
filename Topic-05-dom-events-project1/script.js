// Select elements
        const expenseForm = document.querySelector('#expenseForm');
        const expenseList = document.querySelector('#expenseList');
        const totalElement = document.querySelector('#total');
        const clearExpensesButton = document.querySelector('#clearExpenses');

        // Array to store expenses
        let expenses = [];


        // -------------------------------
        // ADD EXPENSE
        // -------------------------------

        expenseForm.addEventListener('submit', function (e) {

            // Prevent page reload
            e.preventDefault();

            // Get input values
            const amount = parseFloat(
                document.querySelector('#amount').value
            );

            const description = document
                .querySelector('#description')
                .value
                .trim();

            const category = document
                .querySelector('#category')
                .value;


            // Basic validation
            if (
                isNaN(amount) ||
                amount <= 0 ||
                !description ||
                !category
            ) {
                alert(
                    'Please enter a valid amount, description, and category.'
                );

                return;
            }


            // Create expense object
            const expense = {
                id: Date.now(),
                amount: amount,
                description: description,
                category: category
            };


            // Add expense to array
            expenses.push(expense);


            // Create DOM element
            const expenseItem = document.createElement('div');

            expenseItem.classList.add('expense-item');

            // Store expense ID in DOM
            expenseItem.dataset.id = expense.id;


            // Add expense information
            expenseItem.innerHTML = `
                <h3>${expense.description}</h3>

                <p>Category: ${expense.category}</p>

                <p>Amount: $${expense.amount.toFixed(2)}</p>

                <button
                    type="button"
                    class="delete-btn"
                >
                    Delete
                </button>
            `;


            // Add expense to page
            expenseList.appendChild(expenseItem);


            // Update total
            updateTotal();


            // Clear form
            expenseForm.reset();

        });


        // -------------------------------
        // DELETE EXPENSE
        // -------------------------------

        expenseList.addEventListener('click', function (e) {

            // Check if Delete button was clicked
            if (e.target.classList.contains('delete-btn')) {

                // Find the expense DOM element
                const expenseItem = e.target.closest('.expense-item');

                // Get its ID
                const id = Number(expenseItem.dataset.id);


                // Remove expense from array
                expenses = expenses.filter(function (expense) {
                    return expense.id !== id;
                });


                // Remove expense from DOM
                expenseItem.remove();


                // Update total
                updateTotal();

            }

        });


        // -------------------------------
        // UPDATE TOTAL
        // -------------------------------

        function updateTotal() {

            let total = 0;

            expenses.forEach(function (expense) {
                total += expense.amount;
            });

            totalElement.textContent = total.toFixed(2);

        }


        // -------------------------------
        // CLEAR ALL EXPENSES
        // -------------------------------

        clearExpensesButton.addEventListener('click', function () {

            // Clear JavaScript array
            expenses = [];

            // Clear DOM
            expenseList.innerHTML = '';

            // Reset total
            totalElement.textContent = '0.00';

        });