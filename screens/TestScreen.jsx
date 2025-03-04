import { View, Text, StyleSheet, Pressable } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const TestScreen = () =>
    (
        <LinearGradient colors={["#c3c3c3", "#16161d"]} style={styles.containerFather}>
        <View>

            <Text>Test Screen</Text>

            <View style={styles.container}>

                    <Pressable style={styles.cta} android_ripple={{color: "#c2c2c2"}}>
                        <Text style={styles.text}>Criar conta</Text>
                    </Pressable>

            </View>

        </View>
        </LinearGradient>
    )


const styles = StyleSheet.create({

    test: {
        flex: 1,
        
    },

    containerFather: {
        flex: 1
    },

    container: {
        backgroundColor: "#81b71a",
        marginHorizontal: 32,
        borderRadius: 12,
        elevation: 16
    },

    cta: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#fff",
        fontSize: 16,
    }
})

export default TestScreen;