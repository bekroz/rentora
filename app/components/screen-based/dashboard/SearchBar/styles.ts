import RN from '../../../common/react-native';

export default RN.StyleSheet.create({
	searchBarContainer: {
		flexDirection: 'row',
		backgroundColor: '#F5F4F8',
		borderRadius: 10,
		height: 70,
		alignItems: 'center',
		marginBottom: 25,
	},
	searchInputContainer: {
		width: '80%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchIcon: {
		width: 50,
	},
	searchText: {
		flexGrow: 1,
		height: '100%',
	},
	divider: {
		right: -5,
	},
	searchAudioContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: '100%',
		zIndex: 10,
	},
});
