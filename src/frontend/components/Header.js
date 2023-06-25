import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { palette } from "../styles/global-styles";

function Header({ header }) {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{header}</Text>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: palette.neutral,
		height: 50,
		justifyContent: 'center',
	},
	header: {
		textAlign: "center",
		fontSize: 25,
		color: palette.titlecolor,
	}
});
export default Header;