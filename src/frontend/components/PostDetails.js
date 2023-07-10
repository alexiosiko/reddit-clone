import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from "react-native";
import { palette } from "../styles/global-styles";
import { useState } from "react";
import LoadingIcon from './LoadingIcon.js';

const PostDetails = ({ selectedPost, setSelectedPost }) => {
	const [isDeleting, setIsDeleting] = useState(true);
	const [deletedStatus, setDeletedStatus] = useState({off: true})

	function handleOnBackArrow() {
		setSelectedPost({});
	}

	async function handleOnDeletePost() {
		const response = await fetch('https://reddit-clone-5ctl.onrender.com/deletepost', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: selectedPost._id }),
		});
		setDeletedStatus({
			result: "Post deleted",
			color: "green",
			hide: true,
		})
	}

	return (
		<ScrollView >
			<View style={styles.leftRightView}>
				<TouchableHighlight onPress={handleOnBackArrow} style={{ width: 50, alignSelf: 'center', justifyContent: 'center',}}>
					<Image source={require('./../../../assets/sprites/back-arrow.png')} style={styles.backArrow} />
				</TouchableHighlight>
				<View style={[styles.leftRightView, {justifyContent: 'center', width: '80%',}]}>
					<Image source={require('./../../../assets/sprites/profile-pic.png')} style={styles.profilePic} />
					<View style={{marginLeft: 5, justifyContent: 'center'}}>
						<Text style={styles.name}>Alexi Ikonomou</Text>
						<Text style={styles.username}>@alexiosiko</Text>
					</View>
				</View>
				<TouchableHighlight onPress={handleOnDeletePost} style={{ width: 50, alignSelf: 'center', right: 10}}>
					<Image source={require('./../../../assets/sprites/trash.png')} style={styles.backArrow} />
				</TouchableHighlight>
			</View>
				<Text style={styles.title}>{selectedPost.title}</Text>
				{isDeleting && <LoadingIcon message={deletedStatus} />}
			{selectedPost.image64 && <Image source={{ uri: `data:image/jpeg;base64, ${selectedPost.image64}`}}
							style={styles.image} />}
			<View style={styles.viewRow}>
				<View style={styles.viewRow}>
					<Text style={{ color: palette.textcolor }}>{selectedPost.dislikes}</Text>
					<Image style={styles.viewRowItem} source={require('./../../../assets/sprites/dislike.png')}/>
				</View>
				<View style={styles.viewRow}>
					<Text style={{ color: palette.textcolor }}>{selectedPost.dislikes}</Text>
					<Image style={styles.viewRowItem} source={require('./../../../assets/sprites/like.png')}/>
				</View>
				<View style={styles.viewRow}>
					<Text style={{ color: palette.textcolor }}>{selectedPost.comments}</Text>
					<Image style={styles.viewRowItem} source={require('./../../../assets/sprites/comment.png')}/>
				</View>
			</View>
			<Text style={styles.description}>{selectedPost.description}</Text>
			<View style={{ height: 100 }} />
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	image: {
		width: '100%',
		aspectRatio: 1,
		alignSelf: 'center',
		backgroundColor: 'black',
	},
	title: {
		color: palette.titlecolor,
		fontSize: 20,
		marginTop: 10,
		marginBottom: 20,
		marginLeft: 10,
	},
	backArrow: {
		width: 30,
		height: 30,
	},
	description: {
		marginLeft: 10,
		minHeight: 300,
		marginTop: 10,
		fontSize: 20,
		color: palette.textcolor,
	},
	viewRow: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	viewRowItem: {
		marginLeft: 10,
		width: 20,
		height: 20,
	},
	profilePic: {
		borderRadius: 25,
		width: 50,
		height: 50,
	},
	leftRightView: {
		flexDirection: 'row',
	},
	name: {
		color: palette.titlecolor,
		fontSize: 20,
	},
	username: {
		color: palette.textcolor,
		fontSize: 10,
	},
	
})
export default PostDetails;