import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from 'constants/styles';
import { childrenDefaultProps, childrenPropTypes } from 'constants/prop-types';

function Button({ children, mode, onPress, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  ...childrenPropTypes,
  mode: PropTypes.oneOf(['button', 'flat']),
  onPress: PropTypes.func,
  style: PropTypes.object,
};

Button.defaultProps = {
  ...childrenDefaultProps,
  mode: 'button',
  onPress: () => {},
  style: {},
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flat: {
    backgroundColor: 'transparent',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
    opacity: 0.75,
  },
});
