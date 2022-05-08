import React from 'react';
import RN from '../../react-native';
import styles from './styles';
import { LayoutProps } from '../../../../models/Dashboard';

const DashboardLayout = (props: LayoutProps) => {
	return <RN.View style={styles.dashboardContainer}>{props.children}</RN.View>;
};

export default DashboardLayout;
