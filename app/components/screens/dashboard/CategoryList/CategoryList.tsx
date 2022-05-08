import React from 'react';
import RN from '../../../common/react-native';
import styles from './styles';
import { COLORS } from '../../../../constants/theme';
import { CategoryBtnProps } from '../../../../models/Dashboard';
import { CategoryListData } from '../../../../constants/data/dummy';

const CategoryBtn = ({ title, isChosen = true }: CategoryBtnProps) => {
	return (
		<RN.TouchableOpacity
			style={[
				styles.categoryBtnContainer,
				{ backgroundColor: isChosen ? '#234F68' : '#F5F4F8' },
			]}>
			<RN.Text
				style={[
					styles.categoryText,
					{ color: isChosen ? COLORS.white : '#252B5C' },
				]}>
				{title}
			</RN.Text>
		</RN.TouchableOpacity>
	);
};

const CategoryList = () => {
	return (
		<RN.FlatList
			data={CategoryListData}
			renderItem={({ item }) => (
				<CategoryBtn key={item} title={item} isChosen={true} />
			)}
			keyExtractor={(item) => item}
			showsHorizontalScrollIndicator={false}
			horizontal={true}
			contentContainerStyle={styles.categoryListContainer}
		/>
	);
};

export default CategoryList;
