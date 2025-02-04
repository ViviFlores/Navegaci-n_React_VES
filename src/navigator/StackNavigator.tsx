import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';

//Definir la estructura de las pantallas que son parte de la navegación
export type RootStackParams = {
    Pantalla1: undefined, //No se envía ningún parámetro
    Pantalla2: undefined,
    Pantalla3: undefined,
    Persona: { id: number, nombre: string, edad: number },
    Persona2: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Pantalla1'
            screenOptions={{
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 7
                }
            }}>
            <Stack.Screen name="Pantalla1"
                options={{ title: 'Home' }}
                component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2"
                options={{ title: 'Productos', headerShown: true }}
                component={Pantalla2Screen} />
            <Stack.Screen name="Pantalla3"
                options={{ title: 'Detalle' }}
                component={Pantalla3Screen} />
            <Stack.Screen name="Persona"
                options={{ title: 'Lista' }}
                component={PersonaScreen} />
            <Stack.Screen name="Persona2"
                options={{ title: 'Hooks' }}
                component={Persona2Screen} />
        </Stack.Navigator>
    );
}