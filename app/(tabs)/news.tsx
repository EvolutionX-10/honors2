import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default function NewsScreen() {
	return (
		<View style={styles.container}>
			<Text>News Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: "#fff",
	},
});
