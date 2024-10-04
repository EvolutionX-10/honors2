import React, { useState, useRef } from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const data = [
	{
		id: "1",
		image: require("@/assets/images/banner.png"),
	},
	{
		id: "2",
		image: require("@/assets/images/banner2.png"),
	},
];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const flatListRef = useRef(null);

	const handleScroll = (event: any) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x;
		const index = Math.round(contentOffsetX / width);
		setCurrentIndex(index);
	};

	const renderItem = ({ item }: any) => (
		<View style={styles.page}>
			<View style={styles.offerCard}>
				<Image source={item.image} style={styles.image} />
			</View>
		</View>
	);

	return (
		<View style={{ height: 180, marginTop: 20 }}>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={handleScroll}
				ref={flatListRef}
				style={styles.carousel}
			/>
			<View style={styles.pagination}>
				{data.map((_, index) => (
					<View key={index} style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]} />
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	carousel: {
		height: 250,
	},
	page: {
		width: width,
		justifyContent: "center",
		alignItems: "center",
	},
	offerCard: {
		width: 400,
		height: 150,
		borderRadius: 10,
		overflow: "hidden",
		backgroundColor: "#000",
	},
	image: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	pagination: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 5,
	},
	activeDot: {
		width: 50,
		backgroundColor: "orange",
	},
	inactiveDot: {
		backgroundColor: "gray",
	},
});

export default Carousel;
