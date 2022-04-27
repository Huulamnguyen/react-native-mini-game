import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber]= useState();

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen} >
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode="cover" 
        style={styles.rootScreen}
        imageStyle={styles.ImageBackground}
      >
        
        <SafeAreaView style={styles.rootScreen}>
        {userNumber ? <GameScreen /> : <StartGameScreen onPickNumber={pickedNumberHandler} />}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.15,
  }
});
