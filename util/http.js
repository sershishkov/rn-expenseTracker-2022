import axios from 'axios';

export function storeExpense(expensesData) {
  axios.post(
    'https://shw-rn-expenses-default-rtdb.firebaseio.com/expenses.json',
    expensesData
  );
}
