import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetxhedExpenses, set__fetxhedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      // set__fetxhedExpenses(expenses);
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallbackText='No Expenses registered for the last 7 days'
    />
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({});
