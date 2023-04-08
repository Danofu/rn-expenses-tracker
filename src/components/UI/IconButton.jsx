import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

function IconButton({ color, icon, onPress, size }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons color={color} name={icon} size={size} />
      </View>
    </Pressable>
  );
}

IconButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.number,
};

IconButton.defaultProps = {
  color: '',
  onPress: () => {},
  size: NaN,
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
