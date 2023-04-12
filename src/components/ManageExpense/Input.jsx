import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'constants/styles';

function Input({ invalid, label, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

Input.propTypes = {
  invalid: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
  textInputConfig: PropTypes.object,
};

Input.defaultProps = { invalid: false, label: '', style: {}, textInputConfig: {} };

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    color: GlobalStyles.colors.primary700,
    fontSize: 18,
    padding: 6,
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
    marginBottom: 4,
  },
});
