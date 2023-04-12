import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';

import ExpenseForm from 'components/ManageExpense/ExpenseForm';
import IconButton from 'components/UI/IconButton';
import { ExpensesContext } from 'store/ExpensesProvider';
import { GlobalStyles } from 'constants/styles';
import { screenDefaultProps, screenPropTypes } from 'constants/prop-types';

function ManageExpense({ navigation, route }) {
  const { addExpense, deleteExpense, updateExpense } = useContext(ExpensesContext);

  const { expenseId } = route?.params || {};
  const isEditing = !!expenseId;

  const cancelHandler = () => navigation.goBack();

  const deleteExpenseHandler = () => {
    deleteExpense(expenseId);
    cancelHandler();
  };

  const confirmHandler = () => {
    isEditing
      ? updateExpense(expenseId, { amount: 99.99, date: new Date('2023-04-09'), description: 'Test !' })
      : addExpense({ amount: 29.99, date: new Date('2023-04-11'), description: 'Test' });
    cancelHandler();
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton color={GlobalStyles.colors.error500} icon="trash" onPress={deleteExpenseHandler} size={36} />
        </View>
      )}
    </View>
  );
}

ManageExpense.propTypes = { ...screenPropTypes };

ManageExpense.defaultProps = { ...screenDefaultProps };

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary800,
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    alignItems: 'center',
    borderTopColor: GlobalStyles.colors.primary200,
    borderTopWidth: 2,
    marginTop: 16,
    padding: 8,
  },
});
