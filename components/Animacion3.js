import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, //El valor al que llega
      duration: 500, // la cantidad de tiempo en llegar
      useNativeDriver: false,
    }).start(); // Iniciar la animacion
  }, []);
  return (
    <View>

    <Animated.Text  style={[styles.texto, { fontSize: animacion}]}  >Animacion 3</Animated.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center'
  },
});
export default Animacion3;
