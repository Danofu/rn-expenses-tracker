import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import ExpensesList from 'components/ExpensesOutput/ExpensesList';
import ExpensesSummary from 'components/ExpensesOutput/ExpensesSummary';
import { GlobalStyles } from 'constants/styles';
import { expensesDefaultProps, expensesPropTypes } from 'components/ExpensesOutput/prop-types';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

ExpensesOutput.propTypes = { ...expensesPropTypes, expensesPeriod: PropTypes.string, fallbackText: PropTypes.string };

ExpensesOutput.defaultProps = { ...expensesDefaultProps, expensesPeriod: '', fallbackText: '' };

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginTop: 32,
    textAlign: 'center',
  },
});
