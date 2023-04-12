import { Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

Input.propTypes = { label: PropTypes.string, textInputConfig: PropTypes.object };

Input.defaultProps = { label: '', textInputConfig: {} };

export default Input;
