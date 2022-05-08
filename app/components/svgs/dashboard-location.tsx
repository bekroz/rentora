import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function LocationSvg() {
	return (
		<View style={styles.container}>
			<Svg
				width='11'
				height='14'
				viewBox='0 0 11 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<Path
					d='M10.5 5.75C10.5 8.51125 5.5 13.25 5.5 13.25C5.5 13.25 0.5 8.51125 0.5 5.75C0.5 4.42392 1.02678 3.15215 1.96447 2.21447C2.90215 1.27678 4.17392 0.75 5.5 0.75C6.82608 0.75 8.09785 1.27678 9.03553 2.21447C9.97322 3.15215 10.5 4.42392 10.5 5.75Z'
					fill='#234F68'
				/>
				<Path
					d='M5.5 6.25C5.69891 6.25 5.88968 6.17098 6.03033 6.03033C6.17098 5.88968 6.25 5.69891 6.25 5.5C6.25 5.30109 6.17098 5.11032 6.03033 4.96967C5.88968 4.82902 5.69891 4.75 5.5 4.75C5.30109 4.75 5.11032 4.82902 4.96967 4.96967C4.82902 5.11032 4.75 5.30109 4.75 5.5C4.75 5.69891 4.82902 5.88968 4.96967 6.03033C5.11032 6.17098 5.30109 6.25 5.5 6.25Z'
					fill='white'
					stroke='white'
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
		justifyContent: 'center',
		alignItems: 'center',
	},
});
