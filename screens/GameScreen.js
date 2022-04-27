import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';

// Generate Random number between two numbers range.
function generateRandomBetween(min, max, exclude){
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

function GameScreen({userNumber}){
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
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