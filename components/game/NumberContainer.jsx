import {View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {

    const { container, numberText } = styles;

    return (
        <View style={container}>
            <Text style={numberText}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 24,
        fontFamily: "poppins-bold"
    }
})

export default NumberContainer;