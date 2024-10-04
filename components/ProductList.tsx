import React from "react";
import { StyleSheet, View } from "react-native";
import Product from "./Product";

const products = [
	{
		id: "1",
		imageURL: require("@/assets/images/p1.png"),
		name: "AIR LEGGING SPORT",
		category: "Apparel",
		price: "Rp200.000",
	},
	{
		id: "2",
		imageURL: require("@/assets/images/p2.png"),
		name: "AERO SPORT MAX",
		category: "Footwear",
		price: "Rp450.000",
	},
	{
		id: "3",
		imageURL: require("@/assets/images/p3.png"),
		name: "RUNNER BLUE EDITION",
		category: "Footwear",
		price: "Rp250.000",
	},
	{
		id: "4",
		imageURL: require("@/assets/images/p4.png"),
		name: "SPORT + BAG",
		category: "Bag",
		price: "Rp350.000",
	},
	{
		id: "5",
		imageURL: require("@/assets/images/p1.png"),
		name: "AIR LEGGING SPORT",
		category: "Apparel",
		price: "Rp200.000",
	},
	{
		id: "6",
		imageURL: require("@/assets/images/p2.png"),
		name: "AERO SPORT MAX",
		category: "Footwear",
		price: "Rp450.000",
	},
	{
		id: "7",
		imageURL: require("@/assets/images/p3.png"),
		name: "RUNNER BLUE EDITION",
		category: "Footwear",
		price: "Rp250.000",
	},
	{
		id: "8",
		imageURL: require("@/assets/images/p4.png"),
		name: "SPORT + BAG",
		category: "Bag",
		price: "Rp350.000",
	},
];

const ProductList = () => {
	return (
		<View style={styles.container}>
			{products.map((item) => (
				<Product key={item.id} imageURL={item.imageURL} name={item.name} category={item.category} price={item.price} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		padding: 10,
		width: "100%",
	},
	container: {
		marginBottom: 20,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});

export default ProductList;
