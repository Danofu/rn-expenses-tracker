import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect, useState } from 'react';

import ErrorOverlay from 'components/UI/ErrorOverlay';
import ExpenseForm from 'components/ManageExpense/ExpenseForm';
import IconButton from 'components/UI/IconButton';
import LoadingOverlay from 'components/UI/LoadingOverlay';
import { ExpensesContext } from 'store/ExpensesProvider';
import { GlobalStyles } from 'constants/styles';
import { deleteExpense as httpDeleteExpense, storeExpense, updateExpense as httpUpdateExpense } from 'util/http';
import { screenDefaultProps, screenPropTypes } from 'constants/prop-types';

function ManageExpense({ navigation, route }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(undefined);
  const { addExpense, deleteExpense, expenses, updateExpense } = useContext(ExpensesContext);

  const { expenseId } = route?.params || {};
  const isEditing = !!expenseId;
  const selectedExpense = expenses.find((expense) => expense.id === expenseId);

  const cancelHandler = () => navigation.goBack();

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);

    try {
      await httpDeleteExpense(expenseId);
      deleteExpense(expenseId);
      cancelHandler();
    } catch (_error) {
      setError('Could not delete expense - please try again later !');
      setIsSubmitting(false);
    }
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);

    try {
      if (isEditing) {
        await httpUpdateExpense(expenseId, expenseData);
        updateExpense(expenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        addExpense({ ...expenseData, id });
      }
      cancelHandler();
    } catch (_error) {
      setError('Could not save data - please try again later !');
      setIsSubmitting(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [isEditing]);

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
      />
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
