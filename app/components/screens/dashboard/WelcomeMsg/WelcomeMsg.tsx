import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';

const WelcomeMsg = () => {
	return (
		<RN.View style={styles.welcomeMsgContainer}>
			<RN.Text style={styles.welcomeTxt}>
				Hey, <RN.Text style={styles.bold}>Jonathan!</RN.Text>
				{'\n'}Let's start exploring!
			</RN.Text>
		</RN.View>
	);
};

export default WelcomeMsg;
