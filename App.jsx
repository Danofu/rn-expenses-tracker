import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from 'screens/ManageExpense';
import RecentExpenses from 'screens/RecentExpenses';
import AllExpenses from 'screens/AllExpenses';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen component={RecentExpenses} name="RecentExpenses" />
      <BottomTabs.Screen component={AllExpenses} name="AllExpenses" />
    </BottomTabs.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={ExpensesOverview} name="ExpensesOverview" />
          <Stack.Screen component={ManageExpense} name="ManageExpense" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
