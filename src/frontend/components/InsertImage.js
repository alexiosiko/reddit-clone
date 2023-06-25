import { ImageBackground, StyleSheet, Text, TouchableHighlight } from "react-native";
import { palette } from "../styles/global-styles";
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { useState } from "react";

const ImportImage = ({ setImage64 }) => {
	const [backgroundImageUri, setBackgroundImageUri] = useState(null);
	async function handleOnInsertImage() {
		let result = await userSelectsImage();			// User selects image
		if (result.cancelled) 							// If user cancels STOP
			return;					
		result = await uriTo800By800(result.uri);		// Convert image to 800 x 800
		const base64 = await uriToBase64(result.uri);	// Convert image to base64Code
		setImage64(base64);								// Store base64Code to parent
		setBackgroundImageUri(result.uri);
	}
	async function userSelectsImage() {
		return await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});
	}
	async function uriTo800By800(uri) {
		return await ImageManipulator.manipulateAsync(
			uri,
			[{ resize: { height:400,  width:400 } }],
			{ compress: 1, format: ImageManipulator.SaveFormat.JPEG },
		);
	}
	async function uriToBase64(uri){
		return await FileSystem.readAsStringAsync(uri, {
			encoding: FileSystem.EncodingType.Base64,
		});
	}

	return (
		<TouchableHighlight
		 style={styles.touchable} onPress={handleOnInsertImage}>
			<ImageBackground style={styles.imageBackground} source={{ uri: backgroundImageUri}}>
				{!backgroundImageUri && <Text style={styles.buttonText}>Pick an image</Text>}
			</ImageBackground>
		</TouchableHighlight>
		)
}
const styles = StyleSheet.create({
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
	},
	imageBackground: {
		borderRadius: 10,
		overflow: 'hidden',
		width: '100%',
		aspectRatio: 1/1
	}
})
export default ImportImage;