import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';
import SvgIcons from '../../../../constants/icons/svg-icons';
import { DASHBOARD_LANG } from '../../../../constants/data/lang';

export default function TopBarBtns() {
	const userPic = require('../../../../../assets/png/dashboard/dashboard-userpic.png');
	const bell = require('../../../../../assets/png/dashboard/dashboard-bell.png');
	return (
		<RN.View style={styles.topBarContainer}>
			<RN.TouchableOpacity style={styles.locationBtn}>
				<SvgIcons.dashboard.location />
				<RN.Text style={styles.location}>{DASHBOARD_LANG.location}</RN.Text>
				<SvgIcons.dashboard.dropDown style={styles.dropDown} />
			</RN.TouchableOpacity>
			<RN.View style={styles.topRightContainer}>
				<RN.TouchableOpacity style={[styles.topRightBtn, styles.bellBtn]}>
					<RN.Image
						source={bell}
						style={styles.bellIcon}
						resizeMode={'contain'}
					/>
				</RN.TouchableOpacity>
				<RN.TouchableOpacity style={styles.topRightBtn}>
					<RN.Image
						source={userPic}
						style={styles.userPic}
						resizeMode={'cover'}
					/>
				</RN.TouchableOpacity>
			</RN.View>
		</RN.View>
	);
}
