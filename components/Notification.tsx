import { Text, View } from "react-native";

export default function Notification(props: NotificationProps) {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 16,
				padding: 16,
				paddingHorizontal: props.important ? 64 : 16,
				backgroundColor: props.important ? "#fff0e4" : "#fff",
				alignItems: "flex-start",
				position: "relative",
			}}
		>
			{props.important && (
				<View
					style={{
						width: 10,
						height: 10,
						borderRadius: 12,
						backgroundColor: "#f26522",
						position: "absolute",
						top: 18,
						left: 40,
					}}
				/>
			)}
			<Text style={{ fontSize: 12, fontWeight: "300", color: "#6c6c6c" }}>{props.time}</Text>
			<View style={{ flexDirection: "column", gap: 8 }}>
				<Text style={{ textTransform: "uppercase", fontSize: 24, fontFamily: "Bebas" }}>{props.title}</Text>
				<Text style={{ fontSize: 14, color: "#6c6c6c" }}>{props.description}</Text>
			</View>
		</View>
	);
}

interface NotificationProps {
	time: string;
	title: string;
	description: string;
	important?: boolean;
}
