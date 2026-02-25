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

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const NavButton = ({ title, icon: Icon, target }: { title: string, icon: LucideIcon, target: keyof RootStackParamList }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(target)}
        >
            <Icon color={Colors.primary} size={32} />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Elden Ring Database</Text>

            <View style={styles.grid}>
                <NavButton title="Characters" icon={Users} target="Characters" />
                <NavButton title="Locations" icon={MapPin} target="Locations" />
                <NavButton title="Lore" icon={BookOpen} target="Lore" />
            </View>

            <Text style={styles.footer}>Assemble the Elden Ring, Tarnished.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.lg
    },
    header: {
        color: Colors.primary,
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'serif',
        marginBottom: Spacing.lg * 2,
        textAlign: 'center'
    },
    grid: { width: '100%' },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.card,
        padding: Spacing.md,
        borderRadius: 8,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    buttonText: {
        color: Colors.text,
        fontSize: 20,
        marginLeft: Spacing.md,
        fontFamily: 'serif',
    },
    footer: {
        color: Colors.secondary,
        fontStyle: 'italic',
        marginTop: Spacing.lg * 2,
        fontSize: 14,
    }
});

export default HomeScreen;
