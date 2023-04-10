import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from 'constants/styles';
import { getFormattedDate } from 'util/date';

function ExpenseItem({ amount, date, description, id }) {
  const { navigate } = useNavigation();

  const expensePressHandler = () => navigate('ManageExpense', { expenseId: id });

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

ExpenseItem.propTypes = {
  amount: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  id: PropTypes.string,
};

ExpenseItem.defaultProps = { amount: NaN, date: undefined, description: '', id: '' };

export default ExpenseItem;

const styles = StyleSheet.create({
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
  amountContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    minWidth: 80,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  expenseItem: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 12,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
});
