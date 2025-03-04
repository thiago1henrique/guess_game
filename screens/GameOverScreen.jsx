import {Image, View, StyleSheet, Text} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")}/>
            </View>

            <View>
                <Text style={styles.summaryText}>You phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            </View>

            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems: "center"
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },

    image: {
        width: "100%",
        height: "100%"
    },

    summaryText: {
        fontFamily: "poppins-medium",
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },

    highlight: {
        color: Colors.primary800,
        fontFamily: "poppins-bold",
    }
})

export default GameOverScreen