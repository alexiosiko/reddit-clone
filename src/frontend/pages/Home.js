import Posts from "./../components/Posts.js";
import Header from "./../components/Header.js";
import PostDetails from './../components/PostDetails.js';
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView } from "react-native";


const Home = () => {
	const [selectedPost, setSelectedPost] = useState(
		{"_id": "6497ad35b69f1244b4db3037", 
		"description": "hacker hacker hacke hacker hacddkdder  hacker hacddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddacker hacker hacke hacker hacddkdder  hacker hacddkddkdder  hacker hacddkdder  hacke hacker hacddkdder  hacker hacddkdder  hacker hacddkdder  hacker hacddkdder  hacker hacddkdder  hacker hacddkdder  hacker hacddkdder r hacddkdder  hacker hacddkdder  hacker hacddkdder  hacker hacddkdder r hacddkdder hackder hacker hacddkdder hackder hacker hacddkdder hackder hacker hacddkdder hackder hacddkdder hackder kdsaasddsaasddsaerer emdddd",
		"dislikes": 0, 
		"image64": "", 
		"likes": 0, 
		"owner": "owner", 
		"title": "vinneeddddtdddadsadsdsa"});
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