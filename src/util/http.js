import axios from 'axios';

export const storeExpense = async (expenseData) =>
  axios.post(
    'https://react-native-course-6f73f-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData
  );
