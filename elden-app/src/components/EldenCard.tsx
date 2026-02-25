import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MotiView } from 'moti';
import { Colors, Spacing } from './Theme';

interface EldenCardProps {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    stats?: {
        vigor?: number;
        mind?: number;
        endurance?: number;
        strength?: number;
        dexterity?: number;
        intelligence?: number;
        faith?: number;
        arcane?: number;
    };
}

const EldenCard = ({ title, subtitle, description, stats, imageUrl }: EldenCardProps) => {
    return (
        <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500 }}
            style={styles.card}
        >
            {imageUrl && (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                {description && <Text style={styles.description}>{description}</Text>}
                {stats && (
                    <View style={styles.statsContainer}>
                        <View style={styles.statRow}>
                            <Text style={styles.statLabel}>VIG {stats.vigor}</Text>
                            <Text style={stats.mind ? styles.statLabel : { display: 'none' }}>MIN {stats.mind}</Text>
                            <Text style={stats.endurance ? styles.statLabel : { display: 'none' }}>END {stats.endurance}</Text>
                        </View>
                        <View style={styles.statRow}>
                            <Text style={stats.strength ? styles.statLabel : { display: 'none' }}>STR {stats.strength}</Text>
                            <Text style={stats.dexterity ? styles.statLabel : { display: 'none' }}>DEX {stats.dexterity}</Text>
                            <Text style={stats.intelligence ? styles.statLabel : { display: 'none' }}>INT {stats.intelligence}</Text>
                        </View>
                        <View style={styles.statRow}>
                            <Text style={stats.faith ? styles.statLabel : { display: 'none' }}>FAI {stats.faith}</Text>
                            <Text style={stats.arcane ? styles.statLabel : { display: 'none' }}>ARC {stats.arcane}</Text>
                        </View>
                    </View>
                )}
            </View>
        </MotiView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        borderRadius: 8,
        marginBottom: Spacing.md,
        borderWidth: 1,
        borderColor: Colors.border,
        borderLeftWidth: 4,
        borderLeftColor: Colors.primary,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    content: {
        padding: Spacing.md,
    },
    title: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
    },
    subtitle: {
        color: Colors.secondary,
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: Spacing.sm,
    },
    description: {
        color: Colors.text,
        fontSize: 16,
        lineHeight: 22,
        marginBottom: Spacing.md,
    },
    statsContainer: {
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: Spacing.sm,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    statLabel: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'serif',
        width: '30%',
    },
});

export default EldenCard;
