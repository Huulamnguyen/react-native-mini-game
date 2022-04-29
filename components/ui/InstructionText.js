import { Text, StyleSheet } from 'react-native';

//Colors
import Colors from '../../constants/Colors.js'

function InstructionText({children}){
    return (
        <Text style={styles.textInstruction}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    textInstruction:{
        color: Colors.accent500,
        fontSize: 24,
    },
})