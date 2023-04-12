import PropTypes from 'prop-types';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Button from 'components/UI/Button';
import Input from 'components/ManageExpense/Input';
import { getFormattedDate } from 'util/date';

function ExpenseForm({ defaultValues, onCancel, onSubmit, submitButtonLabel }) {
  const [inputs, setInputs] = useState({
    amount: { isValid: true, value: defaultValues ? defaultValues.amount.toString() : '' },
    date: { isValid: true, value: defaultValues ? getFormattedDate(defaultValues.date, 'YYYY-MM-DD') : '' },
    description: { isValid: true, value: defaultValues ? defaultValues.description : '' },
  });

  const inputChangedHandler = (inputId, value) =>
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputId]: { isValid: true, value },
    }));

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !Number.isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevInputs) => ({
        amount: { isValid: amountIsValid, value: prevInputs.amount.value },
        date: { isValid: dateIsValid, value: prevInputs.date.value },
        description: { isValid: descriptionIsValid, value: prevInputs.description.value },
      }));
      return;
    }
    onSubmit(expenseData);
  };

  const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

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
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            placeholder: 'YYYY-MM-DD',
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && <Text>Invalid input values - please check your entered data !</Text>}
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

ExpenseForm.propTypes = {
  defaultValues: PropTypes.shape({
    amount: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
  }),
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  submitButtonLabel: PropTypes.string,
};

ExpenseForm.defaultProps = {
  defaultValues: undefined,
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
