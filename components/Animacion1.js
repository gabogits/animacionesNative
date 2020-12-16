import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 1, //El valor al que llega
            duration: 500, // la cantidad de tiempo en llegar
            useNativeDriver: true,
        }).start(); // Iniciar la animacion
    }, [])
  return (
<Animated.View style={{ opacity: animacion}}>

<Text style={styles.texto}>Animacion 1</Text>
</Animated.View>
  
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center'
  },
});
export default Animacion1;
