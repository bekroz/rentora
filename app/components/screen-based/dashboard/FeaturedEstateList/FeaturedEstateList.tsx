import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';
import featuredCardImage from '../../../../../assets/png/dashboard/dashboard-onsale-1.png';

const FeaturedEstateList = () => {
	return (
		<RN.View>
			<RN.View style={styles.featuredTopWrapper}>
				<RN.Text style={styles.featuredTitle}>Featured Estates</RN.Text>
				<RN.Text style={styles.featuredSubtitle}>view all</RN.Text>
			</RN.View>
			<RN.TouchableOpacity style={styles.featuredCardContainer}>
				<RN.Image source={featuredCardImage} style={styles.featuredCardImage} />
				<RN.Text>Sky Dandelions Apartment</RN.Text>
			</RN.TouchableOpacity>
		</RN.View>
	);
};

export default FeaturedEstateList;
