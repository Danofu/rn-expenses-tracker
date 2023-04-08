import PropTypes from 'prop-types';
import { View } from 'react-native';

import ExpensesList from 'components/ExpensesOutput/ExpensesList';
import ExpensesSummary from 'components/ExpensesOutput/ExpensesSummary';

const MOCK_EXPENSES = [
  { amount: 59.99, date: new Date('2023-02-12'), description: 'A pair of shoes', id: 'e1' },
  { amount: 89.29, date: new Date('2022-11-05'), description: 'A pair of  trousers', id: 'e2' },
  { amount: 5.99, date: new Date('2023-04-04'), description: 'Some bananas', id: 'e3' },
  { amount: 14.99, date: new Date('2023-04-06'), description: 'A book', id: 'e4' },
  { amount: 18.59, date: new Date('2022-12-11'), description: 'Another book', id: 'e5' },
];

function ExpensesOutput({ expenses = MOCK_EXPENSES, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}

ExpensesOutput.propTypes = { ...expensesPropTypes, expensesPeriod: PropTypes.string };

ExpensesOutput.defaultProps = { ...expensesDefaultProps, expensesPeriod: '' };

export default ExpensesOutput;
