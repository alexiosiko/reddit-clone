import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { palette } from "../styles/global-styles";
import { useState } from "react";
import InsertImage from '../components/InsertImage.js';
import Header from "../components/Header";

function Create() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image64, setImage64] = useState("");
	const [postStatus, setPostStatus] = useState({});
	async function handleOnSubmit() {
		if (title == "" || description == "") {
			console.warn("Required fields missing...");
			return;
		}
		setPostStatus({ result: 'Uploading post...', color: 'yellow' });
		const post = createPost();
		console.log(post);
		const response = await uploadPost(post);
		setPostStatus({ result: 'Successfully uploaded post!', color: 'green'})
	}

	function createPost() {
		return {
			title: title,
			description: description,
			owner: "owner",
			image64: image64,
			likes: 0,
			dislikes: 0,
		};
	}

	async function uploadPost(post) {
		const response = await fetch("https://reddit-clone-5ctl.onrender.com/uploadpost", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(post),
		});	
		return response;
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1, backgroundColor: 'red'}}>
			<View>
			<Header header="Create" />
				<View style={styles.body}>
					<View style={styles.leftRightView}>
						<Image source={require('./../../../assets/sprites/profile-pic.png')} style={styles.profilePic} />
						<View style={{marginLeft: 5, justifyContent: 'center'}}>
							<Text style={styles.name}>Alexi Ikonomou</Text>
							<Text style={styles.username}>@alexiosiko</Text>
						</View>
						<InsertImage setImage64={setImage64}/>
					</View>
					<TextInput style={[styles.titleInput, styles.textInput]}
						onChange={handleOnChangeTitle}
						placeholder="Post title"
						placeholderTextColor={palette.titlecolor}/>
					<TextInput style={[styles.descritionInput, styles.textInput]}
						onChange={handleOnChangeDescription}
						placeholder="What do you want to talk about?"
						placeholderTextColor={palette.textcolor}
						multiline={true}
						textAlignVertical="top"/>
					<TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
						<Text>Upload Post</Text>
					</TouchableOpacity>
					<Text style={{ color: postStatus.color, textAlign: 'center', marginTop: 20,}}>{postStatus.result}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>)
	
	function handleOnChangeTitle(e) {
		setTitle(e.nativeEvent.text);
	}
	
	function handleOnChangeDescription(e) {
		setDescription(e.nativeEvent.text);
	}
}
const styles = StyleSheet.create({
	body: {
		padding: 20,
	},
	leftRightView: {
		alignItems: 'center',
		marginLeft: 10,
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
	profilePic: {
		borderRadius: 25,
		width: 30,
		height: 30,
	},
	textInput: {
		backgroundColor: palette.otherNeutral,
		borderRadius: 20,
		marginTop: 10,
	},	
	titleInput: {
		color: palette.titlecolor,
		padding: 20,
	},
	descritionInput: {
		color: palette.textcolor,
		padding: 20,
		height: 220,
	},
	button: {
		marginTop: 15,
		height: 30,
		width: '50%',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: palette.button,
		borderRadius: 20,
	}
})
export default Create;