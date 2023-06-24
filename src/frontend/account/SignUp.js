import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View, Text, TouchableHighlight } from "react-native";
import { palette } from '../styles/global-styles.js';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // TODO
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        // TODO
        setShowPassword(!showPassword);
    }
    const handleOnChangeUsername = (username) => {
        setUsername(username);
    }
    const handleOnChangePassword = (password) => {
        setPassword(password);
    }
    async function handleOnSubmit() {
		const data = {
			username: username,
			password: password,
		}
		const response = await fetch("http://127.0.0.1:5000/signup", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json'},
		})
		const result = await response.json();
		console.log(result);
    }
    const handleCloseKeyboard = () => {
        Keyboard.dismiss();
    }
    const handleGoHome = () => {
        props.setPage('entry');
    }
    return (
        <View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.title}>Create Account</Text>
				<TextInput style={styles.inputBox} placeholder="Enter username" onChangeText={handleOnChangeUsername}></TextInput>
				<TextInput style={styles.inputBox} placeholder="Enter password" onChangeText={handleOnChangePassword}></TextInput>
				<TouchableHighlight onPress={handleOnSubmit}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Create</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight onPress={handleGoHome}>
					<Text style={styles.buttonText}>Home</Text>
				</TouchableHighlight>
			</View>
        </View>
    );    
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.neutral,
        flex: 1,
    },
    inputContainer: {
        top: '5%',
        flex: 1,
        width: '80%',
        alignSelf: 'center',  
        justifyContent: 'center',
    },
    inputBox: {
        height: 50,
        backgroundColor: palette.light,
        margin: 5,
        borderRadius: 20,   
        color: palette.textcolor,
        padding: 10,
        fontSize: 20,
    },
    showPasswordButton: {
        height: '100%',
        width: '100%',
    },
    title: {
        position: 'absolute',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: palette.titlecolor,
        top: '10%',
    },
    button: {
        height: 50,
        backgroundColor: palette.light,
        margin: 5,
        borderRadius: 20,   
        color: palette.darker,
        padding: 10,
        fontSize: 20,
    },
    buttonText: {
        fontSize: 30,
        alignSelf: 'center',
        color: palette.textcolor,
    },
})
export default Login;