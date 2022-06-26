import RN from '../../../common/react-native';

export default RN.StyleSheet.create({
	featuredTopWrapper: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	featuredTitle: {
		color: '#252B5C',
		fontWeight: '700',
		fontSize: 18,
		letterSpacing: 0.3,
		marginVertical: 20,
	},
	featuredSubtitle: {
		color: '#234F68',
	},
	featuredCardContainer: {
		backgroundColor: '#F5F4F8',
		width: '100%',
		height: '30%',
	},
	featuredCardImage: {
		width: '100%',
		height: '100%',
	},
});
