import { FlatList } from 'react-native';

import ExpenseItem from 'components/ExpensesOutput/ExpenseItem';
import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function renderExpenseItem({ item }) {
  return <ExpenseItem {...item} />;
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpenseItem} />;
}

ExpensesList.propTypes = { ...expensesPropTypes };

ExpensesList.defaultProps = { ...expensesDefaultProps };

export default ExpensesList;
