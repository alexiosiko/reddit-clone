import React, { useEffect, useState, useRef } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, requireNativeComponent, Animated } from 'react-native';
import { globalStyles, palette } from '../styles/global-styles';

const BottomNav = ({ setPage, page }) => {
	const handleSetPage = (page) => {
		setPage(page);
	};

    return (
			<View style={[styles.container, styles.bottom]}>
				<TouchableOpacity style={styles.button} onPress={() => handleSetPage('home')} >
					<Image source={require('./../../../assets/sprites/home.png')} style={styles.icon}></Image>
					{page == 'home' && <Image source={require('./../../../assets/sprites/dot.png')} style={styles.dot}/>}
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.button} onPress={() => handleSetPage('explore')} >
					<Image source={require('./../../../assets/sprites/explore.png')} style={styles.icon}></Image>
					{page == 'explore' && <Image source={require('./../../../assets/sprites/dot.png')} style={styles.dot}/>}
				</TouchableOpacity> */}
				<TouchableOpacity style={styles.button} onPress={() => handleSetPage('create')} >
					<Image source={require('./../../../assets/sprites/create.png')} style={styles.icon}></Image>
					{page == 'create' && <Image source={require('./../../../assets/sprites/dot.png')} style={styles.dot}/>}
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.button} onPress={() => handleSetPage('notifications')} >
					<Image source={require('./../../../assets/sprites/notifications.png')} style={styles.icon}></Image>
					{page == 'notifications' && <Image source={require('./../../../assets/sprites/dot.png')} style={styles.dot} />}
				</TouchableOpacity> */}
				<TouchableOpacity style={styles.button} onPress={() => handleSetPage('settings')} >
					<Image source={require('./../../../assets/sprites/settings.png')} style={styles.icon}></Image>
					{page == 'settings' && <Image source={require('./../../../assets/sprites/dot.png')} style={styles.dot} />}
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
        backgroundColor: palette.neutral,
        paddingBottom: Platform.OS == 'ios' ? 30 : 0,

    },
    button: {
        padding: 10,
        width: 50,
        height: 50,
    },
	icon: {
		alignSelf: 'center',
		height: '65%',
		width: '65%',
	},
	dot: {
		alignSelf: 'center',
		height: 4,
		top: 7,
		aspectRatio: 1
	}
})
export default BottomNav;