import { TextInput, View, StyleSheet, Text, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors"
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {

    const { innerButtonContainer, buttonContainer } = styles

    const [enteredValue, setEnteredValue] = useState("");

    const { width, height } = useWindowDimensions();

    const numberInputHandler = (input) => {
        setEnteredValue(input);
    }

    const confirmInputHandler = ({  }) => {
        const choseNumber = parseInt(enteredValue);
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99.",
                [{text: "Okay", style: "destructive", onPress: resetInput}]
            );
            return;
        }
        onPickNumber(choseNumber);
    }

    const resetInput = () => {
        setEnteredValue("");

    }

    const marginTopDistance = height  < 400 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess my number</Title>
                    <Card>
                        <InstructionText>
                            <Text>Enter the number</Text>
                        </InstructionText>
                        <TextInput style={styles.numberInput}
                                   maxLength={2}
                                   keyboardType="number-pad"
                                   autoCapitalize="none"
                                   autoCorrect={false}
                                   value={enteredValue}
                                   onChangeText={numberInputHandler}
                        />
                        <View style={ innerButtonContainer }>
                            <View style={buttonContainer}>
                                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                            </View>
                            <View style={buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({

    screen: {
        flex: 1,
    },

    rootContainer: {
        flex: 1,
        //marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: "center",
    },

    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 24,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    innerButtonContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    },
})