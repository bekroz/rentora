import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';
import arrowKeyIcon from '../../../../../assets/png/dashboard/dashboard-arrow.png';
import { OnSaleHomeListData } from '../../../../constants/data/dummy';
import { HomeProps } from '../../../../models/dashboard';

const OnSaleHome = ({ imgUri, title, subTitle }: HomeProps) => {
	return (
		<RN.TouchableOpacity key={title} style={styles.homeContainer}>
			<RN.Image source={imgUri} style={styles.homeImg}  />
			<RN.View style={styles.textContainer}>
				<RN.Text style={styles.title}>{title}</RN.Text>
				<RN.Text style={styles.subTitle}>{subTitle}</RN.Text>
			</RN.View>
			<RN.View style={styles.arrowKeyContainer}>
				<RN.Image source={arrowKeyIcon} />
			</RN.View>
		</RN.TouchableOpacity>
	);
};
const OnSaleList = () => {
	return (
		<RN.FlatList
			data={OnSaleHomeListData}
			renderItem={({ item }) => <OnSaleHome {...item} />}
			keyExtractor={(home) => home.title}
			showsHorizontalScrollIndicator={false}
			horizontal={true}
		/>
	);
};

export default OnSaleList;
