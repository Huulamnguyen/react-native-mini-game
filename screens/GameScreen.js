import { Text, View, StyleSheet } from 'react-native';

function GameScreen(){
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            {/* GUESS */}
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            {/* <View>LOG ROUND</View> */}
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 24,
        flex: 1,
    }
})