import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Button from 'components/UI/Button';
import Input from 'components/ManageExpense/Input';

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
  const [inputValues, setInputValues] = useState({ amount: '', date: '', description: '' });

  const inputChangedHandler = (inputId, value) =>
    setInputValues((prevInputValues) => ({ ...prevInputValues, [inputId]: value }));

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    onSubmit(expenseData);
  };

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
            placeholder: 'YYYY-MM-DD',
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
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

ExpenseForm.propTypes = { onCancel: PropTypes.func, onSubmit: PropTypes.func, submitButtonLabel: PropTypes.string };

ExpenseForm.defaultProps = {
  onCancel: () => {},
  onSubmit: () => {},
  submitButtonLabel: '',
};

export default ExpenseForm;

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
