import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

export default StyleSheet.create({
	topBarContainer: {
		marginHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	locationBtn: {
		borderRadius: 25,
		backgroundColor: COLORS.white,
		width: SIZES.width / 3,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: 50,
	},
	location: {
		fontSize: 10,
		fontWeight: '500',
		color: '#252B5C',
	},
	topLeftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	topRightContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	topRightBtn: {
		borderRadius: 50,
		backgroundColor: COLORS.white,
		width: 25,
		height: 25,
		alignItems: 'center',
	},
});
