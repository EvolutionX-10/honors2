import React from "react";
import { View, Text, Image, StyleSheet, type ImageSourcePropType } from "react-native";

const Product = ({ imageURL, name, category, price }: ProductProps) => {
	return (
		<View style={styles.container}>
			<Image source={imageURL} style={styles.image} />
			<View style={styles.details}>
				<Text style={styles.productName}>{name}</Text>
				<Text style={styles.category}>{category}</Text>
				<Text style={styles.price}>{price}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderRadius: 10,
		overflow: "hidden",
		elevation: 5,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		margin: 10,
        width: "45%",
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	details: {
		padding: 10,
        gap: 10,
		alignItems: "flex-start",
	},
	productName: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
		marginTop: 10,
	},
	category: {
		fontSize: 14,
		color: "#777",
		marginVertical: 5,
	},
	price: {
		fontSize: 16,
		color: "orange",
		fontWeight: "bold",
	},
});

export default Product;

interface ProductProps {
	imageURL: ImageSourcePropType;
	name: string;
	category: string;
	price: string;
}
