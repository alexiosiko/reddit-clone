import { SafeAreaView, StyleSheet, Text } from "react-native";
import { palette } from "../styles/global-styles";

function Header({ header }) {
	return (
		<Text style={styles.header}>{header}</Text>
	)
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: palette.top,
		textAlign: "center",
		fontSize: 30,
		color: palette.titlecolor,
	}
});
export default Header;