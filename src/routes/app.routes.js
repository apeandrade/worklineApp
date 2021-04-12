import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
     backgroundColor: 'rgba(0,0,0,0.20)'
    }}
    drawerContentOptions={{
        labelStyle:{
            fontWeight: 'bold'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: 'rgba(0,0,0,0.20)',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVertical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Registrar" component={New} />
        <AppDrawer.Screen name="Perfil" component={Profile} />
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;