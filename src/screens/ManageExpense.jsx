import { Text } from 'react-native';
import { useLayoutEffect } from 'react';

import { screenDefaultProps, screenPropTypes } from 'constants/prop-types';

function ManageExpense({ navigation, route }) {
  const { expenseId } = route?.params || {};
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({ title: isEditing ? 'Edit Expense' : 'Add Expense' });
  }, [isEditing, navigation]);

  return <Text>Manage Expense Screen</Text>;
}

ManageExpense.propTypes = { ...screenPropTypes };

ManageExpense.defaultProps = { ...screenDefaultProps };

export default ManageExpense;
