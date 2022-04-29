import { Text, StyleSheet } from 'react-native';

//Colors
import Colors from '../../constants/Colors.js'

function InstructionText({children, style}){
    return (
        <Text style={[styles.textInstruction, style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    textInstruction:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
})