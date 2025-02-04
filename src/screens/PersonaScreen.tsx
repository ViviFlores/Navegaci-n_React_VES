import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//definir interface para capturar las propiedades de navegación
type Props = StackScreenProps<RootStackParams, 'Persona'>;

//definir interface para los parámetros de navegación
// interface RouteParams{
//     id: number;
//     nombre: string;
//     edad: number;
// }

export const PersonaScreen = ({ route }: Props) => {
    const params = route.params;
    //console.log(params);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {params.id},
                {params.nombre},
                {params.edad}
            </Text>
        </View>
    )
}
