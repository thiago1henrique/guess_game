import {Text, StyleSheet} from "react-native";

const Title = ({ children }) => {
    const { title } = styles;

    return (
        <Text style={title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "poppins-bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#fff",
        padding: 12
    }
})