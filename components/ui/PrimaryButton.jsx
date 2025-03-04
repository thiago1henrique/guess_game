import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {

    const {buttonInnerContainer, buttonText, buttonOuterContainer} = styles;

    return (
        <View style={buttonOuterContainer}>
            <Pressable style={buttonInnerContainer}
                       onPress={onPress}
                       android_ripple={{color: Colors.primary600}}>
                <Text style={buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",

    }
})