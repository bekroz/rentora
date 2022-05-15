import React from 'react';
import RN from '../../react-native';

const SuggestionList = () => {
	return (
		<RN.View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
			<RN.Text>Top Locations</RN.Text>
			<RN.Text>explore</RN.Text>
		</RN.View>
	);
};

export default SuggestionList;
