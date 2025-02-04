import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorPersonalizado = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuLateral {...props} />}>
            <Drawer.Screen name="StackNavigator"
                options={{ title: 'Home' }}
                component={StackNavigator} />
            <Drawer.Screen
                name="Setting"
                options={{ title: 'Configuración' }}
                component={SettingScreen} />
        </Drawer.Navigator>
    );
}


//Menu lateral personalizado
const MenuLateral = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
                    }}
                    style={styles.avatar} />
            </View>
        </DrawerContentScrollView>
    )
}