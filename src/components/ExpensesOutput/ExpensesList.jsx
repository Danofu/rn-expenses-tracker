import { FlatList } from 'react-native';

import ExpenseItem from 'components/ExpensesOutput/ExpenseItem';
import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';
import { flatListRenderItemDefaultProps, flatListRenderItemPropTypes } from 'constants/prop-types';

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={Item} />;
}

ExpensesList.propTypes = { ...expensesPropTypes };

ExpensesList.defaultProps = { ...expensesDefaultProps };

export default ExpensesList;

function Item({ item }) {
  return <ExpenseItem {...item} />;
}

Item.propTypes = { ...flatListRenderItemPropTypes };

Item.defaultProps = { ...flatListRenderItemDefaultProps };
