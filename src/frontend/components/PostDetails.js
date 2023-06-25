import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, SafeAreaView, ScrollView } from "react-native";
import { palette } from "../styles/global-styles";
import { TouchableWithoutFeedback } from "react-native";

const PostDetails = ({ selectedPost, setSelectedPost }) => {
	function handleOnBackArrow() {
		setSelectedPost({});
	}
	return (
		<ScrollView >
			<View style={styles.leftRightView}>
				<TouchableWithoutFeedback onPress={handleOnBackArrow} style={{ width: 50, alignSelf: 'center', justifyContent: 'center',}}>
					<Image source={require('./../../../assets/sprites/back-arrow.png')} style={styles.backArrow} />
				</TouchableWithoutFeedback>
				<View style={[styles.leftRightView, {justifyContent: 'center', width: '80%',}]}>
					<Image source={require('./../../../assets/images/cow.jpg')} style={styles.profilePic} />
					<View style={{marginLeft: 5, justifyContent: 'center'}}>
						<Text style={styles.name}>Alexi Ikonomou</Text>
						<Text style={styles.username}>@alexiosiko</Text>
					</View>
				</View>
			</View>
			<Text style={styles.title}>{selectedPost.title}</Text>
			<Image source={{ uri: `data:image/jpeg;base64, ${selectedPost.image64}`}}
							style={styles.image} />
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
			<View style={{ height: 50,}}/>
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
	},
	backArrow: {
		width: 30,
		height: 30,
	},
	description: {
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