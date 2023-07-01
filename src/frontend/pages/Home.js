import Posts from "./../components/Posts.js";
import Header from "./../components/Header.js";
import PostDetails from './../components/PostDetails.js';
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView } from "react-native";


const Home = () => {
	const [selectedPost, setSelectedPost] = useState({});
	const [isFetching, setIsFetching] = useState(true);
	return (
		<>
			<Header header="Home" />
			<View style={{ display:  Object.keys(selectedPost).length !== 0 ? 'none' : 'flex', }}>
				<Posts setSelectedPost={setSelectedPost} />
			</View>
			{Object.keys(selectedPost).length !== 0 && (
				<PostDetails
					selectedPost={selectedPost}
					setSelectedPost={setSelectedPost} /> )}

		</>);
}
		
export default Home;