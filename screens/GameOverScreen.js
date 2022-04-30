import { View, Image, StyleSheet, Text} from 'react-native';

// UI components
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

// Colors
import Colors from '../constants/Colors';

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }){
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            {/* Summary Text */}
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.</Text>
            {/* Restart New Game Button */}
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        fontFamily: 'open-sans',
        textAlign: 'center',
        marginBottom: 24,
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});