import ProductList from "@/components/ProductList";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Wishlist() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ProductList />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
		backgroundColor: "#fff",
	},
	headerContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
		width: "100%",
	},
	icons: {
		flexDirection: "row",
		gap: 16,
	},
});
