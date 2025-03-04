import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {

    const { container, numberText } = styles;

    return (
        <View style={container}>
            <Text style={numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: "poppins-bold"
    }
})

export default NumberContainer;