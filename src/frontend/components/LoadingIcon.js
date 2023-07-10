import { ActivityIndicator, Text } from "react-native"
import { palette } from "../styles/global-styles"
export default function LoadingIcon({ message }) {
	if (message && message.off && message.off == true)
		return <></>
	return (<>
		{!message.hide && <ActivityIndicator size={"large"} />}
		<Text style={{
			textAlign: 'center',
			margin: 20,
			color: message.color,
			}}>{message.result}</Text>
	</>)
}