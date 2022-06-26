import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';

const SuggestedLocationBtn = () => {
	return (
		<RN.TouchableOpacity
			style={{
				backgroundColor: '#F5F4F8',
				width: 90,
				height: 50,
				borderRadius: 50,
				flexDirection: 'row',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				marginRight: 10,
			}}>
			<RN.Image
				source={require('../../../../../assets/png/dashboard/dashboard-country-1.webp')}
				style={{ width: 40, height: 40, borderRadius: 50 }}
			/>
			<RN.Text
				style={{
					color: '#252B5C',
					fontWeight: '500',
					fontSize: 10,
					letterSpacing: 0.7,
				}}>
				Bali
			</RN.Text>
		</RN.TouchableOpacity>
	);
};

const SuggestedLocationHeader = () => {
	return (
		<RN.TouchableOpacity
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
		</RN.TouchableOpacity>
	);
};
const SuggestedLocationList = () => {
	return (
		<RN.View style={{ marginBottom: 20 }}>
			<SuggestedLocationHeader />
			<RN.FlatList
				data={['1', '2', '3', '4']}
				// ListHeaderComponent={SuggestedLocationHeader}
				renderItem={({ item }) => <SuggestedLocationBtn />}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</RN.View>
	);
};

export default SuggestedLocationList;
