import { useContext } from 'react';

import ExpensesOutput from 'components/ExpensesOutput';
import { ExpensesContext } from 'store/ExpensesProvider';

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" fallbackText="No expenses found 😼" />;
}

export default AllExpenses;
