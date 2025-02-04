import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

//capturar las propiedades de navegacion
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

//interface del objeto Persona
interface Persona {
  id: number;
  nombre: string;
  edad: number;
}

export const Pantalla1Screen = ({ navigation }: Props) => {
  //console.log(props.navigation);

  //Objeto para enviar como parámetro de navegación
  const persona: Persona = {
    id: 1,
    nombre: 'Viviana',
    edad: 32
  }

  const persona2: Persona = {
    id: 2,
    nombre: 'Samantha',
    edad: 15
  }

  return (
    <View style={styles.globalMargin} >
      <Text style={styles.title}>Pantalla 1</Text>
      <Button
        title='Ir pantalla 2'
        onPress={() => navigation.navigate('Pantalla2')} />
      <Button
        title='Ir a persona'
        onPress={() => navigation.navigate('Persona', persona)} />
      <TouchableOpacity
        style={styles.buttonPersona}
        onPress={() => navigation.navigate('Persona', persona2)}>
        <Text style={styles.buttonPersonaTexto}>Ir a persona2</Text>
      </TouchableOpacity>
    </View >
  )
}

