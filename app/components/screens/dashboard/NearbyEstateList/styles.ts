import { COLORS } from '../../../../constants/theme';
import RN from '../../../common/react-native';

export default RN.StyleSheet.create({
	estateImgContainer: {
		height: 160,
		margin: 8,
		marginBottom: 10,
		borderRadius: 15,
	},
	estateImg: {
		borderRadius: 15,
	},
	heartBtn: {
		backgroundColor: COLORS.green,
		width: 30,
		height: 30,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 0,
		margin: 8,
	},
	priceBtn: {
		backgroundColor: '#234F68',
		width: 'auto',
		position: 'absolute',
		bottom: 0,
		right: 0,
		margin: 8,
		padding: 8,
		borderRadius: 8,
	},
	price: {
		fontWeight: '600',
		fontSize: 12,
		color: COLORS.cardColor,
	},
	estateDetailsContainer: {
		bottom: 0,
		marginHorizontal: 16,
		justifyContent: 'center',
	},
	locationWrapper: {
		marginBottom: 10,
	},
	location: {
		color: COLORS.textColor1,
		fontWeight: '700',
		fontSize: 12,
		letterSpacing: 0.7,
	},
	bottomDetailsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	starIcon: {
		width: 15,
		height: 15,
		marginRight: 2,
	},
	estateRating: {
		color: COLORS.textColor1,
		fontWeight: '700',
		fontSize: 8,
		marginRight: 8,
	},
	locationIcon: {
		width: 10,
		height: 10,
		marginRight: 2,
	},
	estateLocation: {
		color: COLORS.textColor2,
		fontWeight: '400',
		fontSize: 8,
	},
});
