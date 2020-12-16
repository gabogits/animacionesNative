
import React from 'react';
import {

  StyleSheet,
  ScrollView,
  View,
  Text,

} from 'react-native';

import Animacion7 from "./components/Animacion7"

const App = () => {
  return (
    <>
     <View style={styles.contenido}>
       <Animacion7 ></Animacion7>
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop:100
  }
});

export default App;
