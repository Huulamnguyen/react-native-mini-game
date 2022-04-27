import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){

    const [ enteredNumber, setEnteredNumber ] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    };

    function confirmInputHandler(){
        console.log("Confirm Button Pressed !!!")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer} >
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer} >
                    <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 16, // shadow for android only

        // shadow for IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})