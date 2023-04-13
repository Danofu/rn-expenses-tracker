import { createContext, useMemo, useReducer } from 'react';

import { childrenDefaultProps, childrenPropTypes } from 'constants/prop-types';

export const ExpensesContext = createContext({
  addExpense: ({ amount: _a, date: _da, description: _de, id: _id }) => {},
  deleteExpense: (_id) => {},
  expenses: [],
  setExpenses: (_expenses) => {},
  updateExpense: (_id, { amount: _a, date: _da, description: _de }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return [action.payload, ...state];
    }
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    case 'SET':
      return action.payload.reverse();
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
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => dispatch({ payload: expenseData, type: 'ADD' });

  const deleteExpense = (id) => dispatch({ payload: id, type: 'DELETE' });

  const setExpenses = (expenses) => dispatch({ payload: expenses, type: 'SET' });

  const updateExpense = (id, expenseData) => dispatch({ payload: { data: expenseData, id }, type: 'UPDATE' });

  const value = useMemo(
    () => ({
      addExpense,
      deleteExpense,
      expenses: expensesState,
      setExpenses,
      updateExpense,
    }),
    [expensesState]
  );

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

ExpensesProvider.propTypes = { ...childrenPropTypes };

ExpensesProvider.defaultProps = { ...childrenDefaultProps };

export default ExpensesProvider;
