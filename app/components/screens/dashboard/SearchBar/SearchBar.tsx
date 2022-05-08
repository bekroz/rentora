import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';
import { DASHBOARD_LANG } from '../../../../constants/data/lang';
// Icons
import searchIcon from '../../../../../assets/png/dashboard/dashboard-search.png';
import micIcon from '../../../../../assets/png/dashboard/dashboard-mic.png';
import dividerIcon from '../../../../../assets/png/dashboard/dashboard-divider.png';

const SearchBar = () => {
	return (
		<RN.View style={styles.searchBarContainer}>
			<RN.TouchableOpacity style={styles.searchInputContainer}>
				<RN.Image
					source={searchIcon}
					resizeMode='contain'
					style={styles.searchIcon}
				/>
				<RN.TextInput
					placeholder={DASHBOARD_LANG.searchPlaceholder}
					style={styles.searchText}
				/>
			</RN.TouchableOpacity>
			<RN.Image
				source={dividerIcon}
				resizeMode='contain'
				style={styles.divider}
			/>
			<RN.TouchableOpacity style={styles.searchAudioContainer}>
				<RN.Image source={micIcon} />
			</RN.TouchableOpacity>
		</RN.View>
	);
};

export default SearchBar;
