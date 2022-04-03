import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetxhedExpenses, set__fetxhedExpenses] = useState([]);
  const [isFetching, set__isFetching] = useState(true);
  const [error, set__error] = useState();

  useEffect(() => {
    async function getExpenses() {
      set__isFetching(true);

      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        set__error('Could not fetch expenses');
      }

      set__isFetching(false);
      // set__fetxhedExpenses(expenses);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    set__error(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
