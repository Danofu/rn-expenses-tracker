import { createContext, useMemo, useReducer } from 'react';

import { childrenDefaultProps, childrenPropTypes } from 'constants/prop-types';

const MOCK_EXPENSES = [
  { amount: 59.99, date: new Date('2023-02-12'), description: 'A pair of shoes', id: 'e1' },
  { amount: 89.29, date: new Date('2022-11-05'), description: 'A pair of  trousers', id: 'e2' },
  { amount: 5.99, date: new Date('2023-04-04'), description: 'Some bananas', id: 'e3' },
  { amount: 14.99, date: new Date('2023-04-06'), description: 'A book', id: 'e4' },
  { amount: 18.59, date: new Date('2022-12-11'), description: 'Another book', id: 'e5' },
];

export const ExpensesContext = createContext({
  addExpense: ({ amount: _a, date: _da, description: _de }) => {},
  deleteExpense: (_id) => {},
  expenses: [],
  updateExpense: (_id, { amount: _a, date: _da, description: _de }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    }
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    case 'UPDATE': {
      const expenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const expense = state[expenseIndex];
      const updatedExpense = { ...expense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = updatedExpense;
      return updatedExpenses;
    }
    default:
      return state;
  }
};

function ExpensesProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, MOCK_EXPENSES);

  const addExpense = (expenseData) => dispatch({ payload: expenseData, type: 'ADD' });

  const deleteExpense = (id) => dispatch({ payload: id, type: 'DELETE' });

  const updateExpense = (id, expenseData) => dispatch({ payload: { data: expenseData, id }, type: 'UPDATE' });

  const value = useMemo(() => ({ addExpense, deleteExpense, expenses: expensesState, updateExpense }), [expensesState]);

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

ExpensesProvider.propTypes = { ...childrenPropTypes };

ExpensesProvider.defaultProps = { ...childrenDefaultProps };

export default ExpensesProvider;
