import { Text, StyleSheet } from 'react-native';

// Colors
import Colors from '../../constants/Colors';

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 12,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 12,
    }
})