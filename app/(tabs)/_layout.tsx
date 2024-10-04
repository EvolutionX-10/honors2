import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarStyle: {
					height: 60,
					padding: 10,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Feather
							name="home"
							size={20}
							color={focused ? "#f26522" : "black"}
							style={{ backgroundColor: focused ? "#fff0e4" : "transparent", padding: 8, borderRadius: 6 }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="explore"
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome5
							name="exchange-alt"
							size={20}
							color={focused ? "#f26522" : "black"}
							style={{ backgroundColor: focused ? "#fff0e4" : "transparent", padding: 8, borderRadius: 6 }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="ticket"
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name="ticket-outline"
							size={20}
							color={focused ? "#f26522" : "black"}
							style={{ backgroundColor: focused ? "#fff0e4" : "transparent", padding: 8, borderRadius: 6 }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="news"
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<FontAwesome6
							name="newspaper"
							size={20}
							color={focused ? "#f26522" : "black"}
							style={{ backgroundColor: focused ? "#fff0e4" : "transparent", padding: 8, borderRadius: 6 }}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="user"
				options={{
					title: "",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Feather
							name="user"
							size={20}
							color={focused ? "#f26522" : "black"}
							style={{ backgroundColor: focused ? "#fff0e4" : "transparent", padding: 8, borderRadius: 6 }}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
