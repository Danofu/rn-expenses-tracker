import PropTypes from 'prop-types';
import { View } from 'react-native';

import ExpensesList from 'components/ExpensesOutput/ExpensesList';
import ExpensesSummary from 'components/ExpensesOutput/ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

ExpensesOutput.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({ amount: PropTypes.number })).isRequired,
  expensesPeriod: PropTypes.string,
};

ExpensesOutput.defaultProps = { expensesPeriod: '' };

export default ExpensesOutput;
