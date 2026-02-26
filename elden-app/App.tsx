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
                headerTitleStyle: { fontFamily: 'serif', fontWeight: 'bold', fontSize: 22, letterSpacing: 2 },
                tabBarStyle: {
                    backgroundColor: Colors.card,
                    borderTopColor: Colors.border,
                    borderTopWidth: 1,
                    height: 70,
                    paddingBottom: 12,
                    paddingTop: 8,
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.border,
                tabBarLabelStyle: { fontFamily: 'serif', fontSize: 13, fontWeight: 'bold', letterSpacing: 1 },
                tabBarIcon: ({ color, size }) => {
                    const iconSize = route.name === 'Home' ? size + 4 : size;
                    if (route.name === 'Home') return <Home color={color} size={iconSize} />;
                    if (route.name === 'Characters') return <Users color={color} size={iconSize} />;
                    if (route.name === 'Locations') return <MapPin color={color} size={iconSize} />;
                    if (route.name === 'Lore') return <BookOpen color={color} size={iconSize} />;
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
