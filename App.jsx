import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllExpenses from 'screens/AllExpenses';
import ManageExpense from 'screens/ManageExpense';
import RecentExpenses from 'screens/RecentExpenses';
import { GlobalStyles } from 'constants/styles';
import { tabIconDefaultProps, tabIconPropTypes } from 'constants/prop-types';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={ExpensesOverview} name="ExpensesOverview" options={{ headerShown: false }} />
          <Stack.Screen component={ManageExpense} name="ManageExpense" />
        </Stack.Navigator>
      </NavigationContainer>
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
