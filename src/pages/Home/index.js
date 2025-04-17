import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Detalhes from '../Detalhes';


export default function Home() {
  const navigation = useNavigation();

  function navegaDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>tela home</Text>
      <Button title="ir para detalhes" onPress={navegaDetalhes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
  },
  text: {
    fontSize: 20,
  },
});
