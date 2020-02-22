import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TitleScreen } from './screens/title/title.screen';
import { GameScreen } from './screens/game/game.screen';

const Stack = createStackNavigator()

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Title" headerMode="none" >
                <Stack.Screen name="Title" component={TitleScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}