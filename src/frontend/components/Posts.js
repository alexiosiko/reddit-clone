import { useEffect, useState } from "react";
import { View, ScrollView, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import Post from "./Post";

function Posts({ setSelectedPost }) {
	const [posts, setPosts] = useState([]);
	
	useEffect(() => {
		fetchPosts();
	}, [])

	function handleOnPressPost(post) {
		setSelectedPost(post);
	}
	return (
	<ScrollView>
		{posts && posts.map(post => (
			<TouchableHighlight key={post._id} onPress={() => handleOnPressPost(post)} >
				<Post 
					key={String(post._id)}
					title={post.title}
					description={post.description}
					postId={post._id}
					likes={post.likes}
					dislikes={post.dislikes}
					image64={post.image64}/>
			</TouchableHighlight>)
		)}
			<View style={{ height: 100,}} />

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
