import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

//capturando propiedades de navegación
interface Props extends StackScreenProps<any, any> { };

export const Pantalla3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 3</Text>
      <Button
        title='Regresar'
        onPress={() => navigation.goBack()} />
      <Button
        title='Ir a home'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}

