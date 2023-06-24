import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { globalStyles, palette } from './../styles/global-styles.js';
import Posts from "./../components/Posts.js";
import Header from "./../components/Header.js";

const Home = () => {
    return (<>
		<Header header="Home"/>
        <View>
			<Posts />
        </View>
    </>)
}

export default Home;