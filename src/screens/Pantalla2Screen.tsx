import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface del objeto Persona
interface Persona {
  id: number;
  nombre: string;
  edad: number;
}

export const Pantalla2Screen = () => {
  //hook useNavigation: permitir navegar entre pantallas
  const navigation = useNavigation();

  const persona: Persona = {
    id: 3,
    nombre: 'Daniela',
    edad: 41
  }

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 2</Text>
      <Button
        title='Ir pantalla 3'
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))} />
      <Button
        title='Ir persona 2'
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Persona2', params: persona }))} />
    </View>
  )
}

