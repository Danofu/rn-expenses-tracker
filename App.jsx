import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpenses from 'screens/AllExpenses';
import ExpensesProvider from 'store/ExpensesProvider';
import IconButton from 'components/UI/IconButton';
import ManageExpense from 'screens/ManageExpense';
import RecentExpenses from 'screens/RecentExpenses';
import { GlobalStyles } from 'constants/styles';
import {
  bottomTabsHeaderRightDefaultProps,
  bottomTabsHeaderRightPropTypes,
  tabIconDefaultProps,
  tabIconPropTypes,
} from 'constants/prop-types';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerRight: BottomTabsHeaderRight,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      }}
    >
      <BottomTabs.Screen
        component={RecentExpenses}
        name="RecentExpenses"
        options={{ tabBarIcon: RecentExpensesTabIcon, tabBarLabel: 'Recent', title: 'Recent Expenses' }}
      />
      <BottomTabs.Screen
        component={AllExpenses}
        name="AllExpenses"
        options={{ tabBarIcon: AllExpensesTabIcon, tabBarLabel: 'Expenses', title: 'All Expenses' }}
      />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen component={ExpensesOverview} name="ExpensesOverview" options={{ headerShown: false }} />
            <Stack.Screen
              component={ManageExpense}
              name="ManageExpense"
              options={{ presentation: 'modal', title: 'Manage Expense' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesProvider>
    </>
  );
}

export default App;

function RecentExpensesTabIcon({ color, size }) {
  return <Ionicons color={color} name="hourglass" size={size} />;
}

RecentExpensesTabIcon.propTypes = { ...tabIconPropTypes };

RecentExpensesTabIcon.defaultProps = { ...tabIconDefaultProps };

function AllExpensesTabIcon({ color, size }) {
  return <Ionicons color={color} name="calendar" size={size} />;
}

AllExpensesTabIcon.propTypes = { ...tabIconPropTypes };

AllExpensesTabIcon.defaultProps = { ...tabIconDefaultProps };

function BottomTabsHeaderRight({ tintColor }) {
  const { navigate } = useNavigation();
  const addExpenseHandler = () => navigate('ManageExpense');
  return <IconButton color={tintColor} icon="add" onPress={addExpenseHandler} size={24} />;
}

BottomTabsHeaderRight.propTypes = { ...bottomTabsHeaderRightPropTypes };

BottomTabsHeaderRight.defaultProps = { ...bottomTabsHeaderRightDefaultProps };
