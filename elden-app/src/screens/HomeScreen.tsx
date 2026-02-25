import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Spacing } from '../components/Theme';
import { Users, MapPin, BookOpen, LucideIcon } from 'lucide-react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Characters: undefined;
    Locations: undefined;
    Lore: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

import { MotiView, MotiText } from 'moti';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MotiView
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'timing', duration: 1000 }}
                style={styles.hero}
            >
                <MotiText
                    from={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 500 }}
                    style={styles.header}
                >
                    Elden Ring
                </MotiText>

            </MotiView>

            <MotiView
                from={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1000 }}
                style={styles.welcomeCard}
            >
                <Text style={styles.welcomeTitle}>Welcome, Tarnished</Text>
                <Text style={styles.welcomeText}>
                    Explore the vast Lands Between. Use the navigation below to discover legendary characters, mystical locations, and ancient lore.
                </Text>
            </MotiView>

            <MotiText
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1500 }}
                style={styles.footer}
            >
                Assemble the Elden Ring.
            </MotiText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.lg,
    },
    hero: {
        alignItems: 'center',
        marginBottom: 80,
    },
    header: {
        color: Colors.primary,
        fontSize: 48,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 4,
        textTransform: 'uppercase',
    },
    subHeader: {
        color: Colors.secondary,
        fontSize: 18,
        fontFamily: 'serif',
        marginTop: -10,
        letterSpacing: 2,
    },
    welcomeCard: {
        backgroundColor: Colors.card,
        padding: Spacing.xl,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.border,
        width: '100%',
        alignItems: 'center',
        // boxShadow is the web-friendly replacement for shadow* props
        boxShadow: `0px 4px 10px rgba(193, 160, 94, 0.2)`,
        elevation: 5,
    },
    welcomeTitle: {
        color: Colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
        marginBottom: Spacing.md,
    },
    welcomeText: {
        color: Colors.text,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        fontFamily: 'serif',
    },
    footer: {
        color: Colors.secondary,
        fontStyle: 'italic',
        marginTop: 60,
        fontSize: 14,
        letterSpacing: 1,
    }
});

export default HomeScreen;
