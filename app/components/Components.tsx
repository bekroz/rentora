import { DashboardLayout } from './common/Layouts';
import { SuggestionList } from './common/FlatLists';
import {
	TopBarBtns,
	WelcomeMsg,
	SearchBar,
	CategoryList,
	OnSaleList,
	FeaturedEstateList,
	SuggestedLocationList,
	SuggestedAgentsList,
	NearbyEstateList,
} from './screens/dashboard';

const Components = {
	FlatLists: {
		SuggestionList,
	},
	Layouts: {
		DashboardLayout,
	},
	Dashboard: {
		TopBarBtns,
		WelcomeMsg,
		SearchBar,
		CategoryList,
		OnSaleList,
		FeaturedEstateList,
		SuggestedLocationList,
		SuggestedAgentsList,
		NearbyEstateList,
	},
	Featured: {},
};

export default Components;
