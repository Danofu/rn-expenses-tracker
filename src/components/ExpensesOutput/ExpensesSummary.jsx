import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from 'constants/styles';
import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

ExpensesSummary.propTypes = { ...expensesPropTypes, periodName: PropTypes.string };

ExpensesSummary.defaultProps = { ...expensesDefaultProps, periodName: '' };

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  sum: {
    color: GlobalStyles.colors.primary500,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
