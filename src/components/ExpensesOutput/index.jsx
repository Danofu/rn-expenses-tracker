import PropTypes from 'prop-types';
import { View } from 'react-native';

import ExpensesList from 'components/ExpensesOutput/ExpensesList';
import ExpensesSummary from 'components/ExpensesOutput/ExpensesSummary';

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

ExpensesOutput.propTypes = { expenses: PropTypes.array.isRequired };

ExpensesOutput.defaultProps = {};

export default ExpensesOutput;
