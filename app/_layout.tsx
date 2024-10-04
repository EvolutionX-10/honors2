import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Link } from "expo-router";
import { Platform, StatusBar, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		Bebas: require("../assets/fonts/BebasNeue-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: "#fff" } }}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen
					name="wishlist"
					options={{
						title: "Wishlist",
						header(props) {
							return (
								<View
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
										padding: 16,
									}}
								>
									<View style={{ flexDirection: "row", gap: 16 }}>
										<Link href="/" asChild>
											<Feather name="arrow-left" size={24} color="black" />
										</Link>
										<Text style={{ fontSize: 20, fontFamily: "Bebas" }}>Wishlist</Text>
									</View>
									<View style={{ flexDirection: "row", gap: 16 }}>
										<Feather name="shopping-cart" size={24} color="black" />
										<Feather name="bell" size={24} color="black" />
									</View>
								</View>
							);
						},
					}}
				/>
				<Stack.Screen
					name="notification"
					options={{
						title: "Notification",
						header(props) {
							return (
								<View
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
										padding: 16,
									}}
								>
									<View style={{ flexDirection: "row", gap: 16 }}>
										<Link href="/" asChild>
											<Feather name="arrow-left" size={24} color="black" />
										</Link>
										<Text style={{ fontSize: 20, fontFamily: "Bebas" }}>Notification</Text>
									</View>
									<View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
										<Ionicons name="checkmark-done" size={24} color="#f26522" />
										<Text style={{ fontSize: 16, fontWeight: "condensed", color: "#f26522" }}>Mark as read</Text>
									</View>
								</View>
							);
						},
					}}
				/>
			</Stack>
		</ThemeProvider>
	);
}
