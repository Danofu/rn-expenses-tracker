import { View } from 'react-native';

import Input from 'components/ManageExpense/Input';

function ExpenseForm() {
  const amountChangedHandler = () => {};

  const dateChangedHandler = () => {};

  return (
    <View>
      <Input label="Amount" textInputConfig={{ keyboardType: 'decimal-pad', onChangeText: amountChangedHandler }} />
      <Input
        label="Date"
        textInputConfig={{ maxLength: 10, onChangeText: dateChangedHandler, placeholder: 'DD/MM/YYYY' }}
      />
      <Input label="Description" textInputConfig={{}} />
    </View>
  );
}

export default ExpenseForm;
