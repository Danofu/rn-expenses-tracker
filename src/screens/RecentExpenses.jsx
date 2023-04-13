import moment from 'moment';
import { useContext, useEffect, useState } from 'react';

import ErrorOverlay from 'components/UI/ErrorOverlay';
import ExpensesOutput from 'components/ExpensesOutput';
import LoadingOverlay from 'components/UI/LoadingOverlay';
import { ExpensesContext } from 'store/ExpensesProvider';
import { fetchExpenses } from 'util/http';

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(undefined);
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const today = moment();
  const sevenDaysAgo = today.clone().subtract(7, 'days');
  const recentExpenses = expenses.filter((expense) => moment(expense.date).isBetween(sevenDaysAgo, today, 'day', '[]'));

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const fetchedExpenses = await fetchExpenses();
        setExpenses(fetchedExpenses);
      } catch (_error) {
        setError('Could not fetch expenses !');
      }
      setIsFetching(false);
    };
    getExpenses().then();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the last 7 days 😼"
    />
  );
}

export default RecentExpenses;
