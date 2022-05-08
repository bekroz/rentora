import React from 'react';
import {
	createStackNavigator,
	createBottomTabNavigator,
	createAppContainer,
} from 'react-navigation';
import { DashboardScreen } from '../screens/private';

const AppStack = createStackNavigator({
	Dashboard: { screen: DashboardScreen },
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
