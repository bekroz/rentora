import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export default function DropDownSvg() {
	return (
		<View style={styles.container}>
			<Svg
				width='10'
				height='10'
				viewBox='0 0 10 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<Path
					d='M2.5 3.75L5 6.25L7.5 3.75'
					stroke='#234F68'
					stroke-width='1.25'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</Svg>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
