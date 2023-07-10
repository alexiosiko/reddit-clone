import { ImageBackground, StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
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
			[{ resize: { height:1080,  width:1080 } }],
			{ compress: 1, format: ImageManipulator.SaveFormat.JPEG },
		);
	}
	async function uriToBase64(uri){
		return await FileSystem.readAsStringAsync(uri, {
			encoding: FileSystem.EncodingType.Base64,
		});
	}

	return (
		<TouchableHighlight style={styles.touchable} onPress={handleOnInsertImage}>
			{!backgroundImageUri ? <Image style={styles.imageBackground} source={require('./../../../assets/sprites/picture.png')}/> 
			: <Image style={styles.imageBackground} source={{ uri: backgroundImageUri}}/>}
		</TouchableHighlight>
		)
}
const styles = StyleSheet.create({
	touchable: {
		width: 40,
		aspectRatio: 1/1,
		borderRadius: 10,
	},
	buttonText: {
		color: palette.textcolor,
		fontSize: 12,
		textAlign: 'center',
		padding: 2,
	},
	imageBackground: {
		justifyContent: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		height: '100%',
		aspectRatio: 1/1,
	}
})
export default ImportImage;