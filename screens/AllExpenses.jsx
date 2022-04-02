import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod='Total'
      fallbackText='No registered expenses found!'
    />
  );
}

export default AllExpenses;

const styles = StyleSheet.create({});
