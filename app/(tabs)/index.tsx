import {
	StyleSheet,
	Platform,
	StatusBar,
	TextInput,
	Text,
	TouchableOpacity,
	ScrollView,
	Pressable,
} from "react-native";
import { View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "@/components/Carousel";
import ProductList from "@/components/ProductList";
import { Link } from "expo-router";

export default function HomeScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Svg width={132} height={22} viewBox="0 0 132 22">
						<Path
							d="M4.968 16.736C3.944 16.736 3 16.656 2.136 16.496C1.288 16.352 0.576 16.136 0 15.848L0.696 12.56C1.352 12.864 2.08 13.112 2.88 13.304C3.696 13.496 4.488 13.592 5.256 13.592C6.216 13.592 6.952 13.504 7.464 13.328C7.976 13.152 8.296 12.768 8.424 12.176C8.504 11.776 8.456 11.456 8.28 11.216C8.104 10.976 7.768 10.768 7.272 10.592C6.792 10.4 6.136 10.176 5.304 9.92001C3.816 9.45601 2.824 8.88801 2.328 8.21601C1.848 7.52801 1.736 6.57601 1.992 5.36001C2.312 3.88801 3.08 2.76001 4.296 1.97601C5.528 1.19201 7.176 0.800007 9.24 0.800007C10.136 0.800007 10.992 0.872007 11.808 1.01601C12.624 1.14401 13.28 1.29601 13.776 1.47201L13.056 4.78401C12.416 4.51201 11.76 4.31201 11.088 4.18401C10.432 4.05601 9.776 3.99201 9.12 3.99201C8.256 3.99201 7.536 4.07201 6.96 4.23201C6.4 4.39201 6.056 4.76001 5.928 5.33601C5.864 5.67201 5.904 5.94401 6.048 6.15201C6.192 6.34401 6.48 6.52001 6.912 6.68001C7.36 6.84001 7.968 7.03201 8.736 7.25601C9.936 7.59201 10.816 8.00001 11.376 8.48001C11.952 8.94401 12.304 9.48801 12.432 10.112C12.56 10.72 12.544 11.408 12.384 12.176C12.096 13.536 11.328 14.64 10.08 15.488C8.848 16.32 7.144 16.736 4.968 16.736Z"
							fill="#F26522"
						/>
						<Path
							d="M12.3519 21.68L15.8559 5.12001H19.2159V6.10401C19.7599 5.72001 20.3359 5.42401 20.9439 5.21601C21.5679 4.99201 22.2639 4.88001 23.0319 4.88001C24.7119 4.88001 25.8959 5.38401 26.5839 6.39201C27.2719 7.38401 27.4239 8.85601 27.0399 10.808C26.6399 12.856 25.8799 14.36 24.7599 15.32C23.6399 16.264 22.1599 16.736 20.3199 16.736C19.1359 16.736 18.1679 16.488 17.4159 15.992L16.2159 21.68H12.3519ZM19.9359 13.904C20.7519 13.904 21.4239 13.656 21.9519 13.16C22.4959 12.664 22.8879 11.856 23.1279 10.736C23.3519 9.64801 23.3199 8.87201 23.0319 8.40801C22.7439 7.94401 22.1759 7.71201 21.3279 7.71201C20.8959 7.71201 20.4879 7.78401 20.1039 7.92801C19.7359 8.07201 19.3679 8.28801 18.9999 8.57601L18.0159 13.184C18.2399 13.424 18.4959 13.608 18.7839 13.736C19.0879 13.848 19.4719 13.904 19.9359 13.904Z"
							fill="#F26522"
						/>
						<Path
							d="M33.6551 16.736C31.6071 16.736 30.1351 16.232 29.2391 15.224C28.3591 14.2 28.1191 12.728 28.5191 10.808C28.9191 8.90401 29.7191 7.44001 30.9191 6.41601C32.1191 5.39201 33.8711 4.88001 36.1751 4.88001C38.2711 4.88001 39.7591 5.39201 40.6391 6.41601C41.5191 7.44001 41.7591 8.90401 41.3591 10.808C40.9591 12.728 40.1591 14.2 38.9591 15.224C37.7591 16.232 35.9911 16.736 33.6551 16.736ZM34.3031 13.712C35.1991 13.712 35.8871 13.488 36.3671 13.04C36.8471 12.592 37.1991 11.848 37.4231 10.808C37.6471 9.76801 37.6151 9.02401 37.3271 8.57601C37.0391 8.12801 36.4471 7.90401 35.5511 7.90401C34.6711 7.90401 33.9911 8.12801 33.5111 8.57601C33.0311 9.02401 32.6791 9.76801 32.4551 10.808C32.2311 11.848 32.2631 12.592 32.5511 13.04C32.8391 13.488 33.4231 13.712 34.3031 13.712Z"
							fill="#F26522"
						/>
						<Path
							d="M42.1434 16.496L44.5434 5.12001H48.2154L48.1194 6.17601C48.6794 5.87201 49.3514 5.60001 50.1354 5.36001C50.9194 5.10401 51.6874 4.94401 52.4394 4.88001L51.8394 7.78401C51.4074 7.83201 50.9274 7.91201 50.3994 8.02401C49.8714 8.12001 49.3594 8.24001 48.8634 8.38401C48.3834 8.52801 47.9674 8.68001 47.6154 8.84001L46.0074 16.496H42.1434Z"
							fill="#F26522"
						/>
						<Path
							d="M56.0796 16.736C54.7836 16.736 53.8556 16.376 53.2956 15.656C52.7356 14.936 52.5836 13.944 52.8396 12.68L53.8236 8.04801H52.2876L52.9116 5.12001H54.4476L54.9516 2.74401L59.0316 1.71201L58.3116 5.12001H61.0716L60.2796 8.04801H57.6876L56.7756 12.416C56.6636 12.96 56.6796 13.344 56.8236 13.568C56.9836 13.776 57.3836 13.88 58.0236 13.88C58.5196 13.88 59.0316 13.8 59.5596 13.64L59.0076 16.256C58.1916 16.576 57.2156 16.736 56.0796 16.736Z"
							fill="#F26522"
						/>
						<Path
							d="M70.4758 16.736C69.4518 16.736 68.5078 16.656 67.6438 16.496C66.7958 16.352 66.0838 16.136 65.5078 15.848L66.2038 12.56C66.8598 12.864 67.5878 13.112 68.3878 13.304C69.2038 13.496 69.9958 13.592 70.7638 13.592C71.7238 13.592 72.4598 13.504 72.9718 13.328C73.4838 13.152 73.8038 12.768 73.9318 12.176C74.0118 11.776 73.9638 11.456 73.7878 11.216C73.6118 10.976 73.2758 10.768 72.7798 10.592C72.2998 10.4 71.6438 10.176 70.8118 9.92001C69.3238 9.45601 68.3318 8.88801 67.8358 8.21601C67.3558 7.52801 67.2438 6.57601 67.4998 5.36001C67.8198 3.88801 68.5878 2.76001 69.8038 1.97601C71.0358 1.19201 72.6838 0.800007 74.7478 0.800007C75.6438 0.800007 76.4998 0.872007 77.3158 1.01601C78.1318 1.14401 78.7878 1.29601 79.2838 1.47201L78.5638 4.78401C77.9238 4.51201 77.2678 4.31201 76.5958 4.18401C75.9398 4.05601 75.2838 3.99201 74.6278 3.99201C73.7638 3.99201 73.0438 4.07201 72.4678 4.23201C71.9078 4.39201 71.5638 4.76001 71.4358 5.33601C71.3718 5.67201 71.4118 5.94401 71.5558 6.15201C71.6998 6.34401 71.9878 6.52001 72.4198 6.68001C72.8678 6.84001 73.4758 7.03201 74.2438 7.25601C75.4438 7.59201 76.3238 8.00001 76.8838 8.48001C77.4598 8.94401 77.8118 9.48801 77.9398 10.112C78.0678 10.72 78.0518 11.408 77.8918 12.176C77.6038 13.536 76.8358 14.64 75.5878 15.488C74.3558 16.32 72.6518 16.736 70.4758 16.736Z"
							fill="#F26522"
						/>
						<Path
							d="M78.9398 16.496L82.3717 0.320007H86.2357L85.0358 5.96001C85.5318 5.64001 86.1158 5.38401 86.7878 5.19201C87.4758 4.98401 88.1878 4.88001 88.9238 4.88001C90.3317 4.88001 91.3398 5.24001 91.9478 5.96001C92.5718 6.68001 92.7237 7.78401 92.4037 9.27201L90.8918 16.496H87.0277L88.4918 9.53601C88.6357 8.88001 88.6118 8.41601 88.4198 8.14401C88.2278 7.87201 87.7558 7.73601 87.0038 7.73601C86.5878 7.73601 86.1398 7.83201 85.6598 8.02401C85.1958 8.21601 84.7878 8.45601 84.4358 8.74401L82.8037 16.496H78.9398Z"
							fill="#F26522"
						/>
						<Path
							d="M98.6942 16.736C96.6462 16.736 95.1742 16.232 94.2782 15.224C93.3982 14.2 93.1582 12.728 93.5582 10.808C93.9582 8.90401 94.7582 7.44001 95.9582 6.41601C97.1582 5.39201 98.9102 4.88001 101.214 4.88001C103.31 4.88001 104.798 5.39201 105.678 6.41601C106.558 7.44001 106.798 8.90401 106.398 10.808C105.998 12.728 105.198 14.2 103.998 15.224C102.798 16.232 101.03 16.736 98.6942 16.736ZM99.3422 13.712C100.238 13.712 100.926 13.488 101.406 13.04C101.886 12.592 102.238 11.848 102.462 10.808C102.686 9.76801 102.654 9.02401 102.366 8.57601C102.078 8.12801 101.486 7.90401 100.59 7.90401C99.7102 7.90401 99.0302 8.12801 98.5502 8.57601C98.0702 9.02401 97.7182 9.76801 97.4942 10.808C97.2702 11.848 97.3022 12.592 97.5902 13.04C97.8782 13.488 98.4622 13.712 99.3422 13.712Z"
							fill="#F26522"
						/>
						<Path
							d="M113.183 16.736C111.983 16.736 110.927 16.52 110.015 16.088C109.118 15.64 108.471 14.976 108.071 14.096C107.671 13.216 107.606 12.12 107.879 10.808C108.263 9.00001 109.022 7.56001 110.159 6.48801C111.295 5.41601 112.935 4.88001 115.078 4.88001C116.23 4.88001 117.183 5.11201 117.935 5.57601C118.702 6.02401 119.239 6.63201 119.543 7.40001C119.847 8.16801 119.895 9.04001 119.687 10.016L119.255 12.056H111.19C111.206 12.808 111.47 13.336 111.982 13.64C112.494 13.928 113.382 14.072 114.646 14.072C115.271 14.072 115.919 14.016 116.59 13.904C117.262 13.792 117.831 13.648 118.295 13.472L117.767 15.992C117.174 16.248 116.486 16.432 115.702 16.544C114.919 16.672 114.079 16.736 113.183 16.736ZM111.671 9.82401H116.375L116.47 9.32001C116.598 8.76001 116.527 8.32001 116.255 8.00001C115.982 7.66401 115.447 7.49601 114.646 7.49601C113.718 7.49601 113.03 7.68801 112.582 8.07201C112.15 8.44001 111.847 9.02401 111.671 9.82401Z"
							fill="#F26522"
						/>
						<Path
							d="M124.318 16.736C123.406 16.736 122.558 16.672 121.774 16.544C120.99 16.416 120.374 16.256 119.926 16.064L120.55 13.112C121.062 13.352 121.67 13.536 122.374 13.664C123.094 13.792 123.742 13.856 124.318 13.856C125.006 13.856 125.51 13.824 125.83 13.76C126.15 13.696 126.342 13.52 126.406 13.232C126.486 12.912 126.286 12.672 125.806 12.512C125.326 12.352 124.67 12.12 123.838 11.816C122.862 11.448 122.158 11.024 121.726 10.544C121.31 10.048 121.206 9.32001 121.414 8.36001C121.638 7.24001 122.206 6.38401 123.118 5.79201C124.046 5.18401 125.478 4.88001 127.414 4.88001C128.134 4.88001 128.838 4.93601 129.526 5.04801C130.214 5.16001 130.758 5.28801 131.158 5.43201L130.558 8.33601C130.142 8.12801 129.654 7.97601 129.094 7.88001C128.55 7.78401 128.046 7.73601 127.582 7.73601C126.99 7.73601 126.478 7.77601 126.046 7.85601C125.63 7.92001 125.398 8.08801 125.35 8.36001C125.286 8.66401 125.462 8.88001 125.878 9.00801C126.294 9.12001 126.902 9.31201 127.702 9.58401C128.534 9.85601 129.166 10.152 129.598 10.472C130.03 10.776 130.302 11.144 130.414 11.576C130.542 12.008 130.534 12.552 130.39 13.208C130.134 14.344 129.534 15.216 128.59 15.824C127.662 16.432 126.238 16.736 124.318 16.736Z"
							fill="#F26522"
						/>
					</Svg>
					<View style={styles.icons}>
						<Link href="/wishlist" asChild>
							<Pressable>
								<Feather name="heart" size={24} color="black" />
							</Pressable>
						</Link>
						<Feather name="shopping-cart" size={24} color="black" />
						<Link href="/notification" asChild>
							<Pressable>
								<Feather name="bell" size={24} color="black" />
							</Pressable>
						</Link>
					</View>
				</View>
				<View style={styles.headerContainer}>
					<TextInput
						style={styles.textInput}
						onSubmitEditing={(event) => {
							// getValueFor(event.nativeEvent.text);
						}}
						placeholder="Search items"
					/>
					<TouchableOpacity style={styles.searchBtn}>
						<Feather name="search" size={18} color="white" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						...styles.flexbox,
						...styles.shadow,
						borderRadius: 8,
					}}
				>
					<View style={{ flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
						<Text style={{ fontWeight: "light", fontSize: 12 }}>Wallet Balance</Text>
						<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
							<Ionicons name="wallet-outline" size={24} color="black" />
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>Rp1.000.000</Text>
						</View>
					</View>
					<View style={{ flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
						<Text style={{ fontWeight: "light", fontSize: 12 }}>Top up balance</Text>
						<View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
							<Feather name="plus-circle" size={24} color="black" />
							<Text style={{ fontWeight: "bold", fontSize: 16 }}>Top up</Text>
						</View>
					</View>
				</View>
				<Carousel />
				<View style={{ width: "100%", padding: 16 }}>
					<Text style={{ fontFamily: "Bebas", fontSize: 24 }}>SHOP BY CATEGORY</Text>
					<View style={{ flexDirection: "row", gap: 16, marginTop: 16, justifyContent: "space-evenly" }}>
						<View
							style={{
								flexDirection: "column",
								gap: 16,
								alignItems: "center",
								backgroundColor: "#f6f6f6",
								padding: 16,
								borderRadius: 8,
								width: "33%",
							}}
						>
							<Ionicons name="footsteps-outline" size={32} color="black" />
							<Text style={{ fontFamily: "Bebas", fontSize: 20, color: "#f26522" }}>FOOTWEAR</Text>
						</View>
						<View
							style={{
								flexDirection: "column",
								gap: 16,
								alignItems: "center",
								backgroundColor: "#f6f6f6",
								padding: 16,
								borderRadius: 8,
								width: "33%",
							}}
						>
							<Feather name="shopping-bag" size={32} color="black" />
							<Text style={{ fontFamily: "Bebas", fontSize: 20, color: "#f26522" }}>BAGS</Text>
						</View>
						<View
							style={{
								flexDirection: "column",
								gap: 16,
								alignItems: "center",
								backgroundColor: "#f6f6f6",
								padding: 16,
								borderRadius: 8,
								width: "33%",
							}}
						>
							<Ionicons name="shirt-outline" size={32} color="black" />
							<Text style={{ fontFamily: "Bebas", fontSize: 20, color: "#f26522" }}>APPAREL</Text>
						</View>
					</View>
				</View>
				<Text style={{ width: "100%", fontFamily: "Bebas", fontSize: 24, padding: 16 }}>For You</Text>
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
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
	textInput: {
		height: 40,
		width: "85%",
		borderRadius: 8,
		padding: 8,
		borderWidth: 1,
		borderColor: "#e3e3e3",
		color: "black",
		fontSize: 16,
	},
	searchBtn: {
		width: 45,
		height: 40,
		borderRadius: 10,
		backgroundColor: "#F26522",
		justifyContent: "center",
		alignItems: "center",
	},
	flexbox: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 16,
		width: "80%",
	},
	shadow: {
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
});
