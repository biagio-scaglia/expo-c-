import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { Users, MapPin, BookOpen, Home } from 'lucide-react-native';

LogBox.ignoreLogs(['props.pointerEvents is deprecated']);

import HomeScreen from './src/screens/HomeScreen';
import CharactersScreen from './src/screens/CharactersScreen';
import LocationsScreen from './src/screens/LocationsScreen';
import LoreScreen from './src/screens/LoreScreen';
import { Colors } from './src/components/Theme';

export type RootStackParamList = {
    Main: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function TabNavigator() {
    return (
        <Tab.Navigator
            id="MainTabs"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: Colors.background, borderBottomWidth: 1, borderBottomColor: Colors.border },
                headerTintColor: Colors.primary,
                headerTitleStyle: { fontFamily: 'serif', fontWeight: 'bold' },
                tabBarStyle: {
                    backgroundColor: Colors.card,
                    borderTopColor: Colors.border,
                    height: 85,
                    paddingBottom: 25,
                    paddingTop: 10
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.secondary,
                tabBarLabelStyle: { fontFamily: 'serif', fontSize: 10 },
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') return <Home color={color} size={size} />;
                    if (route.name === 'Characters') return <Users color={color} size={size} />;
                    if (route.name === 'Locations') return <MapPin color={color} size={size} />;
                    if (route.name === 'Lore') return <BookOpen color={color} size={size} />;
                    return null;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Characters" component={CharactersScreen} />
            <Tab.Screen name="Locations" component={LocationsScreen} />
            <Tab.Screen name="Lore" component={LoreScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator id="RootStack" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
