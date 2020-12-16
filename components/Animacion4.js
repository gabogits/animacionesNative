import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, //El valor al que llega
      duration: 500, // la cantidad de tiempo en llegar
      useNativeDriver: false,
    }).start(); // Iniciar la animacion
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange:[0, 360],
    outputRange: ['0deg', '360deg']
  })

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}]
  }
  return (
    <View>

    <Animated.View  style={[styles.caja, estiloAnimacion ]}  ></Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion4;
