import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useRoute } from '@react-navigation/native';

//definir interface para los parámetros de navegación
interface RouteParams {
    id: number;
    nombre: string;
    edad: number;
}

export const Persona2Screen = () => {
    //hook useRoute: permite capturar los parámetros de navegación por hook
    const route = useRoute();
    const params = route.params as RouteParams;
    //console.log(route);


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
