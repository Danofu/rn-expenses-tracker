import { useContext } from 'react';

import ExpensesOutput from 'components/ExpensesOutput';
import { ExpensesContext } from 'store/ExpensesProvider';
import moment from 'moment';

function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);

  const today = moment();
  const sevenDaysAgo = today.clone().subtract(7, 'days');
  const recentExpenses = expenses.filter((expense) => moment(expense.date).isBetween(sevenDaysAgo, today, 'day', '[]'));

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;
