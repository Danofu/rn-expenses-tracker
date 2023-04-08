import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

ExpensesSummary.propTypes = { ...expensesPropTypes, periodName: PropTypes.string };

ExpensesSummary.defaultProps = { ...expensesDefaultProps, periodName: '' };

export default ExpensesSummary;
