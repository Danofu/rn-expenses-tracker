import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-6f73f-default-rtdb.europe-west1.firebasedatabase.app';

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);
  const expenses = [];

  Object.keys(response.data).forEach((key) =>
    expenses.push({
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
      id: key,
    })
  );

  return expenses;
};

export const updateExpense = (id, expenseData) => axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);

export const deleteExpense = (id) => axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
