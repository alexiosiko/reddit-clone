import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { palette } from "../styles/global-styles";
import { useState } from "react";
import Header from "../components/Header";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { ImageManipulator } from 'expo-image-manipulator';

function Create() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image64, setImage64] = useState(null);

	function handleOnChangeTitle(title) {
		setTitle(title);
	}
	
	function handleOnChangeDescription(description) {
		setDescription(description);
	}

function handleOnSubmit() {
		if (title === "" || description === "") {
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
		likes: 0,
		dislikes: 0,
		};
	}

async function uploadPost(post) {
	const response = await fetch("http://192.168.1.72:5000/uploadpost", {
	method: "POST",
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(post),
	});
}

async function pickImage() {
	let result = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.All,
		allowsEditing: true,
		aspect: [4, 3],
		quality: 1,
	});

	if (!result.canceled) {
		const image = await resizeImage(result.uri);
		setImage64(image);
		console.log(image); // The base64 code of the selected image
	}
}

	async function resizeImage(uri) {
		const imageSize = await getImageSize(uri);
		if (imageSize.width > 1080 || imageSize.height > 1080) {
			const resizedImage = await ImageManipulator.manipulateAsync(
				uri,
				[{ resize: { width: 1080 } }],
				{ compress: 1, format: 'jpeg', base64: true }
		);
		return resizedImage;
		} else {
		const base64Code = await FileSystem.readAsStringAsync(uri, {
			encoding: FileSystem.EncodingType.Base64,
		});
		return { base64: base64Code };
		}
	}

	async function getImageSize(uri) {
		const { width, height } = await ImageManipulator.getSizeAsync(uri);
		return { width, height };
	}

	return (
		<>
			<Header header="Create" />
			<View style={styles.body}>
				<TouchableHighlight style={styles.touchable} onPress={pickImage}>
					<Text style={styles.buttonText}>Pick an image</Text>
				</TouchableHighlight>
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
				<Text>{image64}</Text>
			</View>
		</>)
}
const styles = StyleSheet.create({
	body: {
		padding: 12,
		backgroundColor: palette.neutral,
		width: '90%',
		alignSelf: 'center',
	},
	textInput: {
		color: palette.textcolor,
		borderRadius: 10,
		padding: 6,
		backgroundColor: palette.dark,
		marginTop: 10,
	},
	description: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		height: 200,
	},
	button: {
		marginTop: 10,
		width: '50%',
		aspectRatio: 3/1,
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: 'darkgreen',
		borderRadius: 10,
	},
	buttonText: {
		color: palette.textcolor,
		fontSize: 20,
		textAlign: 'center',
		padding: 2,
	},
	touchable: {
		backgroundColor: 'green',
		width: '30%',
		aspectRatio: 1/1,
		alignSelf: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	}
})
export default Create;