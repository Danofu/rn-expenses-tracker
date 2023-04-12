import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Input from 'components/ManageExpense/Input';

function ExpenseForm() {
  const [inputValues, setInputValues] = useState({ amount: '', date: '', description: '' });

  const inputChangedHandler = (inputId, value) =>
    setInputValues((prevInputValues) => ({ ...prevInputValues, [inputId]: value }));

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            placeholder: 'DD/MM/YYYY',
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
    textAlign: 'center',
  },
});
