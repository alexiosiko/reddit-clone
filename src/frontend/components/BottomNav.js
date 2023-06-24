import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles, palette } from '../styles/global-styles';

const BottomNav = props => {
    const handleSignIn = () => {
    }
    const handleSetPage = page => {
        props.setPage(page);
    }
    return (
		<View style={[styles.container, styles.bottom]}>
			<TouchableOpacity style={styles.button} onPress={() => handleSetPage('home')} >
				<Image source={require('./../../../assets/sprites/home.png')} style={styles.image}></Image>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handleSetPage('explore')} >
				<Image source={require('./../../../assets/sprites/explore.png')} style={styles.image}></Image>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handleSetPage('create')} >
				<Image source={require('./../../../assets/sprites/create.png')} style={styles.image}></Image>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handleSetPage('notifications')} >
				<Image source={require('./../../../assets/sprites/notifications.png')} style={styles.image}></Image>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={() => handleSetPage('settings')} >
				<Image source={require('./../../../assets/sprites/settings.png')} style={styles.image}></Image>
			</TouchableOpacity>
		</View>
    )
}
const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: palette.bottom,
        paddingBottom: Platform.OS == 'ios' ? 30 : 0,

		borderTopWidth: 1,
		borderColor: 'gray',
    },
    button: {
        padding: 10,
        width: 50,
        height: 50,
    },
	image: {
		height: '100%',
		width: '100%',
	}
})
export default BottomNav;