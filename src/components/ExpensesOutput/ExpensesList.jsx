import { FlatList, Text } from 'react-native';

import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function renderExpenseItem({ item }) {
  return <Text>{item.description}</Text>;
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderExpenseItem} />;
}

ExpensesList.propTypes = { ...expensesPropTypes };

ExpensesList.defaultProps = { ...expensesDefaultProps };

export default ExpensesList;
