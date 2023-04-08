import PropTypes from 'prop-types';

export const expensesPropTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      date: PropTypes.instanceOf(Date),
      description: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};

export const expensesDefaultProps = {};
