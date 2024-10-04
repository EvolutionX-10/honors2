import { ScrollView, Text, View } from "react-native";
import Notif from "@/components/Notification";

const notifications = [
	{
		time: "Today, 10:20",
		title: "Limited-Time Promo - Up to 50% Off!",
		description:
			"Don't miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!",
		important: true,
	},
	{
		time: "Today, 09:05",
		title: "Flash Sale Alert - Save Big Today!",
		description:
			"Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!",
		important: true,
	},
	{
		time: "Yesterday, 08:10",
		title: "Good Morning, Runner!",
		description: "It's time to step out and run. Give your best to your body today. Find comfort in every step.",
	},
	{
		time: "July 13, 2023, 17:30",
		title: "Exclusive Discount Just for You",
		description:
			"Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout.",
	},
];

export default function Notification() {
	return (
		<ScrollView>
			<View>
				{notifications.map((notification, index) => (
					<Notif key={index} {...notification} />
				))}
			</View>
		</ScrollView>
	);
}
