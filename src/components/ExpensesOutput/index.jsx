import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import ExpensesList from 'components/ExpensesOutput/ExpensesList';
import ExpensesSummary from 'components/ExpensesOutput/ExpensesSummary';
import { GlobalStyles } from 'constants/styles';
import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

ExpensesOutput.propTypes = { ...expensesPropTypes, expensesPeriod: PropTypes.string };

ExpensesOutput.defaultProps = { ...expensesDefaultProps, expensesPeriod: '' };

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
