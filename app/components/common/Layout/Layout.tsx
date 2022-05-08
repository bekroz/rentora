import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default Layout;
