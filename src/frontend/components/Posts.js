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
			<Post key={String(post._id)} title={post.title} 
			 description={post.description} postId={post._id}
			 likes={post.likes} dislikes={post.dislikes} imgBase64={post.imgBase64} />
		))}
	</ScrollView>)

	async function fetchPosts() {
		const response = await fetch("http://192.168.1.72:5001/getposts");
		const data = await response.json();
		setPosts(data);
	}
}
export default Posts;
