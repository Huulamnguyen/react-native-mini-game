import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';

import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

// Generate Random number between two numbers range.
function generateRandomBetween(min, max, exclude){
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(()=> {
        if (currentGuess === userNumber){
            onGameOver();
        };
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction){
        // direction => "lower" or "greater"
        if((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)){
            Alert.alert(
                "Don't lie!",
                "You know that this is wrong ...",
                [{ text: "Sorry!", style: "cancel"}],
            )
            return;
        }

        if (direction == "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRanDomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRanDomNum);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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