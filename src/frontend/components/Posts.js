import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Post from "./Post";

function Posts() {
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		fetchPosts();
	}, [])
	return (
	<ScrollView>
		{posts && posts.map(post => (
			<Post 
				key={String(post._id)}
				title={post.title}
				description={post.description}
				postId={post._id}
				likes={post.likes}
				dislikes={post.dislikes}
				image64={post.image64} />
		))}
		{/* This view is to scroll to last post */}
		<View style={{height: 100}}></View>
	</ScrollView>)

	async function fetchPosts() {
		try {
			const response = await fetch("https://reddit-clone-5ctl.onrender.com/getposts");
			const data = await response.json();
			setPosts(data);
		} catch (error) {
			console.log('error', error);
		}
	}
}
export default Posts;
