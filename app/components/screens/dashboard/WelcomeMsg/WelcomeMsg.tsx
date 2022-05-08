import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const WelcomeMsg = () => {
	return (
		<View style={styles.welcomeMsgContainer}>
			<Text style={styles.welcomeTxt}>
				Hey, <Text style={styles.bold}>Jonathan!</Text>
				{'\n'}Let's start exploring!
			</Text>
		</View>
	);
};

export default WelcomeMsg;
