import React, {useState} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import DiceOne from './assets/dice1.png' 

import DiceTwo from './assets/dice2.png' 

import DiceThree from './assets/dice3.png' 

import DiceFour from './assets/dice4.png' 

import DiceFive from './assets/dice5.png' 

import DiceSix from './assets/dice6.png' 


const App = () =>{

  const [uri, setUri] = useState(DiceOne)

  const playButton = () => {
let randomNumber = Math.floor(Math.random() * 6) + 1;
switch (randomNumber) {
  case 1:
    setUri(DiceOne)
    break;
    case 2:
    setUri(DiceTwo)
    break;
    case 3:
      setUri(DiceThree)
      break;
      case 4:
        setUri(DiceFour)
        break;
        case 5:
          setUri(DiceFive)
          break;
          case 6:
            setUri(DiceSix)
            break;                    

  default:
    setUri(DiceOne);
    break;
}
  }

  return(
<>
<View style={styles.container}>
<Image style={styles.image} source={uri} />
<TouchableOpacity onPress={playButton}>
<Text style={styles.gamePlayButton}> PLAY GAME</Text>
</TouchableOpacity>
</View>
</>

  )

}
export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#00AC61",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: 200,
    height: 200,

  },
gamePlayButton: {
 fontSize: 20,
 marginTop: 30,
 color: "blue",
 paddingHorizontal: 40,
paddingVertical: 10,
borderColor: ("#FD297A", "#9424F0"),
borderRadius: 5,
borderWidth: 3,
fontWeight: "bold"
}
})