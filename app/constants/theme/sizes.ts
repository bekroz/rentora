import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SIZES = {
	base: 16,
	font: 14,
	padding: 20,
	margin: 20,
	border: 1,
	width,
	height,
};

export default SIZES;
