import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";

const AppStack = createStackNavigator({
  Dashboard: { screen: Screems },
  // Search: { screen: SearchScreen },
  // SavedList: { screen: SavedListScreen },
  // Profile: { screen: ProfileScreen },
});
const AuthStack = createStackNavigator({
  // Login: { screen: LoginScreen },
  // SignUp: { screen: SignUpScreen },
  // Restore: { screen: RestoreScreen },
});

const App = createBottomTabNavigator({
  AppStack: { screen: AppStack },
  // AuthStack: { screen: AuthStack },
});
export default createAppContainer(App);
