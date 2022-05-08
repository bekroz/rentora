import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './styles';
import { DASHBOARD_LANG } from '../../../../constants/data/lang';
// Icons
import searchIcon from '../../../../../assets/png/dashboard/dashboard-search.png';
import micIcon from '../../../../../assets/png/dashboard/dashboard-mic.png';
import dividerIcon from '../../../../../assets/png/dashboard/dashboard-divider.png';

const SearchBar = () => {
	return (
		<View style={styles.searchBarContainer}>
			<TouchableOpacity style={styles.searchInputContainer}>
				<Image source={searchIcon} resizeMode='contain' style={styles.searchIcon} />
				<TextInput
					placeholder={DASHBOARD_LANG.searchPlaceholder}
					style={styles.searchText}
				/>
			</TouchableOpacity>
			<Image source={dividerIcon} resizeMode='contain' style={styles.divider} />
			<TouchableOpacity style={styles.searchAudioContainer}>
				<Image source={micIcon} />
			</TouchableOpacity>
		</View>
	);
};

export default SearchBar;
