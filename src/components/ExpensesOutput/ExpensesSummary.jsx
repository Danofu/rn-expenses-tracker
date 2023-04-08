import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

ExpensesSummary.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({ amount: PropTypes.number })).isRequired,
  periodName: PropTypes.string,
};

ExpensesSummary.defaultProps = { periodName: '' };

export default ExpensesSummary;
