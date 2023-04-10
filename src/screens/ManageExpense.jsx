import { StyleSheet, View } from 'react-native';
import { useLayoutEffect } from 'react';

import Button from 'components/UI/Button';
import IconButton from 'components/UI/IconButton';
import { GlobalStyles } from 'constants/styles';
import { screenDefaultProps, screenPropTypes } from 'constants/prop-types';

function ManageExpense({ navigation, route }) {
  const { expenseId } = route?.params || {};
  const isEditing = !!expenseId;

  const deleteExpenseHandler = () => {};

  const cancelHandler = () => {};

  const confirmHandler = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [isEditing, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  button: {
    marginHorizontal: 8,
    minWidth: 120,
  },
  buttons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
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
