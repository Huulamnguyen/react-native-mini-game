import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import GuessLongItem from '../components/game/GuessLogItem';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(()=> {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        };
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary=1;
        maxBoundary=100;
    }, []);

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
        setGuessRounds(guessRounds => [newRanDomNum, ...guessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>

            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLongItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
            
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 8,
        flex: 1,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 24,
    }
})