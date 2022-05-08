import React from 'react';
import { Text, View } from 'react-native';
import { Components } from '../../../components';
import { SIZES } from '../../../constants/theme';

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
