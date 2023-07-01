import { ActivityIndicator, StyleSheet, Text } from "react-native"
import { globalStyles, palette } from "../styles/global-styles"
export default function LoadingIcon({ message }) {
	return (<>
		<ActivityIndicator style={{ marginTop: '50%'}} size={"large"} />
		<Text style={styles.text}>{message}</Text>
	</>)
}
const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		margin: 20,
		color: palette.textcolor
	}
})