import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['props.pointerEvents is deprecated']);

import HomeScreen from './src/screens/HomeScreen';
import CharactersScreen from './src/screens/CharactersScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import LoreScreen from './src/screens/LoreScreen';
import { Colors } from './src/components/Theme';

export type RootStackParamList = {
    Home: undefined;
    Characters: undefined;
    Locations: undefined;
    Lore: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                id="RootStack"
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.background },
                    headerTintColor: Colors.primary,
                    headerTitleStyle: { fontFamily: 'serif', fontWeight: 'bold' },
                    contentStyle: { backgroundColor: Colors.background }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Characters" component={CharactersScreen} />
                <Stack.Screen name="Locations" component={LocationsScreen} />
                <Stack.Screen name="Lore" component={LoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
