import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4
    },
    itemText: {
        fontFamily: "poppins-medium",
    }
})

export default GuessLogItem;