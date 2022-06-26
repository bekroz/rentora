import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';

const SuggestedAgentBtn = () => {
	return (
		<RN.TouchableOpacity style={{ alignItems: 'center', marginRight: 10 }}>
			<RN.View
				style={{
					backgroundColor: '#F5F4F8',
					width: 70,
					height: 70,
					borderRadius: 50,
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 8,
				}}>
				<RN.Image
					source={require('../../../../../assets/png/dashboard/dashboard-agent-7.jpeg')}
					style={{ width: 65, height: 65, borderRadius: 50 }}
				/>
			</RN.View>
			<RN.Text style={{ fontWeight: '500', fontSize: 10 }}>Amanda</RN.Text>
		</RN.TouchableOpacity>
	);
};

const SuggestedAgentHeader = () => {
	return (
		<RN.View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginBottom: 20,
			}}>
			<RN.Text style={{ color: '#252B5C', fontSize: 18, fontWeight: '700' }}>
				Top Locations
			</RN.Text>
			<RN.Text style={{ color: '#234F68', fontWeight: '600', fontSize: 10 }}>
				explore
			</RN.Text>
		</RN.View>
	);
};
const SuggestedAgentsList = () => {
	return (
		<RN.View style={{ marginBottom: 20 }}>
			<SuggestedAgentHeader />
			<RN.FlatList
				data={['1', '2', '3', '4']}
				// ListHeaderComponent={SuggestedLocationHeader}
				renderItem={({ item }) => <SuggestedAgentBtn />}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</RN.View>
	);
};

export default SuggestedAgentsList;
