import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TopBarContainer = () => {
	return (
		<View style={styles.topBarContainer}>
			{/* <SvgIcons.dashboard.location /> */}
			<TouchableOpacity style={styles.locationBtn}>
				<Text style={styles.location}>Icon 1</Text>
				<Text style={styles.location}>Jakarta, Indonesia</Text>
				<Text style={styles.location}>Icon 2</Text>
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
