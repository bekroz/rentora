import { DashboardLayout } from './common/Layouts';
import {
	TopBarBtns,
	WelcomeMsg,
	SearchBar,
	CategoryList,
	OnSaleList,
} from './screens/dashboard';
import { TopFeatureBar } from './screens/featured';

const Components = {
	Layouts: {
		DashboardLayout,
	},
	Dashboard: {
		TopBarBtns,
		WelcomeMsg,
		SearchBar,
		CategoryList,
		OnSaleList,
	},
	Featured: {
		TopFeatureBar,
	},
};

export default Components;
