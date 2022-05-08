import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SvgIcons from '../../../../constants/img';
import styles from './styles';

const TopBarContainer = () => {
	return (
		<View style={styles.topBarContainer}>
			<TouchableOpacity style={styles.locationBtn}>
				<SvgIcons.dashboard.location />
				<Text style={styles.location}>Jakarta, Indonesia</Text>
				<SvgIcons.dashboard.dropDown />
			</TouchableOpacity>
			<View style={styles.topRightContainer}>
				<TouchableOpacity style={[styles.topRightBtn, { marginRight: 10 }]}>
					<Text>Icon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.topRightBtn}>
					<Text>Profile</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopBarContainer;
