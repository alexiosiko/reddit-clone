import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from "react-native";
import { palette } from "../styles/global-styles";
import { useState } from "react";
import InsertImage from '../components/InsertImage.js';
import Header from "../components/Header";

function Create() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image64, setImage64] = useState("");

	function handleOnSubmit() {
		if (title == "" || description == "" || image64 == "") {
			console.warn("Required fields missing...");
			return;
		}
		const post = createPost();
		uploadPost(post);
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
		const response = await fetch("http://192.168.1.72:5001/uploadpost", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(post),
		});	
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1, backgroundColor: 'red'}}>
			<View>
			<Header header="Create" />
				<View style={styles.body}>
					<View style={styles.leftRightView}>
						<Image source={require('./../../../assets/images/cow.jpg')} style={styles.profilePic} />
						<View style={{marginLeft: 5, justifyContent: 'center'}}>
							<Text style={styles.name}>Alexi Ikonomou</Text>
							<Text style={styles.username}>@alexiosiko</Text>
						</View>
					</View>
					<TextInput style={[styles.titleInput, styles.textInput]}/>
					<TextInput style={[styles.descritionInput, styles.textInput]}
						multiline={true}
						textAlignVertical="top"/>
					{/* <Text>asdsadsa</Text>
					<View style={styles.body}>
						<InsertImage setImage64={setImage64} />
						<TextInput style={styles.textInput} 
							placeholder="Title ..."
							onChangeText={handleOnChangeTitle}></TextInput>
						<TextInput style={[styles.textInput, styles.description]}
							placeholder="Description ..." 
							multiline={true} 
							maxLength={700} 
							onChangeText={handleOnChangeDescription}/>
						<TouchableHighlight style={styles.button} onPress={handleOnSubmit}>
							<Text style={styles.buttonText}>Post</Text>
						</TouchableHighlight>
					</View> */}
				</View>
			</View>
		</TouchableWithoutFeedback>)
	
	function handleOnChangeTitle(title) {
		setTitle(title);
	}
	
	function handleOnChangeDescription(description) {
		setDescription(description);
	}
}
const styles = StyleSheet.create({
	body: {
		padding: 20,
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
	profilePic: {
		borderRadius: 25,
		width: 50,
		height: 50,
		backgroundColor: 'red',
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
	}
})
export default Create;