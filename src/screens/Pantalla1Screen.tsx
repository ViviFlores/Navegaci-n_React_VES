import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

//capturar las propiedades de navegacion
interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({ navigation }: Props) => {
  //console.log(props.navigation);

  return (
    <View style={styles.globalMargin} >
      <Text>Pantalla 1</Text>
      <Button
        title='Ir pantalla 2'
        onPress={() => navigation.navigate('Pantalla2')} />
    </View>
  )
}

