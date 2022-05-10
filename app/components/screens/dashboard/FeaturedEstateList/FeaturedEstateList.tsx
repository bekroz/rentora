import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';

const FeaturedEstateList = () => {
	return (
		<RN.TouchableOpacity style={styles.featuredCardContainer}>
			<RN.Text>Sky Dandelions Apartment</RN.Text>
			<RN.Image
				source={require('../../../../../assets/png/dashboard/dashboard-onsale-1.png')}
			/>
			<RN.Text>Sky Dandelions Apartment</RN.Text>
			<RN.Text>4.9</RN.Text>
			<RN.Text>Jakarta, Indonesia</RN.Text>
			<RN.Text>$ 290</RN.Text>
			<RN.Text>/month</RN.Text>
		</RN.TouchableOpacity>
	);
};

export default FeaturedEstateList;
