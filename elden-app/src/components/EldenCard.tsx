import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MotiView } from 'moti';
import { Colors, Spacing } from './Theme';

interface EldenCardProps {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
    index?: number;
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

const EldenCard = ({ title, subtitle, description, stats, imageUrl, index = 0 }: EldenCardProps) => {
    return (
        <MotiView
            from={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600, delay: index * 150 }}
            style={styles.card}
        >
            {imageUrl && (
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.imageOverlay} />
                </View>
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                {description && <Text style={styles.description}>{description}</Text>}
                {stats && (
                    <View style={styles.statsContainer}>
                        <View style={styles.statRow}>
                            <Text style={styles.statLabel}>VIG <Text style={styles.statValue}>{stats.vigor}</Text></Text>
                            <Text style={stats.mind ? styles.statLabel : { display: 'none' }}>MIN <Text style={styles.statValue}>{stats.mind}</Text></Text>
                            <Text style={stats.endurance ? styles.statLabel : { display: 'none' }}>END <Text style={styles.statValue}>{stats.endurance}</Text></Text>
                        </View>
                        <View style={styles.statRow}>
                            <Text style={stats.strength ? styles.statLabel : { display: 'none' }}>STR <Text style={styles.statValue}>{stats.strength}</Text></Text>
                            <Text style={stats.dexterity ? styles.statLabel : { display: 'none' }}>DEX <Text style={styles.statValue}>{stats.dexterity}</Text></Text>
                            <Text style={stats.intelligence ? styles.statLabel : { display: 'none' }}>INT <Text style={styles.statValue}>{stats.intelligence}</Text></Text>
                        </View>
                        <View style={styles.statRow}>
                            <Text style={stats.faith ? styles.statLabel : { display: 'none' }}>FAI <Text style={styles.statValue}>{stats.faith}</Text></Text>
                            <Text style={stats.arcane ? styles.statLabel : { display: 'none' }}>ARC <Text style={styles.statValue}>{stats.arcane}</Text></Text>
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
        marginBottom: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        overflow: 'hidden',
        boxShadow: `0px 4px 12px rgba(0, 0, 0, 0.6)`,
        elevation: 6,
    },
    imageContainer: {
        width: '100%',
        height: 220,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
    },
    content: {
        padding: Spacing.lg,
    },
    title: {
        color: Colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 1,
        marginBottom: 2,
    },
    subtitle: {
        color: Colors.secondary,
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: Spacing.md,
    },
    description: {
        color: Colors.text,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: Spacing.lg,
    },
    statsContainer: {
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: Spacing.md,
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: Spacing.sm,
        paddingBottom: Spacing.sm,
        borderRadius: 4,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    statLabel: {
        color: Colors.secondary,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'serif',
        width: '32%',
        letterSpacing: 1,
    },
    statValue: {
        color: Colors.text,
        fontSize: 14,
    }
});

export default EldenCard;
