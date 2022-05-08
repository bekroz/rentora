import React from 'react';
import { View } from 'react-native';
import { Components } from '../../../components';
import styles from './styles';

const DashboardScreen = () => {
	return (
		<Components.Layout>
			<View style={styles.dashboardContainer}>
				<Components.TopBarBtns />
				<Components.WelcomeMsg />
				<Components.SearchBar />
				<Components.CategoryList />
			</View>
		</Components.Layout>
	);
};

export default DashboardScreen;
