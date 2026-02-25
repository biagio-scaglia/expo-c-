import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getLore } from '../api/client';
import EldenCard from '../components/EldenCard';
import { Colors, Spacing } from '../components/Theme';
import { Lore } from '../types';

const LoreScreen = () => {
    const [data, setData] = useState<Lore[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getLore()
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <EldenCard
                        title={item.title}
                        description={item.content}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    list: { padding: Spacing.md },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }
});

export default LoreScreen;
