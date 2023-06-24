import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { globalStyles, palette } from "../styles/global-styles";

function Post({ title, description, likes, dislikes, postId, imgBase64 }) {
	const [isFetching, setIsFetching] = useState(false);
		useEffect(() => {
	}, [])

	async function handleLike() {
		if (isFetching == true)
			return;
		const response = await fetch("http://192.168.1.72:5001/likepost", {
			method: "POST",
			body: JSON.stringify(postId),
			headers: { 'Content-Type': 'application/json'},
		})
		dislikes++;
		// console.log(response);
	}
	async function handleDislike() {
		if (isFetching == true)
			return;
		const response = await fetch("http://192.168.1.72:5001/dislikepost", {
			method: "POST",
			body: JSON.stringify(postId),
			headers: { 'Content-Type': 'application/json'},
		})
		const response_json = await response.json();
		// console.log(response_json);
	}

	return (
		<View style={styles.post}>
			<View style={styles.leftRightContainer}>
				<View style={styles.left}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.text}>{description}</Text>
				</View>
				<View style={styles.right}>
					<Image source={require('./../../../assets/images/cow.jpg')}
						style={styles.image} />
				</View>
			</View>
			<View>
				<View style={styles.row}>
					<View style={styles.leftRightSmallContainer}>
						<Text style={styles.text}>{likes}</Text>
						<Image source={require('./../../../assets/sprites/like.png')}
							style={styles.icon}/>
					</View>
					<View style={styles.leftRightSmallContainer}>
						<Text style={styles.text}>{dislikes}</Text>
						<Image source={require('./../../../assets/sprites/dislike.png')}
							style={styles.icon}/>
					</View>
				</View>
			</View>
			{/* <Text style={styles.postTitle}>{title}</Text>
			<Text style={styles.postDescription}>{description}</Text>
			<View style={styles.bottom}>
				<View style={styles.bottomItem}>
					<TouchableOpacity onPress={handleLike}>
						<Image source={require('./../../../assets/sprites/likes-icon.png')}
							style={{height: 20, width: 20}}></Image>
					</TouchableOpacity>
					<Text style={styles.count}>{likes}</Text>
				</View>
				<View style={styles.bottomItem}>
					<TouchableOpacity onPress={handleDislike}>
						<Image source={require('./../../../assets/sprites/dislikes-icon.png')}
							style={{height: 20, width: 20}}></Image>
					</TouchableOpacity>
					<Text style={styles.count}>{dislikes}</Text>
				</View>
				<View style={styles.bottomItem}></View>
			</View> */}
		</View>
	);
}
export default Post;
const styles = StyleSheet.create({
	post: {
		borderRadius: 15,
        height: 150,
        margin: 10,
        padding: 10,
        backgroundColor: palette.dark,
    },
	leftRightContainer: {
		display: 'flex',
		flexDirection: "row",
		flex: 1,
	},
	left: {
		flex: 1,
	},
	right: { 
		width: '30%',
	},
	image: {
		alignSelf: 'flex-end',
		height: 80,
		aspectRatio: 1,
		borderRadius: 8,
	},
	title: {
		color: palette.titlecolor,
		fontSize: 21,
		fontWeight: '900'
	},
	text: {
		color: palette.textcolor,
		fontSize: 17,
		fontWeight: '600'
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: ''
	},
	leftRightSmallContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	icon: {
		marginLeft: 10,
		marginRight: 50,
		width: 20,
		aspectRatio: 1,
	}

})