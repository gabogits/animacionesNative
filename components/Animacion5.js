import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));





  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: .8, //El valor al que llega

      useNativeDriver: true,
    }).start(); // Iniciar la animacion
  }
  const soltarBtn = () => {
    Animated.spring(animacion, {
      toValue: 1, //El valor al que llega
      friction: 4, //es para el rebote
      tension:30,
      useNativeDriver: true,
    }).start(); // Iniciar la animacion
  }

  const estiloAnimacion = {
    transform: [{scale: animacion}]
  }
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback onPressIn={()=>presionarBtn()} onPressOut= {()=> soltarBtn()}>
        <Animated.View style={[styles.btn, estiloAnimacion ]}>
          <Text style={styles.texto}>Iniciar sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center'
  },
  btn: {
    backgroundColor:"cornflowerblue",
    width: 280,
    height:80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: "#fff",
    fontWeight:'bold',
    textTransform: 'uppercase',
    fontSize: 28
  }
});
export default Animacion5;
