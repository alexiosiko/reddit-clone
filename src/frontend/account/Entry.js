import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { palette } from "../styles/global-styles";

const Entry = (props) => {
    const handleOnSignUp = () => {
        props.setPage('signup');
    }
    const handleOnSignIn = () => {
        props.setPage('signin');
    }
    return (<>
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                <Text style={styles.title}>Instagram</Text>
                <TouchableOpacity onPress={handleOnSignUp}>
                    <View style={styles.button}>
                        <Text style={[styles.text, styles.buttonText]}>Sign up</Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignSelf: 'center', top: 30}}>
                    <Text style={styles.text}>Already have an account?</Text>
                    <TouchableOpacity onPress={handleOnSignIn}>
                        <Text style={styles.text}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.otherNeutral,
    },
    insideContainer: {
        width: '80%',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: palette.light,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 30,   
        color: palette.textcolor,
        padding: 10,
        fontSize: 20,
    },
    buttonText: {
        fontSize: 40,
        textAlign: 'center',
    },
    title: {
        position: 'absolute',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: palette.textcolor,
        top: '20%',
    },
    text: {
		color: palette.textcolor,
		alignSelf: 'center',
	}
})
export default Entry;