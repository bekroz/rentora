import React from 'react';
import { View } from 'react-native';
import { Components } from '../../../components';

const DashboardScreen = () => {
	return (
		<Components.Layouts.DashboardLayout>
			<Components.Dashboard.TopBarBtns />
			<Components.Dashboard.WelcomeMsg />
			<Components.Dashboard.SearchBar />
			<Components.Dashboard.CategoryList />
			<Components.Dashboard.OnSaleList />
		</Components.Layouts.DashboardLayout>
	);
};

export default DashboardScreen;
