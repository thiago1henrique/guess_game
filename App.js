import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const { container, imageBackground } = styles;

    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontLoaded] = useFonts({
        "poppins-regular": require("./assets/fonts/Poppins-Medium.ttf"),
        "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });

    if (!fontLoaded) {
        return <AppLoading />;
    }

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };

    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    };

    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
    }

    return (
        <>
            <StatusBar style="light" />
            <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={container}>
                <ImageBackground
                    source={require("./assets/images/dices.jpg")}
                    resizeMode="cover"
                    style={imageBackground}
                    imageStyle={styles.backgroundImage}
                >
                    <SafeAreaView style={container}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});